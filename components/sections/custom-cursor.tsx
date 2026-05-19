"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", mouseMove)
    return () => window.removeEventListener("mousemove", mouseMove)
  }, [])

  return (
   <motion.div
  className="fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-9999 hidden md:block bg-linear-to-br from-[#dc5262] via-[#9b598f] to-[#264c73] opacity-80 shadow-lg"
  animate={{
    x: mousePosition.x - 12, 
    y: mousePosition.y - 12,
  }}
    transition={{ type: "spring", damping: 30, stiffness: 300, mass: 3 }}
  />
  )
}