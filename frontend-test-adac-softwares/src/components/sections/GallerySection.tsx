export default function GallerySection() {
  return (
    <section className="w-full py-20 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Gallery</h2>
          <p className="text-gray-400 text-base max-w-2xl mx-auto mb-8">
            We focus on ergonomics and meeting you where you work. It's only a
            keystroke away.
          </p>
        </div>

        {/* Gallery Grid: acahhr imagem dos produtos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="aspect-square bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-lg"
            />
          ))}
        </div>

        <div className="text-center">
          <button className="px-8 py-3 border border-white/20 hover:bg-white hover:text-black rounded-md font-medium transition-all duration-200">
            See more
          </button>
        </div>
      </div>
    </section>
  );
}