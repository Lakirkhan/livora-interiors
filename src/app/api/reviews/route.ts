import { NextRequest, NextResponse } from "next/server";
import { createServiceClient } from "@/lib/supabase";

export const dynamic = "force-dynamic";

const fallbackReviews = [
  {
    id: "1",
    client_name: "Priya & Rahul Mehta",
    project_type: "3 BHK Complete Interior",
    rating: 5,
    review_text: "Absolutely stunning transformation! The team understood our vision perfectly and delivered beyond expectations. The attention to detail in the modular kitchen and master bedroom wardrobe is exceptional. Highly recommend FS Interior!",
    client_image: null,
    location: "Satellite, Ahmedabad",
  },
  {
    id: "2",
    client_name: "Amit Patel",
    project_type: "2 BHK Interior Package",
    rating: 5,
    review_text: "What impressed me most was their transparent pricing – no hidden costs, everything was clear from day one. The 3D visualization helped us finalize the design with confidence. The execution was flawless and delivered on time.",
    client_image: null,
    location: "Bopal, Ahmedabad",
  },
  {
    id: "3",
    client_name: "Nisha Desai",
    project_type: "Living Room & Bedroom Design",
    rating: 5,
    review_text: "The design team brought creativity and practicality together beautifully. Our living room has become the highlight of every guest visit. Professional, punctual, and passionate about their work.",
    client_image: null,
    location: "Safar E Aman, opp. N. K. School, Mohammedi Park, Juhapura, Ahmedabad",
  },
  {
    id: "4",
    client_name: "Vikram & Sunita Shah",
    project_type: "4 BHK Complete Interior",
    rating: 5,
    review_text: "We were nervous about a full home renovation, but FS Interior made the entire process stress-free. From the free site visit to final handover, the communication was excellent. Our dream home is now a reality!",
    client_image: null,
    location: "South Bopal, Ahmedabad",
  },
  {
    id: "5",
    client_name: "Kavya Joshi",
    project_type: "Modular Kitchen",
    rating: 5,
    review_text: "The modular kitchen they designed for us is both beautiful and incredibly functional. Smart storage solutions, premium finishes, and delivered within budget. The team was a pleasure to work with.",
    client_image: null,
    location: "Vastrapur, Ahmedabad",
  },
  {
    id: "6",
    client_name: "Rajan & Meera Trivedi",
    project_type: "3 BHK Interior Package",
    rating: 5,
    review_text: "Outstanding quality of work! The false ceiling design in our living room is absolutely breathtaking. FS Interior truly understands how to blend aesthetics with functionality. Worth every rupee.",
    client_image: null,
    location: "Thaltej, Ahmedabad",
  },
];

// Pulls live reviews straight from the business's Google Business Profile, so a new
// Google review shows up here automatically without any manual data entry.
// Requires GOOGLE_PLACES_API_KEY + GOOGLE_PLACE_ID (see .env.local.example).
// ponytail: Places API (New) caps this at Google's 5 "most relevant" reviews per
// place and has no push/webhook — re-fetched at most hourly via Next's cache.
async function fetchGoogleReviews() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;
  if (!apiKey || !placeId) return null;

  try {
    const res = await fetch(`https://places.googleapis.com/v1/places/${placeId}`, {
      headers: { "X-Goog-Api-Key": apiKey, "X-Goog-FieldMask": "reviews" },
      next: { revalidate: 3600 },
    });
    if (!res.ok) throw new Error(`Google Places API responded ${res.status}`);

    const data = await res.json();
    const reviews = (data.reviews || [])
      .map((r: { authorAttribution?: { displayName?: string }; rating?: number; text?: { text?: string }; originalText?: { text?: string }; name?: string }, i: number) => ({
        id: r.name || `google-${i}`,
        client_name: r.authorAttribution?.displayName || "Google User",
        project_type: "Google Review",
        rating: r.rating ?? 5,
        review_text: r.text?.text || r.originalText?.text || "",
        location: null,
        source: "google" as const,
      }))
      .filter((r: { review_text: string }) => r.review_text);

    return reviews.length > 0 ? reviews : null;
  } catch (error) {
    console.error("Google reviews fetch error:", error);
    return null;
  }
}

export async function GET() {
  const googleReviews = await fetchGoogleReviews();
  if (googleReviews) {
    return NextResponse.json({ reviews: googleReviews });
  }

  try {
    const supabase = createServiceClient();
    const { data, error } = await supabase
      .from("reviews")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(12);

    if (error) throw error;
    if (!data || data.length === 0) throw new Error("No reviews in Supabase");

    return NextResponse.json({ reviews: data });
  } catch (error) {
    console.error("Reviews fetch error:", error);
    return NextResponse.json({ reviews: fallbackReviews });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { client_name, project_type, rating, review_text, location } = body;

    if (!client_name || !project_type || !review_text || !rating) {
      return NextResponse.json({ success: false, message: "Please fill in all required fields." }, { status: 400 });
    }

    const supabase = createServiceClient();
    const { error } = await supabase.from("reviews").insert([
      { client_name, project_type, rating, review_text, location: location || null },
    ]);

    if (error) throw error;

    return NextResponse.json({ success: true, message: "Thank you for your review!" });
  } catch (error) {
    console.error("Review submit error:", error);
    return NextResponse.json({ success: false, message: "Something went wrong. Please try again." }, { status: 500 });
  }
}
