import Image from "next/image";

export default function ContentsSection() {
  return (
    <section className="w-full py-20 bg-[#181818]">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Contents</h2>
          <p className="text-gray-400 text-base max-w-2xl mx-auto">
            We focus on ergonomics and meeting you where you work.
            <br />
            It&apos;s only a keystroke away.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Card 1 - Work */}
          <div className="bg-white rounded-lg p-8 flex flex-col items-center text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Work</h3>
            <p className="text-gray-600 text-sm mb-6 max-w-xs">
              Ever wondered if you&apos;re too reliant on a client for work? Slate helps you identify.
            </p>
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition-all duration-200 mb-8">
              Sign Up
            </button>
            
            {/* Imagem do laptop */}
            <div className="w-full aspect-[16/10] relative">
              <Image
                src="/images/work-laptop.png"
                alt="Work dashboard preview"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg p-8 flex flex-col items-center text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Design with real data</h3>
            <p className="text-gray-600 text-sm mb-6 max-w-xs">
              Ever wondered if you&apos;re too reliant on a client for work? Slate helps you identify.
            </p>
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition-all duration-200 mb-8">
              Try For Free
            </button>
            
            {/* Imagem do dashboard escuro*/}
            <div className="w-full aspect-[16/10] relative">
              <Image
                src="/images/design-dashboard.png"
                alt="Design dashboard preview"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}