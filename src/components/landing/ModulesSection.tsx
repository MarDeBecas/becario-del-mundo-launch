import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ModulesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const modules = [
    {
      week: 1,
      title: "Autoconocimiento y visión",
      description: "Autoconocimiento, propósito y visión académica.",
      activities: "Test de fortalezas y diseño de hoja de ruta hacia la beca.",
    },
    {
      week: 2,
      title: "Tipos de becas",
      description: "Tipos de becas y cómo encontrarlas.",
      activities: "Buscadores, requisitos y lista personalizada de becas.",
    },
    {
      week: 3,
      title: "Perfil competitivo",
      description: "Construcción del perfil competitivo.",
      activities: "CV internacional y marca personal en LinkedIn. Panel con ex becarios.",
    },
    {
      week: 4,
      title: "Ensayos ganadores",
      description: "Carta de motivación y ensayos ganadores.",
      activities: "Narrativa personal y metodología STAR.",
    },
    {
      week: 5,
      title: "Pitch y entrevista",
      description: "Pitch personal y simulación de entrevista.",
      activities: "Práctica con feedback personalizado.",
    },
  ];

  return (
    <section ref={ref} id="modulos" className="section-padding bg-background scroll-mt-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Módulos del curso
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground">5 semanas de formación intensiva</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className={`card-elevated p-6 ${index === 4 ? "md:col-span-2 lg:col-span-1" : ""}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-blue-accent flex items-center justify-center">
                  <span className="text-lg font-bold text-primary-foreground">
                    {module.week}
                  </span>
                </div>
                <div>
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                    Semana {module.week}
                  </span>
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {module.title}
                  </h3>
                </div>
              </div>
              <p className="text-foreground mb-3">{module.description}</p>
              <p className="text-sm text-muted-foreground border-t border-border pt-3">
                📝 {module.activities}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;
