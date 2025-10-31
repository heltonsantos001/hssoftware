"use client"

import { useState } from "react"
import { Send, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const response = await fetch("https://formsubmit.co/ajax/c5dae6dd79cf94d4ecb74171b3cbc88a", {
        method: "POST",
        body: data,
      })

      if (response.ok) {
        toast({
          title: "Mensagem enviada!",
          description: "Obrigado pelo contato. Responderei em breve!",
        })
        form.reset()
      } else {
        toast({
          title: "Erro ao enviar",
          description: "Não foi possível enviar sua mensagem. Tente novamente.",
        })
      }
    } catch (error) {
      toast({
        title: "Erro ao enviar",
        description: "Não foi possível enviar sua mensagem. Tente novamente.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const socialLinks = [
    { name: "GitHub", icon: Github, href: "https://github.com", color: "hover:text-foreground" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com", color: "hover:text-[#0A66C2]" },
    { name: "Email", icon: Mail, href: "mailto:helton@example.com", color: "hover:text-primary" },
  ]

  return (
    <section id="contato" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-in fade-in slide-in-from-bottom-4">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Contato</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Tem um projeto em mente? Vamos conversar e transformar suas ideias em realidade.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 space-y-6 animate-in fade-in slide-in-from-left duration-700 border-border/50">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Envie uma mensagem</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Preencha o formulário abaixo e entrarei em contato o mais breve possível.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Nome</label>
                  <Input id="name" name="name" placeholder="Seu nome" required />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">E-mail</label>
                  <Input id="email" name="email" type="email" placeholder="seu@email.com" required />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Mensagem</label>
                  <Textarea id="message" name="message" placeholder="Sua mensagem..." rows={5} required />
                </div>

                <input type="hidden" name="_captcha" value="false" />

                <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? "Enviando..." : <>Enviar Mensagem <Send className="ml-2 h-4 w-4" /></>}
                </Button>
              </form>
            </Card>

            <div className="space-y-6 animate-in fade-in slide-in-from-right duration-700">
              <Card className="p-8 space-y-6 border-border/50">
                <h3 className="text-2xl font-bold">Redes Sociais</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Conecte-se comigo nas redes sociais para acompanhar meu trabalho e novidades.
                </p>
                <div className="flex flex-col gap-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-all group ${link.color}`}
                    >
                      <link.icon className="h-6 w-6" />
                      <span className="font-medium">{link.name}</span>
                    </a>
                  ))}
                </div>
              </Card>

              <Card className="p-8 space-y-4 bg-primary/5 border-primary/20">
                <h3 className="text-xl font-bold">Disponibilidade</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Atualmente disponível para novos projetos e oportunidades de colaboração.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
