import Header from "@/components/layout/Header";

import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import ContentsSection from "@/components/sections/ContentsSection";
import GallerySection from "@/components/sections/GallerySection";
import PartnerSection from "@/components/sections/PartnerSection";
import TestmonialsSection from "@/components/sections/TestmonialsSection";
import CTASection from "@/components/sections/CtaSection";
export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <HeroSection/>
        <FeaturesSection/>
        <ContentsSection/>
        <GallerySection/>
        <PartnerSection/>
        <TestmonialsSection/>
        <CTASection/>
      </main>
      <Footer />
    </>
  );
}