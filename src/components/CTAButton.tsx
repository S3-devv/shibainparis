import { Button } from "@/components/ui/button";

const CTAButton = () => {
  return (
    <section className="py-16 px-4 bg-french-beige">
      <div className="max-w-4xl mx-auto text-center">
        <Button 
          size="lg" 
          className="text-xl px-12 py-6 bg-gradient-to-r from-french-rouge to-french-bleu hover:scale-105 transition-all duration-300 shadow-lg text-french-blanc font-bold rounded-2xl"
          onClick={() => window.open('#', '_blank')}
        >
          Buy on Pump.fun 🚀
        </Button>
        <p className="text-sm text-muted-foreground mt-4">
          Click to trade $SIP on Pump.fun
        </p>
      </div>
    </section>
  );
};

export default CTAButton;