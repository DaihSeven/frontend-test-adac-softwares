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
    <footer className="w-full border-t border-white/10 py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Fingertipe</h3>
            <div className="text-sm text-gray-400 space-y-2">
              <p>7480 Mockingbird Hill undefined</p>
              <p>(239) 555-0108</p>
            </div>
          </div>

          {/* Links Columns */}
          {footerLinks.map((column, index) => (
            <div key={index}>
              <h3 className="font-semibold mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 text-center text-sm text-gray-400">
          <p>© 2026 Fingertipe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}