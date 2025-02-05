"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Building2, Store, LineChart, Search, Handshake, Wallet, Home, FileText } from "lucide-react";

const services = [
  {
    name: "EDIFICACIÓN",
    icon: Building2,
  },
  {
    name: "COMERCIALIZACIÓN",
    icon: Store,
  },
  {
    name: "PROYECTOS DE INVERSIÓN",
    icon: LineChart,
  },
  {
    name: "ESTUDIOS DE MERCADO",
    icon: Search,
  },
  {
    name: "ALIANZAS Y COINVERSIONES",
    icon: Handshake,
  },
  {
    name: "FUENTES DE FINANCIAMIENTO",
    icon: Wallet,
  },
  {
    name: "ADMINISTRACIÓN DE INMUEBLES",
    icon: Home,
  },
  {
    name: "TRÁMITES",
    icon: FileText,
  },
];

export function AboutUs() {
  return (
    <section className="w-full py-24 bg-background" id="about">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div className="relative aspect-square rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
              alt="Sobre INMOVILIA"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
          
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                Quiénes Somos
              </h2>
              <div className="h-1 w-20 bg-primary rounded-full mb-6" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <p className="text-lg text-text-secondary">
                Somos un grupo de empresarios profesionales, aliados estratégicamente para apoyar a
                nuestros clientes, en la satisfacción de las necesidades que surgen en los diversos
                servicios de Desarrollo inmobiliario.
              </p>
              <p className="text-lg text-text-secondary">
                Inversiones Inmobiliarias, tales como la compra, venta, renta entre otros. Brindar un
                servicio de excelencia, generando soluciones adecuadas a cada caso concreto, a través
                de la experiencia compartida de todos nuestros colaboradores, así como el trabajo en
                conjunto con nuestras empresas asociadas.
              </p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-text-primary text-center mb-12">
            Nuestros Servicios
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-primary/5 p-6 rounded-xl group hover:bg-primary/10 transition-colors"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-text-primary group-hover:text-primary transition-colors">
                  {service.name}
                </h4>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 