"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { fadeIn } from "@/lib/motion"
import { ArrowRight, Github } from "lucide-react"

export function Hero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center">
          
          

          <motion.h1
              variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView="show"
            className="text-5xl md:text-8xl font-extrabold tracking-tight mb-6"
          >
          <span className="bg-linear-to-r from-[#D31027] via-[#91217C] to-[#003366] bg-clip-text text-transparent">NurSсript </span>bilen <br />
             geljege 1 ädim!
          </motion.h1>

          <motion.p
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            className="max-w-2xl text-muted-foreground text-lg md:text-xl mb-10"
          >
             UI/UX standartlaryna laýyk, ýokary öndürijilikli we ulanyja gönükdirilen web programmalaryny taýýarlaýarmak. Professional kod arhitekturasy arkaly taslamalaryňyzy giňeltmäge we ösdürmäge mümkinçilikleri hödürleýäris.
          </motion.p>

          <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView="show"
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Button size="lg" variant="outline" className="gap-2 cursor-pointer">
              Taslamalary Gör  <ArrowRight className="w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="gap-2 cursor-pointer">
              <Github className="w-4 h-4" /> Github Sahypam
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Arka plan efekti (Ambient Light) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-10%] w-[30%] h-[30%] bg-blue-500/10 blur-[120px] rounded-full" />
      </div>
    </section>
  )
}