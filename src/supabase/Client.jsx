import { createClient } from "@supabase/supabase-js";

const baseURL = import.meta.env.VITE_SUPABASE_URL;
const baseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(baseURL, baseKey);
