import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Clock, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";

const PricingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const includes = [
    "5 sesiones en vivo con expertos",
    "Materiales y plantillas descargables",
    "Acceso a comunidad de becarios",
    "Certificado de participación",
    "Lista actualizada de becas",
    "Modelos de ensayos ganadores",
  ];

  return (
    <section ref={ref} className="section-padding bg-gradient-to-br from-primary via-purple-dark to-foreground">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Inversión
          </h2>
          <div className="w-20 h-1 bg-blue-accent mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-lg mx-auto"
        >
          <div className="bg-background rounded-3xl p-8 md:p-10 text-center relative overflow-hidden">
            {/* Discount Badge */}
            <div className="absolute top-4 right-4 bg-destructive text-destructive-foreground text-xs font-bold px-3 py-1 rounded-full">
              -61% PROMO
            </div>

            <p className="text-muted-foreground mb-2">Precio promocional</p>
            
            <div className="flex items-center justify-center gap-4 mb-2">
              <span className="text-2xl text-muted-foreground line-through">S/ 480</span>
              <span className="font-display text-6xl font-bold text-primary">S/ 185</span>
            </div>

            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-6">
              <Clock className="w-4 h-4" />
              <span>Vigente hasta: 01/11/2025</span>
            </div>

            <div className="border-t border-border pt-6 mb-6">
              <p className="font-medium text-foreground mb-4">Incluye:</p>
              <ul className="space-y-3 text-left">
                {includes.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 text-lg btn-primary-glow mb-4"
              asChild
            >
              <a href="https://wa.me/51999999999" target="_blank" rel="noopener noreferrer">
                👉 Inscribirme ahora
              </a>
            </Button>

            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <CreditCard className="w-4 h-4" />
              <span>Yape y transferencia bancaria</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
