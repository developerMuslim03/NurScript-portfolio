"use client"

import { motion } from "framer-motion"
import { fadeIn } from "@/lib/motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import { projects } from "@/lib/constants"
import Image from "next/image"

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Soňky Taslamalar
          </motion.h2>

          <motion.p
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView="show"
            className="text-muted-foreground max-w-lg"
          >
            Tehniki başarnyklarymy we meseleleri çözmek ukybymy görkezýän iň soňky işlerim.
          </motion.p>
        </div>

        {/* Bento Grid Yapısı */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={fadeIn("up", 0.1 * index)}
              initial="hidden"
              whileInView="show"
              className={
                project.featured
                  ? "md:col-span-2 md:row-span-2"
                  : "md:col-span-1"
              }
            >
              <Card className="group h-full overflow-hidden border-none bg-background/50 backdrop-blur-sm hover:shadow-2xl transition-all flex flex-col">
                <div className="relative h-full overflow-hidden bg-muted">

                  {/* RESİM */}
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-background via-background/60 to-transparent" />

                  <CardContent className="absolute bottom-0 p-6 w-full z-10">
                    <div className="flex gap-2 mb-3 flex-wrap">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-[10px]"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <h3 className="text-xl font-bold mb-2 text-white">
                      {project.title}
                    </h3>

                    <p className="text-sm text-gray-200 line-clamp-2">
                      {project.description}
                    </p>
                  </CardContent>
                </div>

                <CardFooter className="p-4 bg-background flex justify-between items-center border-t">
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      className="hover:text-primary transition-colors"
                    >
                      <Github size={18} />
                    </a>

                    <a
                      href={project.link}
                      className="hover:text-primary transition-colors"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}