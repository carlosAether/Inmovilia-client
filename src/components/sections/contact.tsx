"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "sonner";
import { ContactFormType, sendContactEmail } from "@/lib/actions";

export function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormType>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormType) => {
    try {
      const result = await sendContactEmail(data);

      if (result.error) {
        toast.error(result.error);
        return;
      }

      toast.success("Mensaje enviado correctamente");
      reset();
    } catch (e) {
      console.error(e);
      toast.error("Error al enviar el mensaje");
    }
  };

  return (
    <section className="w-full py-24 bg-background" id="contact">
      <Toaster richColors position="top-center" />
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
                <p className="text-text-secondary">(33) 2152 2219</p>
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
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Nombre completo"
                    {...register("name")}
                    className={`w-full px-4 py-3 rounded-lg bg-background border focus:outline-none focus:ring-1 transition-colors ${
                      errors.name
                        ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                        : "border-primary/20 focus:border-primary focus:ring-primary"
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Correo electrónico"
                    {...register("email")}
                    className={`w-full px-4 py-3 rounded-lg bg-background border focus:outline-none focus:ring-1 transition-colors ${
                      errors.email
                        ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                        : "border-primary/20 focus:border-primary focus:ring-primary"
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <input
                    type="tel"
                    placeholder="Teléfono"
                    {...register("phone")}
                    className={`w-full px-4 py-3 rounded-lg bg-background border focus:outline-none focus:ring-1 transition-colors ${
                      errors.phone
                        ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                        : "border-primary/20 focus:border-primary focus:ring-primary"
                    }`}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <textarea
                    placeholder="Mensaje"
                    rows={4}
                    {...register("message")}
                    className={`w-full px-4 py-3 rounded-lg bg-background border focus:outline-none focus:ring-1 transition-colors resize-none ${
                      errors.message
                        ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                        : "border-primary/20 focus:border-primary focus:ring-primary"
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                  )}
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-white rounded-lg px-6 py-3 flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Enviar Mensaje
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 