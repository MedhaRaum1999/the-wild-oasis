import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://ifngdtzxtszxxycyjujf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlmbmdkdHp4dHN6eHh5Y3lqdWpmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQyMTYwMDUsImV4cCI6MjAzOTc5MjAwNX0.z1jyZUQFXLFb3K7JPsca3b2NjKKclnccEC3bG9dBZEo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
