"use client";

import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

export function MissionVision() {
  return (
    <section className="w-full py-24 bg-background">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Misión y Visión
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full mx-auto mb-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-primary/5 rounded-2xl p-8 relative overflow-hidden group hover:bg-primary/10 transition-colors"
          >
            <div className="absolute top-0 left-0 w-2 h-full bg-primary transform origin-left group-hover:scale-y-110 transition-transform" />
            <div className="relative">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">
                Nuestra Misión
              </h3>
              <p className="text-text-secondary leading-relaxed">
                Ser la empresa líder en atención integral a nuestros clientes, inversionistas y
                aliados estratégicos en desarrollos inmobiliarios, para satisfacer y lograr
                confianza total, basados en un equipo experimentado de profesionales en el
                ramo.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-primary/5 rounded-2xl p-8 relative overflow-hidden group hover:bg-primary/10 transition-colors"
          >
            <div className="absolute top-0 left-0 w-2 h-full bg-primary transform origin-left group-hover:scale-y-110 transition-transform" />
            <div className="relative">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <Eye className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">
                Nuestra Visión
              </h3>
              <p className="text-text-secondary leading-relaxed">
                Ser la empresa que logre dar solución integral a las distintas partes de la cadena
                de valor de desarrollos inmobiliarios, inversionistas, clientes y aliados.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 