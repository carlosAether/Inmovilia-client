"use client";

import { motion } from "framer-motion";
import { Building2, MapPin, Target, Sparkles } from "lucide-react";

const features = [
  {
    icon: Building2,
    title: "Desarrollos Propios",
    description:
      "Creamos desarrollos intraurbanos con infraestructura y servicios existentes, garantizando la mejor calidad de vida para nuestros clientes.",
  },
  {
    icon: MapPin,
    title: "Ubicación Estratégica",
    description:
      "Nuestros desarrollos cuentan con vialidades de fácil acceso y desplazamiento, siendo la ubicación uno de nuestros elementos diferenciadores.",
  },
  {
    icon: Target,
    title: "Respuesta Eficiente",
    description:
      "Nos enfocamos en dar una respuesta eficiente a las necesidades de nuestros clientes a través de desarrollos bien planificados.",
  },
  {
    icon: Sparkles,
    title: "Generación de Oferta",
    description:
      "Desarrollamos proyectos dentro de fraccionamientos y zonas ya desarrolladas, aprovechando la infraestructura existente.",
  },
];

export function RealEstateProposal() {
  return (
    <section className="w-full py-24 bg-primary/5" id="proposal">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary text-sm font-medium mb-2 block">
            Desde el 03 de Junio del 2010
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Nuestra Propuesta Inmobiliaria
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full mx-auto mb-6" />
          <p className="text-lg text-text-secondary">
            INMOVILIA S.A. de C.V. se creó buscando que nuestros desarrollos sean
            Intraurbanos para dar una respuesta eficiente a las necesidades de nuestros
            clientes. Nos enfocamos en dos vertientes principales para ofrecer la mejor
            solución inmobiliaria.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-background rounded-xl p-6 shadow-lg shadow-primary/5 hover:shadow-xl hover:shadow-primary/10 transition-all hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-2">
                {feature.title}
              </h3>
              <p className="text-text-secondary">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 