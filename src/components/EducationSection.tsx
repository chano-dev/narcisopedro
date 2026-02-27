import { motion } from "framer-motion";

const timeline = [
  { period: "2022–2024", title: "Mestrado em Comunicação e Marketing", institution: "Universidade Independente de Angola" },
  { period: "2021", title: "Certificação em Marketing Digital e Redes Sociais", institution: "" },
  { period: "2020", title: "Formação em Oratória e Comunicação Persuasiva", institution: "" },
  { period: "2013–2018", title: "Licenciatura em Comunicação Social", institution: "Universidade Agostinho Neto" },
];

const EducationSection = () => (
  <section id="formacao" className="section-padding section-dark">
    <div className="container mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center font-display text-3xl font-bold md:text-4xl"
      >
        Formação Académica
      </motion.h2>

      <div className="relative mx-auto mt-12 max-w-2xl">
        {/* Vertical line */}
        <div className="absolute left-4 top-0 h-full w-0.5 bg-accent/40 md:left-1/2 md:-translate-x-1/2" />

        {timeline.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.5 }}
            className="relative mb-10 pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-8"
          >
            {/* Dot */}
            <div className="absolute left-2.5 top-1.5 h-3 w-3 rounded-full gold-bg ring-4 ring-primary md:left-1/2 md:-translate-x-1/2" />

            {/* Left (period) */}
            <div className={`hidden md:block ${i % 2 === 0 ? "text-right" : "order-2 text-left"}`}>
              <span className="text-sm font-semibold gold-accent">{item.period}</span>
            </div>

            {/* Right (content) */}
            <div className={i % 2 === 0 ? "" : "order-1 text-right"}>
              <span className="text-sm font-semibold gold-accent md:hidden">{item.period}</span>
              <h3 className="font-display text-lg font-semibold text-primary-foreground">{item.title}</h3>
              {item.institution && (
                <p className="mt-1 text-sm text-primary-foreground/60">{item.institution}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default EducationSection;
