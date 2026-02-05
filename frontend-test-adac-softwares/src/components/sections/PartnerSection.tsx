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
    <section className="w-full py-28 bg-[#181818]">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl  mb-6">
            Partners
          </h2>

          <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto">
            We focus on ergonomics and meeting you where you work.
            It&apos;s only a keystroke away.
          </p>
        </div>

        <div className="grid grid-cols-3 lg:grid-cols-6 gap-y-12 gap-x-8 items-center justify-items-center mb-16">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="relative h-12 w-full max-w-[120px]"
            >
              <Image
                src={partner.src}
                alt={partner.name}
                fill
                className="object-contain opacity-80 hover:opacity-100 transition-opacity duration-200"
              />
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="px-8 py-3 border border-white/20 hover:bg-white hover:text-black  font-medium transition-all duration-200">
            All Partners
          </button>
        </div>

      </div>
    </section>
  );
}
