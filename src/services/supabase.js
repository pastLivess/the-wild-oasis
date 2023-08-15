import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://dqmelgxpjficzwzlwpka.supabase.co'
const supabaseKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRxbWVsZ3hwamZpY3p3emx3cGthIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE1NTUyMjQsImV4cCI6MjAwNzEzMTIyNH0.ZEvl_ifHZ2FKUzw5LlMwO-5Be5d_MweyeUMwh9Mbagg`
const supabase = createClient(supabaseUrl, supabaseKey)
export default supabase
