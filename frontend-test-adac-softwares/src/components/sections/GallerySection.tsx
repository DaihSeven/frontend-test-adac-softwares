import Image from "next/image";

export default function GallerySection() {
  const galleryImages = {
    row1: [
      { src: "/images/gallery/drone.png", alt: "Drone view" },
      { src: "/images/gallery/tablet.png", alt: "Tablet on blue" },
      { src: "/images/gallery/office.png", alt: "Office workspace" },
      { src: "/images/gallery/workspace.png", alt: "Do more workspace" },
    ],
    row2: [
      { src: "/images/gallery/code.png", alt: "Code on laptop", large: true },
      { src: "/images/gallery/design.png", alt: "Design tools" },
      { src: "/images/gallery/camera.png", alt: "Camera lens" },
    ],
  };

  return (
    <section className="w-full py-20 bg-[#181818]">
      <div className="mx-auto max-w-7xl px-6">
       
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-4">Gallery</h2>
          <p className="text-gray-400 text-base max-w-2xl mx-auto">
            We focus on ergonomics and meeting you where you work.
            <br />
            It&apos;s only a keystroke away.
          </p>
        </div>

        <div className="mb-12">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            {galleryImages.row1.map((image, index) => (
              <div
                key={index}
                className="aspect-square rounded-lg overflow-hidden relative group"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.row2.map((image, index) => (
              <div
                key={index}
                className={`rounded-lg overflow-hidden relative group ${
                  image.large
                    ? "aspect-square md:aspect-[2/1] md:col-span-2"
                    : "aspect-square"
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <button className="px-8 py-3 border border-white/20 hover:bg-white hover:text-black font-medium transition-all duration-200">
            See more
          </button>
        </div>
      </div>
    </section>
  );
}