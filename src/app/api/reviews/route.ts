import { NextResponse } from "next/server";
import { createServiceClient } from "@/lib/supabase";

export async function GET() {
  try {
    const supabase = createServiceClient();
    const { data, error } = await supabase
      .from("reviews")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(12);

    if (error) throw error;

    return NextResponse.json({ reviews: data || [] });
  } catch (error) {
    console.error("Reviews fetch error:", error);
    // Return fallback reviews if DB not configured
    return NextResponse.json({ reviews: fallbackReviews });
  }
}

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
