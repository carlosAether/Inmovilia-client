"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const team = [
  {
    name: "Mario Danilo Elizondo Lomelí",
    role: "Director General",
    description: "Ingeniero Mecánico-Electricista, con más de 25 años de experiencia en el ramo inmobiliario. Ha sido Director Nacional de Operaciones en empresa vivienda con producción anual de 15,000 viviendas, Director Regional de la Zona Metropolitana de Guadalajara para Urbi.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80",
  },
  {
    name: "Octavio Javalera Espinoza",
    role: "Director de Administración y Finanzas",
    description: "Contador Público, Maestría en Administración Financiera, 24 años de experiencia en el sector de construcción e inmobiliario, desempeñando puestos de Contralor de Plaza y Director de Administración y Finanzas.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
  },
  {
    name: "Antonio Cuevas Pichardo",
    role: "Gerente de Construcción",
    description: "Ingeniero Civil con más de 20 años de experiencia como Gerente de Obra con más de 5000 viviendas construidas durante toda su carrera profesional, actualmente como Gerente de Construcción.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
  },
  {
    name: "Sergio Ramírez Aparicio",
    role: "Asesor Legal",
    description: "Licenciado en Derecho con más de 20 años de experiencia, desempeñándose dentro de la iniciativa privada como abogado postulante y representante de la empresa de Dinámica Desarrollos Sustentables SA de CV y actualmente dentro de la iniciativa privada como abogado postulante prestando servicio para diferentes grupos inmobiliarios entre ellos INMOVILIA.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80",
  },
];

export function Team() {
  return (
    <section className="w-full py-24 bg-primary/5" id="team">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Quiénes Integramos INMOVILIA
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full mx-auto mb-6" />
          <p className="text-lg text-text-secondary">
            Un equipo de profesionales con amplia experiencia en el sector inmobiliario
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-text-primary">
                  {member.name}
                </h3>
                <p className="text-primary font-medium">{member.role}</p>
                <p className="text-sm text-text-secondary line-clamp-4 group-hover:line-clamp-none transition-all">
                  {member.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 