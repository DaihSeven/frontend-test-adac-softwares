import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-black">
      {/* Gradiente do fundo */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#111] via-black to-black" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 text-center">
        {/* Texto */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-white">
          Work at the
          <br />
          speed of
          <br />
          thought
        </h1>

        <p className="text-gray-400 max-w-2xl mx-auto mb-10">
          Most calendars are designed for teams. Slate is designed for
          freelancers who want a simple way to plan their schedule.
        </p>

        {/* Botões */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-medium">
            Try For Free
          </button>
          <button className="px-8 py-3 border border-white/20 hover:bg-white hover:text-black rounded-md font-medium">
            Learn More
          </button>
        </div>

        {/* Imagem */}
        <div className="relative">
          <Image
            src="/images/herobg.png"
            alt="Dashboard preview"
            width={1200}
            height={800}
            className="mx-auto"
          />

          {/* Sombra / névoa inferior */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent via-black/60 to-black" />
        </div>
      </div>
    </section>
  );
}
