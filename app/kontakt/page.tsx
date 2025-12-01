"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Calendar, Send, CheckCircle } from "lucide-react";
import { toast } from "react-hot-toast";
import { Toaster } from "react-hot-toast";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e?.preventDefault?.();
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (response?.ok) {
        toast.success("Nachricht erfolgreich gesendet! Ich melde mich innerhalb von 24 Stunden bei dir.");
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        toast.error("Fehler beim Senden. Bitte versuche es erneut oder schreibe direkt an timo.kaiser96@googlemail.com");
      }
    } catch (error) {
      toast.error("Fehler beim Senden. Bitte versuche es erneut oder schreibe direkt an timo.kaiser96@googlemail.com");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col">
      <Toaster position="top-center" />
      
      {/* Hero */}
      <section className="py-20 px-4 bg-gradient-to-b from-stone-100 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif text-stone-800">
              Kontakt
            </h1>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Lass uns gemeinsam schauen, wie ich dich auf deinem Weg unterstützen kann
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <Card className="p-6 text-center border-none shadow-md hover:shadow-lg transition-shadow bg-stone-50">
              <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-7 h-7 text-emerald-700" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-stone-800">Kennenlerngespräch</h3>
              <p className="text-sm text-stone-600 mb-4">
                15 Minuten kostenlos – finde heraus, ob ich dir helfen kann
              </p>
              <Button size="sm" asChild className="bg-emerald-700 hover:bg-emerald-800 text-white w-full">
                <a href="https://calendly.com/timo-kaiser96/kennenlernen" target="_blank" rel="noopener noreferrer">
                  Jetzt buchen
                </a>
              </Button>
            </Card>

            <Card className="p-6 text-center border-none shadow-md hover:shadow-lg transition-shadow bg-stone-50">
              <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-7 h-7 text-emerald-700" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-stone-800">E-Mail</h3>
              <p className="text-sm text-stone-600 mb-4">
                Schreibe mir direkt
              </p>
              <a 
                href="mailto:timo.kaiser96@googlemail.com" 
                className="text-sm text-emerald-700 hover:underline font-medium"
              >
                timo.kaiser96@googlemail.com
              </a>
            </Card>

            <Card className="p-6 text-center border-none shadow-md hover:shadow-lg transition-shadow bg-stone-50">
              <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                <Phone className="w-7 h-7 text-emerald-700" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-stone-800">Telefon</h3>
              <p className="text-sm text-stone-600 mb-4">
                Schreib mir auf Whatsapp
              </p>
              <a 
                href="tel:+491773439535" 
                className="text-sm text-emerald-700 hover:underline font-medium"
              >
                +49 157 55141079
              </a>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <Card className="p-8 md:p-10 border-none shadow-lg bg-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-stone-800 font-serif text-center">
                Nachricht senden
              </h2>
              <p className="text-center text-stone-600 mb-8">
                Fülle das Formular aus und ich melde mich innerhalb von 24 Stunden bei dir
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData?.name ?? ""}
                    onChange={(e) => setFormData({ ...formData, name: e?.target?.value ?? "" })}
                    className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                    placeholder="Dein Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-2">
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData?.email ?? ""}
                    onChange={(e) => setFormData({ ...formData, email: e?.target?.value ?? "" })}
                    className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                    placeholder="deine@email.de"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-2">
                    Telefon (optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData?.phone ?? ""}
                    onChange={(e) => setFormData({ ...formData, phone: e?.target?.value ?? "" })}
                    className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                    placeholder="+49 123 456789"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-stone-700 mb-2">
                    Betreff *
                  </label>
                  <select
                    id="subject"
                    required
                    value={formData?.subject ?? ""}
                    onChange={(e) => setFormData({ ...formData, subject: e?.target?.value ?? "" })}
                    className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all bg-white"
                  >
                    <option value="">Bitte wählen...</option>
                    <option value="8-Wochen-Programm">Interesse am 8-Wochen-Programm</option>
                    <option value="Einzelcoaching">Einzelcoaching buchen</option>
                    <option value="Kennenlerngespräch">Frage zum Kennenlerngespräch</option>
                    <option value="Allgemeine Anfrage">Allgemeine Anfrage</option>
                    <option value="Sonstiges">Sonstiges</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-2">
                    Nachricht *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    value={formData?.message ?? ""}
                    onChange={(e) => setFormData({ ...formData, message: e?.target?.value ?? "" })}
                    className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all resize-none"
                    placeholder="Erzähle mir kurz, wobei ich dich unterstützen kann..."
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-emerald-700 hover:bg-emerald-800 text-white"
                  disabled={loading}
                >
                  {loading ? (
                    "Wird gesendet..."
                  ) : (
                    <>
                      <Send className="mr-2 w-5 h-5" />
                      Nachricht senden
                    </>
                  )}
                </Button>

                <p className="text-xs text-center text-stone-500">
                  Mit dem Absenden bestätigst du, dass ich deine Daten zur Beantwortung deiner Anfrage speichern und verwenden darf.
                </p>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-stone-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-serif text-stone-800">
            Häufige Fragen
          </h2>
          
          <div className="space-y-6">
            <Card className="p-6 border-none shadow-md bg-white">
              <h3 className="font-bold text-lg mb-2 text-stone-800 flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                Wie läuft ein Kennenlerngespräch ab?
              </h3>
              <p className="text-stone-600 pl-7">
                Das Kennenlerngespräch dauert 15 Minuten und ist kostenlos. Wir sprechen kurz über deine Situation und schauen, 
                ob mein Ansatz zu dir passt und wie ich dich am besten unterstützen kann.
              </p>
            </Card>

            <Card className="p-6 border-none shadow-md bg-white">
              <h3 className="font-bold text-lg mb-2 text-stone-800 flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                Wie funktioniert die Zahlung?
              </h3>
              <p className="text-stone-600 pl-7">
                Die Zahlung erfolgt per Rechnung nach der Session bzw. vor Beginn des 8-Wochen-Programms. 
                Du erhältst von mir eine Rechnung per E-Mail mit Bankverbindung.
              </p>
            </Card>

            <Card className="p-6 border-none shadow-md bg-white">
              <h3 className="font-bold text-lg mb-2 text-stone-800 flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                Finden die Sessions online statt?
              </h3>
              <p className="text-stone-600 pl-7">
                Ja, alle Sessions finden per Videocall (Zoom) oder Telefon statt. So sind wir flexibel und du kannst von überall teilnehmen.
              </p>
            </Card>

            <Card className="p-6 border-none shadow-md bg-white">
              <h3 className="font-bold text-lg mb-2 text-stone-800 flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                Was ist, wenn ich einen Termin absagen muss?
              </h3>
              <p className="text-stone-600 pl-7">
                Kein Problem! Bitte sage Termine mindestens 24 Stunden vorher ab, dann können wir einen Ersatztermin finden. 
                Bei kurzfristigeren Absagen kann ich leider keine Erstattung garantieren.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
