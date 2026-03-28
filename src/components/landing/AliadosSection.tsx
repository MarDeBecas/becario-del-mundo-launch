import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const aliados = [
  {
    name: "Beca Generación del Bicentenario",
    country: "🇵🇪 Perú → 🇬🇧 Reino Unido",
    color: "from-red-500/20 to-blue-600/20",
    border: "border-red-400/30",
  },
  {
    name: "Chevening Scholarship",
    country: "🇬🇧 Reino Unido",
    color: "from-blue-700/20 to-red-600/20",
    border: "border-blue-500/30",
  },
  {
    name: "Ireland Fellows Programme",
    country: "🇮🇪 Irlanda",
    color: "from-green-600/20 to-orange-500/20",
    border: "border-green-500/30",
  },
  {
    name: "Global Korea Scholarship",
    country: "🇰🇷 Corea del Sur",
    color: "from-blue-500/20 to-red-500/20",
    border: "border-blue-400/30",
  },
  {
    name: "YLAI Fellowship",
    country: "🇺🇸 Estados Unidos",
    color: "from-blue-600/20 to-red-400/20",
    border: "border-indigo-400/30",
  },
  {
    name: "SABF",
    country: "🇦🇷 Argentina",
    color: "from-sky-400/20 to-white/10",
    border: "border-sky-400/30",
  },
  {
    name: "Beca Fundación Botín",
    country: "🇪🇸 España",
    color: "from-yellow-500/20 to-red-500/20",
    border: "border-yellow-400/30",
  },
  {
    name: "Australia Awards",
    country: "🇦🇺 Australia",
    color: "from-yellow-400/20 to-red-600/20",
    border: "border-yellow-400/30",
  },
];

const AliadosSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="aliados"
      ref={ref}
      className="relative overflow-hidden section-padding bg-gradient-to-b from-background to-brand-pink/10"
    >
      <motion.div
        className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-brand-gold/10 blur-3xl"
        animate={isInView ? { scale: [1, 1.08, 1] } : {}}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, type: "spring", stiffness: 100 }}
          className="mb-12 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-gold">
            Nuestros ex-becarios
          </p>
          <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Confían en nosotros
          </h2>
          <div className="mx-auto mb-4 h-1.5 w-24 rounded-full bg-gradient-to-r from-brand-gold to-brand-purple" />
          <p className="mx-auto max-w-xl text-muted-foreground">
            Hemos acompañado a jóvenes peruanos que hoy estudian con becas de los programas más competitivos del mundo.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:gap-6">
          {aliados.map((aliado, index) => (
            <motion.div
              key={aliado.name}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{
                duration: 0.4,
                delay: 0.08 + index * 0.07,
                type: "spring",
                stiffness: 110,
              }}
              whileHover={{ y: -4, scale: 1.02 }}
              className={`group relative overflow-hidden rounded-2xl border ${aliado.border} bg-gradient-to-br ${aliado.color} p-5 text-center backdrop-blur-sm transition-all`}
            >
              <div className="absolute inset-0 bg-card/60 backdrop-blur-sm transition-opacity group-hover:bg-card/40" />
              <div className="relative">
                <p className="mb-1 text-lg leading-none">{aliado.country.split(" ")[0]}</p>
                <p className="font-display text-sm font-semibold leading-snug text-foreground">
                  {aliado.name}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">{aliado.country.split(" ").slice(1).join(" ")}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AliadosSection;
