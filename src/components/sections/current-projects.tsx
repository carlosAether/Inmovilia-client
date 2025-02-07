"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, Building, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "PORTO RESIDENCIAL",
    location: "Nuevo Vallarta",
    units: "43 unidades",
    year: "2024",
    image: "/Porto.jpg",
    link: "https://www.armada.com.mx/sitio/clientes/porto-360/",
  },
];

export function CurrentProjects() {
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

        <div className="max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative bg-background rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500"
            >
              <div className="relative aspect-[21/9] w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
              </div>

              <div className="absolute top-6 right-6">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-primary hover:bg-white transition-colors shadow-lg"
                >
                  <span className="font-medium">Ver Proyecto</span>
                  <ArrowUpRight className="w-4 h-4" />
                </motion.a>
              </div>

              <div className="absolute bottom-0 inset-x-0 p-8">
                <div className="flex flex-col gap-4">
                  <div className="space-y-2">
                    <h3 className="text-3xl font-bold text-white group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-6">
                      <div className="flex items-center gap-2 text-white/90">
                        <MapPin className="w-5 h-5" />
                        <span className="text-lg">{project.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-white/90">
                        <Building className="w-5 h-5" />
                        <span className="text-lg">{project.units}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 