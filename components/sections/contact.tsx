"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { fadeIn } from "@/lib/motion"
import { Send } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          
          <motion.div variants={fadeIn("right", 0.2)} initial="hidden" whileInView="show">
            <h2 className="text-4xl font-bold mb-6">Biziň işiňizi has <br /> <span className="text-primary">  ýokary derejelere ýetiriň </span></h2>
            <p className="text-muted-foreground mb-8 text-lg">
              7/24 siziň hyzmatyňyzda NurScript topary 
            </p>
            <div className="space-y-4">
              <p className="flex items-center gap-3">📧 <span className="font-medium">developermuslim03.com</span></p>
              <p className="flex items-center gap-3">📍 <span className="font-medium">Ashgabat, Turkmenistan</span></p>
            </div>
          </motion.div>

          <motion.div 
            variants={fadeIn("left", 0.4)} 
            initial="hidden" 
            whileInView="show"
            className="bg-background p-8 rounded-3xl border shadow-xl"
          >
            <form className="space-y-4">
              <Input placeholder="Adyňyz" className="bg-secondary/20 border-none h-12" />
              <Input type="email" placeholder="E-poçta salgyňyz" className="bg-secondary/20 border-none h-12" />
              <Textarea placeholder="Habaryňyzy ýazyň" className="bg-secondary/20 border-none min-h-37.5" />
              <Button className="w-full h-12 gap-2 text-lg">
                 <Send size={18} />
              </Button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  )
}