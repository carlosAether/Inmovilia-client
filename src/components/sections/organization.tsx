"use client";

import { motion } from "framer-motion";
import { Users, Building2, Briefcase } from "lucide-react";

const organization = {
  role: "DIRECTOR GENERAL",
  name: "ING. MARIO DANILO ELIZONDO LOMELI",
  icon: Users,
  departments: [
    {
      role: "GESTOR COMERCIAL",
      name: "SERGIO RAMIREZ APARICIO",
      icon: Briefcase,
    },
    {
      role: "ADMINISTRACION Y FINANZAS",
      name: "OCTAVIO JAVALERA ESPINOZA",
      icon: Building2,
    },
    {
      role: "GERENTE DE CONSTRUCCIÓN",
      name: "ANTONIO CUEVAS PICHARDO",
      icon: Building2,
    },
  ],
};

export function Organization() {
  return (
    <section className="w-full py-24 bg-primary/5">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Organigrama
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full mx-auto mb-6" />
          <p className="text-lg text-text-secondary">
            Estructura organizacional diseñada para la excelencia
          </p>
        </motion.div>

        {/* Desktop Version - Hidden on mobile */}
        <div className="relative max-w-5xl mx-auto hidden md:block">
          {/* Director General */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div className="group bg-background rounded-xl p-8 hover:bg-primary/5 transition-all duration-300 shadow-lg hover:shadow-xl w-96 relative before:absolute before:inset-0 before:rounded-xl before:border-2 before:border-primary/20 before:hover:border-primary/40 before:transition-colors">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <organization.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-primary">
                    {organization.role}
                  </h3>
                </div>
              </div>
              <p className="text-text-secondary pl-16">
                {organization.name}
              </p>
            </div>

            {/* Main Vertical Line */}
            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: "80px" }}
              transition={{ duration: 0.3, delay: 0.4 }}
              viewport={{ once: true }}
              className="w-px bg-primary/20"
            />

            {/* Horizontal Line */}
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="h-px bg-primary/20 absolute top-[168px] left-0 right-0"
            />
          </motion.div>

          {/* Departments Level */}
          <div className="grid grid-cols-3 gap-8 relative pt-20">
            {organization.departments.map((dept, index) => (
              <motion.div
                key={`desktop-${dept.role}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                {/* Vertical Line to Department */}
                <motion.div 
                  initial={{ height: 0 }}
                  whileInView={{ height: "40px" }}
                  transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="w-px bg-primary/20 mb-4"
                />
                
                {/* Department Box */}
                <div className="group bg-background rounded-xl p-6 hover:bg-primary/5 transition-all duration-300 shadow-md hover:shadow-lg w-full relative before:absolute before:inset-0 before:rounded-xl before:border-2 before:border-primary/20 before:hover:border-primary/40 before:transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <dept.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h4 className="font-bold text-primary">
                      {dept.role}
                    </h4>
                  </div>
                  <p className="text-text-secondary text-sm pl-[3.25rem]">
                    {dept.name}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Version - Hidden on desktop */}
        <div className="md:hidden space-y-4">
          {/* Director General - Mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="group bg-background rounded-xl p-6 hover:bg-primary/5 transition-all duration-300 shadow-lg hover:shadow-xl relative before:absolute before:inset-0 before:rounded-xl before:border-2 before:border-primary/20 before:hover:border-primary/40 before:transition-colors"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <organization.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-primary">
                  {organization.role}
                </h3>
                <p className="text-text-secondary text-sm">
                  {organization.name}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Vertical Line Indicator */}
          <div className="w-px h-8 bg-primary/20 mx-auto" />

          {/* Departments - Mobile */}
          {organization.departments.map((dept, index) => (
            <motion.div
              key={`mobile-${dept.role}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-background rounded-xl p-6 hover:bg-primary/5 transition-all duration-300 shadow-md hover:shadow-lg relative before:absolute before:inset-0 before:rounded-xl before:border-2 before:border-primary/20 before:hover:border-primary/40 before:transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <dept.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-primary">
                    {dept.role}
                  </h4>
                  <p className="text-text-secondary text-sm">
                    {dept.name}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 