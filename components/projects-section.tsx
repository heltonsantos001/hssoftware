"use client"

import { Card } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      name: "Site de Advocacia",
      description: "Modelo de site desenvolvido para escritórios jurídicos, com layout elegante e profissional. Apresenta áreas de atuação, informações sobre o escritório e formulário de contato com mapa integrado.",
      url: "https://advogado-eight.vercel.app/",
    },
    {
      name: "Site de Advocacia",
      description: "Modelo de site desenvolvido para escritórios jurídicos, com layout elegante e profissional. Apresenta áreas de atuação, informações sobre o escritório e formulário de contato com mapa integrado.",
      url: "https://advogado-vl1g.vercel.app/",
    },
    {
      name: "Site de Estética e Beleza",
      description: "Modelo de site voltado para clínicas e estúdios de estética. Inclui apresentação de serviços, galeria de resultados e sistema de agendamento, com um visual sofisticado e harmonioso.",
      url: "https://aesthetic-studio.vercel.app/",
    },
  ]

  return (
    <section id="projetos" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-in fade-in slide-in-from-bottom-4">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Projetos</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Confira alguns dos projetos que desenvolvi. Você pode interagir com cada um diretamente abaixo.
            </p>
          </div>

          <div className="grid gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-2xl transition-all duration-500 animate-in fade-in slide-in-from-bottom-8 border-border/50"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="grid md:grid-cols-5 gap-6 p-6">
                  <div className="md:col-span-2 space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold">{project.name}</h3>
                      <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                    </div>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors group"
                    >
                      Visitar site
                      <ExternalLink className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                  </div>
                  <div className="md:col-span-3">
                    <div className="relative w-full h-[400px] rounded-lg overflow-hidden border border-border shadow-lg">
                      <iframe
                        src={project.url}
                        className="w-full h-full"
                        title={project.name}
                        loading="lazy"
                        sandbox="allow-scripts allow-same-origin"
                      />
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
