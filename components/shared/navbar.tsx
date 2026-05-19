"use client"

import React from "react"
import Link from "next/link"
import { ModeToggle } from "./mode-toggle"
import { motion } from "framer-motion"
import Image from "next/image"
const navLinks = [
  
  { name: "Taslamalar", href: "#projects" },
  { name: "Biz barada", href: "#skills" },
  { name: "Habarlaşmak üçin", href: "#contact" },
]

export function Navbar() {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 inset-x-0 z-50 border-b bg-background/80 backdrop-blur-md supports-backdrop-filter:bg-background/60"
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tighter hover:opacity-80 transition-opacity">
          <Image 
            src="/logo/logo.png" 
            alt="Nur_Script Logo"
            width={120} 
            height={40} 
            className="object-contain" 
            priority 
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
          <motion.a 
            key={link.name} 
            href={link.href}
            whileHover={{ scale: 1.1 }} 
            whileTap={{ scale: 0.95 }} 
            onClick={(e) => {
              e.preventDefault();
              const target = document.querySelector(link.href);
              if (target) {
                target.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors cursor-pointer"
          >
            {link.name}
          </motion.a>
        ))}
          <ModeToggle />
        </nav>

       
        <div className="md:hidden">
          <ModeToggle />
        </div>
      </div>
    </motion.header>
  )
}