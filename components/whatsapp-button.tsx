"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function WhatsAppButton() {
  const phoneNumber = "5581997717292" // Replace 900000000 with actual number
  const message = encodeURIComponent("Olá! Gostaria de saber mais sobre os serviços da HS Software.")

  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
  }

  return (
    <Button
      onClick={handleClick}
      size="icon"
      className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 z-50 bg-foreground hover:bg-primary text-background"
      aria-label="Abrir WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </Button>
  )
}
