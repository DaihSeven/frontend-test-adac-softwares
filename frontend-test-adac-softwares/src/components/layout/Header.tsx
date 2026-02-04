"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navigation } from "@/constants/navigation";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <span className="text-xl font-bold">Fingertipe</span>

        {/* Desktop menu - ATENÇÃO: gap-8 adiciona espaçamento */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-300">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="hover:text-white transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop login */}
        <button className="hidden md:block px-6 py-2 border border-white/20 rounded-md text-sm hover:bg-white hover:text-black transition-all duration-200">
          Login
        </button>

        {/* Mobile button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-white/10">
          <nav className="flex flex-col gap-4 px-6 py-6 text-sm text-gray-300">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-white transition-colors duration-200"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}

            <button className="mt-4 w-full px-6 py-2 border border-white/20 rounded-md text-sm hover:bg-white hover:text-black transition-all duration-200">
              Login
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}