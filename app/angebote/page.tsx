"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, CheckCircle, Mail, Users, Heart, Clock, MessageCircle } from "lucide-react";

export default function ServicesPage() {
  const einzelcoachingFeatures = [
    "60 Minuten intensive Einzelsession",
    "Ernährungs-Check: Ist-Analyse deiner aktuellen Ernährung",
    "Alltag-Check: Schlaf, Bewegung, Stress, Routinen",
    "Konkrete, kleine Schritte statt 1000 Regeln",
    "Optional: Individueller Ernährungsplan",
    "Per Videocall (Zoom) oder Telefon"
  ];

  const programFeatures = [
    "8 Wochen intensive Begleitung",
    "Wöchentliche Videocalls (je 45-60 Min)",
    "E-Mail & Chat-Support zwischen den Terminen",
    "Individuelle Empfehlungen & Ernährungsplan",
    "Schritt-für-Schritt durch alle Phasen",
    "Langfristige Strategie & Rückfallprophylaxe"
  ];

  const programPhases = [
    "Woche 1: Bestandsaufnahme & Ziele definieren",
    "Woche 2-3: Ernährung vereinfachen mit echten Lebensmitteln",
    "Woche 4-5: Verdauung & Darm – Trigger erkennen",
    "Woche 6: Stress & Nervensystem entlasten",
    "Woche 7: Stabilisierung & Feintuning",
    "Woche 8: Integration in den Alltag"
  ];

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-20 px-4 bg-gradient-to-b from-stone-100 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif text-stone-800">
              Meine Angebote
            </h1>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto mb-8">
              Individuelle Begleitung auf deinem Weg zu natürlicher Gesundheit – ob in einer Einzelsession oder über 8 Wochen
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Einzelcoaching */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full flex flex-col p-8 border-2 border-stone-200 hover:border-emerald-200 hover:shadow-xl transition-all">
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                    <Users className="w-8 h-8 text-emerald-700" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-2 text-stone-800 font-serif">
                    Einzelcoaching
                  </h2>
                  <p className="text-stone-600 mb-4">
                    Individuelle Begleitung bei Verdauung, Unverträglichkeiten, Energie und Alltagsernährung
                  </p>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-4xl font-bold text-emerald-700">80€</span>
                    <span className="text-stone-600">/ 60 Minuten</span>
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-4 text-stone-800">Was dich erwartet:</h3>
                  <ul className="space-y-3 mb-6">
                    {einzelcoachingFeatures?.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span className="text-stone-600 text-sm">{feature}</span>
                      </li>
                    )) ?? []}
                  </ul>

                  <div className="bg-stone-50 p-4 rounded-lg mb-6">
                    <p className="text-sm text-stone-700">
                      <strong>Für wen?</strong> Menschen, die konkrete Unterstützung bei einem spezifischen Thema suchen oder erstmal schauen möchten, ob der Ansatz zu ihnen passt.
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button size="lg" asChild className="w-full bg-emerald-700 hover:bg-emerald-800 text-white">
                    <a href="https://calendly.com/timo-kaiser96/30min" target="_blank" rel="noopener noreferrer">
                      <Calendar className="mr-2 w-5 h-5" />
                      Jetzt Termin buchen
                    </a>
                  </Button>
                  <p className="text-sm text-center text-stone-500">
                    Zahlung per Rechnung nach der Session
                  </p>
                </div>
              </Card>
            </motion.div>

            {/* 8-Wochen-Programm */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="h-full flex flex-col p-8 border-2 border-emerald-300 bg-gradient-to-br from-emerald-50 to-white hover:shadow-xl transition-all relative">
                <div className="absolute top-4 right-4 bg-emerald-700 text-white text-xs font-bold px-3 py-1 rounded-full">
                  INTENSIV
                </div>
                
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                    <Heart className="w-8 h-8 text-emerald-700" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-2 text-stone-800 font-serif">
                    8-Wochen-Programm
                  </h2>
                  <p className="text-lg font-medium text-emerald-800 mb-2">
                    „Zurück zu deinem Ursprung“
                  </p>
                  <p className="text-stone-600 mb-4">
                    Intensive Begleitung über 8 Wochen – Ernährung, Alltag & Nervensystem im ganzheitlichen Zusammenspiel
                  </p>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-4xl font-bold text-emerald-700">480€</span>
                    <span className="text-stone-600">/ 8 Wochen</span>
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-4 text-stone-800">Was dich erwartet:</h3>
                  <ul className="space-y-3 mb-6">
                    {programFeatures?.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span className="text-stone-600 text-sm">{feature}</span>
                      </li>
                    )) ?? []}
                  </ul>

                  <div className="bg-white p-4 rounded-lg mb-6 border border-emerald-200">
                    <h4 className="font-bold text-sm mb-3 text-stone-800">Die 8 Phasen:</h4>
                    <ul className="space-y-2">
                      {programPhases?.map((phase, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Clock className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span className="text-stone-600 text-xs">{phase}</span>
                        </li>
                      )) ?? []}
                    </ul>
                  </div>

                  <div className="bg-stone-50 p-4 rounded-lg mb-6">
                    <p className="text-sm text-stone-700">
                      <strong>Für wen?</strong> Menschen, die echte Veränderung suchen und bereit sind, sich über mehrere Wochen begleiten zu lassen – mit kontinuierlicher Unterstützung und Anpassung.
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button size="lg" asChild className="w-full bg-emerald-700 hover:bg-emerald-800 text-white">
                    <Link href="/kontakt">
                      <Mail className="mr-2 w-5 h-5" />
                      Jetzt Anfrage senden
                    </Link>
                  </Button>
                  <p className="text-sm text-center text-stone-500">
                    Ich melde mich innerhalb von 24 Stunden bei dir
                  </p>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Not sure? */}
      <section className="py-16 px-4 bg-stone-50">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 border-none shadow-lg bg-white text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-8 h-8 text-emerald-700" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-stone-800 font-serif">
              Nicht sicher, ob das zu dir passt?
            </h2>
            <p className="text-lg text-stone-600 mb-8">
              Lass uns in einem kostenlosen 15-Minuten-Gespräch herausfinden, wie ich dich am besten unterstützen kann.
            </p>
            <Button size="lg" asChild className="bg-emerald-700 hover:bg-emerald-800 text-white">
              <a href="https://calendly.com/timo-kaiser96/kennenlernen" target="_blank" rel="noopener noreferrer">
                <Calendar className="mr-2 w-5 h-5" />
                Kostenloses Kennenlerngespräch buchen
              </a>
            </Button>
          </Card>
        </div>
      </section>

      {/* Who is it for? */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-serif text-stone-800">
            Das Coaching ist für dich, wenn...
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 border-none shadow-md bg-stone-50">
              <h3 className="font-bold text-lg mb-2 text-stone-800">✓ Du Verdauungsprobleme hast</h3>
              <p className="text-sm text-stone-600">
                Blähungen, Unverträglichkeiten oder Bauchschmerzen belasten deinen Alltag und du suchst nach Lösungen.
              </p>
            </Card>
            
            <Card className="p-6 border-none shadow-md bg-stone-50">
              <h3 className="font-bold text-lg mb-2 text-stone-800">✓ Du dich ständig erschöpft fühlst</h3>
              <p className="text-sm text-stone-600">
                Brain Fog, Müdigkeit und fehlende Energie begleiten dich trotz ausreichend Schlaf.
              </p>
            </Card>
            
            <Card className="p-6 border-none shadow-md bg-stone-50">
              <h3 className="font-bold text-lg mb-2 text-stone-800">✓ Du gestresst und nervös bist</h3>
              <p className="text-sm text-stone-600">
                Dein Nervensystem ist überlastet und du kommst schwer zur Ruhe.
              </p>
            </Card>
            
            <Card className="p-6 border-none shadow-md bg-stone-50">
              <h3 className="font-bold text-lg mb-2 text-stone-800">✓ Du einen natürlichen Weg suchst</h3>
              <p className="text-sm text-stone-600">
                Keine starren Diäten, sondern einen empathischen, pragmatischen Ansatz mit echten Lebensmitteln.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
