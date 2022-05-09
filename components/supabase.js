import {createClient} from "@supabase/supabase-js";

export const supabase = createClient(
	"https://djybwglpsdoypuabwahp.supabase.co",
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRqeWJ3Z2xwc2RveXB1YWJ3YWhwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDk3NjI4MDYsImV4cCI6MTk2NTMzODgwNn0.lhOHPKQRJr8rrywvsiuh62dm9-LH3G70p0SdI3qq71o"
)