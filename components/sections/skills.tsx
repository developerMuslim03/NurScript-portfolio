/* eslint-disable @next/next/no-img-element */
"use client"

import { motion } from "framer-motion"
import { skills,services  } from "@/lib/constants"
import { fadeIn } from "@/lib/motion"

export function Skills() {
 
  const duplicatedSkills = [...skills, ...skills, ...skills];

  return (
    <section id="skills" className="py-24 overflow-hidden bg-background">
      <div className="container mx-auto px-4 mb-12 text-center">
        <motion.h2 
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          className="text-3xl md:text-5xl font-bold mb-4"
        >
          Hyzmatlarym we ulanýan tehnologiýalarym
        </motion.h2>
        <motion.p 
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView="show"
          className="text-muted-foreground"
        >
         Ulanýan tehnologiýalarym döwrebap tehnologiýalar bilen utgaşyp, işimizi has ykjam, çalt we netijeli alyp barmaga uly mümkinçilik döredýär. Şeýle tehnologiýalaryň kömegi bilen wagty tygşytlap, işleri has tertipli we ýokary hilli ýerine ýetirip bilýäris.
        </motion.p>
      </div>

      <div className="container mx-auto px-4 mb-16">
      <motion.div
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView="show"
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {services.map((service, i) => {
        const Icon = service.icon

        return (
          <div
            key={i}
            className="p-6 rounded-2xl border bg-card/50 hover:border-primary/50 transition-all hover:-translate-y-1"
          >
            <Icon className="w-8 h-8 mb-4 text-primary" />

            <h3 className="font-semibold text-lg mb-2">
              {service.title}
            </h3>

            <p className="text-sm text-muted-foreground">
              {service.desc}
            </p>
          </div>
        )
      })}

      </motion.div>
    </div>

      <div className="relative flex overflow-hidden py-10">
        <motion.div 
          className="flex whitespace-nowrap gap-8"
          animate={{
            x: ["0%", "-50%"], 
          }}
          transition={{
            ease: "linear",
            duration: 25,
            repeat: Infinity,
          }}
        >
          {duplicatedSkills.map((skill, index) => (
            <div 
              key={`${skill.name}-${index}`} 
              className="flex items-center gap-4 px-8 py-4 border rounded-2xl bg-card/50 hover:border-primary/50 transition-colors min-w-50"
            >
              <div className="w-10 h-10 relative flex items-center justify-center">
                <img 
                  src={skill.icon} 
                  alt={skill.name}
                  className="w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300" 
                />
              </div>
              <span className="text-lg font-semibold tracking-tight">{skill.name}</span>
            </div>
          ))}
        </motion.div>

        {/* Kenarlara yumuşak geçiş (Blur) efekti ekleyelim */}
        <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-background to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-background to-transparent z-10" />
      </div>
    </section>
  )
}