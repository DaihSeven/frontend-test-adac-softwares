import Image from "next/image";
import { CheckCircle, Infinity, Layers } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: CheckCircle,
      title: "A single source of truth",
      description:
        "When you add work to your Slate calendar we automatically calculate useful insights",
    },
    {
      icon: Layers,
      title: "Intuitive interface",
      description:
        "When you add work to your Slate calendar we automatically calculate useful insights",
    },
    {
      icon: Infinity,
      title: "Or with rules",
      description:
        "When you add work to your Slate calendar we automatically calculate useful insights",
    },
  ];

  return (
    <section className="bg-[#181818] py-24">
      <div className="mx-auto max-w-7xl px-8 lg:px-20">

        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-300 uppercase tracking-[0.2em]">
            FEATURES
          </h2>

          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Most calendars are designed for teams. Slate is designed for
            freelancers who want a simple way to plan their schedule.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 lg:gap-40 items-center">

          <div className="relative">
            <Image
              src="/images/features.png" 
              alt="Features dashboard"
              width={700}
              height={500}
              className="mx-auto"
            />

          </div>

          <div className="space-y-10">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div key={index} className="flex gap-4">
 
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600/10">
                    <Icon className="h-5 w-5 text-blue-500" />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
