import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Laptop, Video, ClipboardCheck, Trophy, Users } from "lucide-react";

/* ─── Data ─── */
const METHODS = [
  {
    icon: ClipboardCheck,
    title: "Formación 100% práctica",
    description: "Ejercicios aplicados desde la primera sesión para que avances en tiempo real.",
    number: "01",
    label: "PASO",
  },
  {
    icon: Video,
    title: "Clases virtuales en vivo",
    description: "Interacción directa con expertos que han ganado becas internacionales.",
    number: "02",
    label: "PASO",
  },
  {
    icon: Laptop,
    title: "Actividades semanales",
    description: "Tareas guiadas semana a semana para que tu postulación avance de verdad.",
    number: "03",
    label: "PASO",
  },
  {
    icon: Trophy,
    title: "Casos de éxito",
    description: "Analizamos postulaciones ganadoras reales para que sepas exactamente qué funciona.",
    number: "04",
    label: "PILAR",
  },
  {
    icon: Users,
    title: "Comunidad de apoyo",
    description: "Red activa de aspirantes y ex becarios que ya lograron su sueño.",
    number: "05",
    label: "PILAR",
  },
] as const;

/* ─── Card con tilt 3D ─── */
const MethodCard = ({
  method,
  index,
  isInView,
}: {
  method: (typeof METHODS)[number];
  index: number;
  isInView: boolean;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-60, 60], [6, -6]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-60, 60], [-6, 6]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50, scale: 0.92 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: 0.65,
        delay: 0.1 + index * 0.12,
        type: "spring",
        stiffness: 90,
        damping: 18,
      }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 800 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative group cursor-default"
    >
      {/* Glow con brand.gold */}
      <motion.div
        className="absolute -inset-px rounded-2xl blur-md bg-brand-gold/20"
        animate={{ opacity: hovered ? 1 : 0 }}
      />

      {/* Card body */}
      <div className="relative h-full rounded-2xl border border-white/15 bg-white/5 backdrop-blur-sm p-7 overflow-hidden flex flex-col gap-4">
        {/* Línea top animada con degradado de marca */}
        <motion.div
          className="absolute top-0 left-0 h-0.5 rounded-t-2xl bg-gradient-to-r from-brand-gold to-brand-purple"
          initial={{ width: "0%" }}
          animate={{ width: hovered ? "100%" : "0%" }}
          transition={{ duration: 0.35 }}
        />

        {/* Icono: Usando brand.gold para resaltar */}
        <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 border border-white/10 bg-brand-gold/10">
          <method.icon className="w-7 h-7 text-brand-gold" aria-hidden />
        </div>

        <span className="text-xs font-bold tracking-[0.18em] text-brand-gold uppercase">
          {method.label} {method.number}
        </span>

        <h3 className="font-display font-bold text-lg leading-snug text-white">
          {method.title}
        </h3>

        <p className="text-sm leading-relaxed text-white/80">
          {method.description}
        </p>
      </div>
    </motion.div>
  );
};

/* ─── Section principal ─── */
const MethodologySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const firstRow = METHODS.slice(0, 3);
  const secondRow = METHODS.slice(3);

  return (
    <section
      ref={ref}
      id="metodologia"
      className="relative scroll-mt-20 overflow-hidden py-28 bg-gradient-to-br from-brand-blue via-[#3d2b7a] to-[#1a0b3d]"
    >
      {/* Ruido de fondo sutil */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* Orbes con colores de marca */}
      <motion.div
        className="pointer-events-none absolute -left-32 top-16 h-80 w-80 rounded-full bg-brand-purple/20 blur-[100px]"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute -right-24 bottom-10 h-96 w-96 rounded-full bg-brand-blue/30 blur-[100px]"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="inline-block mb-4 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white/90 backdrop-blur-sm">
            ¿Cómo lo hacemos?
          </span>

          <h2 className="font-display text-4xl md:text-5xl font-black text-white leading-tight mb-4">
            Metodología que funciona
          </h2>

          <p className="text-lg max-w-xl mx-auto leading-relaxed text-brand-pink/80">
            Cada elemento del programa está diseñado para que salgas con una postulación real, no solo con teoría.
          </p>

          <motion.div
            className="mx-auto mt-6 h-1 rounded-full bg-gradient-to-r from-brand-blue via-brand-purple to-brand-gold"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        {/* Grid System */}
        <div className="flex flex-col gap-5">
          {/* Fila superior */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {firstRow.map((method, index) => (
              <MethodCard key={method.number} method={method} index={index} isInView={isInView} />
            ))}
          </div>

          {/* Fila inferior centrada */}
          <div className="grid sm:grid-cols-2 gap-5 lg:max-w-[66%] mx-auto w-full">
            {secondRow.map((method, index) => (
              <MethodCard
                key={method.number}
                method={method}
                index={firstRow.length + index}
                isInView={isInView}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;