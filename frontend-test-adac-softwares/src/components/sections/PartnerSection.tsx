import Image from "next/image";

const partners = [
  { name: "Apple", src: "/images/partners/apple.png" },
  { name: "Cube", src: "/images/partners/cube.png" },
  { name: "Android", src: "/images/partners/android.png" },
  { name: "Figma", src: "/images/partners/figma.png" },
  { name: "Airbnb", src: "/images/partners/airbnb.png" },
  { name: "IBM", src: "/images/partners/ibm.png" },
];


export default function PartnersSection() {
  return (
    <section className="w-full py-28 bg-[#1a1a1a] ">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Partners
          </h2>

          <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto">
            We focus on ergonomics and meeting you where you work.
            It&apos;s only a keystroke away.
          </p>
        </div>

        {/* Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-12 gap-x-8 items-center justify-items-center mb-16">
          {partners.map((partner) => (
            <Image
              key={partner.name}
              src={partner.src}
              alt={partner.name}
              width={120}
              height={40}
              className="opacity-80 hover:opacity-100 transition-opacity duration-200"
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="px-8 py-3 border border-white/20 hover:bg-white hover:text-black rounded-md font-medium transition-all duration-200">
            All Partners
          </button>
        </div>

      </div>
    </section>
  );
}
