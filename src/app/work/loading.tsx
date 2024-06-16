import { Loader2 } from 'lucide-react'
import React from 'react'

export default function Loading() {
  return (
    <div className='w-screen h-screen flex justify-center items-center'><Loader2 className="h-12 w-12 animate-spin" /></div>
  )
}
