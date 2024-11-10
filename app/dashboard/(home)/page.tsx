"use client"
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

function page() {
  const router = useRouter()
  useEffect(() => {
    if(!window.localStorage.getItem("__moments_token")){
      router.replace("/")
    }
  },[])
  return (
    <div>page</div>
  )
}

export default page