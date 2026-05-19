'use client'

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"

export function Hero3D() {
  return (
    <section className="pt-28 pb-50 px-4">
      {/* bg-card: Temaya göre otomatik değişir (Dark'ta koyu, Light'ta açık) */}
      <Card className="w-full h-auto md:h-150 bg-card/60 backdrop-blur-md relative overflow-hidden border-primary/20 shadow-2xl shadow-purple-500/20">
        
        {/* Spotlight: Light modda siyah, Dark modda beyaz parlama verir */}
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="currentColor" 
        />
        
        <div className="flex flex-col md:flex-row h-full">
         
          <div className="flex-1 p-8 md:p-12 relative z-10 flex flex-col justify-center">
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="bg-linear-to-r from-[#D31027] via-[#91217C] to-[#003366] bg-clip-text text-transparent">NurSсript </span> 
              <span className="text-foreground"> bilen </span> 
              <br />
              <span className="text-muted-foreground italic">geljege 1 ädim!</span>
            </h1>

           
            <p className="mt-6 text-muted-foreground max-w-lg text-lg leading-relaxed">
              UI/UX standartlaryna laýyk, ýokary öndürijilikli we ulanyja gönükdirilen web programmalaryny taýýarlaýarmak. 
              Professional kod arhitekturasy arkaly taslamalaryňyzy giňeltmäge we ösdürmäge mümkinçilikleri hödürleýäris.
            </p>

            <div className="mt-8 flex gap-4">
              <button className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:opacity-90 transition-all shadow-lg shadow-primary/20">
                Ähli Taslamalary Gör
              </button>
            </div>
          </div>

      
          <div className="flex-1 relative h-80 md:h-full">
            <SplineScene 
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>
      </Card>
    </section>
  )
}