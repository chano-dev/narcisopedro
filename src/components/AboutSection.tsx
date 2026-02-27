import { motion } from "framer-motion";
import { User, Award, Users, BookOpen, GraduationCap } from "lucide-react";

const stats = [
  { icon: Award, value: "7+", label: "Anos de Experiência" },
  { icon: Users, value: "50+", label: "Clientes Assessorados" },
  { icon: BookOpen, value: "30+", label: "Formações Realizadas" },
  { icon: GraduationCap, value: "Mestre", label: "Comunicação & Marketing" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const AboutSection = () => (
  <section id="sobre" className="section-padding section-alt">
    <div className="container mx-auto">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        {/* Photo placeholder */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          {/* SUBSTITUIR: Trocar este placeholder pela foto real do Narciso Pedro */}
          <div className="photo-placeholder h-[400px] w-[320px]">
            <User className="h-24 w-24 gold-accent opacity-40" />
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
            Sobre <span className="gold-accent">Narciso Pedro</span>
          </h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Comunicólogo de profissão, com mais de 7 anos de experiência nas áreas de comunicação,
            marketing e assessoria de imprensa. Licenciado em Comunicação Social pela Universidade
            Agostinho Neto e Mestre em Comunicação e Marketing pela Universidade Independente de
            Angola.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Fundador da NP Consultoria e Marketing, dedica-se a ajudar empresas, instituições e
            profissionais a comunicarem com clareza, estratégia e impacto. Acredita que uma
            comunicação bem estruturada é o alicerce para o crescimento de qualquer organização.
          </p>

          {/* Stats */}
          <div className="mt-8 grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex items-center gap-3 rounded-lg border bg-card p-4 shadow-sm"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <s.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-lg font-bold text-foreground">{s.value}</p>
                  <p className="text-xs text-muted-foreground">{s.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
