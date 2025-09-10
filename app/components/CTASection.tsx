"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface CTASectionProps {
  onBookTuning: () => void;
}

export default function CTASection({ onBookTuning }: CTASectionProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    bikeModel: "",
    serviceType: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("Booking form submitted:", formData);
    setIsModalOpen(false);
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      bikeModel: "",
      serviceType: "",
      message: ""
    });
  };

  return (
    <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-distress relative overflow-hidden">
      {/* Cinematic Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800" />
      <div className="absolute inset-0 bg-[url('/images/texture-overlay.png')] opacity-15 mix-blend-overlay" />
      
      {/* Animated Grid Pattern */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          backgroundPosition: ["0px 0px", "60px 60px"]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          backgroundImage: `
            linear-gradient(rgba(183, 28, 28, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(183, 28, 28, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Floating Energy Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 bg-orange-500/40 rounded-full"
          initial={{ opacity: 0 }}
          animate={{
            left: [`${10 + (i % 8) * 12}%`, `${90 - (i % 6) * 10}%`, `${10 + (i % 8) * 12}%`],
            top: [`${10 + (i % 7) * 12}%`, `${90 - (i % 5) * 8}%`, `${10 + (i % 7) * 12}%`],
            y: [0, -80, 0],
            x: [0, (i % 2 === 0 ? 1 : -1) * 20, 0],
            opacity: [0, 1, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 5 + (i % 3),
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Energy Bursts */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`burst-${i}`}
          className="absolute w-48 h-48 border border-orange-500/20 rounded-full"
          initial={{ opacity: 0 }}
          animate={{
            left: [`${20 + i * 10}%`, `${80 - i * 8}%`, `${20 + i * 10}%`],
            top: [`${20 + i * 8}%`, `${80 - i * 6}%`, `${20 + i * 8}%`],
            scale: [1, 1.2, 1],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 4 + (i % 2),
            repeat: Infinity,
            delay: i * 0.8,
            ease: "easeOut"
          }}
        />
      ))}
      
      <div className="relative z-10 max-w-6xl mx-auto text-center px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
          viewport={{ once: true }}
        >
          {/* Enhanced Title with Dramatic Effects */}
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 sm:mb-8 relative"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <motion.span
              className="block"
              animate={{
                textShadow: [
                  "0 0 0px rgba(183, 28, 28, 0)",
                  "0 0 30px rgba(183, 28, 28, 0.8)",
                  "0 0 0px rgba(183, 28, 28, 0)"
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              READY TO
            </motion.span>
            <motion.span 
              className="text-orange-500 block mt-2"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5, type: "spring", stiffness: 100 }}
              whileHover={{
                scale: 1.02,
                textShadow: "0 0 20px rgba(255, 102, 0, 0.8)"
              }}
            >
              TRANSFORM
            </motion.span>
            <motion.span 
              className="block mt-2"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7, type: "spring", stiffness: 100 }}
            >
              YOUR BIKE?
            </motion.span>
          </motion.h2>
          
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 sm:mb-16 max-w-5xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            Stop dreaming about the perfect bike. Let us forge your{" "}
            <motion.span 
              className="text-red-500 font-bold relative inline-block"
              whileHover={{ scale: 1.1 }}
            >
              mechanical nightmare
              <motion.span
                className="absolute -bottom-1 left-0 w-full h-1 bg-red-500 block"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
              />
            </motion.span>{" "}
            into reality. Book your consultation today and join the ranks of riders who command respect.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 1.2, type: "spring", stiffness: 100 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-8 justify-center items-center"
        >
          <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
            <DialogTrigger asChild>
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  z: 50
                }}
                whileTap={{ scale: 0.95 }}
                className="relative group perspective-1000"
              >
                {/* Multiple Glow Layers */}
                <motion.div 
                  className="absolute -inset-2 bg-gradient-to-r from-red-500 via-red-600 to-red-500 rounded-xl blur-lg opacity-60"
                  animate={{
                    opacity: [0.6, 0.9, 0.6],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div 
                  className="absolute -inset-1 bg-gradient-to-r from-red-400 to-red-700 rounded-lg blur opacity-40"
                  animate={{
                    opacity: [0.4, 0.7, 0.4],
                    scale: [1, 1.02, 1]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                />
                
              <Button
                size="lg"
                  className="relative bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-500 hover:to-orange-600 text-white px-12 sm:px-16 py-6 sm:py-8 text-lg sm:text-xl lg:text-2xl font-bold rounded-xl border-2 border-orange-400/50 shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-orange-500/25"
                >
                  {/* Shimmer Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 3,
                      ease: "easeInOut"
                    }}
                  />
                  
                  <motion.span
                    className="flex items-center gap-4 relative z-10"
                    whileHover={{ x: 8 }}
                  >
                    <motion.span
                      animate={{ 
                        textShadow: [
                          "0 0 0px rgba(255, 255, 255, 0)",
                          "0 0 20px rgba(255, 255, 255, 0.8)",
                          "0 0 0px rgba(255, 255, 255, 0)"
                        ]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
              >
                BOOK YOUR TUNING NOW
                    </motion.span>
                    <motion.div
                      animate={{ 
                        x: [0, 8, 0],
                        scale: [1, 1.05, 1]
                      }}
                      transition={{ 
                        duration: 1.5, 
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <span className="text-2xl">→</span>
                    </motion.div>
                  </motion.span>
              </Button>
              </motion.div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md bg-card border-distressed">
              <DialogHeader>
                <DialogTitle className="text-2xl text-accent font-black">
                  BOOK YOUR CONSULTATION
                </DialogTitle>
                <DialogDescription className="text-muted-foreground">
                  Tell us about your bike and what kind of mechanical dominance you&apos;re seeking.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-muted border-border"
                  />
                  <Input
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-muted border-border"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    name="phone"
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="bg-muted border-border"
                  />
                  <Input
                    name="bikeModel"
                    placeholder="Bike Model & Year"
                    value={formData.bikeModel}
                    onChange={handleInputChange}
                    required
                    className="bg-muted border-border"
                  />
                </div>
                <select
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 bg-muted border border-border rounded-md text-foreground"
                >
                  <option value="">Select Service Type</option>
                  <option value="tuning">Performance Tuning</option>
                  <option value="custom-build">Custom Build</option>
                  <option value="upgrade">Performance Upgrade</option>
                  <option value="maintenance">Maintenance & Repair</option>
                  <option value="consultation">General Consultation</option>
                </select>
                <textarea
                  name="message"
                  placeholder="Tell us about your vision for your bike..."
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full p-3 bg-muted border border-border rounded-md text-foreground resize-none"
                />
                <Button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold"
                >
                  SUBMIT BOOKING REQUEST
                </Button>
              </form>
            </DialogContent>
          </Dialog>

          <motion.div
            whileHover={{ 
              scale: 1.05,
              z: 50
            }}
            whileTap={{ scale: 0.95 }}
            className="relative group perspective-1000"
          >
            {/* Pulsing Border Effect */}
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-red-500 to-red-600 rounded-xl"
              animate={{
                opacity: [0.3, 0.7, 0.3],
                scale: [1, 1.02, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

          <Button
            onClick={onBookTuning}
            variant="outline"
            size="lg"
              className="relative border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-16 py-8 text-2xl font-black rounded-xl bg-black/50 backdrop-blur-sm overflow-hidden"
            >
              {/* Sliding Background Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
              
              <motion.span
                className="flex items-center gap-4 relative z-10"
                whileHover={{ x: -8 }}
              >
                <motion.span
                  animate={{ 
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="text-2xl"
                >
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                </motion.span>
                <motion.span
                  animate={{
                    textShadow: [
                      "0 0 0px rgba(183, 28, 28, 0)",
                      "0 0 15px rgba(183, 28, 28, 0.6)",
                      "0 0 0px rgba(183, 28, 28, 0)"
                    ]
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
          >
            VIEW OUR SERVICES
                </motion.span>
              </motion.span>
          </Button>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
