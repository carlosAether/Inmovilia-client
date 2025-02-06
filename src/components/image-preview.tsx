"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

interface ImagePreviewProps {
  images: string[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function ImagePreview({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
}: ImagePreviewProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        onNavigate(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
      } else if (e.key === "ArrowRight") {
        onNavigate(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      // Prevent scrolling when modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      // Restore scrolling when modal is closed
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose, onNavigate, currentIndex, images.length]);

  // Reset loading state when image changes
  useEffect(() => {
    setIsLoading(true);
  }, [currentIndex]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.2 }}
          className="absolute top-4 right-4 z-50"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>
        </motion.div>

        <div className="absolute inset-0 flex items-center justify-center p-4">
          <div className="relative w-full max-w-5xl aspect-[3/4]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="relative w-full h-full"
              >
                {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
                  </div>
                )}
                <Image
                  src={images[currentIndex]}
                  alt={`Preview ${currentIndex + 1}`}
                  fill
                  quality={100}
                  priority
                  className="object-contain"
                  onLoadingComplete={() => setIsLoading(false)}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="absolute inset-y-0 left-4 flex items-center">
          <motion.button
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            onClick={(e) => {
              e.stopPropagation();
              onNavigate(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
            }}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </motion.button>
        </div>

        <div className="absolute inset-y-0 right-4 flex items-center">
          <motion.button
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            onClick={(e) => {
              e.stopPropagation();
              onNavigate(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
            }}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </motion.button>
        </div>

        {/* Image Counter */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2"
        >
          <div className="px-4 py-2 rounded-full bg-white/10 text-white text-sm backdrop-blur-sm">
            {currentIndex + 1} / {images.length}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
} 