import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Leaf, Heart, Sparkles, Users, CheckCircle, ArrowRight } from "lucide-react";
import { HeroSection } from "@/components/hero-section";
import { Card } from "@/components/ui/card";

export default function HomePage() {
  const benefits = [
    {
      icon: Heart,
      title: "Ganzheitlicher Ansatz",
      description: "Ernährung, Alltag und Nervensystem im Zusammenspiel"
    },
    {
      icon: Leaf,
      title: "Zurück zum Ursprung",
      description: "Echte Lebensmittel, Natur, Einfachheit statt komplizierte Diäten"
    },
    {
      icon: Sparkles,
      title: "Individuelle Begleitung",
      description: "Auf deine Situation, deine Ziele, deinen Alltag zugeschnitten"
    },
    {
      icon: Users,
      title: "Empathisch & Pragmatisch",
      description: "Keine Dogmen, sondern verständnisvolle Unterstützung"
    }
  ];

  const qualifications = [
    "Ernährungsberater A-Lizenz",
    "Heilpraktiker-Ausbildung (abgeschlossen)",
    "Praktikum Funktionelle Medizin",
    "Studium Philosophie (laufend)"
  ];

  return (
    <div className="flex flex-col">
      <HeroSection />
      
      {/* Wem ich helfe */}
      <section className="py-20 px-4 bg-stone-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-serif text-stone-800">
            Kennst du das?
          </h2>
          <p className="text-center text-stone-600 mb-12 max-w-3xl mx-auto text-lg">
            Viele Menschen kämpfen mit ähnlichen Herausforderungen
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-6 border-none shadow-md hover:shadow-lg transition-shadow bg-white">
              <h3 className="font-bold text-xl mb-3 text-stone-800">Verdauungsprobleme & Unverträglichkeiten</h3>
              <p className="text-stone-600">
                Blähungen, Bauchschmerzen, Unverträglichkeiten – du weißt nicht mehr, was du noch essen kannst?
              </p>
            </Card>
            
            <Card className="p-6 border-none shadow-md hover:shadow-lg transition-shadow bg-white">
              <h3 className="font-bold text-xl mb-3 text-stone-800">Erschöpfung & Brain Fog</h3>
              <p className="text-stone-600">
                Trotz Schlaf fühlst du dich müde, kannst dich schlecht konzentrieren und bist ständig erschöpft?
              </p>
            </Card>
            
            <Card className="p-6 border-none shadow-md hover:shadow-lg transition-shadow bg-white">
              <h3 className="font-bold text-xl mb-3 text-stone-800">Stress & Nervosität</h3>
              <p className="text-stone-600">
                Du kommst nicht zur Ruhe, das Nervensystem ist überlastet und alles fühlt sich anstrengend an?
              </p>
            </Card>
            
            <Card className="p-6 border-none shadow-md hover:shadow-lg transition-shadow bg-white">
              <h3 className="font-bold text-xl mb-3 text-stone-800">Überforderung durch Ernährungstrends</h3>
              <p className="text-stone-600">
                So viele widersprüchliche Informationen – du suchst einen einfachen, natürlichen Weg?
              </p>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-xl text-stone-700 mb-6 font-medium">
              Wenn du dich hier wiederfindest, kann ich dir helfen.
            </p>
            <Button size="lg" asChild className="bg-emerald-700 hover:bg-emerald-800 text-white">
              <Link href="/angebote">Meine Angebote entdecken</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Mein Ansatz */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-serif text-stone-800">
            Mein Ansatz: Zurück zum Ursprung
          </h2>
          <p className="text-center text-stone-600 mb-12 max-w-3xl mx-auto text-lg">
            Keine komplizierten Diäten, keine starren Regeln – sondern ein Weg zurück zu echten Lebensmitteln und natürlicher Gesundheit
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits?.map((benefit, index) => (
              <div key={index} className="flex flex-col items-center text-center p-6 rounded-lg bg-stone-50 hover:bg-stone-100 transition-colors">
                <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                  <benefit.icon className="w-7 h-7 text-emerald-700" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-stone-800">{benefit?.title}</h3>
                <p className="text-stone-600 text-sm">{benefit?.description}</p>
              </div>
            )) ?? []}
          </div>
        </div>
      </section>

      {/* Qualifikationen */}
      <section className="py-20 px-4 bg-stone-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-serif text-stone-800">
            Fundierte Ausbildung trifft gelebte Praxis
          </h2>
          <p className="text-center text-stone-600 mb-12 text-lg">
            Meine Qualifikationen basieren auf wissenschaftlicher Ernährungslehre und funktioneller Medizin – verbunden mit echter Lebenserfahrung
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {qualifications?.map((qual, index) => (
              <div key={index} className="flex items-start gap-3 p-5 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
                <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="text-stone-700 font-medium">{qual}</span>
              </div>
            )) ?? []}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild className="border-emerald-700 text-emerald-700 hover:bg-emerald-50">
              <Link href="/ueber-mich">
                Mehr über meinen Weg erfahren
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-emerald-700 to-emerald-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
            Bereit für den ersten Schritt?
          </h2>
          <p className="text-xl mb-8 text-emerald-50">
            Lass uns in einem kostenlosen 15-Minuten-Gespräch schauen, wie ich dich unterstützen kann.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-white text-emerald-800 hover:bg-stone-100">
              <Link href="https://calendly.com/timo-kaiser96/kennenlernen" target="_blank" rel="noopener noreferrer">
                Kostenloses Kennenlerngespräch buchen
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-emerald-600">
              <Link href="/kontakt">Nachricht schreiben</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
