import { motion } from "framer-motion";
import { User } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="inicio" className="section-dark min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest gold-accent">
              NP Consultoria e Marketing
            </p>
            <h1 className="font-display text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Comunicação Estratégica que{" "}
              <span className="gold-accent">Transforma Resultados</span>
            </h1>
            <p className="mt-3 font-display text-lg italic text-primary-foreground/80 md:text-xl">
              Narciso Pedro — Comunicólogo | Consultor de Comunicação &amp; Marketing
            </p>
            <p className="mt-6 max-w-lg text-primary-foreground/70 leading-relaxed">
              Especialista em comunicação empresarial, assessoria de imprensa e estratégias de
              marketing. Ajudo marcas e organizações a comunicar com impacto e construir reputações
              sólidas.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                onClick={() => scrollTo("#contacto")}
                className="bg-accent text-accent-foreground hover:bg-gold-light font-semibold px-8 py-6 text-base"
              >
                Agendar Consulta
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollTo("#servicos")}
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6 text-base"
              >
                Conhecer Serviços
              </Button>
            </div>
          </motion.div>

          {/* Photo placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center"
          >
            {/* SUBSTITUIR: Trocar este placeholder pela foto real do Narciso Pedro */}
            <div className="photo-placeholder h-[420px] w-[340px] md:h-[500px] md:w-[400px]">
              <User className="h-32 w-32 gold-accent opacity-40" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
