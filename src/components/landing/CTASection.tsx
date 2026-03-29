import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // ✅ Enlace de WhatsApp con el número de tu captura y mensaje correcto
  const WS_INSCRIPCION = "https://wa.me/51979719879?text=Hola!%20Deseo%20inscribirme%20en%20el%20programa%20Becario%20del%20Mundo%20🌍";

  return (
    <section
      ref={ref}
      id="inscribete"
      className="py-20 bg-white scroll-mt-20 relative overflow-hidden"
    >
      {/* 🟢 Cambiamos a max-w-7xl para que sea "Largo" horizontalmente */}
      <div className="max-w-7xl mx-auto px-6">

        {/* Card principal */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl shadow-brand-blue/20"
          style={{
            // Gradiente usando tus variables de marca para evitar hardcodeo
            background: "linear-gradient(135deg, #2059BA 0%, #3d2b7a 55%, #1a0b3d 100%)",
            minHeight: "340px",
          }}
        >
          {/* Círculos decorativos originales */}
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-white opacity-5 translate-x-1/4 -translate-y-1/4" />
          <div className="absolute bottom-0 right-20 w-48 h-48 rounded-full bg-white opacity-5 translate-y-1/4" />
          <div className="absolute top-1/2 right-32 w-32 h-32 rounded-full bg-white opacity-5 -translate-y-1/2" />

          {/* Contenido - Flex row para el efecto alargado */}
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 p-10 lg:p-14 min-h-[340px]">

            {/* Texto + botón izquierda */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex-1 flex flex-col justify-center"
            >
              {/* Badge original */}
              <span
                className="inline-block text-xs font-black px-4 py-2 rounded-full mb-5 tracking-widest uppercase w-fit border border-white/50 bg-white/20 text-white"
                style={{ textShadow: "0 1px 3px rgba(0,0,0,0.4)" }}
              >
                  Nueva edición disponible
              </span>

              {/* Título original con tipografía font-display */}
              <h2
                className="font-display text-4xl md:text-5xl font-black text-white leading-tight mb-4"
                style={{ textShadow: "0 2px 8px rgba(0,0,0,0.3)" }}
              >
                ¿Listo para conseguir
                <br />
                <span
                  className="text-brand-gold"
                  style={{ textShadow: "0 2px 12px rgba(0,0,0,0.4)" }}
                >
                  tu beca internacional?
                </span>
              </h2>

              <p
                className="text-white text-base leading-relaxed mb-8 max-w-md font-sans"
                style={{ textShadow: "0 1px 4px rgba(0,0,0,0.3)" }}
              >
                Únete a Becario del Mundo y transforma tu perfil en 6 sesiones intensivas con mentora experta y ex-becarios ganadores.
              </p>

              {/* Botón CTA original pero con el link de WhatsApp */}
              <motion.a
                href={WS_INSCRIPCION}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 bg-white text-brand-blue font-black text-sm px-8 py-4 rounded-full shadow-xl hover:shadow-white/30 transition-all duration-300 w-fit uppercase tracking-widest"
              >
                <span>👉</span>
                <span>Quiero ser Becario del Mundo</span>
              </motion.a>

              {/* Microcopy original */}
              <p
                className="text-white text-xs mt-4 font-bold uppercase tracking-widest opacity-80"
                style={{ textShadow: "0 1px 4px rgba(0,0,0,0.4)" }}
              >
                  Cupos limitados
              </p>
            </motion.div>

            {/* Lechuza derecha original */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: 15 }}
              animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.175, 0.885, 0.32, 1.275], delay: 0.3 }}
              className="flex-shrink-0 relative hidden lg:flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-white opacity-10 blur-3xl rounded-full scale-75" />
              <motion.img
                src="/images/lechuza-corazon.png"
                alt="Mascota Becario del Mundo"
                className="w-64 h-64 object-contain relative z-10 drop-shadow-2xl"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;