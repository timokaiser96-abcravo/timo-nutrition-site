"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { GraduationCap, Heart, Compass, Mountain, Book, Bike } from "lucide-react";

export default function AboutPage() {
  const milestones = [
    {
      icon: Compass,
      year: "2015",
      title: "Work & Travel Australien",
      description: "Nach dem Abitur mehrere Monate in Australien – Gastro, Service, viel draußen. Erste Einblicke in unterschiedliche Lebensstile und Ernährungsweisen."
    },
    {
      icon: GraduationCap,
      year: "2015-2019",
      title: "Studium IBWL – und der Wendepunkt",
      description: "Studium der Internationalen Betriebswirtschaftslehre in Frankfurt (Oder). Nach einiger Zeit gemerkt: Das macht mich nicht glücklich. Entscheidung für einen anderen Weg – hin zu Gesundheit, Ernährung und Natur."
    },
    {
      icon: Mountain,
      year: "2023",
      title: "Nepal: Zurück zum Ursprung",
      description: "Mehrere Monate Freiwilligenarbeit in traditioneller Landwirtschaft – Einfachheit, Natur, Bodenständigkeit als gelebte Erfahrung."
    },
    {
      icon: Heart,
      year: "2020-2023",
      title: "Heilpraktiker-Ausbildung",
      description: "Tiefes Verständnis für Körper, Gesundheit und den Zusammenhang zwischen Lebensstil, Psyche und Wohlbefinden."
    },
    {
      icon: Compass,
      year: "2021-2023",
      title: "Bio-Markt Mönchengladbach & Innsbruck",
      description: "Arbeit im Bio-Supermarkt – täglich Kontakt mit Menschen, die mit Allergien, Unverträglichkeiten und der Frage 'Was kann ich noch essen?' zu kämpfen haben."
    },
    {
      icon: GraduationCap,
      year: "2024",
      title: "Funktionelle Medizin & Ernährungsberater A-Lizenz",
      description: "Praktikum in funktioneller Medizin in Potsdam und Abschluss der Ernährungsberater A-Lizenz – Wissenschaft trifft Praxis."
    },
    {
      icon: Book,
      year: "Heute",
      title: "Selbstständig als Ernährungs- und Gesundheitscoach",
      description: "Aktive Arbeit mit Klient:innen über Foodiary und Fiverr. Erster eigener Udemy-Kurs fertiggestellt (erscheint in Kürze)."
    }
  ];

  const values = [
    "Keine Dogmen – sondern das, was zu dir passt",
    "Echte Lebensmittel statt komplizierte Diäten",
    "Ganzheitlich: Ernährung, Alltag, Nervensystem",
    "Empathisch und verständnisvoll",
    "Natur, Einfachheit, Ursprünglichkeit"
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-stone-100 to-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif text-stone-800">
              Meine Geschichte
            </h1>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Von Australien über Nepal und funktionelle Medizin – mein Weg zur ganzheitlichen Ernährungsberatung
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/timo_fahrrad.png"
                  alt="Timo Kaiser in der Natur"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-stone-800 font-serif">
                  Wer ich bin
                </h2>
                <p className="text-stone-600 leading-relaxed mb-4">
                  Ich bin Timo, Ernährungs- und Gesundheitscoach – und jemand, der selbst einige Umwege gegangen ist, bevor er seine eigentliche Richtung gefunden hat.
                </p>
                <p className="text-stone-600 leading-relaxed mb-4">
                  Direkt nach dem Abitur bin ich erst einmal raus aus dem gewohnten Alltag: Mit einem Work & Travel Aufenthalt in <strong>Australien</strong> habe ich mehrere Monate lang in ganz unterschiedlichen Jobs gearbeitet – vor allem in der Gastronomie und im Service. Ich habe dort erlebt, wie unterschiedlich Menschen leben, essen und mit ihrem Körper umgehen.
                </p>
                <p className="text-stone-600 leading-relaxed mb-4">
                  Zurück in Deutschland habe ich dann ein Studium der Internationalen Betriebswirtschaftslehre begonnen. Auf dem Papier klang das vernünftig – in mir drin hat sich das aber nie richtig angefühlt. Nach einiger Zeit war klar: Zahlen, BWL und der klassische Karriereweg machen mich nicht glücklich. Ich habe gemerkt, dass ich mich viel mehr für Menschen, Gesundheit, Ernährung und ein einfacheres, naturverbundeneres Leben interessiere. Statt stur weiterzumachen, habe ich mich bewusst für einen anderen Weg entschieden.
                </p>
                <p className="text-stone-600 leading-relaxed">
                  Heute verbinde ich wissenschaftliches Wissen aus Ernährungsphysiologie und funktioneller Medizin mit echter Lebenserfahrung: Ich weiß, wie es ist, im Bio-Markt zu arbeiten, echte Lebensmittel einzukaufen, in Nepal auf einfache Weise zu leben – und Menschen auf Augenhöhe zu begleiten.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-serif text-stone-800">
            Wichtige Stationen
          </h2>
          
          <div className="space-y-8">
            {milestones?.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 hover:shadow-lg transition-shadow border-none shadow-md bg-stone-50">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                      <milestone.icon className="w-6 h-6 text-emerald-700" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-emerald-700 mb-1">{milestone?.year}</p>
                      <h3 className="text-xl font-bold mb-2 text-stone-800">{milestone?.title}</h3>
                      <p className="text-stone-600">{milestone?.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            )) ?? []}
          </div>
        </div>
      </section>

      {/* What I do today */}
      <section className="py-20 px-4 bg-stone-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 font-serif text-stone-800">
            Was ich heute mache
          </h2>
          <div className="prose prose-stone max-w-none">
            <p className="text-lg text-stone-600 mb-6 leading-relaxed">
              Nach und nach ist aus all diesen Erfahrungen das entstanden, was ich heute mache:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-600 mt-2 flex-shrink-0"></div>
                <span className="text-stone-600">Ich arbeite als <strong className="text-stone-800">Ernährungs- und Gesundheitscoach</strong>,</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-600 mt-2 flex-shrink-0"></div>
                <span className="text-stone-600">erstelle individuelle <strong className="text-stone-800">Ernährungspläne</strong> für Menschen mit unterschiedlichen Zielen und Beschwerden,</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-600 mt-2 flex-shrink-0"></div>
                <span className="text-stone-600">begleite Klient:innen online über Plattformen wie <strong className="text-stone-800">Fiverr</strong>,</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-600 mt-2 flex-shrink-0"></div>
                <span className="text-stone-600">arbeite mit Nutzer:innen von <strong className="text-stone-800">Foodiary</strong> zusammen,</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-600 mt-2 flex-shrink-0"></div>
                <span className="text-stone-600">und helfe ihnen, mit echten Lebensmitteln, verständlichen Zusammenhängen und einfachen Routinen wieder in ihren Körper hineinzufinden.</span>
              </li>
            </ul>
            <p className="text-lg text-stone-600 mb-6 leading-relaxed">
              Aktuell habe ich meinen ersten eigenen <strong className="text-stone-800">Online-Kurs zum Thema Ernährung und Gesundheit</strong> fertiggestellt, der in Kürze auf <strong className="text-stone-800">Udemy</strong> erscheinen wird. Darin vermittle ich die Grundlagen, die ich in meiner täglichen Arbeit nutze – praxisnah, alltagstauglich und ohne Dogmen. 
              {/* Platzhalter für Link: */}
              {/* <a href="UDEMY_LINK_HIER" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline">Zum Kurs</a> */}
            </p>
          </div>
        </div>
      </section>

      {/* Movement & Nature */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 font-serif text-stone-800">
            Bewegung & Natur
          </h2>
          <div className="prose prose-stone max-w-none">
            <p className="text-lg text-stone-600 mb-6 leading-relaxed">
              Neben der Arbeit spielt <strong className="text-stone-800">Bewegung</strong> eine große Rolle in meinem Leben. Ich mache seit über 15 Jahren Krafttraining und habe im Laufe der Zeit besonders <strong className="text-stone-800">Calisthenics</strong> und Training mit dem eigenen Körpergewicht für mich entdeckt.
            </p>
            <p className="text-lg text-stone-600 mb-6 leading-relaxed">
              Dazu kommen <strong className="text-stone-800">Gravelbike-Touren, Bikepacking und Camping</strong> – unterwegs sein mit dem Rad, draußen schlafen, einfache Mahlzeiten kochen, morgens im Wald oder in den Bergen aufwachen. Für mich gehören Ernährung, Bewegung und Natur zusammen: ein belastbarer, starker Körper, der sich im Alltag gut anfühlt, ist kein Zufall, sondern das Ergebnis vieler kleiner Entscheidungen.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 px-4 bg-stone-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 font-serif text-stone-800">
            Meine Philosophie: Zurück zum Ursprung
          </h2>
          <div className="prose prose-stone max-w-none">
            <p className="text-lg text-stone-600 mb-6 leading-relaxed">
              <strong className="text-stone-800">Zurück zum Ursprung</strong> bedeutet für mich nicht, in die Steinzeit zurückzukehren. 
              Es bedeutet, wieder Kontakt zu dem zu bekommen, was uns wirklich nährt: echte Lebensmittel, Natur, Einfachheit und Ruhe.
            </p>
            <p className="text-lg text-stone-600 mb-6 leading-relaxed">
              In einer Welt voller widerspruchlicher Ernährungstrends und komplizierter Diätpläne braucht es oft keine neue Regel, 
              sondern einen Schritt zurück: Zu den Grundlagen. Zu dem, was der Körper wirklich braucht.
            </p>
            <p className="text-lg text-stone-600 mb-8 leading-relaxed">
              Mein Ansatz ist <strong className="text-stone-800">ganzheitlich</strong> – ich schaue nicht nur auf deine Ernährung, sondern auch auf deinen Alltag, 
              deinen Schlaf, deinen Stress und dein Nervensystem. Denn alles hängt zusammen.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-4 text-stone-800">Was mir wichtig ist:</h3>
            <ul className="space-y-3">
              {values?.map((value, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-600 mt-2 flex-shrink-0"></div>
                  <span className="text-stone-600">{value}</span>
                </li>
              )) ?? []}
            </ul>
          </div>
        </div>
      </section>

      {/* Carl Jung */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 font-serif text-stone-800">
            Psychologie & Tiefenpsychologie
          </h2>
          <div className="prose prose-stone max-w-none">
            <p className="text-lg text-stone-600 mb-6 leading-relaxed">
              Ein weiterer roter Faden in meinem Leben ist mein Interesse an <strong className="text-stone-800">Psychologie und Tiefenpsychologie</strong>, besonders an den Ideen von <strong className="text-stone-800">Carl Jung</strong>. Ich habe über die Jahre mehr als zwanzig Bücher von und über Jung gelesen und mich viel mit Mythologie, Symbolik und den inneren Mustern des Menschen beschäftigt.
            </p>
            <p className="text-lg text-stone-600 leading-relaxed">
              Das taucht in meinen Coachings nicht als „Theorieunterricht" auf, prägt aber meine Haltung: ich sehe Menschen nicht nur als Körper mit Symptomen, sondern als ganze Persönlichkeiten mit Geschichten, Prägungen und unbewussten Anteilen. Diese Perspektive war auch ein wichtiger Teil meiner eigenen Neuorientierung nach dem Studium und beeinflusst, wie ich heute mit Klient:innen arbeite – ruhig, zuhörend und ohne Dogmen.
            </p>
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="py-20 px-4 bg-stone-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif text-stone-800">
            Qualifikationen & Ausbildung
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <Card className="p-6 border-none shadow-md bg-white">
              <h3 className="font-bold text-lg mb-2 text-stone-800">Ernährungsberater A-Lizenz</h3>
              <p className="text-sm text-stone-600 mb-1">Academy of Sports (seit 11/2024)</p>
              <p className="text-sm text-stone-500">Ernährungsphysiologie, Prävention, individuelle Ernährungsplanung</p>
            </Card>
            
            <Card className="p-6 border-none shadow-md bg-white">
              <h3 className="font-bold text-lg mb-2 text-stone-800">Heilpraktiker-Ausbildung</h3>
              <p className="text-sm text-stone-600 mb-1">ILS Fernschule (01/2020 – 01/2023)</p>
              <p className="text-sm text-stone-500">Anatomie, Physiologie, Pathologie, naturheilkundliche Verfahren</p>
            </Card>
            
            <Card className="p-6 border-none shadow-md bg-white">
              <h3 className="font-bold text-lg mb-2 text-stone-800">Praktikum Funktionelle Medizin</h3>
              <p className="text-sm text-stone-600 mb-1">Praxis Dr. Gunhild Wodni, Potsdam (04–05/2024)</p>
              <p className="text-sm text-stone-500">Labordiagnostik, ganzheitliche Behandlung, Patientenbetreuung</p>
            </Card>
            
            <Card className="p-6 border-none shadow-md bg-white">
              <h3 className="font-bold text-lg mb-2 text-stone-800">Praxiserfahrung Bio-Markt</h3>
              <p className="text-sm text-stone-600 mb-1">denn's Biomarkt, Mönchengladbach & Innsbruck (2021–2023)</p>
              <p className="text-sm text-stone-500">Beratung zu Lebensmitteln, Unverträglichkeiten, gesunder Produktauswahl</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-emerald-700 to-emerald-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
            Lass uns gemeinsam deinen Weg finden
          </h2>
          <p className="text-xl mb-8 text-emerald-50">
            Buche ein kostenloses Kennenlerngespräch und lass uns schauen, wie ich dich unterstützen kann.
          </p>
          <a
            href="https://calendly.com/timo-kaiser96/kennenlernen"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-emerald-800 px-8 py-3 rounded-lg font-semibold hover:bg-stone-100 transition-colors shadow-lg"
          >
            Jetzt Kennenlerngespräch buchen
          </a>
        </div>
      </section>
    </div>
  );
}