import { Card } from "@/components/ui/card";

const WhySIP = () => {
  const features = [
    {
      emoji: "🐕",
      title: "Universal Meme",
      description: "Everyone loves Shibas"
    },
    {
      emoji: "🇫🇷",
      title: "French Spirit", 
      description: "Chic, croissants and memes"
    },
    {
      emoji: "🚀",
      title: "Pump Potential",
      description: "A good meme needs no utility"
    }
  ];

  return (
    <section className="py-20 px-4 bg-french-blanc">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-dark-text mb-16">
          Why $SIP?
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-8 text-center border-2 border-border hover:border-french-rouge transition-colors duration-300 bg-french-cream">
              <div className="text-6xl mb-6">{feature.emoji}</div>
              <h3 className="text-2xl font-bold text-dark-text mb-4">{feature.title}</h3>
              <p className="text-lg text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySIP;