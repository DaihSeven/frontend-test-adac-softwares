export default function FeaturesSection() {
  const features = [
    {
      title: "A single source of truth",
      description:
        "When you add work to your Slate calendar we automatically calculate useful insights",
    },
    {
      title: "Intuitive interface",
      description:
        "When you add work to your Slate calendar we automatically calculate useful insights",
    },
    {
      title: "Or with rules",
      description:
        "When you add work to your Slate calendar we automatically calculate useful insights",
    },
  ];

  return (
    <section className="w-full py-20 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header: para que é o serviço */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-gray-400 mb-4 uppercase tracking-wider">
            FEATURES
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            Most calendars are designed for teams. Slate is designed for
            freelancers who want a simple way to plan their schedule.
          </p>
        </div>

        {/* Features Grid: cada item do serviço*/}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              {/* Icon Placeholder : selecionar um icon depois*/}
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg" />
              
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}