export interface Lead {
  id?: string;
  full_name: string;
  mobile: string;
  email: string;
  property_type: string;
  bhk_type: string;
  budget: string;
  location: string;
  message?: string;
  created_at?: string;
}

export interface Review {
  id: string;
  client_name: string;
  project_type: string;
  rating: number;
  review_text: string;
  client_image?: string;
  location?: string;
  created_at?: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image_url: string;
  description?: string;
  before_image?: string;
  after_image?: string;
}
