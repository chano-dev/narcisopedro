import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Formação", href: "#formacao" },
  { label: "Competências", href: "#competencias" },
  { label: "Testemunhos", href: "#testemunhos" },
  { label: "Contacto", href: "#contacto" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-nav-scrolled glass-nav" : "glass-nav"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3 lg:px-8">
        {/* Logo */}
        <button onClick={() => scrollTo("#inicio")} className="flex items-center gap-1">
          <span className="font-display text-2xl font-bold text-primary">N</span>
          <span className="font-display text-2xl font-bold gold-accent">P</span>
        </button>

        {/* Desktop links */}
        <ul className="hidden items-center gap-6 lg:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <button
                onClick={() => scrollTo(l.href)}
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button onClick={() => scrollTo("#contacto")} className="bg-accent text-accent-foreground hover:bg-gold-light font-semibold">
            Agendar Consulta
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t bg-background px-4 pb-4">
          <ul className="flex flex-col gap-3 pt-3">
            {navLinks.map((l) => (
              <li key={l.href}>
                <button
                  onClick={() => scrollTo(l.href)}
                  className="block w-full text-left text-sm font-medium text-foreground/80 hover:text-primary"
                >
                  {l.label}
                </button>
              </li>
            ))}
            <li>
              <Button onClick={() => scrollTo("#contacto")} className="w-full bg-accent text-accent-foreground hover:bg-gold-light font-semibold">
                Agendar Consulta
              </Button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
