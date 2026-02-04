import Header from "@/components/layout/Header";

import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";


export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <HeroSection/>
        <FeaturesSection/>
      </main>
      <Footer />
    </>
  );
}