import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  FileSpreadsheet, 
  List, 
  Award, 
  FileText, 
  Presentation, 
  Users, 
  BadgeCheck 
} from "lucide-react";

const BenefitsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const benefits = [
    { icon: FileSpreadsheet, text: "Plantillas y simulaciones" },
    { icon: List, text: "Lista actualizada de becas" },
    { icon: Award, text: "Modelos de ensayos ganadores" },
    { icon: FileText, text: "Modelo de CV internacional" },
    { icon: Presentation, text: "Modelo de pitch y presentación" },
    { icon: Users, text: "Contacto con ex becarios" },
    { icon: BadgeCheck, text: "Certificado de participación" },
  ];

  return (
    <section ref={ref} id="beneficios" className="scroll-mt-20 section-padding bg-purple-light">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              ¿Qué obtendrás?
            </h2>
            <div className="w-20 h-1 bg-primary rounded-full mb-6" />
            <p className="text-lg text-muted-foreground leading-relaxed">
              Al finalizar el curso, contarás con un <strong className="text-foreground">plan claro</strong>, 
              un <strong className="text-foreground">perfil sólido</strong> y las{" "}
              <strong className="text-foreground">herramientas necesarias</strong> para postular 
              con éxito a becas internacionales.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                className="flex items-center gap-3 p-4 bg-background rounded-xl border border-border"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="font-medium text-foreground text-sm">{benefit.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
