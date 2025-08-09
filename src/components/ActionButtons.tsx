import { TrendingUp } from 'lucide-react';

const ActionButtons = () => {

  return (
    <section className="w-full px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Join the Pedro Revolution! 🎉
          </h2>
          <p className="text-muted-foreground">
            Get in early, moon later! 🌙
          </p>
        </div>
        
          <div className="flex justify-center">
            <a
              href="https://app.ston.fi/swap"
              className="inline-flex items-center gap-3 rounded-full px-8 py-4 bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-lg hover:brightness-110 transition-transform hover:scale-105 animate-fade-in"
              aria-label="Buy $PEDRO on STON.fi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="transition-transform duration-300 group-hover:scale-110">
                <TrendingUp className="w-6 h-6" />
              </span>
              <span className="font-bold leading-tight text-lg">BUY $PEDRO</span>
            </a>
          </div>
      </div>
    </section>
  );
};

export default ActionButtons;