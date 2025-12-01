"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Start" },
  { href: "/ueber-mich", label: "Über mich" },
  { href: "/angebote", label: "Angebote" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-stone-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-stone-800 hover:text-emerald-700 transition-colors">
            <Leaf className="w-6 h-6 text-emerald-700" />
            <span className="font-serif">Timo Kaiser</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks?.map((link) => (
              <Link
                key={link?.href}
                href={link?.href ?? "/"}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-emerald-700",
                  pathname === link?.href ? "text-emerald-700" : "text-stone-600"
                )}
              >
                {link?.label}
              </Link>
            )) ?? []}
            <Button size="sm" asChild className="bg-emerald-700 hover:bg-emerald-800 text-white">
              <Link href="https://calendly.com/timo-kaiser96/kennenlernen" target="_blank" rel="noopener noreferrer">
                Kennenlerngespräch
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-stone-600 hover:text-emerald-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menü"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-stone-200">
            <div className="flex flex-col gap-4">
              {navLinks?.map((link) => (
                <Link
                  key={link?.href}
                  href={link?.href ?? "/"}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-emerald-700 px-2 py-1",
                    pathname === link?.href ? "text-emerald-700 bg-emerald-50 rounded" : "text-stone-600"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link?.label}
                </Link>
              )) ?? []}
              <Button size="sm" asChild className="bg-emerald-700 hover:bg-emerald-800 text-white w-full">
                <Link 
                  href="https://calendly.com/timo-kaiser96/kennenlernen" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Kennenlerngespräch
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
