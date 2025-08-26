import shibaHero from "@/assets/shiba-paris-hero.jpg";

const Hero = () => {
  return (
    <section className="py-16 px-4 text-center bg-french-beige">
      <div className="max-w-4xl mx-auto">
        {/* Logo/Hero Image */}
        <div className="mb-8">
          <img 
            src={shibaHero} 
            alt="ShibaInParis - Cool Shiba Inu with sunglasses in front of Eiffel Tower" 
            className="w-80 h-60 object-cover mx-auto rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        {/* Contract Address */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-dark-text mb-4">
            ShibaInParis
          </h1>
          <div className="bg-french-blanc p-6 rounded-2xl shadow-lg border border-border">
            <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">
              Contract Address
            </p>
            <p className="text-2xl md:text-3xl font-mono font-bold text-dark-text break-all">
              [INSERT TOKEN ADDRESS HERE]
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;