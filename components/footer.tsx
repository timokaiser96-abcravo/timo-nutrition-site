import Link from "next/link";
import { Mail, Phone, Leaf } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="w-6 h-6 text-emerald-500" />
              <span className="font-bold text-xl text-white font-serif">Timo Kaiser</span>
            </div>
            <p className="text-sm text-stone-400">
              Ernährungs- und Gesundheitscoach für ganzheitliche Gesundheit und natürliche Ernährung.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white mb-4">Navigation</h3>
            <div className="flex flex-col gap-2">
              <Link href="/" className="text-sm hover:text-emerald-500 transition-colors">
                Start
              </Link>
              <Link href="/ueber-mich" className="text-sm hover:text-emerald-500 transition-colors">
                Über mich
              </Link>
              <Link href="/angebote" className="text-sm hover:text-emerald-500 transition-colors">
                Angebote
              </Link>
              <Link href="/kontakt" className="text-sm hover:text-emerald-500 transition-colors">
                Kontakt
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-white mb-4">Kontakt</h3>
            <div className="flex flex-col gap-3">
              <a href="mailto:timo.kaiser96@googlemail.com" className="flex items-center gap-2 text-sm hover:text-emerald-500 transition-colors">
                <Mail className="w-4 h-4" />
                timo.kaiser96@googlemail.com
              </a>
              <a href="tel:+491773439535" className="flex items-center gap-2 text-sm hover:text-emerald-500 transition-colors">
                <Phone className="w-4 h-4" />
                +49 177 3439535
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-8 text-center text-sm text-stone-500">
          <p>© {new Date()?.getFullYear?.()} Timo Kaiser. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}
