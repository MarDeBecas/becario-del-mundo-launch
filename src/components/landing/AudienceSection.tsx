import { motion, useInView, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { GraduationCap, Users, Briefcase } from "lucide-react";

const AnimatedNumber = ({ value, prefix = "", suffix = "", isInView }: {
  value: number;
  prefix?: string;
  suffix?: string;
  isInView: boolean;
}) => {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, value, {
      duration: 2.5,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return controls.stop;
  }, [isInView, value]);

  return <span>{prefix}{display}{suffix}</span>;
};

const AudienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const audiences = [
    {
      icon: GraduationCap,
      title: "Estudiantes universitarios",
      description: "Estás cursando tu carrera y quieres dar el salto internacional con una beca de posgrado o intercambio.",
      gradient: "from-[#2059BA] to-[#A07DE2]",
      bg: "bg-[#2059BA]",
      delay: 0.2,
    },
    {
      icon: Users,
      title: "Egresados recientes",
      description: "Ya terminaste tu carrera y buscas continuar tu formación en una universidad del mundo con financiamiento completo.",
      gradient: "from-[#A07DE2] to-[#FFC45F]",
      bg: "bg-[#A07DE2]",
      delay: 0.35,
    },
    {
      icon: Briefcase,
      title: "Profesionales",
      description: "Tienes experiencia laboral y quieres especializarte en el extranjero para llevar tu carrera al siguiente nivel.",
      gradient: "from-[#FFC45F] to-[#2059BA]",
      bg: "bg-[#FFC45F]",
      delay: 0.5,
    },
  ];

  const stats = [
    {
      value: 70,
      prefix: "+",
      suffix: "",
      label: "Becarios acompañados",
      sublabel: "en todo el mundo",
      color: "#2059BA",
      progress: 70,
    },
    {
      value: 6,
      prefix: "",
      suffix: "",
      label: "Sesiones intensivas",
      sublabel: "1 por semana, sábados",
      color: "#A07DE2",
      progress: 60,
    },
    {
      value: 100,
      prefix: "",
      suffix: "%",
      label: "Metodología práctica",
      sublabel: "con ejemplos reales",
      color: "#FFC45F",
      progress: 100,
    },
  ];

  return (
    <section
      ref={ref}
      className="py-28 scroll-mt-20 relative overflow-hidden"
      style={{
        backgroundColor: "#f0ecff",
        backgroundImage: `
          radial-gradient(circle at 10% 20%, rgba(160,125,226,0.2) 0%, transparent 40%),
          radial-gradient(circle at 90% 80%, rgba(32,89,186,0.15) 0%, transparent 40%)
        `,
      }}
    >
      {/* Patrón de puntos */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle, #A07DE2 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      {/* Línea superior */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#2059BA] via-[#A07DE2] to-[#FFC45F]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Layout principal */}
        <div className="flex flex-col lg:flex-row items-start gap-12 mb-20">

          {/* Texto + Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex-1"
          >
            {/* Badge */}
            <motion.span
              initial={{ opacity: 0, y: -20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block bg-white text-[#2059BA] text-sm font-semibold px-5 py-2 rounded-full mb-6 shadow-sm border border-[#A07DE2]/30 tracking-widest uppercase"
            >
              ✦ ¿Es para ti?
            </motion.span>

            {/* Título todo negro */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-sans text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-6"
              >
                ¿A quién va dirigido?
            </motion.h2>

            {/* Frase fluida sin guión */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-600 text-lg leading-relaxed max-w-lg mb-2"
            >
              Si soñaste con estudiar fuera de tu país y no sabes por dónde empezar,{" "}
              <span className="text-[#A07DE2] font-bold">
                este programa es para ti. 
              </span>
            </motion.p>

            {/* Quote */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-400 text-sm italic mb-10"
            >
              "Antes de este programa, no tenía ni idea de cómo aplicar a una beca internacional. Ahora me siento preparado y confiado para lograrlo." - Ana G., Becaria del Mundo 2023
            </motion.p>

            {/* Conector visual */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#A07DE2] to-transparent" />
              <span className="text-sm font-semibold text-[#A07DE2] uppercase tracking-widest px-4">
                ✦ Este programa incluye ✦
              </span>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#A07DE2] to-transparent" />
            </motion.div>

            {/* Cards audiencia */}
            <div className="grid md:grid-cols-3 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.15, ease: "easeOut" }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  {/* Número animado */}
                  <p className="text-4xl font-black mb-1" style={{ color: stat.color }}>
                    <AnimatedNumber
                      value={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                      isInView={isInView}
                    />
                  </p>

                  <p className="text-gray-800 text-xs font-bold leading-tight mb-1">
                    {stat.label}
                  </p>
                  <p className="text-gray-400 text-xs mb-3">
                    {stat.sublabel}
                  </p>

                  {/* Barra de progreso */}
                  <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${stat.progress}%` } : {}}
                      transition={{ duration: 2, delay: 0.6 + i * 0.15, ease: "easeOut" }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: stat.color }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Lechuza con animaciones */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 50 }}
            animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{
              duration: 0.8,
              ease: [0.175, 0.885, 0.32, 1.275], // rebote
              delay: 0.3,
            }}
            className="flex-shrink-0 relative lg:sticky lg:top-10"
          >
            {/* Halo pulsante */}
            <motion.div
              className="absolute inset-0 bg-[#A07DE2] opacity-20 blur-3xl rounded-full"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Lechuza flotante + hover giro */}
            <motion.img
              src="/images/lechuza-rompecabezas.png"
              alt="Mascota Mar de Becas"
              className="w-72 h-72 object-contain relative z-10 drop-shadow-2xl cursor-pointer"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{
                rotate: [0, -8, 8, -8, 0],
                transition: { duration: 0.5 },
              }}
            />
          </motion.div>
        </div>

        {/* Cards audiencia */}
        <div className="grid md:grid-cols-3 gap-6">
          {audiences.map((audience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: audience.delay, ease: "easeOut" }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="relative group bg-white rounded-3xl p-8 overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Gradiente hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${audience.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl`} />

              {/* Icono con hover scale */}
              <div className={`w-16 h-16 rounded-2xl ${audience.bg} flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                <audience.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="font-sans text-xl font-bold text-gray-900 mb-3">
                {audience.title}
              </h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                {audience.description}
              </p>

              {/* Línea inferior animada */}
              <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${audience.gradient} w-0 group-hover:w-full transition-all duration-500 rounded-b-3xl`} />
            </motion.div>
          ))}
        </div>

      </div>

      {/* Línea inferior */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#FFC45F] via-[#A07DE2] to-[#2059BA]" />
    </section>
  );
};

export default AudienceSection;