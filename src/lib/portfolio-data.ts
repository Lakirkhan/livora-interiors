export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
}

export interface CategoryDef {
  name: string;
  slug: string;
  cover: string; // filename within its own folder, used as the category's representative shot
}

export const CATEGORIES: CategoryDef[] = [
  { name: "Living Room", slug: "living-room", cover: "1783865300485.jpg" },
  { name: "Bedroom", slug: "bedroom", cover: "1783865300102.png" },
  { name: "Kitchen", slug: "kitchen", cover: "1783865300464.jpg" },
  { name: "Office", slug: "office", cover: "1783865299363.jpg" },
  { name: "Dining Space", slug: "dining-space", cover: "1783865300389.jpg" },
  { name: "Bathroom", slug: "bathroom", cover: "1783865300270.png" },
];

// Every image lives in a folder named after its room — keep in sync with public/images/*
const RAW_ITEMS: { title: string; category: string; folder: string; file: string }[] = [
  // Living Room
  { title: "Modern Minimalist Living", category: "Living Room", folder: "Living Room", file: "1783865300485.jpg" },
  { title: "Open Concept Living Space", category: "Living Room", folder: "Living Room", file: "1783865300504.jpg" },
  { title: "Luxury Living Room Interior", category: "Living Room", folder: "Living Room", file: "1783865300559.jpg" },
  { title: "Contemporary Living Room", category: "Living Room", folder: "Living Room", file: "WhatsApp Image 2026-07-14 at 9.50.53 PM.jpeg" },
  { title: "Chic Living Space", category: "Living Room", folder: "Living Room", file: "WhatsApp Image 2026-07-14 at 9.50.54 PM.jpeg" },
  { title: "Cozy Living Room Corner", category: "Living Room", folder: "Living Room", file: "WhatsApp Image .jpeg" },

  // Bedroom
  { title: "Serene Master Bedroom", category: "Bedroom", folder: "BedRoom", file: "1783865299386.jpg" },
  { title: "Premium Bedroom Execution", category: "Bedroom", folder: "BedRoom", file: "1783865299412.jpg" },
  { title: "Luxe Master Bedroom", category: "Bedroom", folder: "BedRoom", file: "1783865300102.png" },
  { title: "Elegant Bedroom Interior", category: "Bedroom", folder: "BedRoom", file: "1783865300523.jpg" },
  { title: "Modern Bedroom Design", category: "Bedroom", folder: "BedRoom", file: "1783865300540.jpg" },
  { title: "Minimalist Bedroom Retreat", category: "Bedroom", folder: "BedRoom", file: "WhatsApp Image 2026-07-14 .jpeg" },
  { title: "Contemporary Bedroom Suite", category: "Bedroom", folder: "BedRoom", file: "WhatsApp Image 2026-07-14 at .jpeg" },

  // Kitchen
  { title: "Contemporary Modular Kitchen", category: "Kitchen", folder: "Kitchen", file: "1783865299338.png" },
  { title: "Compact Smart Kitchen", category: "Kitchen", folder: "Kitchen", file: "1783865300464.jpg" },
  { title: "Modern Kitchen Design", category: "Kitchen", folder: "Kitchen", file: "WhatsApp Image 2026-07-14 at 9.50..jpeg" },
  { title: "Sleek Kitchen Interior", category: "Kitchen", folder: "Kitchen", file: "WhatsApp Image 2026-07-14 at 9.50.54 .jpeg" },

  // Office
  { title: "Executive Office Suite", category: "Office", folder: "Office", file: "1783865299363.jpg" },
  { title: "Modern Office Interior", category: "Office", folder: "Office", file: "1783865299630.jpg" },
  { title: "Professional Workspace Design", category: "Office", folder: "Office", file: "1783865299651.jpg" },
  { title: "Corporate Office Setup", category: "Office", folder: "Office", file: "1783865299671.jpg" },

  // Dining Space
  { title: "Open Concept Dining Area", category: "Dining Space", folder: "Dining Space", file: "1783865300389.jpg" },
  { title: "Elegant Dining Space", category: "Dining Space", folder: "Dining Space", file: "1783865300427.jpg" },

  // Bathroom
  { title: "Modern Bathroom Design", category: "Bathroom", folder: "Baathroom", file: "1783865300270.png" },
  { title: "Luxury Bathroom Interior", category: "Bathroom", folder: "Baathroom", file: "1783865300371.png" },
  { title: "Contemporary Bathroom Renovation", category: "Bathroom", folder: "Baathroom", file: "1783865300446.jpg" },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = RAW_ITEMS.map((item, i) => ({
  id: i + 1,
  title: item.title,
  category: item.category,
  image: encodeURI(`/images/${item.folder}/${item.file}`),
}));

export function getCategoryBySlug(slug: string): CategoryDef | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}

export function getCoverImage(category: CategoryDef): string {
  const folder = RAW_ITEMS.find((r) => r.category === category.name)?.folder || category.name;
  return encodeURI(`/images/${folder}/${category.cover}`);
}
