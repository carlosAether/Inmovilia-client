"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Line {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  delay: number;
}

export function Hero() {
  const [lines, setLines] = useState<Line[]>([]);

  useEffect(() => {
    // Create modern building silhouette with clean lines
    const buildingLines: Line[] = [
      // Mobile-first approach - these buildings will show on all screens
      // Left building (medium)
      { x1: 30, y1: 80, x2: 30, y2: 35, delay: 0 },    // Left vertical
      { x1: 30, y1: 35, x2: 45, y2: 35, delay: 0.3 },  // Top horizontal
      { x1: 45, y1: 35, x2: 45, y2: 80, delay: 0.6 },  // Right vertical

      // Right building (medium-tall)
      { x1: 55, y1: 80, x2: 55, y2: 25, delay: 0.9 },  // Left vertical
      { x1: 55, y1: 25, x2: 70, y2: 25, delay: 1.2 },  // Top horizontal
      { x1: 70, y1: 25, x2: 70, y2: 80, delay: 1.5 },  // Right vertical

      // Connecting line between the two buildings
      { x1: 45, y1: 45, x2: 55, y2: 45, delay: 1.8 },  // Center connection

      // Additional buildings for larger screens
      ...(window.innerWidth > 768 ? [
        // Far left building (small)
        { x1: 10, y1: 80, x2: 10, y2: 50, delay: 2.1 },    // Left vertical
        { x1: 10, y1: 50, x2: 20, y2: 50, delay: 2.4 },  // Top horizontal
        { x1: 20, y1: 50, x2: 20, y2: 80, delay: 2.7 },  // Right vertical

        // Center-right building (tallest)
        { x1: 80, y1: 80, x2: 80, y2: 15, delay: 3.0 },  // Left vertical
        { x1: 80, y1: 15, x2: 90, y2: 15, delay: 3.3 },  // Top horizontal
        { x1: 90, y1: 15, x2: 90, y2: 80, delay: 3.6 },  // Right vertical

        // Additional connecting lines for desktop
        { x1: 20, y1: 60, x2: 30, y2: 60, delay: 3.9 },  // Left connection
        { x1: 70, y1: 35, x2: 80, y2: 35, delay: 4.2 },  // Right connection

        // Additional architectural details for desktop
        { x1: 80, y1: 25, x2: 90, y2: 25, delay: 4.5 },  // Right building detail
        { x1: 30, y1: 45, x2: 45, y2: 45, delay: 4.8 },  // Left building detail
      ] : []),
    ];

    setLines(buildingLines);
  }, []);

  return (
    <section className="w-full min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-b from-primary/5 via-primary/10 to-background" id="hero">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Modern building lines animation */}
        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
            {lines.map((line, index) => (
              <motion.line
                key={index}
                x1={`${line.x1}%`}
                y1={`${line.y1}%`}
                x2={`${line.x2}%`}
                y2={`${line.y2}%`}
                stroke="currentColor"
                className="text-primary/20"
                strokeWidth="1.5"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ 
                  pathLength: 1, 
                  opacity: 1,
                }}
                transition={{
                  duration: 2.5,
                  delay: line.delay,
                  ease: "easeInOut",
                }}
              />
            ))}
          </svg>
        </div>

        {/* Grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

        {/* Gradient blobs with reduced opacity */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.02, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute -top-1/2 -right-1/2 w-[100%] h-[100%] rounded-full bg-primary/30 blur-[120px]"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.02, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="absolute -bottom-1/2 -left-1/2 w-[100%] h-[100%] rounded-full bg-primary/20 blur-[120px]"
        />
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-6 relative"
          >
            <span className="text-primary font-medium px-4 py-2 rounded-full bg-primary/5 border border-primary/10 backdrop-blur-sm">
              Desde 2010
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-text-primary mb-6 relative"
          >
            Desarrollos Inmobiliarios{" "}
            <span className="text-primary relative inline-block">
              Intraurbanos
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 1 }}
                className="absolute -bottom-2 left-0 h-1 bg-primary/30 rounded-full"
              />
            </span>{" "}
            de Alta Calidad
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-text-secondary mb-8"
          >
            Creamos espacios excepcionales con infraestructura y servicios de primera,
            ubicados estratégicamente para mejorar tu calidad de vida
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              className="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30 hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary backdrop-blur-sm"
            >
              Contáctanos
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#projects"
              className="inline-flex h-12 items-center justify-center rounded-lg border border-primary bg-white/50 backdrop-blur-sm px-8 text-sm font-medium text-primary shadow-lg transition-all hover:shadow-xl hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
            >
              Ver Proyectos
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/80 to-transparent" />
    </section>
  );
} 