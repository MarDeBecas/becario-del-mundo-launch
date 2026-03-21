import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote, Star } from "lucide-react";

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const testimonials = [
    {
      quote:
        "Gracias al acompañamiento de Marilú, logré estructurar mi perfil y obtener la beca Chevening para estudiar en Reino Unido. Su metodología es clara y práctica.",
      name: "Carlos M.",
      achievement: "Becario Chevening — Reino Unido",
    },
    {
      quote:
        "El curso me ayudó a identificar mis fortalezas y escribir ensayos que realmente conectaran con los comités de selección. Ahora estudio en Australia con beca completa.",
      name: "María Elena R.",
      achievement: "Becaria en Australia",
    },
    {
      quote:
        "La comunidad de Mar de Becas fue clave en mi proceso. Recibí feedback valioso y apoyo constante. Hoy soy becario del Bicentenario en Irlanda.",
      name: "José Luis P.",
      achievement: "Becario Bicentenario — Irlanda",
    },
  ];

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
            Lo que dicen quienes ya lograron su beca
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
              initial={{ opacity: 0, y: 36 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.1 + index * 0.12,
                type: "spring",
                stiffness: 90,
              }}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col rounded-2xl border border-border/70 bg-card/90 p-6 shadow-[0_8px_32px_-12px_rgba(32,89,186,0.12)] backdrop-blur-sm transition-shadow hover:border-brand-purple/30 hover:shadow-[0_20px_48px_-16px_rgba(160,125,226,0.2)] md:p-8"
            >
              <div className="mb-4 flex items-center justify-between gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-gold/90 to-amber-400/90 text-slate-900 shadow-md shadow-brand-gold/30">
                  <Quote className="h-6 w-6" aria-hidden />
                </div>
                <div className="flex gap-0.5 text-brand-gold" aria-hidden>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </div>

              <blockquote className="mb-6 flex-1 font-serif text-base italic leading-relaxed text-foreground/90 md:text-[1.05rem]">
                “{testimonial.quote}”
              </blockquote>

              <div className="border-t border-border/80 pt-5">
                <p className="font-display font-semibold text-foreground">{testimonial.name}</p>
                <p className="mt-1 text-sm font-medium text-brand-blue">{testimonial.achievement}</p>
              </div>

              <motion.div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-1 rounded-b-2xl bg-gradient-to-r from-brand-blue via-brand-purple to-brand-gold opacity-0 transition-opacity group-hover:opacity-100"
                layout
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
