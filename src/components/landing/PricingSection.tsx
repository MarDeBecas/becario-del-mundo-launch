import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Check, Clock, Zap, ChevronDown, MessageCircle } from "lucide-react";

/* ─── Data ─── */
const PRICE_REAL = 300;
const PRICE_PREVENTA = 250;
const DISCOUNT_PCT = Math.round((1 - PRICE_PREVENTA / PRICE_REAL) * 100);
const VIGENCIA = "30 de junio, 2026";

// ✅ Enlaces de WhatsApp diferenciados
const WS_INSCRIPCION = "https://wa.link/xxwhyw";
const WS_DUDAS = "https://wa.link/pcwo01";

const INCLUDES = [
  "6 sesiones en vivo con expertos",
  "Materiales y plantillas descargables",
  "Acceso a comunidad de becarios",
  "Certificado de participación",
  "Lista actualizada de becas",
  "Modelos de ensayos ganadores",
];

const FAQS = [
  {
    q: "¿Las clases quedan grabadas?",
    a: "Sí. Todas las sesiones en vivo de Becario del Mundo quedan grabadas y disponibles en tu acceso durante todo el programa, para que puedas repasar a tu ritmo sin perder nada.",
  },
  {
    q: "¿Necesito experiencia previa?",
    a: "No. El programa está diseñado desde cero. Si nunca has aplicado a una beca internacional, este es el punto de partida perfecto para construir tu perfil.",
  },
  {
    q: "¿Cómo realizo el pago?",
    a: "Al hacer clic en inscribirte, te atenderemos por WhatsApp para proporcionarte los datos de Yape o transferencia bancaria y confirmar tu cupo de inmediato.",
  },
];

/* ─── FAQ Item (Estilo Glassmorphism) ─── */
const FaqItem = ({ item, index }: { item: typeof FAQS[number]; index: number }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 + index * 0.08 }}
      className="rounded-2xl border border-white/10 overflow-hidden bg-white/5 backdrop-blur-sm"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left transition-colors hover:bg-white/5"
      >
        <span className="text-sm font-semibold text-white/90">{item.q}</span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <ChevronDown className="w-4 h-4 text-brand-purple" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 text-sm leading-relaxed text-white/60 font-sans">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

/* ─── Section Principal ─── */
const PricingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="precio"
      className="py-28 scroll-mt-20 relative overflow-hidden bg-gradient-to-br from-brand-blue via-[#3d2b7a] to-[#1a0b3d]"
    >
      {/* Ruido de fondo (Consistencia total) */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      {/* Orbe decorativo central */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-purple/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="inline-block bg-white/10 text-brand-gold text-xs font-bold px-5 py-2 rounded-full mb-6 border border-white/20 tracking-[0.2em] uppercase backdrop-blur-sm"
          >
            Inversión del Programa
          </motion.span>
          <h2 className="font-display text-4xl md:text-5xl font-black text-white leading-tight mb-4">
            Tu camino internacional <br /> empieza <span className="text-brand-gold">aquí</span>
          </h2>
          <p className="text-white/60 text-lg max-w-lg mx-auto leading-relaxed font-sans">
            Únete a <span className="text-brand-pink font-bold">Becario del Mundo</span> y obtén las herramientas para ganar la beca de tus sueños.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start max-w-5xl mx-auto">
          
          {/* ── Card de Precio ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className="w-full lg:w-[420px] relative group"
          >
            {/* Glow de fondo */}
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-gold to-brand-purple rounded-[2rem] blur opacity-20 group-hover:opacity-40 transition duration-500" />
            
            <div className="relative rounded-[2rem] bg-white overflow-hidden shadow-2xl transition-transform duration-500 group-hover:-translate-y-1">
              
              {/* Banner de Preventa */}
              <div className="flex items-center justify-center gap-2 py-3 bg-brand-gold/10 border-b border-brand-gold/20">
                <Zap className="w-3.5 h-3.5 text-brand-gold fill-brand-gold" />
                <span className="text-[10px] font-black tracking-widest uppercase text-brand-gold">
                  Pre-venta activa · {DISCOUNT_PCT}% OFF
                </span>
              </div>

              <div className="p-8">
                <div className="text-center mb-8">
                  <span className="text-gray-300 line-through text-xl font-bold font-sans">S/ {PRICE_REAL}</span>
                  <div className="flex items-center justify-center gap-1">
                    <span className="text-brand-blue font-black text-6xl font-display">S/ {PRICE_PREVENTA}</span>
                  </div>
                  <p className="text-gray-500 text-sm mt-1 font-semibold font-sans">≈ USD 79</p>
                  <p className="text-gray-400 text-[10px] mt-1 uppercase tracking-widest font-black">Pago único · Acceso total</p>
                </div>

                {/* Fecha Límite */}
                <div className="flex items-center justify-center gap-2 py-3 px-4 mb-8 rounded-2xl bg-gray-50 border border-gray-100">
                  <Clock className="w-4 h-4 text-brand-gold" />
                  <p className="text-[11px] font-bold text-gray-600 font-sans">
                    Precio especial hasta el <span className="text-brand-blue">{VIGENCIA}</span>
                  </p>
                </div>

                {/* Lista de beneficios */}
                <ul className="space-y-4 mb-10">
                  {INCLUDES.map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-brand-blue/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-brand-blue stroke-[3px]" />
                      </div>
                      <span className="text-sm font-semibold text-gray-700 font-sans">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Botón Principal Actualizado */}
                <a
                  href={WS_INSCRIPCION}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full py-5 rounded-2xl bg-brand-blue text-white font-black text-lg uppercase tracking-wider hover:bg-brand-blue/90 transition-all shadow-xl shadow-brand-blue/20"
                >
                  <MessageCircle className="w-6 h-6 fill-white/20" />
                  Inscribirme al programa
                </a>
              </div>
            </div>
          </motion.div>

          {/* ── FAQ ── */}
          <div className="flex-1 w-full">
            <h3 className="font-display text-2xl font-black text-white mb-6">Preguntas frecuentes</h3>
            <div className="flex flex-col gap-4">
              {FAQS.map((faq, i) => (
                <FaqItem key={i} item={faq} index={i} />
              ))}
            </div>

            {/* Soporte Directo con mensaje de DUDAS */}
            <div className="mt-8 p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-gold/20 flex items-center justify-center text-xl">
                  👋
                </div>
                <div>
                  <p className="text-white font-bold text-sm">¿Alguna duda específica?</p>
                  <p className="text-white/60 text-xs font-sans">
                    Escríbenos y te respondemos sobre el programa <br />
                    <a 
                      href={WS_DUDAS} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="text-brand-gold font-bold hover:underline transition-all"
                    >
                      Abrir chat de WhatsApp
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PricingSection;