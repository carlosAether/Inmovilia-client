"use client";

import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react";

const contactInfo = {
  address: "CALLE BUENOS AIRES 2770 INT 2A, Colonia Providencia, C.P. 44630, Guadalajara, Jalisco",
  phones: ["(33) 3165 9381", "(33) 2152 2219"],
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

const navigationLinks = [
  { name: "En Desarrollo", href: "#projects" },
  { name: "Concluidos", href: "#completed" },
  { name: "Prototipos", href: "#prototypes" },
];

export function Footer() {
  return (
    <footer className="w-full bg-primary/5 pt-16 pb-8" id="contact">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
          {/* Company and Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-text-primary">INMOVILIA</h3>
              <p className="text-text-secondary">
                INFORMACIÓN Y VENTAS
              </p>
            </div>
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

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="font-semibold text-text-primary">Proyectos</h4>
            <ul className="space-y-2">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-text-secondary hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="font-semibold text-text-primary">Contacto</h4>
            <div className="space-y-4 text-text-secondary">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-sm">{contactInfo.address}</span>
              </div>
              <div className="space-y-2">
                {contactInfo.phones.map((phone) => (
                  <div key={phone} className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <span className="text-sm">{phone}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-sm">{contactInfo.email}</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-primary/10 pt-8"
        >
          <div className="text-center text-text-secondary text-sm">
            © {new Date().getFullYear()} INMOVILIA. Todos los derechos reservados.
          </div>
        </motion.div>
      </div>
    </footer>
  );
} 