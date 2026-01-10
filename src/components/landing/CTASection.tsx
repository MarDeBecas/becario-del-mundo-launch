import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, Mail, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-secondary">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Da el siguiente paso hacia tu beca internacional
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Estamos aquí para acompañarte en tu camino hacia una educación de clase mundial.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Button
              size="lg"
              className="bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold px-8 py-6 text-lg gap-2"
              asChild
            >
              <a href="https://wa.me/51999999999" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                Escríbenos por WhatsApp
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-6 text-lg gap-2"
              asChild
            >
              <a href="mailto:contacto@mardebecas.com">
                <Mail className="w-5 h-5" />
                Contáctanos por correo
              </a>
            </Button>
          </div>

          <div className="border-t border-border pt-8">
            <p className="text-sm text-muted-foreground mb-4">Síguenos en redes sociales</p>
            <div className="flex justify-center gap-4">
              <a
                href="https://instagram.com/mardebecas"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/company/mardebecas"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
