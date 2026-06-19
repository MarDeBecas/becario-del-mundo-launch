import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const alianzas = [
  { name: "AIESEC", src: "/images/alianzas/AIESEC.jpg" },
  { name: "Aprendly", src: "/images/alianzas/Aprendly.jpg" },
  { name: "Blue Studies", src: "/images/alianzas/bluestudies.jpeg" },
  { name: "Create Latam", src: "/images/alianzas/CreateLatam.jpg" },
  { name: "IISE", src: "/images/alianzas/IISE.png" },
];

// Duplicate list so the infinite marquee loops seamlessly
const doubled = [...alianzas, ...alianzas];

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
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, type: "spring", stiffness: 100 }}
          className="mb-12 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-gold">
            Alianzas estratégicas
          </p>
          <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Confían en nosotros
          </h2>
          <div className="mx-auto mb-4 h-1.5 w-24 rounded-full bg-gradient-to-r from-brand-gold to-brand-purple" />
          <p className="mx-auto max-w-xl text-muted-foreground">
            Trabajamos junto a organizaciones comprometidas con el desarrollo de jóvenes líderes latinoamericanos.
          </p>
        </motion.div>

        {/* Marquee track — fade edges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="relative"
        >
          {/* Left fade */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-background to-transparent" />
          {/* Right fade */}
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-background to-transparent" />

          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {doubled.map((alianza, i) => (
                <div
                  key={`${alianza.name}-${i}`}
                  className="flex shrink-0 items-center justify-center rounded-2xl border border-border/60 bg-white px-8 py-5 shadow-sm"
                  style={{ minWidth: 170, height: 110 }}
                >
                  <img
                    src={alianza.src}
                    alt={alianza.name}
                    className="h-14 w-auto max-w-[130px] object-contain"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AliadosSection;
