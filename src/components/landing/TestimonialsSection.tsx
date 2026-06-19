import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

function TestimonialAvatar({
  photo,
  initials,
  name,
}: {
  photo: string;
  initials: string;
  name: string;
}) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div
        className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-brand-purple font-display text-base font-bold text-white shadow-md ring-2 ring-white/30 ring-offset-2 ring-offset-card"
        aria-hidden
      >
        {initials}
      </div>
    );
  }
  return (
    <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full bg-muted shadow-md ring-2 ring-white/30 ring-offset-2 ring-offset-card">
      <img
        src={photo}
        alt={name}
        className="h-full w-full object-cover"
        loading="lazy"
        decoding="async"
        onError={() => setFailed(true)}
      />
    </div>
  );
}

function StarRating({ rating }: { rating: number }) {
  const label =
    rating % 1 === 0 ? `${rating} de 5 estrellas` : `${rating.toFixed(1)} de 5 estrellas`;
  return (
    <div className="flex gap-0.5 text-brand-gold" aria-label={label}>
      {[0, 1, 2, 3, 4].map((i) => {
        const fill = Math.min(1, Math.max(0, rating - i));
        return (
          <span key={i} className="relative h-4 w-4 shrink-0">
            <Star className="h-4 w-4 fill-current text-brand-gold/20" strokeWidth={0} />
            <span
              className="absolute left-0 top-0 overflow-hidden"
              style={{ width: `${fill * 100}%` }}
            >
              <Star className="h-4 w-4 fill-current text-brand-gold" strokeWidth={0} />
            </span>
          </span>
        );
      })}
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Ha sido una experiencia muy gratificante el poder autoconocerme sobre lo que realmente busco conseguir al conseguir una beca u oportunidad dentro o fuera del extranjero, creo que ese es el primer paso y aprenderlo junto con Marilú y su equipo fue clave para poder tener más claro lo que quiero",
    name: "Juan Francisco Aguilar Bermeo",
    achievement: "Orientación educativa",
    detail:
      "Industrial Engineer | UNMSM | Exchange Student | UCEN | Director of Outgoing Global Volunteer | AIESEC en Perú | Data Analysis | Market Research | Digital Marketing | Power BI | Excel | SQL",
    initials: "JA",
    photo: "/images/testimonios/Juan-Francisco-Aguilar-Bermeo.jpg",
    rating: 5,
  },
  {
    quote:
      "El curso de Becario del Mundo me ha dado nuevas perspectivas para fortalecer mi perfil. A lo largo de las sesiones, Mari ha demostrado conocimiento del tema, con apertura a responder consultas, incluso después de clases. Algo que me pareció valioso fue la gran cantidad de invitados que tuvo el curso, donde pude conocer a ex becarios de diferentes programas. Las tareas asignadas en el curso me ayudaron a interiorizar lo aprendido y tener en claro que la estrategia hace la diferencia.",
    name: "Danna Canales Jara",
    achievement: "Orientación educativa",
    detail:
      "Analista de Talento y Cultura | Desarrollo de Carrera | Sostenibilidad",
    initials: "DC",
    photo: "/images/testimonios/Danna-Canales-Jara.jpg",
    rating: 4.8,
  },
  {
    quote:
      "Llevé el curso Becario del Mundo con Mar de Becas, liderado por Marilu, y me llevo muchos aprendizajes y recomendaciones que aplicaré para seguir potenciando mi perfil :) Recomiendo los servicios de Mari, se nota el empeño y la dedicación que le pone para que todo quede claro y te da la confianza para que puedas absolver tus dudas.",
    name: "Jashira Meza Peña",
    achievement: "Orientación educativa",
    detail: "Marketing Digital | Innovación | Impacto Social | Creadora de Contenido",
    initials: "JM",
    photo: "/images/testimonios/Jashira-Meza-Pena.jpg",
    rating: 5,
  },
  {
    quote:
      "Marilu is very professional and prepares everything before the meeting. she has a lot of information and she is very generous on what she shares!",
    name: "Carla Salas Diaz",
    achievement: "Orientación educativa",
    detail:
      "Environmental Compliance & Regulatory Specialist | MSC Lead Auditor & BAP Certification Reviewer | Cross-Border Regulatory Audits (Canada, USA & LATAM)",
    initials: "CS",
    photo: "/images/testimonios/Carla-Salas-Diaz.jpg",
    rating: 5,
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

                <div className="relative mb-5 flex items-center gap-4">
                  <TestimonialAvatar photo={t.photo} initials={t.initials} name={t.name} />
                  <div>
                    <p className="font-display text-base font-bold leading-tight text-foreground">
                      {t.name}
                    </p>
                    <p className="mt-0.5 text-sm font-semibold leading-snug text-brand-blue">
                      {t.achievement}
                    </p>
                    {t.detail ? (
                      <p className="mt-0.5 line-clamp-2 text-xs text-muted-foreground">{t.detail}</p>
                    ) : null}
                  </div>
                </div>

                <blockquote className="relative flex-1 text-sm italic leading-relaxed text-foreground/80 md:text-[0.95rem]">
                  "{t.quote}"
                </blockquote>

                <StarRating rating={t.rating} />

                <motion.div
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-1 rounded-b-2xl bg-gradient-to-r from-brand-blue via-brand-purple to-brand-gold opacity-0 transition-opacity group-hover:opacity-100"
                  layout
                />
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

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
