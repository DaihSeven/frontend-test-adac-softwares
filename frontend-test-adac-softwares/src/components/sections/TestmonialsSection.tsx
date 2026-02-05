import Image from "next/image";

const testimonials = [
  {
    name: "Claire Bell",
    role: "Designer",
    image: "/images/testimonials/claire.png",
    content:
      "Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Slate helps you see how many more days you need to work to reach your financial goal for the month and year.",
  },
  {
    name: "Francisco Lane",
    role: "Designer",
    image: "/images/testimonials/francisco.png",
    content:
      "Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Slate helps you see how many more days you need to work to reach your financial goal for the month and year.",
  },
  {
    name: "Ralph Fisher",
    role: "Designer",
    image: "/images/testimonials/ralph.png",
    content:
      "Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Slate helps you see how many more days you need to work to reach your financial goal for the month and year.",
  },
  {
    name: "Jorge Murphy",
    role: "Designer",
    image: "/images/testimonials/jorge.png",
    content:
      "Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Slate helps you see how many more days you need to work to reach your financial goal for the month and year.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="w-full py-28 bg-[#1a1a1a]">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Testimonials
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-y-12 gap-x-10 justify-items-center">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="
                border border-white/20
                rounded-xl
                bg-[#111111]
                p-10
                max-w-md
                w-full
              "
            >
              {/* Avatar */}
              <div className="flex items-center gap-4 mb-6">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={48}
                  height={48}
                  className="rounded-full"
                />

                <div>
                  <h4 className="font-semibold leading-tight">
                    {item.name}
                  </h4>
                  <p className="text-sm text-gray-400">
                    {item.role}
                  </p>
                </div>
              </div>

              {/* Content */}
              <p className="text-gray-300 text-sm leading-relaxed">
                {item.content}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
