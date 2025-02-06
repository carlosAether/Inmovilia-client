"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, Building } from "lucide-react";

const projects = [
  {
    title: "ALTARIA RESIDENCIAL",
    location: "Zapopan, Jalisco",
    units: "352 viviendas",
    year: "2022",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80",
  },
  {
    title: "ALTARIA RESIDENCIAL",
    location: "Iguala, Guerrero",
    units: "20 viviendas",
    year: "2019",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80",
  },
  {
    title: "SAN MARINO",
    location: "Rosarito, Baja California",
    units: "18 lotes",
    year: "2020",
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=80",
  },
  {
    title: "PLATINUM",
    location: "Tonalá, Jalisco",
    units: "18 unidades",
    year: "2015",
    image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80",
  },
];

export function CompletedProjects() {
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
            Proyectos Concluidos
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full mx-auto mb-6" />
          <p className="text-lg text-text-secondary">
            Conoce nuestros desarrollos inmobiliarios terminados y entregados
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={`${project.title}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-primary/5 rounded-2xl overflow-hidden group hover:bg-primary/10 transition-colors"
            >
              <div className="relative h-64">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                  Concluido {project.year}
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 text-white/90">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{project.location}</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2">
                  <Building className="w-4 h-4 text-primary" />
                  <span className="font-medium">{project.units}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 