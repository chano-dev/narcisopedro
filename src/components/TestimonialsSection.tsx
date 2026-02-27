import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "Um jovem de elevado espírito de responsabilidade. Busca sempre o conhecimento, um dos melhores na área de comunicação e assessoria de imprensa.",
    author: "Colega de profissão",
    note: "", // Recomendação real do LinkedIn
  },
  {
    // SUBSTITUIR: Testemunho de exemplo — substituir pelo testemunho real de um cliente
    text: "O Narciso tem uma capacidade única de transformar ideias complexas em estratégias de comunicação claras e eficazes. Recomendo o seu trabalho.",
    author: "Cliente de consultoria",
    note: "",
  },
  {
    // SUBSTITUIR: Testemunho de exemplo — substituir pelo testemunho real de um participante
    text: "As formações do professor Narciso são dinâmicas e práticas. Mudou completamente a forma como comunico no meu ambiente de trabalho.",
    author: "Participante de formação",
    note: "",
  },
];

const TestimonialsSection = () => (
  <section id="testemunhos" className="section-padding section-dark">
    <div className="container mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center font-display text-3xl font-bold md:text-4xl"
      >
        O Que Dizem Sobre Mim
      </motion.h2>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 p-6"
          >
            <Quote className="h-8 w-8 gold-accent opacity-60" />
            <p className="mt-4 italic leading-relaxed text-primary-foreground/80">"{t.text}"</p>
            <p className="mt-4 text-sm font-semibold gold-accent">— {t.author}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
