const MemesSection = () => {
  return (
    <section className="py-20 px-4 bg-french-cream">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-dark-text mb-16">
          Community Memes
        </h2>
        
        <div className="bg-french-blanc p-12 rounded-2xl border-2 border-dashed border-border text-center">
          <div className="text-6xl mb-6">🎨</div>
          <h3 className="text-2xl font-bold text-dark-text mb-4">Coming Soon!</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Post your memes on Twitter with <span className="font-bold text-french-bleu">#ShibaInParis</span> to appear here soon. 
            <br />
            Show us your best $SIP content! 🐕🇫🇷
          </p>
        </div>
      </div>
    </section>
  );
};

export default MemesSection;