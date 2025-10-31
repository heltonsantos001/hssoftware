"use client"

import { Code2, Rocket, Users } from "lucide-react"
import { Card } from "@/components/ui/card"

export function AboutSection() {
  const highlights = [
    {
      icon: Code2,
      title: "Desenvolvimento Profissional",
      description: "Soluções completas utilizando as tecnologias mais modernas do mercado",
    },
    {
      icon: Rocket,
      title: "Alta Performance",
      description: "Sites e sistemas otimizados para velocidade e eficiência máxima",
    },
    {
      icon: Users,
      title: "Foco no Cliente",
      description: "Projetos personalizados que atendem às necessidades específicas do seu negócio",
    },
  ]

  return (
    <section id="sobre" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-in fade-in slide-in-from-bottom-4">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Sobre a HS Software</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-in fade-in slide-in-from-left duration-700">
              <p className="text-lg text-muted-foreground leading-relaxed">
                A <span className="text-foreground font-semibold">HS Software</span> cria sites, sistemas e automações que ajudam seu negócio a crescer.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                 Transformamos ideias em soluções digitais práticas e eficientes, com design moderno e tecnologia confiável.
              </p>
            
            </div>

            <div className="space-y-4 animate-in fade-in slide-in-from-right duration-700">
              {highlights.map((item, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 border-border/50 bg-card"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold text-lg">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
