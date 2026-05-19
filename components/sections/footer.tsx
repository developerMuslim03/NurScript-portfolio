"use client"

import { Github, Linkedin, Twitter, Mail } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold tracking-tighter mb-2">
             <span className="bg-linear-to-r from-[#D31027] via-[#91217C] to-[#003366] bg-clip-text text-transparent">NurSсript </span> team
            </h3>
            <p className="text-sm text-muted-foreground max-w-xs">
             Nur_Script topary bilen döwrebap web tehnologiýalary arkaly ulanyjy üçin amatly we ýokary öndürijilikli çözgütleri döret!
            </p>
          </div>

          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Github size={20} /></a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Twitter size={20} /></a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Mail size={20} /></a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          © {currentYear} Ähli hukuklary goralan.
        </div>
      </div>
    </footer>
  )
}