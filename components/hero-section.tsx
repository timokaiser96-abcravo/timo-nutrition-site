"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-stone-100 to-white">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-stone-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <p className="text-emerald-700 font-medium mb-2 tracking-wide uppercase text-sm">
              Ganzheitliche Ernährungsberatung
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-stone-800 mb-6 font-serif leading-tight">
              Zurück zu deinem <span className="text-emerald-700">Ursprung</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg md:text-xl text-stone-600 mb-8 leading-relaxed"
          >
            Als Ernährungs- und Gesundheitscoach begleite ich dich auf dem Weg zu echter Gesundheit – 
            mit natürlicher Ernährung, ohne Dogmen, individuell auf dich abgestimmt.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-md text-stone-500 mb-8 italic"
          >
            Für Menschen mit Verdauungsproblemen, Unverträglichkeiten, Erschöpfung und dem Wunsch nach einem einfacheren, natürlicheren Leben.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <Button size="lg" asChild className="bg-emerald-700 hover:bg-emerald-800 text-white shadow-lg">
              <Link href="https://calendly.com/timo-kaiser96/kennenlernen" target="_blank" rel="noopener noreferrer">
                <Calendar className="mr-2 w-5 h-5" />
                Kostenloses Kennenlerngespräch (15 Min)
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-emerald-700 text-emerald-700 hover:bg-emerald-50">
              <Link href="/angebote">Angebote ansehen</Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] w-full max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/timo_strand.png"
              alt="Timo Kaiser - Ernährungs- und Gesundheitscoach"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          {/* Decorative element */}
          <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-emerald-200 rounded-full blur-2xl opacity-40 -z-10"></div>
        </motion.div>
      </div>
    </section>
  );
}
