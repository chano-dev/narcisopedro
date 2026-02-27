import { motion } from "framer-motion";

const skills = [
  "Comunicação Empresarial",
  "Assessoria de Imprensa",
  "Planeamento Estratégico",
  "Marketing & Publicidade",
  "Gestão de Crises",
  "Relações Públicas",
  "Comunicação Organizacional",
  "Gestão de Relacionamento com o Cliente (CRM)",
  "Mídias Sociais",
  "Responsabilidade Social Empresarial",
];

const SkillsSection = () => (
  <section id="competencias" className="section-padding section-alt">
    <div className="container mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-3xl font-bold md:text-4xl"
      >
        Competências
      </motion.h2>

      <div className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-3">
        {skills.map((skill, i) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.4 }}
            className="rounded-full border border-primary/20 bg-card px-5 py-2.5 text-sm font-medium text-foreground shadow-sm transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:shadow-md"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
