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
      image: "/images/lechuza-sonriendo.png",
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
      image: "/images/lechuza-rompecabezas.png",
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
      image: "/images/lechuza-volando.png",
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
      image: "/images/lechuza-laptop-graduado.png",
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
      image: "/images/lechuza-corazon.png",
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
      image: "/images/lechuza-laptop-graduado.png",
      accent: "#A07DE2",
    },
  ];

  return (
    <section
      ref={ref}
      id="modulos"
      className="py-28 scroll-mt-20 relative overflow-hidden bg-gradient-to-br from-primary via-purple-dark to-foreground"
    >
      {/* Círculos decorativos */}
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-[#A07DE2] opacity-10 blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-[#2059BA] opacity-10 blur-3xl" />

      <div className="mx-auto px-6 relative z-10" style={{ maxWidth: "1380px" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <span className="inline-block bg-white/10 text-white text-sm font-semibold px-5 py-2 rounded-full mb-4 border border-white/20 tracking-widest uppercase">
             Ruta de Formación
          </span>
          <h2 className="font-sans text-5xl md:text-6xl font-black text-white leading-tight mb-4">
            6 Sesiones para tu Éxito
          </h2>
          <p className="text-white/60 text-lg">
            Metodología 100% práctica · 1 sesión/semana · Sábados 9:00 AM (hora Perú)
          </p>
        </motion.div>

        {/* Cards grid 3x2 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {modules.map((module, index) => {
            const isFlipped = flipped === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                className="relative cursor-pointer group/card"
                style={{ perspective: "1200px", height: "320px" }}
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
                    className="absolute inset-0 rounded-2xl overflow-hidden flex flex-row items-center hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 bg-white"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    {/* Ilustración izquierda */}
                    <div
                      className="w-32 h-full flex items-center justify-center flex-shrink-0 relative overflow-hidden"
                      style={{ backgroundColor: `${module.accent}15` }}
                    >
                      {/* Número de fondo más visible */}
                      <span
                        className="absolute text-7xl font-black opacity-10 select-none"
                        style={{ color: module.accent }}
                      >
                        {module.week}
                      </span>
                      {/* Lechuza */}
                      <img
                        src={module.image}
                        alt={`Sesión ${module.week}`}
                        className="w-20 h-20 object-contain relative z-10 drop-shadow-md"
                      />
                    </div>

                    {/* Contenido derecha — más padding */}
                    <div className="flex-1 px-5 py-5 pr-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span
                          className="text-xs font-black uppercase tracking-widest"
                          style={{ color: "#1a1a2e" }}
                        >
                          Sesión {module.week}
                        </span>
                        <span
                          className="text-xs px-2 py-0.5 rounded-full font-bold"
                          style={{
                            backgroundColor: `${module.accent}25`,
                            color: "#1a1a2e",
                          }}
                        >
                          {module.tag}
                        </span>
                      </div>
                      <h3 className="font-sans text-base font-black text-gray-900 leading-tight mb-2">
                        {module.title}
                      </h3>
                      {/* Descripción completa sin truncar */}
                      <p className="text-gray-500 text-xs leading-relaxed">
                        {module.description}
                      </p>
                    </div>

                    {/* Botón circular — mismo color siempre */}
                    <div className="pr-4 flex-shrink-0">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center shadow-md group-hover/card:translate-x-1 transition-transform duration-300"
                        style={{ backgroundColor: "#2059BA" }}
                      >
                        <span className="text-white font-black text-sm">→</span>
                      </div>
                    </div>
                  </div>

                  {/* ══ REVERSO ══ */}
                  <div
                    className="absolute inset-0 rounded-2xl overflow-hidden flex flex-row items-center"
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateX(180deg)",
                      backgroundColor: module.accent,
                    }}
                  >
                    {/* Número izquierda */}
                    <div className="w-32 h-full flex items-center justify-center flex-shrink-0 relative overflow-hidden">
                      <span className="text-6xl font-black text-white/20 select-none">
                        {module.week}
                      </span>
                    </div>

                    {/* Lista derecha */}
                    <div className="flex-1 px-6 py-4">
                      <p className="text-white/70 text-xs uppercase tracking-widest font-bold mb-3">
                        Lo que aprenderás ✦
                      </p>
                      <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                        {module.learnings.map((item, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0 }}
                            animate={isFlipped ? { opacity: 1 } : {}}
                            transition={{ delay: 0.3 + i * 0.08 }}
                            className="flex items-center gap-1.5 text-white text-xs"
                          >
                            <span className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center text-white text-xs flex-shrink-0">
                              ✓
                            </span>
                            {item}
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Botón cerrar */}
                    <div className="pr-4 flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors duration-300">
                        <span className="text-white font-black text-sm">✕</span>
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