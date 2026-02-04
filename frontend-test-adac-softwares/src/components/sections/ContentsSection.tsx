export default function ContentsSection() {
  return (
    <section className="w-full py-20 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Contents</h2>
            <p className="text-gray-400 text-base leading-relaxed mb-8">
              We focus on ergonomics and meeting you where you work. It&apos;s only a
              keystroke away.
            </p>
            
            {/* Feature List */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-3 h-3 rounded-full bg-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Work</h4>
                  <p className="text-sm text-gray-400">
                    Ever wondered if you&apos;re too reliant on a client for work? Slate
                    helps you identify.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-3 h-3 rounded-full bg-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Design with real data</h4>
                  <p className="text-sm text-gray-400">
                    Ever wondered if you&apos;re too reliant on a client for work? Slate
                    helps you identify.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex gap-4">
              <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-sm font-medium transition-all duration-200">
                Sign Up
              </button>
              <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-sm font-medium transition-all duration-200">
                Try For Free
              </button>
            </div>
          </div>

          {/* Right Image Placeholder: achar a imagem */}
          <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-lg aspect-[4/3]" />
        </div>
      </div>
    </section>
  );
}