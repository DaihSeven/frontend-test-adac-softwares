export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          {/* Main Heading : texto principal*/}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Work at the
            <br />
            speed of
            <br />
            thought
          </h1>

          {/* Subtitulo */}
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto mb-10">
            Most calendars are designed for teams. Slate is designed for
            freelancers who want a simple way to plan their schedule.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-medium transition-all duration-200 w-full sm:w-auto">
              Try For Free
            </button>
            <button className="px-8 py-3 border border-white/20 hover:bg-white hover:text-black rounded-md font-medium transition-all duration-200 w-full sm:w-auto">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}