"use client";

import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, MapPin, Phone } from "lucide-react";

const contactInfo = {
  address: "CALLE BUENOS AIRES 2770 INT 2A, Colonia Providencia, C.P. 44630, Guadalajara, Jalisco",
  phones: ["(33) 3165 9381", "(33) 33 2152 2219"],
  email: "contacto@inmovilia.com",
};

const socialLinks = [
  {
    name: "Facebook",
    icon: Facebook,
    url: "https://facebook.com",
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://instagram.com",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com",
  },
];

const footerLinks = [
  {
    title: "Empresa",
    links: ["Sobre Nosotros", "Equipo", "Misión y Visión"],
  },
  {
    title: "Proyectos",
    links: ["En Desarrollo", "Completados", "Prototipos"],
  },
];

export function Footer() {
  return (
    <footer className="w-full bg-primary/5 pt-16 pb-8" id="contact">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-text-primary">INMOVILIA</h3>
            <p className="text-text-secondary">
              INFORMACIÓN Y VENTAS
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {footerLinks.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h4 className="font-semibold text-text-primary">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-text-secondary hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-primary/10 pt-8 mt-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-text-secondary text-sm">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
              <span>{contactInfo.address}</span>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <span>{contactInfo.phones[0]}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <span>{contactInfo.phones[1]}</span>
              </div>
            </div>
          </div>
          <div className="text-center text-text-secondary text-sm mt-8">
            © {new Date().getFullYear()} INMOVILIA. Todos los derechos reservados.
          </div>
        </motion.div>
      </div>
    </footer>
  );
} 