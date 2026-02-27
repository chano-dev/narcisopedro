import { motion } from "framer-motion";
import { MessageSquare, Newspaper, TrendingUp, Shield, Building2, GraduationCap } from "lucide-react";

const services = [
  { icon: MessageSquare, title: "Consultoria de Comunicação", desc: "Diagnóstico e planeamento estratégico da comunicação interna e externa da sua organização." },
  { icon: Newspaper, title: "Assessoria de Imprensa", desc: "Gestão de relacionamento com os media, produção de press releases e posicionamento mediático." },
  { icon: TrendingUp, title: "Consultoria de Marketing", desc: "Estratégias de marketing adaptadas ao mercado angolano para impulsionar a sua marca." },
  { icon: Shield, title: "Gestão de Imagem e Reputação", desc: "Construção e protecção da imagem institucional e pessoal, incluindo gestão de crises." },
  { icon: Building2, title: "Comunicação Empresarial", desc: "Estruturação da comunicação corporativa, alinhando equipas e mensagens organizacionais." },
  { icon: GraduationCap, title: "Formação e Capacitação", desc: "Workshops e formações em oratória, comunicação assertiva, media training e marketing digital." },
];

const ServicesSection = () => (
  <section id="servicos" className="section-padding">
    <div className="container mx-auto text-center">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
        <h2 className="font-display text-3xl font-bold md:text-4xl">Serviços</h2>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          Soluções estratégicas para a sua comunicação e marketing
        </p>
      </motion.div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="group rounded-xl border bg-card p-6 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-accent"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-accent/20">
              <s.icon className="h-6 w-6 text-primary transition-colors group-hover:gold-accent" />
            </div>
            <h3 className="font-display text-lg font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
