import { createClient } from "@supabase/supabase-js";

const defaultSupabaseUrl = "https://placeholder.supabase.co";
const defaultAnonKey = "placeholder_anon_key";
const defaultServiceKey = "placeholder_service_key";

const rawSupabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseUrl = rawSupabaseUrl && /^https?:\/\//.test(rawSupabaseUrl) ? rawSupabaseUrl : defaultSupabaseUrl;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || defaultAnonKey;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || defaultServiceKey;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const createServiceClient = () => createClient(supabaseUrl, supabaseServiceKey);
