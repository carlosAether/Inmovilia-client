"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { BedDouble, Bath, Maximize, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { useState } from "react";
import { ImagePreview } from "@/components/image-preview";

const prototypes = [
  {
    name: "DALEA",
    type: "Casa",
    area: "150m²",
    bedrooms: 3,
    bathrooms: 2.5,
    images: [
      "/DaleaAlta.jpg",
      "/DaleaBaja.jpg",
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
      "/PinusAlta.jpg",
      "/PinusBaja.jpg",
    ],
    description:
      "Espacios optimizados con diseño moderno y funcional.",
  },
];

export function Prototypes() {
  const [selectedPrototype, setSelectedPrototype] = useState(0);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const navigateImage = (direction: "prev" | "next") => {
    const images = prototypes[selectedPrototype].images;
    if (direction === "prev") {
      setSelectedImage(prev => prev === 0 ? images.length - 1 : prev - 1);
    } else {
      setSelectedImage(prev => prev === images.length - 1 ? 0 : prev + 1);
    }
  };

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

        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Selector Tabs */}
            <div className="lg:w-48 flex lg:flex-col gap-4">
              {prototypes.map((prototype, index) => (
                <button
                  key={prototype.name}
                  onClick={() => {
                    setSelectedPrototype(index);
                    setSelectedImage(0);
                  }}
                  className={`flex-1 py-3 px-4 rounded-lg text-sm font-medium transition-all ${
                    selectedPrototype === index
                      ? "bg-primary text-white shadow-lg shadow-primary/20"
                      : "bg-primary/10 text-primary hover:bg-primary/20"
                  }`}
                >
                  {prototype.name}
                </button>
              ))}
            </div>

            {/* Main Content */}
            <div className="flex-1">
              <div className="grid lg:grid-cols-5 gap-8">
                {/* Image Section */}
                <div className="lg:col-span-3">
                  <div className="space-y-4">
                    <div className="relative aspect-[3/4] max-h-[600px] rounded-2xl overflow-hidden bg-primary/5 group">
                      <Image
                        src={prototypes[selectedPrototype].images[selectedImage]}
                        alt={prototypes[selectedPrototype].name}
                        fill
                        quality={100}
                        priority={selectedImage === 0}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                        className="object-contain"
                      />
                      
                      {/* Navigation Arrows */}
                      <div className="absolute inset-y-0 left-4 hidden group-hover:flex items-center">
                        <button
                          onClick={() => navigateImage("prev")}
                          className="p-2 rounded-full bg-white/90 hover:bg-white shadow-lg transition-all hover:scale-110"
                        >
                          <ChevronLeft className="w-5 h-5 text-primary" />
                        </button>
                      </div>
                      <div className="absolute inset-y-0 right-4 hidden group-hover:flex items-center">
                        <button
                          onClick={() => navigateImage("next")}
                          className="p-2 rounded-full bg-white/90 hover:bg-white shadow-lg transition-all hover:scale-110"
                        >
                          <ChevronRight className="w-5 h-5 text-primary" />
                        </button>
                      </div>

                      {/* Action Buttons */}
                      <div className="absolute bottom-4 right-4 flex gap-2">
                        <button
                          onClick={() => setIsPreviewOpen(true)}
                          className="p-2 rounded-full bg-white/90 hover:bg-white shadow-lg transition-all hover:scale-110"
                        >
                          <Maximize2 className="w-5 h-5 text-primary" />
                        </button>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      {prototypes[selectedPrototype].images.map((image, index) => (
                        <button
                          key={image}
                          onClick={() => setSelectedImage(index)}
                          className={`relative aspect-[3/4] w-16 rounded-lg overflow-hidden ${
                            selectedImage === index
                              ? "ring-2 ring-primary shadow-lg"
                              : "ring-1 ring-primary/20"
                          }`}
                        >
                          <Image
                            src={image}
                            alt={`Vista ${index + 1}`}
                            fill
                            quality={100}
                            sizes="64px"
                            className="object-contain bg-primary/5"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Info Section */}
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-text-primary mb-2">
                      {prototypes[selectedPrototype].name}
                    </h3>
                    <p className="text-text-secondary">
                      {prototypes[selectedPrototype].description}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
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

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
                  >
                    Solicitar Información
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ImagePreview
        images={prototypes[selectedPrototype].images}
        currentIndex={selectedImage}
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
        onNavigate={setSelectedImage}
      />
    </section>
  );
} 