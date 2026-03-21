import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, FileText, MessageSquare, CheckCircle } from "lucide-react";

const ObjectivesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const objectives = [
    {
      icon: Target,
      title: "Define tu propósito",
      description:
        "Definir propósito y visión personal para orientar la búsqueda de becas.",
      step: "01",
    },
    {
      icon: FileText,
      title: "Construye tu perfil",
      description:
        "Construir un perfil competitivo con CV, ensayos y cartas de motivación de alto impacto.",
      step: "02",
    },
    {
      icon: MessageSquare,
      title: "Domina las entrevistas",
      description:
        "Fortalecer habilidades de comunicación para entrevistas y presentaciones ante comités de selección.",
      step: "03",
    },
  ];

  return (
    <section
      id="objetivos"
      ref={ref}
      className="relative overflow-hidden section-padding"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand-pink/35 via-background to-background" />
      <motion.div
        className="pointer-events-none absolute -right-20 top-20 h-72 w-72 rounded-full bg-brand-purple/15 blur-3xl"
        animate={isInView ? { scale: [1, 1.05, 1], opacity: [0.5, 0.8, 0.5] } : {}}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, type: "spring", stiffness: 100 }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-blue">
            Tu ruta
          </p>
          <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Objetivos del curso
          </h2>
          <div className="mx-auto flex h-1.5 w-24 items-center justify-center gap-1 rounded-full bg-gradient-to-r from-brand-blue via-brand-purple to-brand-gold" />
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
          {objectives.map((objective, index) => (
            <motion.article
              key={objective.step}
              initial={{ opacity: 0, y: 32 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.12 + index * 0.1,
                type: "spring",
                stiffness: 90,
              }}
              whileHover={{ y: -6 }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-brand-blue/20 via-brand-purple/20 to-brand-gold/20 opacity-0 blur transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative h-full overflow-hidden rounded-2xl border border-border/80 bg-card/80 p-8 shadow-[0_4px_24px_-8px_rgba(32,89,186,0.12)] backdrop-blur-sm transition-shadow duration-300 group-hover:shadow-[0_20px_40px_-12px_rgba(32,89,186,0.18)]">
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-blue to-brand-purple text-white shadow-lg shadow-brand-blue/25 transition-transform duration-300 group-hover:scale-105">
                    <objective.icon className="h-7 w-7" aria-hidden />
                  </div>
                  <span className="font-display text-4xl font-bold tabular-nums text-brand-pink/80">
                    {objective.step}
                  </span>
                </div>
                <h3 className="mb-3 font-display text-xl font-semibold text-foreground">
                  {objective.title}
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  {objective.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.45, type: "spring", stiffness: 100 }}
          className="mt-12 overflow-hidden rounded-2xl border border-brand-purple/25 bg-gradient-to-r from-brand-pink/50 via-white/80 to-brand-gold/20 p-6 text-center shadow-inner md:p-8"
        >
          <motion.div
            className="flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-3"
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
              <CheckCircle className="h-5 w-5" aria-hidden />
            </div>
            <p className="max-w-2xl font-medium text-foreground">
              Al finalizar, tendrás un plan claro y todas las herramientas para postular con
              éxito
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ObjectivesSection;
