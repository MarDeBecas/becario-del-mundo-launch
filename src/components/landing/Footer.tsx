import { motion } from "framer-motion";
import { Heart, Mail, MessageCircle, ArrowUpRight } from "lucide-react";

const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSe8GQSGC9qJ5B5VVV2RzBPm7QiDuKQMb5wKnROtTzc9a0okOA/viewform";

const navLinks = [
  { label: "¿Para quién?", href: "#audiencia" },
  { label: "Objetivos", href: "#objetivos" },
  { label: "Metodología", href: "#metodologia" },
  { label: "Programa", href: "#modulos" },
  { label: "Equipo", href: "#equipo" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Precio", href: "#precio" },
];

const socialLinks = [
  {
    label: "LinkedIn",
    handle: "@mardebecas",
    href: "https://pe.linkedin.com/company/mardebecas",
    color: "#0A66C2",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current shrink-0" aria-hidden>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    handle: "@mardebecas",
    href: "https://www.instagram.com/mardebecas/",
    color: "#E1306C",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current shrink-0" aria-hidden>
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    handle: "@mar.de.becas",
    href: "https://www.tiktok.com/@mar.de.becas",
    color: "#ffffff",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current shrink-0" aria-hidden>
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.27 8.27 0 0 0 4.84 1.56V6.81a4.85 4.85 0 0 1-1.07-.12z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    handle: "Mar de Becas",
    href: "https://www.youtube.com/playlist?list=PL75jNq-Ik7OS1-Z2u6Dmw-p4bDArqjRoW",
    color: "#FF0000",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current shrink-0" aria-hidden>
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    handle: "+51 979 719 879",
    href: "https://wa.me/51979719879",
    color: "#25D366",
    icon: <MessageCircle className="h-4 w-4 shrink-0" />,
  },
  {
    label: "Email",
    handle: "hola@mardebecas.com",
    href: "mailto:hola@mardebecas.com",
    color: "#a07de2",
    icon: <Mail className="h-4 w-4 shrink-0" />,
  },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#060c1a] text-white">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-blue/20 via-transparent to-brand-purple/15" />
      <motion.div
        className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-brand-blue/15 blur-[120px]"
        animate={{ opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full bg-brand-purple/15 blur-[100px]"
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Top gradient line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-brand-gold/60 to-transparent" />

      {/* CTA strip */}
      <div className="relative border-b border-white/[0.06]">
        <div className="section-container py-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left"
          >
            <div>
              <p className="font-display text-lg font-bold text-white md:text-xl">
                ¿Listo para dar el primer paso?
              </p>
              <p className="mt-1 text-sm text-white/55">
                Cupos limitados · Inicio 14 de Junio · 6 semanas
              </p>
            </div>
            <motion.a
              href={FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-brand-gold to-amber-400 px-6 py-3 text-sm font-bold text-[#0f172a] shadow-[0_6px_24px_rgba(255,196,95,0.35)] transition-shadow hover:shadow-[0_8px_30px_rgba(255,196,95,0.5)]"
            >
              Pre-inscripción
              <ArrowUpRight className="h-4 w-4" />
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Main footer body */}
      <div className="section-container relative py-14">
        <div className="grid gap-10 md:grid-cols-3 md:gap-8 lg:gap-12">

          {/* Col 1 — Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-display text-2xl font-extrabold tracking-tight">
              <span className="bg-gradient-to-r from-white via-brand-pink to-brand-gold bg-clip-text text-transparent">
                Mar de Becas
              </span>
            </p>
            <div className="mt-2 h-0.5 w-10 rounded-full bg-gradient-to-r from-brand-gold to-transparent" />
            <p className="mt-4 text-sm leading-relaxed text-white/55">
              Formamos becarios del mundo con metodología práctica, acompañamiento cercano y una comunidad de ex-becarios que ya lo lograron.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-brand-gold/25 bg-brand-gold/10 px-3.5 py-1.5 text-xs font-semibold text-brand-gold">
              +70 jóvenes becados acompañados
            </div>
          </motion.div>

          {/* Col 2 — Nav */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-white/40">
              Navegación
            </p>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-3">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.04 }}
                >
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-sm text-white/55 transition-colors duration-200 hover:text-brand-gold"
                  >
                    <span className="inline-block h-1 w-1 rounded-full bg-white/20 transition-colors group-hover:bg-brand-gold" />
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Col 3 — Social / Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.16 }}
          >
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-white/40">
              Síguenos
            </p>
            <ul className="flex flex-col gap-3">
              {socialLinks.map((social, i) => (
                <motion.li
                  key={social.label}
                  initial={{ opacity: 0, x: 8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.12 + i * 0.05 }}
                >
                  <a
                    href={social.href}
                    target={social.href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.04] px-3.5 py-2.5 text-sm transition-all duration-200 hover:border-white/15 hover:bg-white/[0.08]"
                  >
                    <span
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg transition-transform group-hover:scale-110"
                      style={{ backgroundColor: `${social.color}22`, color: social.color }}
                    >
                      {social.icon}
                    </span>
                    <span className="flex flex-col leading-none">
                      <span className="text-[11px] font-semibold uppercase tracking-wide text-white/35">
                        {social.label}
                      </span>
                      <span className="mt-0.5 text-xs text-white/70 group-hover:text-white/90">
                        {social.handle}
                      </span>
                    </span>
                    <ArrowUpRight
                      className="ml-auto h-3.5 w-3.5 shrink-0 opacity-0 transition-opacity group-hover:opacity-40"
                      aria-hidden
                    />
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/[0.07] pt-8 sm:flex-row"
        >
          <p className="text-xs text-white/35">
            © {new Date().getFullYear()} Mar de Becas. Todos los derechos reservados.
          </p>
          <p className="flex items-center gap-1.5 text-xs text-white/30">
            Hecho con
            <Heart className="h-3 w-3 fill-brand-pink text-brand-pink" aria-hidden />
            para futuros becarios del mundo
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
