import Image from "next/image";

export default function CTASection() {
  return (
    <section className="w-full py-20  bg-[#181818]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="bg-[#2a2a2a] rounded-2xl px-8 py-10 md:px-14 md:py-12">
          <div className="grid md:grid-cols-2 items-center gap-8">
          
            <div>
              <h2 className="text-2xl md:text-4xl font-semibold leading-tight mb-6">
                OpenType features
                <br />
                and Variable fonts
              </h2>

              <button className="px-7 py-3 bg-blue-600 hover:bg-blue-700  text-white font-medium transition-all duration-200">
                Try For Free
              </button>
            </div>

            <div className="flex justify-end">
              <Image
                src="/images/cta-preview.png"
                alt="Prototype preview"
                width={400}
                height={250}
                className="rounded-lg"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
