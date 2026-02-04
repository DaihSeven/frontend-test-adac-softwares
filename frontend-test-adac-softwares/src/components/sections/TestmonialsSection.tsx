export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Claire Bell",
      role: "Designer",
      content:
        "Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Slate helps you see how many more days you need to work to reach your financial goal for the month and year.",
    },
    {
      name: "Ralph Fisher",
      role: "Designer",
      content:
        "Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Slate helps you see how many more days you need to work to reach your financial goal for the month and year.",
    },
    {
      name: "Francisco Lane",
      role: "Designer",
      content:
        "Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Slate helps you see how many more days you need to work to reach your financial goal for the month and year.",
    },
    {
      name: "Jorge Murphy",
      role: "Designer",
      content:
        "Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Slate helps you see how many more days you need to work to reach your financial goal for the month and year.",
    },
  ];

  return (
    <section className="w-full py-20 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Testimonials</h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/5 p-6 rounded-lg border border-white/10 hover:border-blue-600/50 transition-all duration-200"
            >
              {/* Avatar : acahr as imagens*/}
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 mb-4" />

              {/* Name and Role */}
              <h4 className="font-semibold text-lg mb-1">{testimonial.name}</h4>
              <p className="text-sm text-gray-400 mb-4">{testimonial.role}</p>

              {/* Content */}
              <p className="text-sm text-gray-300 leading-relaxed">
                {testimonial.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}