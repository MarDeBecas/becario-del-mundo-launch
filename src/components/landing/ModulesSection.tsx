import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const ModulesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [flipped, setFlipped] = useState<number | null>(null);

  const modules = [
    {
      week: "01",
      title: "Propósito y Visión de Liderazgo",
      tag: "Autoconocimiento",
      description: "Definiremos tu propósito, metas académicas y profesionales mediante un test de fortalezas y el diseño de tu hoja de ruta personal.",
      learnings: [
        "Test de fortalezas personal",
        "Diseño de tu hoja de ruta",
        "Mapeo de sueños y metas",
        "Visión académica y profesional",
      ],
      image: "/images/liderazgo.png",
      accent: "#2059BA", 
    },
    {
      week: "02",
      title: "Panorama Global de Becas",
      tag: "Exploración",
      description: "Primera inmersión profunda en los tipos de becas disponibles, requisitos clave y buscadores especializados para no perder convocatorias.",
      learnings: [
        "Tipos de becas internacionales",
        "Buscadores especializados",
        "Requisitos por programa",
        "Calendario de convocatorias",
      ],
      image: "/images/global.png",
      accent: "#A07DE2",
    },
    {
      week: "03",
      title: "Estrategia de Selección de Becas",
      tag: "Planificación",
      description: "Analizamos el proceso de postulación paso a paso. Saldrás con una lista personalizada de 3 becas que se adaptan a tu perfil.",
      learnings: [
        "Proceso de postulación",
        "3 becas para tu perfil",
        "Estrategia personalizada",
        "Cronograma de aplicación",
      ],
      image: "/images/seleccion.png",
      accent: "#2059BA",
    },
    {
      week: "04",
      title: "Perfil Competitivo y CV Internacional",
      tag: "Construcción",
      description: "Transformamos tu hoja de vida bajo estándares globales, optimizamos tu LinkedIn e incluye panel exclusivo con ex-becarios ganadores.",
      learnings: [
        "CV internacional desde cero",
        "Optimización de LinkedIn",
        "Panel con ex-becarios",
        "Marca personal global",
      ],
      image: "/images/cv.png",
      accent: "#A07DE2",
    },
    {
      week: "05",
      title: "El Arte de la Carta de Motivación",
      tag: "Redacción",
      description: "Aprenderás la estructura de una carta ganadora con narrativa personal auténtica usando metodología STAR y análisis de casos exitosos.",
      learnings: [
        "Metodología STAR aplicada",
        "Estructura ganadora",
        "Casos exitosos reales",
        "Redacción guiada en vivo",
      ],
      image: "/images/letter.png",
      accent: "#2059BA",
    },
    {
      week: "06",
      title: "Pitch Personal y Simulación de Entrevista",
      tag: "Presentación",
      description: "Entrenamiento completo para presentarte ante jurados o comités con simulación de entrevista real y feedback inmediato personalizado.",
      learnings: [
        "Técnicas de pitch personal",
        "Simulación de entrevista real",
        "Feedback inmediato",
        "Comunicación ante comités",
      ],
      image: "/images/Interview.png",
      accent: "#A07DE2",
    },
  ];

  return (
    <section
      ref={ref}
      id="modulos"
      className="relative scroll-mt-20 overflow-hidden py-28 bg-gradient-to-br from-brand-blue via-[#3d2b7a] to-[#1a0b3d]"
    >
      {/* 1. Ruido de fondo (IDÉNTICO a Metodología) */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* 2. Orbes decorativos (Mismos colores de marca que Metodología) */}
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

      <div className="relative z-10 mx-auto px-6" style={{ maxWidth: "1380px" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block mb-4 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white/90 backdrop-blur-sm">
             Ruta de Formación
          </span>
          <h2 className="font-display text-5xl md:text-6xl font-black text-white leading-tight mb-5">
            6 Sesiones para tu Éxito
          </h2>
          <p className="text-brand-pink/80 text-lg max-w-2xl mx-auto leading-relaxed font-sans">
            Metodología 100% práctica <span className="text-brand-gold mx-1">•</span> 1 sesión/semana <span className="text-brand-gold mx-1">•</span> Domingos 3:00 PM (hora Perú/Colombia)
          </p>

          <motion.div
            className="mx-auto mt-8 h-1 rounded-full bg-gradient-to-r from-brand-blue via-brand-purple to-brand-gold"
            initial={{ width: 0 }}
            animate={isInView ? { width: 120 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => {
            const isFlipped = flipped === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className="relative cursor-pointer group/card h-[320px]"
                style={{ perspective: "1500px" }}
                onClick={() => setFlipped(isFlipped ? null : index)}
              >
                <motion.div
                  className="relative w-full h-full"
                  animate={{ rotateX: isFlipped ? 180 : 0 }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                  style={{ transformStyle: "preserve-3d" }}
                >

                  {/* ══ FRENTE ══ */}
                  <div
                    className="absolute inset-0 rounded-2xl overflow-hidden flex flex-row items-center bg-white shadow-xl group-hover/card:shadow-brand-gold/10 transition-all duration-300"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    {/* Ilustración izquierda */}
                    <div
                      className="w-32 h-full flex items-center justify-center flex-shrink-0 relative overflow-hidden"
                      style={{ backgroundColor: `${module.accent}15` }}
                    >
                      <span
                        className="absolute text-8xl font-black opacity-10 select-none"
                        style={{ color: module.accent, bottom: '-10px', right: '-10px' }}
                      >
                        {module.week}
                      </span>
                      <img
                        src={module.image}
                        alt={`Sesión ${module.week}`}
                        className="w-20 h-20 object-contain relative z-10 drop-shadow-md"
                      />
                    </div>

                    {/* Contenido derecha */}
                    <div className="flex-1 px-6 py-5 pr-4 flex flex-col h-full justify-center">
                      <div className="flex items-center gap-2 mb-2.5">
                        <span className="text-[10px] font-black uppercase tracking-widest text-brand-blue">
                          Sesión {module.week}
                        </span>
                        <span
                          className="text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider"
                          style={{
                            backgroundColor: `${module.accent}20`,
                            color: "#1a1a2e",
                          }}
                        >
                          {module.tag}
                        </span>
                      </div>
                      <h3 className="font-display text-base font-extrabold text-gray-900 leading-snug mb-2.5">
                        {module.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 font-sans">
                        {module.description}
                      </p>
                    </div>

                    {/* Botón circular */}
                    <div className="pr-4 flex-shrink-0">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center bg-brand-blue shadow-md group-hover/card:scale-110 transition-transform">
                        <span className="text-white font-black text-sm">→</span>
                      </div>
                    </div>
                  </div>

                  {/* ══ REVERSO ══ */}
                  <div
                    className="absolute inset-0 rounded-2xl overflow-hidden flex flex-row items-center p-7"
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateX(180deg)",
                      backgroundColor: module.accent,
                    }}
                  >
                    <div className="flex-1">
                      <p className="text-white/70 text-[10px] uppercase tracking-widest font-bold mb-4">
                        Objetivos de Aprendizaje ✦
                      </p>
                      <div className="grid grid-cols-1 gap-y-3">
                        {module.learnings.map((item, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={isFlipped ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.3 + i * 0.08 }}
                            className="flex items-center gap-3 text-white text-xs font-sans"
                          >
                            <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-[10px] flex-shrink-0">
                              ✓
                            </span>
                            {item}
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div className="ml-4 flex-shrink-0 self-start">
                      <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/40 transition-colors">
                        <span className="text-white font-black text-xs">✕</span>
                      </div>
                    </div>
                  </div>

                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;