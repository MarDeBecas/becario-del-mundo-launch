import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Gift, Sparkles } from "lucide-react";

const SorteoPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasClosedPopup = sessionStorage.getItem("sorteo_closed");
    if (!hasClosedPopup) {
      const timer = setTimeout(() => setIsVisible(true), 2500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem("sorteo_closed", "true");
  };


  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2 } }}
          className="fixed bottom-8 right-8 z-[100] max-w-[300px] w-[calc(100vw-4rem)]"
        >
          {/* ✅ CONTENEDOR BLANCO SÓLIDO (Elegante y Limpio) */}
          <div className="relative overflow-hidden rounded-[2rem] bg-white p-6 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.2)] border border-gray-100">
            
            {/* Detalle decorativo lateral en azul marca */}
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-brand-blue" />

            {/* Botón Cerrar Minimalista */}
            <button
              onClick={handleClose}
              className="absolute right-2 top-2 flex h-10 w-10 items-center justify-center rounded-full text-gray-400 transition-all hover:bg-gray-100 hover:text-gray-700 active:scale-95"
            >
              <X className="h-5 w-5" strokeWidth={2.5} />
            </button>

            <div className="relative z-10 flex flex-col gap-3">
              {/* Badge superior */}
              <div className="flex items-center gap-2">
                <Sparkles className="h-3.5 w-3.5 text-brand-blue" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-blue/70">
                  Sorteo Especial
                </span>
              </div>

              {/* Textos con jerarquía limpia */}
              <div className="space-y-1">
                <h4 className="font-display text-lg font-black text-gray-900 leading-tight tracking-tight">
                  ¡Gana una Beca Completa!
                </h4>
                <p className="font-sans text-[11px] text-gray-500 leading-relaxed">
                  Participa ahora en el sorteo de <span className="text-brand-blue font-bold">Becario del Mundo</span> y asegura tu lugar.
                </p>
              </div>

              {/* Botón CTA - Azul con sombra suave */}
              <motion.button
                disabled
                className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-brand-blue/40 py-3.5 text-[11px] font-black uppercase tracking-widest text-white cursor-not-allowed"
              >
                <Gift className="h-4 w-4" />
                Próximamente
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SorteoPopup;