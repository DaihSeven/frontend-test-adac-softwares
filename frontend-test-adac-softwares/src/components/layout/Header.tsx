"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navigation } from "@/constants/navigation";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full">
      <div className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">
          {/* Placeholder do ícone */}
          <div className="w-2 h-2 bg-pink-500 rounded-full" />
          <span className="text-lg font-semibold tracking-wide">
            FIGMA<span className="text-blue-500 ml-1">LAND</span>
          </span>
        </div>

        {/* Desktop menu */}
        <nav className="hidden md:flex items-center gap-10 text-sm text-gray-300">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop login */}
        <button className="hidden md:block px-8 py-2 border border-white/40 rounded-md text-sm hover:bg-white hover:text-black transition-all duration-200">
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
          <nav className="flex flex-col gap-6 px-6 py-6 text-sm text-gray-300">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-white transition-colors"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}

            <button className="mt-4 w-full px-6 py-3 border border-white/30 rounded-md text-sm hover:bg-white hover:text-black transition-all">
              Login
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
