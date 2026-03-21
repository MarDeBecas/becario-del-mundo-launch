import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Laptop, Video, ClipboardCheck, Trophy, Users } from "lucide-react";

const MethodologySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const methods = [
    {
      icon: ClipboardCheck,
      title: "Formación 100% práctica",
      description: "Ejercicios aplicados desde la primera sesión",
    },
    {
      icon: Video,
      title: "Clases virtuales en vivo",
      description: "Interacción directa con expertos",
    },
    {
      icon: Laptop,
      title: "Actividades semanales",
      description: "Tareas guiadas para avanzar tu postulación",
    },
    {
      icon: Trophy,
      title: "Casos de éxito",
      description: "Ejemplos reales de postulaciones ganadoras",
    },
    {
      icon: Users,
      title: "Comunidad de apoyo",
      description: "Red de aspirantes y ex becarios",
    },
  ];

  return (
    <section ref={ref} id="metodologia" className="scroll-mt-20 section-padding bg-foreground">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Metodología
          </h2>
          <div className="w-20 h-1 bg-blue-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {methods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/20 flex items-center justify-center">
                <method.icon className="w-8 h-8 text-blue-accent" />
              </div>
              <h3 className="font-display text-lg font-semibold text-primary-foreground mb-2">
                {method.title}
              </h3>
              <p className="text-sm text-primary-foreground/70">{method.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
