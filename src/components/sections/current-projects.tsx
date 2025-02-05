"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import Image from "next/image";
import { MapPin, Calendar, Home, DollarSign } from "lucide-react";
import { MouseEvent } from "react";

const projects = [
  {
    title: "Porto Residencial",
    location: "Nuevo Vallarta",
    date: "2024",
    units: "43 unidades",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80",
    progress: 75,
    value: "139 MDP",
    priceAvg: "3.3 MDP",
    link: "https://www.armada.com.mx/sitio/clientes/porto-360/",
  },
];

export function CurrentProjects() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function onMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <section className="w-full py-24 bg-primary/5" id="projects">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Proyectos en Proceso
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full mx-auto mb-6" />
          <p className="text-lg text-text-secondary">
            Descubre nuestros desarrollos inmobiliarios en construcción
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              onMouseMove={onMouseMove}
              className="group relative bg-background rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
            >
              {/* Enhanced spotlight animation */}
              <motion.div
                className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300"
                style={{
                  background: useMotionTemplate`
                    radial-gradient(
                      450px circle at ${mouseX}px ${mouseY}px,
                      rgba(var(--primary), 0.15),
                      transparent 80%
                    )
                  `,
                }}
              />

              {/* 3D hover effect overlay */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300"
                style={{
                  background: useMotionTemplate`
                    linear-gradient(
                      to right,
                      rgba(var(--primary), 0.05) ${mouseX}px,
                      transparent
                    )
                  `,
                }}
              />

              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-full min-h-[300px] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="absolute bottom-4 left-4 right-4"
                  >
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 text-white/90">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{project.location}</span>
                    </div>
                  </motion.div>
                </div>
                <div className="p-6 lg:p-8 space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      viewport={{ once: true }}
                      className="space-y-1"
                    >
                      <p className="text-sm text-text-secondary">Unidades</p>
                      <div className="flex items-center gap-2">
                        <Home className="w-4 h-4 text-primary" />
                        <span className="font-medium">{project.units}</span>
                      </div>
                    </motion.div>
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      viewport={{ once: true }}
                      className="space-y-1"
                    >
                      <p className="text-sm text-text-secondary">Volumen de Negocio</p>
                      <div className="flex items-center gap-2">
                        <DollarSign className="w-4 h-4 text-primary" />
                        <span className="font-medium">{project.value}</span>
                      </div>
                    </motion.div>
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      viewport={{ once: true }}
                      className="space-y-1"
                    >
                      <p className="text-sm text-text-secondary">Precio Promedio</p>
                      <div className="flex items-center gap-2">
                        <DollarSign className="w-4 h-4 text-primary" />
                        <span className="font-medium">{project.priceAvg}</span>
                      </div>
                    </motion.div>
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      viewport={{ once: true }}
                      className="space-y-1"
                    >
                      <p className="text-sm text-text-secondary">Año</p>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span className="font-medium">{project.date}</span>
                      </div>
                    </motion.div>
                  </div>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between text-sm">
                      <span className="text-text-secondary">Progreso</span>
                      <span className="text-primary font-medium">
                        {project.progress}%
                      </span>
                    </div>
                    <div className="w-full h-2 bg-primary/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${project.progress}%` }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="h-full bg-primary rounded-full"
                      />
                    </div>
                  </motion.div>

                  <motion.a
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full h-12 px-6 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30"
                  >
                    Ver Proyecto
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 