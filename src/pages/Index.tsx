// Update this page (the content is just a fallback if you fail to update the page)

import Hero from "@/components/Hero";
import Description from "@/components/Description"; 
import WhySIP from "@/components/WhySIP";
import CTAButton from "@/components/CTAButton";
import MemesSection from "@/components/MemesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen font-sans">
      <Hero />
      <Description />
      <WhySIP />
      <CTAButton />
      <MemesSection />
      <Footer />
    </div>
  );
};

export default Index;
