import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, FileText, MessageSquare, CheckCircle } from "lucide-react";

const ObjectivesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const objectives = [
    {
      icon: Target,
      title: "Define tu propósito",
      description: "Definir propósito y visión personal para orientar la búsqueda de becas.",
    },
    {
      icon: FileText,
      title: "Construye tu perfil",
      description: "Construir un perfil competitivo con CV, ensayos y cartas de motivación de alto impacto.",
    },
    {
      icon: MessageSquare,
      title: "Domina las entrevistas",
      description: "Fortalecer habilidades de comunicación para entrevistas y presentaciones ante comités de selección.",
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
            Objetivos del curso
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {objectives.map((objective, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-accent/5 rounded-2xl transform group-hover:scale-105 transition-transform duration-300" />
              <div className="relative p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                    <objective.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    {objective.title}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed pl-16">
                  {objective.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 p-6 rounded-2xl border-2 border-dashed border-primary/30 bg-purple-light/30 text-center"
        >
          <div className="flex items-center justify-center gap-2 text-primary">
            <CheckCircle className="w-5 h-5" />
            <span className="font-medium">
              Al finalizar, tendrás un plan claro y todas las herramientas para postular con éxito
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ObjectivesSection;
