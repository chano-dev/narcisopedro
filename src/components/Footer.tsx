import { Linkedin } from "lucide-react";

const Footer = () => {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="dark-surface py-10">
      <div className="container mx-auto flex flex-col items-center gap-6 px-4 text-center md:flex-row md:justify-between md:text-left">
        {/* Logo */}
        <button onClick={() => scrollTo("#inicio")} className="flex items-center gap-1">
          <span className="font-display text-xl font-bold text-primary-foreground">N</span>
          <span className="font-display text-xl font-bold gold-accent">P</span>
        </button>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-4 text-sm text-primary-foreground/60">
          {["Início", "Sobre", "Serviços", "Contacto"].map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(`#${l.toLowerCase().replace("í", "i")}`)}
              className="hover:text-primary-foreground transition-colors"
            >
              {l}
            </button>
          ))}
        </div>

        {/* Social + copyright */}
        <div className="flex items-center gap-4">
          <a href="https://linkedin.com/in/narciso-pedro-809920153" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/60 hover:gold-accent transition-colors">
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
      <p className="mt-6 text-center text-xs text-primary-foreground/40">
        © 2025 Narciso Pedro — NP Consultoria e Marketing. Todos os direitos reservados.
      </p>
    </footer>
  );
};

export default Footer;
