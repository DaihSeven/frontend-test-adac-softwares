export default function PartnersSection() {
  return (
    <section className="w-full py-20 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Partners</h2>
          <p className="text-gray-400 text-base max-w-2xl mx-auto mb-8">
            We focus on ergonomics and meeting you where you work. It&apos;s only a
            keystroke away.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="aspect-square bg-white/5 rounded-lg flex items-center justify-center hover:bg-white/10 transition-all duration-200"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600/30 to-purple-600/30 rounded" />
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="px-8 py-3 border border-white/20 hover:bg-white hover:text-black rounded-md font-medium transition-all duration-200">
            All Partners
          </button>
        </div>
      </div>
    </section>
  );
}