import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Calendar,
  CalendarDays,
  ChevronRight,
  Clock,
  Flame,
  Menu,
  Monitor,
  Sparkles,
} from "lucide-react";

const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSe8GQSGC9qJ5B5VVV2RzBPm7QiDuKQMb5wKnROtTzc9a0okOA/viewform";

const navItems = [
  { label: "¿Para quién?", href: "#audiencia"  },
  { label: "Objetivos",    href: "#objetivos"  },
  { label: "Metodología",  href: "#metodologia"},
  { label: "Programa",     href: "#modulos"    },
  { label: "Equipo",       href: "#equipo"     },
  { label: "Testimonios",  href: "#testimonios"},
  { label: "Precio",       href: "#precio"     },
] as const;

const tabletNav = navItems.filter(({ href }) =>
  ["#modulos", "#equipo", "#testimonios", "#precio"].includes(href)
);

const pills = [
  { icon: Calendar,     text: "6 semanas"                      },
  { icon: Monitor,      text: "Virtual en vivo"                 },
  { icon: Clock,        text: "Sábados 9:00 – 10:30 AM (Perú)" },
  { icon: CalendarDays, text: "Inicio: 14 de Junio"             },
];

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.07 * i, duration: 0.44, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

/** Navega con scroll suave descontando la altura del navbar fijo */
const NAV_H = 72; // 4.5rem a 16px/rem

const smoothScrollTo = (href: string, closeMenu?: () => void) => {
  if (closeMenu) closeMenu();
  const delay = closeMenu ? 320 : 0;
  setTimeout(() => {
    const el = document.querySelector(href);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - NAV_H - 8;
    window.scrollTo({ top, behavior: "smooth" });
  }, delay);
};

