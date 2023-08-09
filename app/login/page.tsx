"use client"


import { Auth } from '@supabase/auth-ui-react'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
const supabase = createClientComponentClient()

const App = () => <Auth supabaseClient={supabase} />

export default App