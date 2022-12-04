import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ohvblzolhjbyennmwsxt.supabase.co'
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY
console.log(import.meta.env.VITE_ZOZ)
export const supabase = createClient(supabaseUrl, supabaseKey)
