import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="inscribete"
      className="py-20 bg-white scroll-mt-20 relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-6">

        {/* Card principal */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #2059BA 0%, #A07DE2 60%, #FFC45F 100%)",
            minHeight: "320px",
          }}
        >
          {/* Círculos decorativos de fondo */}
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-white opacity-5 translate-x-1/4 -translate-y-1/4" />
          <div className="absolute bottom-0 right-20 w-48 h-48 rounded-full bg-white opacity-5 translate-y-1/4" />
          <div className="absolute top-1/2 right-32 w-32 h-32 rounded-full bg-white opacity-5 -translate-y-1/2" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 p-10 lg:p-14">

            {/* Texto + botón izquierda */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex-1"
            >
              {/* Badge */}
              <span className="inline-block bg-white/15 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-5 border border-white/20 tracking-widest uppercase">
                 Nueva edición disponible
              </span>

              <h2 className="font-sans text-4xl md:text-5xl font-black text-white leading-tight mb-4">
                ¿Listo para conseguir
                <br />
                <span className="text-[#FFC45F]">
                  tu beca internacional?
                </span>
              </h2>

              <p className="text-white/80 text-base leading-relaxed mb-8 max-w-md">
                Únete a Becario del Mundo y transforma tu perfil en 6 sesiones intensivas con mentora experta y ex-becarios ganadores.
              </p>

              {/* Botón CTA */}
              <motion.a
                href="https://forms.gle/7HnCBj5sxFTy3Rbt6"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 bg-white text-[#2059BA] font-black text-base px-8 py-4 rounded-full shadow-xl hover:shadow-white/20 transition-all duration-300"
              >
                👉 QUIERO SER BECARIO DEL MUNDO
              </motion.a>

              <p className="text-white/50 text-sm mt-4">
                 Sin compromisos · Cupos limitados
              </p>
            </motion.div>

            {/* Lechuza derecha */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: 15 }}
              animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.175, 0.885, 0.32, 1.275], delay: 0.3 }}
              className="flex-shrink-0 relative hidden lg:block"
            >
              <div className="absolute inset-0 bg-white opacity-10 blur-3xl rounded-full scale-75" />
              <motion.img
                src="/images/lechuza-corazon.png"
                alt="Mascota Mar de Becas"
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