import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Users, Briefcase } from "lucide-react";

const AudienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const audiences = [
    {
      icon: GraduationCap,
      title: "Estudiantes universitarios",
      description: "Preparándose para oportunidades internacionales",
    },
    {
      icon: Users,
      title: "Egresados recientes",
      description: "Buscando continuar su formación académica",
    },
    {
      icon: Briefcase,
      title: "Profesionales",
      description: "Interesados en especializarse en el extranjero",
    },
  ];

  return (
    <section ref={ref} className="section-padding bg-secondary">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            ¿A quién va dirigido?
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          El curso está dirigido a estudiantes universitarios, egresados y profesionales 
          interesados en postular a becas internacionales de posgrado o intercambio, que 
          buscan orientación práctica, asesoría personalizada y herramientas concretas 
          para fortalecer su postulación.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6">
          {audiences.map((audience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="card-elevated p-8 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-purple-light flex items-center justify-center">
                <audience.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                {audience.title}
              </h3>
              <p className="text-muted-foreground">{audience.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
