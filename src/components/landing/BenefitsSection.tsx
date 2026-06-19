import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  FileSpreadsheet,
  List,
  Award,
  FileText,
  Presentation,
  Users,
  BadgeCheck,
  MessagesSquare,
} from "lucide-react";

const BenefitsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const benefits = [
    { icon: FileSpreadsheet, text: "Plantillas y simulaciones" },
    { icon: List, text: "Lista actualizada de becas" },
    { icon: Award, text: "Modelos de ensayos ganadores" },
    { icon: FileText, text: "Modelo de CV internacional" },
    { icon: Presentation, text: "Modelo de pitch y presentación" },
    { icon: Users, text: "Contacto con ex becarios" },
    { icon: BadgeCheck, text: "Certificado de participación" },
    { icon: MessagesSquare, text: "Comunidad soporte" },
  ];

  return (
    <section
      ref={ref}
      id="beneficios"
      className="relative overflow-hidden scroll-mt-20 section-padding"
    >
      {/* Background gradient — mirrors ObjectivesSection */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand-pink/35 via-background to-background" />

      {/* Floating glow orb */}
      <motion.div
        className="pointer-events-none absolute -left-20 top-20 h-72 w-72 rounded-full bg-brand-gold/15 blur-3xl"
        animate={
          isInView
            ? { scale: [1, 1.05, 1], opacity: [0.5, 0.8, 0.5] }
            : {}
        }
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="section-container relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — heading */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, type: "spring", stiffness: 100 }}
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-blue">
              Tu kit de éxito
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              ¿Qué obtendrás?
            </h2>
            <div className="mb-6 flex h-1.5 w-24 items-center justify-center gap-1 rounded-full bg-gradient-to-r from-brand-blue via-brand-purple to-brand-gold" />
            <p className="text-lg text-muted-foreground leading-relaxed">
              Al finalizar el curso, contarás con un{" "}
              <strong className="text-foreground">plan claro</strong>, un{" "}
              <strong className="text-foreground">perfil sólido</strong> y las{" "}
              <strong className="text-foreground">herramientas necesarias</strong>{" "}
              para postular con éxito a becas internacionales.
            </p>
          </motion.div>

          {/* Right — benefit cards */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.15, type: "spring", stiffness: 100 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.4,
                  delay: 0.25 + index * 0.07,
                  type: "spring",
                  stiffness: 90,
                }}
                whileHover={{ y: -4 }}
                className="group relative"
              >
                {/* Hover glow border */}
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-brand-blue/20 via-brand-purple/20 to-brand-gold/20 opacity-0 blur transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative flex items-center gap-3 p-4 bg-card/80 backdrop-blur-sm rounded-xl border border-border/80 shadow-[0_4px_24px_-8px_rgba(32,89,186,0.10)] transition-shadow duration-300 group-hover:shadow-[0_12px_32px_-8px_rgba(32,89,186,0.18)]">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue to-brand-purple text-white shadow-md shadow-brand-blue/20 transition-transform duration-300 group-hover:scale-105">
                    <benefit.icon className="w-5 h-5" aria-hidden />
                  </div>
                  <span className="font-medium text-foreground text-sm leading-snug">
                    {benefit.text}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;