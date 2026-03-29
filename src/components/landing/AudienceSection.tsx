import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { GraduationCap, Users, Briefcase, School, BookOpen, ChevronLeft, ChevronRight } from "lucide-react";

/* ─── Data ─── */
const AUDIENCES = [
  { icon: School, title: "Estudiantes de 5to secundaria", description: "Estás en tu último año de colegio y buscas opciones de becas de pregrado para empezar tu carrera con el pie derecho.", bg: "bg-[#2059BA]", delay: 0.1 },
  { icon: BookOpen, title: "Recién egresados de secundaria", description: "Terminaste el colegio recientemente y quieres explorar oportunidades de estudio financiadas en el extranjero.", bg: "bg-[#3B82F6]", delay: 0.2 },
  { icon: GraduationCap, title: "Estudiantes universitarios", description: "Estás cursando tu carrera y quieres dar el salto internacional con una beca de posgrado o intercambio.", bg: "bg-[#A07DE2]", delay: 0.3 },
  { icon: Users, title: "Egresados recientes", description: "Ya terminaste tu carrera y buscas continuar tu formación en una universidad con financiamiento completo.", bg: "bg-[#8B5CF6]", delay: 0.4 },
  { icon: Briefcase, title: "Profesionales", description: "Tienes experiencia laboral y quieres especializarte en el extranjero para llevar tu carrera al siguiente nivel.", bg: "bg-[#FFC45F]", delay: 0.5 },
] as const;

const TESTIMONIALS = [
  { name: "Meli R.", label: "Becaria del Mundo 2025", text: "Este programa me ayudó a entender más sobre la postulación, proceso en las becas, tener más claridad sobre mi proyecto personal y autoconocerme." },
  { name: "Brenda R.", label: "Becaria del Mundo 2025", text: "Este curso me ayudó, sobre todo, a creer más en mí y en mi historia. A través del autoconocimiento entendí mejor quién soy, qué quiero y por qué quiero seguir estudiando." },
  { name: "Alondra R.", label: "Becaria del Mundo 2025", text: "El curso me ayudó principalmente a fortalecer mi motivación y confianza para postular al extranjero. Me permitió reconocer que mi trayectoria académica y profesional es competitiva a nivel internacional y que mis objetivos de formación son alcanzables." },
] as const;

const AudienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? TESTIMONIALS.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === TESTIMONIALS.length - 1 ? 0 : c + 1));
  const t = TESTIMONIALS[current];

  return (
    <section ref={ref} id="audiencia" className="py-28 relative overflow-hidden bg-[#f2f0f5]">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* 1. Header (Igual que el original) */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-10">
          <div className="flex-1 w-full text-left">
            <span className="inline-block bg-white text-[#2059BA] text-sm font-semibold px-5 py-2 rounded-full mb-6 shadow-sm border border-[#A07DE2]/30 uppercase tracking-widest">¿Es para ti?</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-4">¿A quién va dirigido?</h2>
            <p className="text-gray-800 text-lg max-w-lg">Si soñaste con estudiar fuera de tu país y no sabes por dónde empezar, <span className="text-[#A07DE2] font-bold">este programa es para ti.</span></p>
          </div>
          <img src="/images/lechuza-rompecabezas.png" alt="Mascota" className="hidden lg:block w-48 h-48 object-contain" />
        </div>

        {/* 2. Cards (Mantenemos las 5 en una fila) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
          {AUDIENCES.map((audience) => (
            <motion.div
              key={audience.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: audience.delay }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col"
            >
              <div className={`w-12 h-12 rounded-xl ${audience.bg} flex items-center justify-center mb-4 text-white shadow-sm`}><audience.icon className="w-6 h-6" /></div>
              <h3 className="text-base font-bold text-gray-900 mb-2 leading-tight">{audience.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{audience.description}</p>
            </motion.div>
          ))}
        </div>

        {/* 3. Banner de Testimonio - ANCHO MEDIO (3 CARDS) Y LETRA FINA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="max-w-4xl mx-auto px-4" // Este ancho alinea el banner con las 3 cards centrales
        >
          <div className="bg-white rounded-2xl px-6 py-5 shadow-lg border-b-4 border-[#A07DE2] relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6"
              >
                {/* Texto a la izquierda - Letra más pequeña y fina */}
                <div className="flex-1">
                  <p className="text-gray-600 text-sm md:text-base italic font-medium leading-snug">
                    "{t.text}"
                  </p>
                </div>

                {/* Perfil y controles - Muy compactos */}
                <div className="flex items-center gap-4 border-l border-gray-100 pl-4 shrink-0">
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <p className="text-[12px] font-bold text-gray-900 leading-none">{t.name}</p>
                      <p className="text-[#A07DE2] text-[9px] font-bold uppercase mt-1 tracking-tight">{t.label}</p>
                      {/* ⭐⭐⭐⭐⭐ EMOJIS DE ESTRELLAS AÑADIDOS AQUÍ ⭐⭐⭐⭐⭐ */}
                      <div className="text-[14px] mb-1.9 leading-none">
                        ⭐⭐⭐⭐⭐
                      </div>
                    </div>
                  </div>
                  
                  {/* Navegación - Botones minimalistas */}
                  <div className="flex gap-1.5">
                    <button onClick={prev} className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
                      <ChevronLeft size={14} className="text-[#A07DE2]" />
                    </button>
                    <button onClick={next} className="w-8 h-8 rounded-full bg-[#A07DE2] flex items-center justify-center hover:bg-[#8B6BCF] shadow-sm transition-all active:scale-95">
                      <ChevronRight size={14} className="text-white" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AudienceSection;