// ─────────────────────────────────────────────────────────────
const HeroSection = () => {
  const [menuOpen, setMenuOpen]   = useState(false);
  const [scrolled, setScrolled]   = useState(false);
  const close = () => setMenuOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ════════════════════════════════════════
          NAVBAR FIJO
          · Transparente en el hero
          · Glassmorphism al hacer scroll
          ════════════════════════════════════════ */}
      <header
        className="fixed left-0 right-0 top-0 z-50 transition-all duration-300"
        style={
          scrolled
            ? {
                background: "rgba(18, 36, 90, 0.88)",
                backdropFilter: "blur(14px)",
                WebkitBackdropFilter: "blur(14px)",
                boxShadow: "0 2px 24px rgba(0,0,0,0.28)",
              }
            : { background: "transparent" }
        }
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-[4.5rem] lg:px-8">

          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="shrink-0 font-display text-base font-bold text-white lg:text-lg"
          >
            Mar de Becas
          </a>

          {/* Desktop lg+: 7 secciones */}
          <nav className="hidden flex-1 items-center justify-center lg:flex" aria-label="Nav principal">
            {navItems.map(({ label, href }, i) => (
              <span key={href} className="flex items-center">
                {i > 0 && (
                  <span className="select-none px-1 text-[9px] text-white/30" aria-hidden>·</span>
                )}
                <a
                  href={href}
                  onClick={(e) => { e.preventDefault(); smoothScrollTo(href); }}
                  className="whitespace-nowrap rounded-md px-2.5 py-2 text-[13px] font-medium text-white transition-colors duration-200 hover:text-[#FFC45F] xl:px-3 xl:text-sm"
                >
                  {label}
                </a>
              </span>
            ))}
          </nav>

          {/* Tablet md–lg: 4 secciones */}
          <nav className="hidden flex-1 items-center justify-center md:flex lg:hidden" aria-label="Nav tablet">
            {tabletNav.map(({ label, href }, i) => (
              <span key={href} className="flex items-center">
                {i > 0 && (
                  <span className="select-none px-1 text-[9px] text-white/30" aria-hidden>·</span>
                )}
                <a
                  href={href}
                  onClick={(e) => { e.preventDefault(); smoothScrollTo(href); }}
                  className="whitespace-nowrap rounded-md px-2.5 py-2 text-[13px] font-medium text-white transition-colors duration-200 hover:text-[#FFC45F]"
                >
                  {label}
                </a>
              </span>
            ))}
          </nav>

          {/* CTA + hamburguesa */}
          <div className="flex shrink-0 items-center gap-2">
            <motion.a
              href={FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300 sm:block"
              style={
                scrolled
                  ? {
                      background: "linear-gradient(135deg,#ffd57e,#FFC45F)",
                      color: "#0f172a",
                      boxShadow: "0 4px 14px rgba(255,196,95,0.45)",
                    }
                  : {
                      background: "rgba(255,255,255,0.10)",
                      border: "1px solid rgba(255,255,255,0.28)",
                      color: "#ffffff",
                    }
              }
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Pre-inscripción
            </motion.a>

            {/* Hamburguesa — mobile */}
            <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-xl border border-white/25 bg-white/10 text-white hover:bg-white/20 md:hidden"
                  aria-label="Abrir menú"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="w-[min(100vw,280px)] border-l border-white/10 bg-[#12245a]"
              >
                <SheetHeader>
                  <SheetTitle className="text-left font-display text-white">Menú</SheetTitle>
                </SheetHeader>

                <nav className="mt-6 flex flex-col gap-0.5" aria-label="Menú móvil">
                  {navItems.map(({ label, href }) => (
                    <button
                      key={href}
                      type="button"
                      onClick={() => smoothScrollTo(href, close)}
                      className="rounded-xl px-4 py-3 text-left text-[15px] font-medium text-white transition-colors hover:bg-white/10 hover:text-[#FFC45F]"
                    >
                      {label}
                    </button>
                  ))}

                  <a
                    href={FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={close}
                    className="mt-5 rounded-full bg-[#FFC45F] px-4 py-3 text-center text-[15px] font-bold text-[#0f172a] shadow-[0_4px_14px_rgba(255,196,95,0.45)] transition-all hover:brightness-105"
                  >
                    Pre-inscripción
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Separador sutil — solo cuando el navbar es transparente */}
        {!scrolled && (
          <div className="h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        )}
      </header>

      {/* ════════════════════════════════════════
          SECCIÓN HERO
          pt-16/pt-[4.5rem] compensa la altura del navbar fijo
          ════════════════════════════════════════ */}
      <section className="relative min-h-[100svh] overflow-hidden pt-16 lg:pt-[4.5rem]">

        {/* Fondo gradiente */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(148deg,#1a3a8a 0%,#2d5cb5 20%,#5048b0 48%,#8060cc 72%,#9f78d8 100%)",
          }}
        />

        {/* Textura cielo muy sutil */}
        <motion.div
          className="pointer-events-none absolute inset-0 bg-cover bg-center mix-blend-overlay"
          style={{ backgroundImage: "url(/images/hero/cielo.jpg)" }}
          animate={{ opacity: [0.07, 0.11, 0.07] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Banderas difuminadas */}
        <div
          className="pointer-events-none absolute right-0 top-0 h-[55%] w-[min(55vw,520px)]"
          style={{
            backgroundImage: "url(/images/hero/banderas.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "62% 20%",
            filter: "saturate(0.65) brightness(0.78) blur(2px)",
            maskImage:
              "linear-gradient(270deg,rgba(0,0,0,.5) 0%,rgba(0,0,0,.28) 42%,transparent 75%)," +
              "linear-gradient(180deg,rgba(0,0,0,.55) 0%,rgba(0,0,0,.3) 52%,transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(270deg,rgba(0,0,0,.5) 0%,rgba(0,0,0,.28) 42%,transparent 75%)," +
              "linear-gradient(180deg,rgba(0,0,0,.55) 0%,rgba(0,0,0,.3) 52%,transparent 100%)",
            maskComposite: "intersect",
            WebkitMaskComposite: "source-in",
          }}
        />

        {/* Velo izquierdo */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(108deg,rgba(26,58,138,.82) 0%,rgba(26,58,138,.5) 40%,transparent 66%)",
          }}
        />

        {/* ── Contenido: texto izq | imagen abs derecha ── */}
        <div className="relative z-10 min-h-[calc(100svh-4.5rem)]">

          {/* Columna texto */}
          <motion.div
            className="relative z-10 flex flex-col justify-center px-4 pb-14 pt-8 sm:px-6 lg:w-[52%] lg:min-h-[calc(100svh-4.5rem)] lg:pb-20 lg:pl-[max(2rem,calc(50vw-40rem+2rem))] lg:pr-4 lg:pt-10"
            initial="hidden"
            animate="show"
          >
            {/* Badge */}
            <motion.div custom={0} variants={fadeUp} className="mb-5 inline-flex w-fit">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/[0.13] px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur-md">
                <Sparkles className="h-3.5 w-3.5 text-[#FFC45F]" aria-hidden />
                Mar de Becas presenta
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              custom={1}
              variants={fadeUp}
              className="font-display text-[clamp(2.8rem,5.5vw,4.8rem)] font-extrabold leading-[1.0] tracking-[-0.025em] text-white"
            >
              <span className="block">BECARIO</span>
              <span
                className="mt-0.5 block"
                style={{
                  background: "linear-gradient(90deg,#FFC45F 0%,#ffd67a 50%,#FFC45F 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  filter: "drop-shadow(0 4px 20px rgba(255,196,95,0.38))",
                }}
              >
                DEL MUNDO
              </span>
            </motion.h1>

            {/* Subtítulo */}
            <motion.p
              custom={2}
              variants={fadeUp}
              className="mt-5 text-lg font-semibold text-white md:text-xl"
            >
              <strong className="font-extrabold">Curso intensivo</strong> de postulación a becas
              internacionales
            </motion.p>

            {/* Descripción */}
            <motion.p
              custom={3}
              variants={fadeUp}
              className="mt-3 max-w-[46ch] text-[15px] leading-relaxed text-white/80 md:text-base"
            >
              Programa práctico diseñado para ayudarte a construir un perfil competitivo y postular
              con éxito a becas internacionales de posgrado.
            </motion.p>

            {/* CTA */}
            <motion.div custom={4} variants={fadeUp} className="mt-8">
              <div className="relative inline-block w-full max-w-[310px]">
                <div
                  className="pointer-events-none absolute -inset-1 rounded-[1.2rem] opacity-45 blur-lg"
                  style={{ background: "linear-gradient(135deg,#FFC45F55,#A07DE240)" }}
                />
                <motion.a
                  href={FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex w-full items-center justify-center gap-3 rounded-2xl border border-[#FFC45F]/30 px-5 py-4 text-base font-bold text-[#0f172a] shadow-[0_12px_36px_-8px_rgba(255,196,95,0.55),inset_0_1px_0_rgba(255,255,255,0.5)] sm:text-lg"
                  style={{ background: "linear-gradient(158deg,#ffd57e 0%,#FFC45F 55%,#f5ab38 100%)" }}
                  whileHover={{
                    scale: 1.025,
                    boxShadow: "0 16px 44px -6px rgba(255,196,95,0.65),inset 0 1px 0 rgba(255,255,255,0.6)",
                  }}
                  whileTap={{ scale: 0.975 }}
                  transition={{ type: "spring", stiffness: 380, damping: 24 }}
                >
                  <Flame className="h-5 w-5 shrink-0" aria-hidden />
                  <span className="leading-tight">Pre-inscripción — Cupos limitados</span>
                  <ChevronRight className="h-5 w-5 shrink-0 opacity-75" aria-hidden />
                </motion.a>
              </div>
              <p className="mt-2.5 text-sm font-medium text-white/70">
                Cupos limitados · Oferta por tiempo limitado
              </p>
            </motion.div>

            {/* Pills */}
            <motion.ul custom={5} variants={fadeUp} className="mt-7 flex flex-wrap gap-2">
              {pills.map(({ icon: Icon, text }, index) => (
                <motion.li
                  key={text}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.06 }}
                  className="flex items-center gap-2 rounded-full border border-white/22 bg-white/[0.1] px-3.5 py-2 text-xs font-medium text-white backdrop-blur-md sm:text-[13px]"
                >
                  <Icon className="h-3.5 w-3.5 shrink-0 text-[#FFC45F]" aria-hidden />
                  {text}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Imagen — absolute desde el 40 %, oculta en mobile */}
          {/*
           * Imagen — absolute, pegada al borde derecho de la página.
           * Empieza en left:46% para dar aire al texto.
           * object-fit:contain + object-position:right bottom hace que
           * el borde derecho de la imagen coincida con el borde derecho
           * del viewport sin recortar ni deformar.
           */}
          <motion.div
            className="pointer-events-none absolute bottom-0 right-0 top-0 hidden overflow-hidden lg:block"
            style={{ left: "46%" }}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            aria-hidden
          >
            {/* Glow morado */}
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-[65%] blur-[80px]"
              style={{
                background:
                  "radial-gradient(ellipse at 60% 95%,rgba(160,125,226,.52) 0%,rgba(32,89,186,.25) 52%,transparent 75%)",
              }}
            />
            {/* Halo dorado */}
            <div
              className="pointer-events-none absolute bottom-[3%] right-[15%] h-[30%] w-[45%] blur-[56px]"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 60%,rgba(255,196,95,.20) 0%,transparent 70%)",
              }}
            />

            <img
              src="/images/hero/estudiants.png"
              alt="Estudiantes colaborando — Becario del Mundo"
              className="absolute bottom-0 right-0 select-none"
              style={{
                /*
                 * La imagen se ancla al borde derecho e inferior del contenedor.
                 * height auto + width 100%: llena el ancho del contenedor (54 % del viewport)
                 * manteniendo la proporción. Así el borde derecho de la imagen
                 * coincide exactamente con el borde derecho de la página.
                 */
                width: "100%",
                height: "auto",
                maxHeight: "min(90vh, 680px)",
                objectFit: "contain",
                objectPosition: "right bottom",
                /* Fade izquierdo para fundir con el texto; derecho sin fade */
                maskImage:
                  "linear-gradient(90deg,transparent 0%,black 18%,black 100%)," +
                  "linear-gradient(180deg,transparent 0%,black 6%,black 100%)",
                WebkitMaskImage:
                  "linear-gradient(90deg,transparent 0%,black 18%,black 100%)," +
                  "linear-gradient(180deg,transparent 0%,black 6%,black 100%)",
                maskComposite: "intersect",
                WebkitMaskComposite: "source-in",
                filter:
                  "drop-shadow(-8px 24px 48px rgba(0,0,0,.38)) drop-shadow(0 0 32px rgba(160,125,226,.30))",
              }}
              width={900}
              height={700}
              loading="eager"
              decoding="async"
            />
          </motion.div>
        </div>

        {/* Scroll hint — solo desktop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="absolute bottom-5 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-1.5 lg:flex"
        >
          <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-white/30">
            Descubre más
          </span>
          <div className="flex h-8 w-5 justify-center rounded-full border border-white/15 pt-1.5">
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="h-1 w-1 rounded-full bg-[#FFC45F]"
            />
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default HeroSection;
