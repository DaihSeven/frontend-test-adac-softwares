import Header from "@/components/layout/Header";

import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import ContentsSection from "@/components/sections/ContentsSection";
import GallerySection from "@/components/sections/GallerySection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <HeroSection/>
        <FeaturesSection/>
        <ContentsSection/>
        <GallerySection/>
      </main>
      <Footer />
    </>
  );
}