import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin, Award } from "lucide-react";

const TeamSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const speakers = [
    {
      name: "Okaren Cabrera",
      role: "Expositora invitada",
      achievement: "Becaria SABF (Argentina) y ALAP (México)",
    },
    {
      name: "Giovanna Roque",
      role: "Expositora invitada",
      achievement: "Becaria YLAI (Estados Unidos)",
    },
    {
      name: "Manuel Flores",
      role: "Expositor invitado",
      achievement: "Becario GKS (Corea) y Bicentenario (Reino Unido)",
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
            Equipo y expositores
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        {/* Main Mentor */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-3xl mx-auto mb-12"
        >
          <div className="card-elevated p-8 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-primary to-blue-accent" />
            <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-blue-accent flex items-center justify-center">
              <span className="text-3xl font-bold text-primary-foreground">MN</span>
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-1">
              Marilú Nuñez
            </h3>
            <p className="text-primary font-medium mb-4">Mentora de Becas • Fundadora de Mar de Becas</p>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Ingeniera industrial con MSc en Emprendimiento e Innovación (Escocia, Reino Unido). 
              Ganadora de la Beca Generación del Bicentenario. Mentora de más de 70 jóvenes becados 
              en países como Reino Unido, Australia e Irlanda.
            </p>
            <div className="flex items-center justify-center gap-2 mt-4 text-sm text-primary">
              <Award className="w-4 h-4" />
              <span>+70 jóvenes becados acompañados</span>
            </div>
          </div>
        </motion.div>

        {/* Guest Speakers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mb-8"
        >
          <h3 className="font-display text-xl font-semibold text-foreground">
            Expositores invitados
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {speakers.map((speaker, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="card-elevated p-6 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-light flex items-center justify-center">
                <span className="text-lg font-bold text-primary">
                  {speaker.name.split(" ").map(n => n[0]).join("")}
                </span>
              </div>
              <h4 className="font-display text-lg font-semibold text-foreground mb-1">
                {speaker.name}
              </h4>
              <p className="text-sm text-muted-foreground mb-2">{speaker.role}</p>
              <p className="text-sm text-primary font-medium">{speaker.achievement}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
