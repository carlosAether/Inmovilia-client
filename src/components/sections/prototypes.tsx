"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Expand, BedDouble, Bath, Maximize } from "lucide-react";
import { useState } from "react";

const prototypes = [
  {
    name: "DALEA",
    type: "Casa",
    area: "150m²",
    bedrooms: 3,
    bathrooms: 2.5,
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&q=80",
    ],
    description:
      "Diseño contemporáneo con amplios espacios y acabados de lujo.",
  },
  {
    name: "PINUS",
    type: "Casa",
    area: "113m²",
    bedrooms: 3,
    bathrooms: 2,
    images: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1600566753104-685f4f24cb4d?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80",
    ],
    description:
      "Espacios optimizados con diseño moderno y funcional.",
  },
];

export function Prototypes() {
  const [selectedPrototype, setSelectedPrototype] = useState(0);
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <section className="w-full py-24 bg-primary/5" id="prototypes">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Prototipos
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full mx-auto mb-6" />
          <p className="text-lg text-text-secondary">
            Explora nuestros modelos de vivienda diseñados para ti
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src={prototypes[selectedPrototype].images[selectedImage]}
                alt={prototypes[selectedPrototype].name}
                fill
                className="object-cover"
              />
              <button
                onClick={() =>
                  setSelectedImage(
                    (prev) => (prev + 1) % prototypes[selectedPrototype].images.length
                  )
                }
                className="absolute bottom-4 right-4 bg-white/90 p-2 rounded-full hover:bg-white transition-colors"
              >
                <Expand className="w-5 h-5 text-primary" />
              </button>
            </div>
            <div className="flex gap-4">
              {prototypes[selectedPrototype].images.map((image, index) => (
                <button
                  key={image}
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-square w-20 rounded-lg overflow-hidden ${
                    selectedImage === index
                      ? "ring-2 ring-primary"
                      : "ring-1 ring-primary/20"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`Vista ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex gap-4">
              {prototypes.map((prototype, index) => (
                <button
                  key={prototype.name}
                  onClick={() => {
                    setSelectedPrototype(index);
                    setSelectedImage(0);
                  }}
                  className={`flex-1 py-3 px-4 rounded-lg text-sm font-medium transition-colors ${
                    selectedPrototype === index
                      ? "bg-primary text-white"
                      : "bg-primary/10 text-primary hover:bg-primary/20"
                  }`}
                >
                  {prototype.type}
                </button>
              ))}
            </div>

            <div>
              <h3 className="text-2xl font-bold text-text-primary mb-2">
                {prototypes[selectedPrototype].name}
              </h3>
              <p className="text-text-secondary mb-6">
                {prototypes[selectedPrototype].description}
              </p>

              <div className="grid grid-cols-3 gap-4">
                <div className="flex items-center gap-2 text-text-secondary">
                  <Maximize className="w-5 h-5" />
                  <span>{prototypes[selectedPrototype].area}</span>
                </div>
                <div className="flex items-center gap-2 text-text-secondary">
                  <BedDouble className="w-5 h-5" />
                  <span>{prototypes[selectedPrototype].bedrooms} Recámaras</span>
                </div>
                <div className="flex items-center gap-2 text-text-secondary">
                  <Bath className="w-5 h-5" />
                  <span>{prototypes[selectedPrototype].bathrooms} Baños</span>
                </div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Solicitar Información
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 