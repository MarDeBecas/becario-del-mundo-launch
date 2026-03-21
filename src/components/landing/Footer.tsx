import { motion } from "framer-motion";
import { Heart, Instagram, Mail, MessageCircle } from "lucide-react";

const footerLinks = [
  { label: "Objetivos", href: "#objetivos" },
  { label: "Equipo", href: "#equipo" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Programa", href: "#modulos" },
  { label: "Inscribirse", href: "#inscribete" },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#0a0f1a] text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/25 via-transparent to-brand-purple/20" />
      <motion.div
        className="absolute -left-20 bottom-0 h-56 w-56 rounded-full bg-brand-gold/10 blur-3xl"
        animate={{ opacity: [0.4, 0.65, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="section-container relative py-14 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-10 md:flex-row md:items-start md:justify-between"
        >
          <div className="max-w-md text-center md:text-left">
            <p className="font-display text-xl font-bold tracking-tight md:text-2xl">
              <span className="bg-gradient-to-r from-white via-brand-pink to-brand-gold bg-clip-text text-transparent">
                Mar de Becas
              </span>
            </p>
            <p className="mt-2 text-sm leading-relaxed text-white/60">
              Formamos becarios del mundo con herramientas prácticas y acompañamiento cercano.
            </p>
            <div className="mt-6 flex justify-center gap-3 md:justify-start">
              <a
                href="https://wa.me/51999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 transition-colors hover:border-brand-gold/50 hover:bg-brand-gold/15 hover:text-brand-gold"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href="mailto:hola@mardebecas.com"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 transition-colors hover:border-brand-purple/50 hover:bg-brand-purple/15 hover:text-brand-pink"
                aria-label="Correo"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 transition-colors hover:border-brand-pink/50 hover:bg-white/10"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <nav
            className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm font-medium md:justify-end"
            aria-label="Pie de página"
          >
            {footerLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * i }}
                className="text-white/65 transition-colors hover:text-brand-gold"
              >
                {link.label}
              </motion.a>
            ))}
          </nav>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12 flex flex-col items-center gap-2 border-t border-white/10 pt-8 text-center"
        >
          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} Mar de Becas. Todos los derechos reservados.
          </p>
          <p className="flex items-center gap-1.5 text-xs text-white/35">
            Hecho con
            <Heart className="h-3.5 w-3.5 fill-brand-pink text-brand-pink" aria-hidden />
            para futuros becarios del mundo
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
