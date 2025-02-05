"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send } from "lucide-react";

export function Contact() {
  return (
    <section className="w-full py-24 bg-background" id="contact">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Contáctanos
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full mx-auto mb-6" />
          <p className="text-lg text-text-secondary">
            Estamos aquí para responder tus preguntas y ayudarte a encontrar tu hogar ideal
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-2">Dirección</h3>
                <p className="text-text-secondary">
                  CALLE BUENOS AIRES 2770 INT 2A, Colonia Providencia, C.P. 44630, Guadalajara, Jalisco
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-2">Teléfonos</h3>
                <p className="text-text-secondary">(33) 3165 9381</p>
                <p className="text-text-secondary">(33) 33 2152 2219</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-2">Correo Electrónico</h3>
                <p className="text-text-secondary">contacto@inmovilia.com</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-primary/5 rounded-2xl p-8"
          >
            <form className="space-y-6">
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Nombre completo"
                  className="w-full px-4 py-3 rounded-lg bg-background border border-primary/20 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                />
                <input
                  type="email"
                  placeholder="Correo electrónico"
                  className="w-full px-4 py-3 rounded-lg bg-background border border-primary/20 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                />
                <input
                  type="tel"
                  placeholder="Teléfono"
                  className="w-full px-4 py-3 rounded-lg bg-background border border-primary/20 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                />
                <textarea
                  placeholder="Mensaje"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-primary/20 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white rounded-lg px-6 py-3 flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors"
              >
                <Send className="w-5 h-5" />
                Enviar Mensaje
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 