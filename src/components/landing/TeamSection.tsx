import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Sparkles } from "lucide-react";

const TeamSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const speakers = [
    {
      name: "Nayvi Pablo",
      role: "Expositora invitada",
      achievement: "Becaria Ireland Fellows Programme Latin America",
    },
    {
      name: "Giovanna Roque",
      role: "Expositora invitada",
      achievement: "Becaria YLAI (Estados Unidos)",
    },
    {
      name: "Manuel Flores",
      role: "Expositor invitado",
      achievement: "Becario GKS (Corea) y Bicentenario (Reino Unido)",
    },
  ];

  return (
    <section
      id="equipo"
      ref={ref}
      className="relative overflow-hidden section-padding"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-purple/[0.07] via-secondary/80 to-brand-blue/[0.06]" />
      <motion.div
        className="pointer-events-none absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-brand-gold/10 blur-3xl"
        animate={isInView ? { y: [0, -12, 0] } : {}}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, type: "spring", stiffness: 100 }}
          className="mb-12 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-purple">
            Quién te acompaña
          </p>
          <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Equipo y expositores
          </h2>
          <div className="mx-auto h-1.5 w-24 rounded-full bg-gradient-to-r from-brand-purple to-brand-blue" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.08, type: "spring", stiffness: 90 }}
          className="relative mx-auto mb-14 max-w-3xl"
        >
          <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-brand-gold via-brand-purple to-brand-blue opacity-80 blur-sm" />
          <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-card p-8 text-center shadow-2xl md:p-10">
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-brand-gold/15 blur-2xl" />
            <div className="absolute -bottom-6 left-8 h-24 w-24 rounded-full bg-brand-purple/20 blur-2xl" />

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: 0.15, type: "spring", stiffness: 200 }}
              className="relative mx-auto mb-5 flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue via-brand-purple to-brand-blue p-[3px] shadow-xl shadow-brand-blue/30"
            >
              <div className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-brand-purple">
                <span className="font-display text-3xl font-bold text-white">MN</span>
              </div>
            </motion.div>

            <div className="mb-1 inline-flex items-center gap-1.5 rounded-full bg-brand-gold/15 px-3 py-1 text-xs font-semibold text-amber-900/90">
              <Sparkles className="h-3.5 w-3.5" aria-hidden />
              Mentora principal
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground md:text-3xl">
              Marilú Nuñez
            </h3>
            <p className="mb-4 font-medium text-brand-blue">
              Mentora de Becas · Fundadora de Mar de Becas
            </p>
            <p className="mx-auto max-w-2xl leading-relaxed text-muted-foreground">
              Ingeniera industrial con MSc en Emprendimiento e Innovación (Escocia, Reino Unido).
              Ganadora de la Beca Generación del Bicentenario. Mentora de más de 70 jóvenes becados
              en países como Reino Unido, Australia e Irlanda.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-brand-blue/20 bg-brand-blue/5 px-4 py-2 text-sm font-medium text-brand-blue">
              <Award className="h-4 w-4 shrink-0" aria-hidden />
              <span>+70 jóvenes becados acompañados</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="mb-8 text-center"
        >
          <h3 className="font-display text-xl font-semibold text-foreground md:text-2xl">
            Expositores invitados
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Historias reales de quienes ya vivieron el proceso
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {speakers.map((speaker, index) => (
            <motion.div
              key={speaker.name}
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.45,
                delay: 0.25 + index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group relative rounded-2xl border border-border/90 bg-card p-6 text-center shadow-[0_4px_20px_-6px_rgba(0,0,0,0.08)] transition-shadow hover:shadow-[0_16px_36px_-12px_rgba(160,125,226,0.25)]"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-pink to-brand-purple/30 text-lg font-bold text-brand-blue transition-transform duration-300 group-hover:scale-105">
                {speaker.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <h4 className="font-display text-lg font-semibold text-foreground">
                {speaker.name}
              </h4>
              <p className="mb-2 text-sm text-muted-foreground">{speaker.role}</p>
              <p className="text-sm font-medium leading-snug text-brand-purple">
                {speaker.achievement}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
