"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navigation } from "@/constants/navigation";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-[#181818]">
      <div className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-4 h-2 bg-pink-500 rounded-full" />
          <span className="text-lg font-semibold tracking-wide flex items-center">
            FIGMA
            <span className="ml-1 flex items-center">
              L
              <span
                className=" mx-0.5 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[10px] border-b-blue-500 translate-y-[-1px]"
              />
              ND
            </span>
          </span>
        </div>

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

        <div className="flex items-center gap-4">

          <button className="px-6 py-2 border border-white/40 rounded-md text-sm hover:bg-white hover:text-black transition-all">
            Login
          </button>

          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

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
          </nav>
        </div>
      )}
    </header>
  );
}
