import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials = [
    {
      quote: "Gracias al acompañamiento de Marilú, logré estructurar mi perfil y obtener la beca Chevening para estudiar en Reino Unido. Su metodología es clara y práctica.",
      name: "Carlos M.",
      achievement: "Becario Chevening - Reino Unido",
    },
    {
      quote: "El curso me ayudó a identificar mis fortalezas y escribir ensayos que realmente conectaran con los comités de selección. Ahora estudio en Australia con beca completa.",
      name: "María Elena R.",
      achievement: "Becaria en Australia",
    },
    {
      quote: "La comunidad de Mar de Becas fue clave en mi proceso. Recibí feedback valioso y apoyo constante. Hoy soy becario del Bicentenario en Irlanda.",
      name: "José Luis P.",
      achievement: "Becario Bicentenario - Irlanda",
    },
  ];

  return (
    <section ref={ref} className="section-padding bg-background">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Testimonios
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground">
            Lo que dicen quienes ya lograron su beca
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="card-elevated p-6 relative"
            >
              <Quote className="w-10 h-10 text-purple-light absolute top-6 right-6" />
              <p className="text-muted-foreground leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-display font-semibold text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-sm text-primary">{testimonial.achievement}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
