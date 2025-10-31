import { Github, Linkedin, Instagram, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Sobre */}
        <div className="space-y-4">
          <h3 className="font-bold text-lg">Sobre</h3>
          <p className="text-sm text-muted-foreground">
            A HS Software desenvolve soluções digitais personalizadas para transformar suas ideias em realidade.
          </p>
        </div>

        {/* Links rápidos */}
        <div className="space-y-4">
          <h3 className="font-bold text-lg">Links Rápidos</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:underline">Home</a></li>
            <li><a href="#projetos" className="hover:underline">Projetos</a></li>
            <li><a href="#servicos" className="hover:underline">Serviços</a></li>
          
          </ul>
        </div>

        {/* Contato */}
        <div className="space-y-4">
          <h3 className="font-bold text-lg">Contato</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <a href="mailto:hssoftwaredev@gmail.com" className="hover:underline">
                hssoftwaredev@gmail.com
              </a>
            </li>
            <li>
              {/* WhatsApp visível */}
              <a
                href="https://api.whatsapp.com/send?phone=5581997717292&text=Olá!"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.52 3.48a11.84 11.84 0 0 0-16.73 0 11.8 11.8 0 0 0-3.36 8.64c0 2.08.54 4.13 1.57 5.93L2 22l4.05-1.3a11.81 11.81 0 0 0 5.93 1.57 11.84 11.84 0 0 0 8.64-3.36 11.83 11.83 0 0 0 0-16.73zm-8.52 17.02a9.84 9.84 0 0 1-5.23-1.52l-.38-.23-3.03.97.98-3.03-.24-.39A9.84 9.84 0 1 1 12 20.5zm5.33-7.9c-.29-.14-1.72-.85-1.99-.95-.27-.1-.47-.14-.67.14-.19.27-.74.95-.91 1.15-.17.19-.35.21-.64.07-.29-.14-1.22-.45-2.33-1.43-.86-.76-1.44-1.7-1.61-1.97-.17-.27-.02-.42.12-.56.12-.12.27-.31.41-.46.14-.15.19-.25.29-.42.1-.17.05-.32-.02-.46-.07-.14-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.51-.17-.01-.37-.01-.57-.01s-.46.07-.7.32c-.24.24-.91.88-.91 2.14s.93 2.49 1.06 2.66c.14.17 1.82 2.77 4.41 3.88.62.27 1.1.43 1.48.55.62.19 1.19.16 1.64.1.5-.06 1.72-.7 1.96-1.38.24-.68.24-1.26.17-1.38-.07-.12-.27-.19-.57-.33z"/>
                </svg>
                WhatsApp
              </a>
            </li>
          </ul>
        </div>

        {/* Redes sociais */}
        <div className="space-y-4">
          <h3 className="font-bold text-lg">Redes Sociais</h3>
          <div className="flex gap-4">
            
            <a href="https://www.instagram.com/hssoftwaredev" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Direitos reservados */}
      <div className="mt-8 text-center text-sm text-muted-foreground">
        © 2025 HS Software — Todos os direitos reservados.
      </div>
    </footer>
  )
}
