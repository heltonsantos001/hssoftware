"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Column - Content */}
          <div className="space-y-8 animate-in fade-in slide-in-from-left duration-1000">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">HS Software</h1>
              <p className="text-xl md:text-2xl font-medium text-foreground/90">
                Soluções digitais sob medida para o seu negócio.
              </p>
            </div>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
              Desenvolvemos sites e sistemas com alta performance, design moderno e foco na experiência do usuário.
              Transformamos suas ideias em soluções digitais que impulsionam resultados.
            </p>

            <div className="pt-4">
              <Button
                size="lg"
                className="text-base px-8 py-6 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground font-medium shadow-lg hover:shadow-xl transition-all"
                onClick={() => document.getElementById("projetos")?.scrollIntoView({ behavior: "smooth" })}
              >
                Ver Projetos
                <ArrowDown className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Right Column - Mockup Image */}
          <div className="relative animate-in fade-in slide-in-from-right duration-1000 delay-300">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/modern-website-mockup-on-laptop-screen--profession.jpg"
                alt="Website mockup on laptop"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground/50" />
      </div>
    </section>
  )
}
