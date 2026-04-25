import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "El curso me ayudó a creer más en mí y en mi historia. A través del autoconocimiento entendí mejor quién soy y qué quiero lograr. Aprendí a construir un perfil competitivo sin dejar de ser auténtica, y a expresar mis objetivos con claridad en mi carta de motivación. Hoy me siento más segura y preparada para postular a becas internacionales.",
    name: "Brenda Rodríguez",
    achievement: "Alumna del curso",
    detail: "",
    initials: "BR",
    gradient: "from-brand-blue to-brand-purple",
    stars: 5,
  },
  {
    quote:
      "Este curso me permitió madurar mi idea de obtener una beca y prepararme adecuadamente. Las ponencias de becarios y la revisión de cartas en vivo fueron de gran apoyo. Fue una experiencia muy completa que realmente te orienta en el proceso.",
    name: "Margarita Junco",
    achievement: "Alumna del curso",
    detail: "",
    initials: "MJ",
    gradient: "from-brand-purple to-brand-pink",
    stars: 5,
  },
  {
    quote:
      "El curso me ayudó a tener mayor claridad sobre lo que busco en una beca y el impacto que quiero generar. También reforzó mi autoconocimiento y me permitió entender por qué merezco estas oportunidades. Es una experiencia que definitivamente recomendaría.",
    name: "Juan Francisco Aguilar",
    achievement: "Alumno del curso",
    detail: "",
    initials: "JA",
    gradient: "from-brand-gold to-amber-500",
    stars: 5,
  },
  {
    quote:
      "El curso fortaleció mi motivación y confianza para postular al extranjero. Me ayudó a reconocer que mi perfil es competitivo y que mis metas son alcanzables. Es un espacio que realmente te impulsa a creer en ti y a dar el siguiente paso.",
    name: "Alondra Ríos",
    achievement: "Alumna del curso",
    detail: "",
    initials: "AR",
    gradient: "from-teal-500 to-brand-blue",
    stars: 5,
  },
  {
    quote:
      "Las experiencias de los becarios invitados fueron lo más valioso. Escuchar sus historias y consejos me motivó a no rendirme. El curso cumple con brindar una guía clara para postular a oportunidades académicas y te da herramientas concretas para empezar.",
    name: "Geraldine Taipe",
    achievement: "Alumna del curso",
    detail: "",
    initials: "GT",
    gradient: "from-brand-pink to-brand-purple",
    stars: 5,
  },
];

const VISIBLE = 2;

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [current, setCurrent] = useState(0);

  const maxIndex = testimonials.length - VISIBLE;

  const prev = useCallback(() => setCurrent((c) => Math.max(0, c - 1)), []);
  const next = useCallback(() => setCurrent((c) => Math.min(maxIndex, c + 1)), [maxIndex]);

  const visible = testimonials.slice(current, current + VISIBLE);

  return (
    <section
      id="testimonios"
      ref={ref}
      className="relative overflow-hidden section-padding"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-brand-pink/25 to-background" />
      <motion.div
        className="pointer-events-none absolute left-1/2 top-24 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-brand-purple/10 blur-[100px]"
        animate={isInView ? { scale: [1, 1.03, 1] } : {}}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="section-container relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, type: "spring", stiffness: 100 }}
          className="mb-12 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-blue">
            Resultados reales
          </p>
          <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Testimonios
          </h2>
          <div className="mx-auto mb-4 h-1.5 w-24 rounded-full bg-gradient-to-r from-brand-blue to-brand-gold" />
          <p className="text-muted-foreground">
            Conoce a quienes confiaron en nosotros y hoy cumplen sus sueños académicos en las mejores universidades del mundo.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {visible.map((t, index) => (
              <motion.article
                key={`${current}-${index}`}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4, delay: index * 0.1, type: "spring", stiffness: 120 }}
                whileHover={{ y: -5 }}
                className="group relative flex flex-col rounded-2xl border border-border/70 bg-card/90 p-7 shadow-[0_8px_32px_-12px_rgba(32,89,186,0.12)] backdrop-blur-sm transition-shadow hover:border-brand-purple/30 hover:shadow-[0_20px_48px_-16px_rgba(160,125,226,0.22)]"
              >
                {/* Big decorative quotes */}
                <span
                  className="pointer-events-none absolute left-5 top-4 font-serif text-7xl font-black leading-none text-brand-purple/10 select-none"
                  aria-hidden
                >
                  "
                </span>
                <span
                  className="pointer-events-none absolute bottom-14 right-5 font-serif text-7xl font-black leading-none text-brand-purple/10 select-none"
                  aria-hidden
                >
                  "
                </span>

                {/* Person header */}
                <div className="relative mb-5 flex items-center gap-4">
                  <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${t.gradient} font-display text-base font-bold text-white shadow-md ring-2 ring-white/30 ring-offset-2`}>
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-display text-base font-bold leading-tight text-foreground">
                      {t.name}
                    </p>
                    <p className="mt-0.5 text-sm font-semibold leading-snug text-brand-blue">
                      {t.achievement}
                    </p>
                    {t.detail && (
                      <p className="mt-0.5 text-xs text-muted-foreground">{t.detail}</p>
                    )}
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="relative flex-1 text-sm italic leading-relaxed text-foreground/80 md:text-[0.95rem]">
                  "{t.quote}"
                </blockquote>

                {/* Stars */}
                <div className="mt-5 flex gap-1 text-brand-gold" aria-label={`${t.stars} estrellas`}>
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>

                {/* Bottom accent bar on hover */}
                <motion.div
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-1 rounded-b-2xl bg-gradient-to-r from-brand-blue via-brand-purple to-brand-gold opacity-0 transition-opacity group-hover:opacity-100"
                  layout
                />
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 flex items-center justify-center gap-4"
        >
          <button
            onClick={prev}
            disabled={current === 0}
            aria-label="Anterior testimonio"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-sm transition-all hover:border-brand-blue/50 hover:bg-brand-blue/5 hover:text-brand-blue disabled:cursor-not-allowed disabled:opacity-30"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="flex gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Ir al grupo ${i + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-8 bg-brand-blue"
                    : "w-2.5 bg-border hover:bg-brand-blue/40"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            disabled={current === maxIndex}
            aria-label="Siguiente testimonio"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-sm transition-all hover:border-brand-blue/50 hover:bg-brand-blue/5 hover:text-brand-blue disabled:cursor-not-allowed disabled:opacity-30"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
