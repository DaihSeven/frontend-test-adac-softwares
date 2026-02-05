import { MapPin, Phone, Twitter, Facebook, Linkedin } from "lucide-react";

export default function Footer() {
  const footerLinks = [
    {
      title: "Fingertipe",
      links: ["Home", "Examples", "Pricing", "Updates"],
    },
    {
      title: "Resources",
      links: ["Home", "Examples", "Pricing", "Updates"],
    },
    {
      title: "About",
      links: ["Home", "Examples", "Pricing", "Updates"],
    },
  ];

  return (
    <footer className="w-full py-20 bg-[#181818]">
      <div className="mx-auto max-w-7xl px-16 sm:px-20 lg:px-24">
        <div className="grid md:grid-cols-4 gap-20 items-start">

          {footerLinks.map((column, index) => (
            <div key={index}>
              <h3 className="font-semibold mb-6">{column.title}</h3>
              <ul className="space-y-4">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-sm text-white hover:text-gray-400 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="space-y-6">
            <div className="flex items-start gap-3 text-white font-semibold text-sm">
              <MapPin className="w-5 h-5 text-white" />
              <span>7480 Mockingbird Hill undefined</span>
            </div>

            <div className="flex items-start gap-3 text-white font-semibold text-sm">
              <Phone className="w-5 h-5 text-white" />
              <span>(239) 555-0108</span>
            </div>

            <div className="flex gap-6 pt-2">
              <Twitter className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
              <Facebook className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
              <Linkedin className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
