'use client'
import React from 'react'
import { Meteors } from "@/components/ui/meteors"; 
function contact() {
  return (
    <div className="relative min-h-screen bg-gray-100 dark:bg-gray-900">
  <div className="absolute inset-0 z-0">
    <Meteors number={40} />
  </div>
</div>
  )
}

export default contact
