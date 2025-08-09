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
              href="https://t.me/stonks_sniper_bot?start=id=chibhanzi=EQBGtsm26tdn6bRjZrmLZkZMqk-K8wd4R66k52ntPU4UzcV0"
              className="group relative inline-flex items-center gap-3 rounded-full px-10 py-5 bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-lg ring-2 ring-primary/30 hover:brightness-110 transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/50 overflow-hidden animate-fade-in"
              aria-label="Buy $PEDRO via Stonks Sniper Bot"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="transition-transform duration-300 group-hover:scale-110 motion-safe:group-hover:-rotate-3">
                <TrendingUp className="w-6 h-6" />
              </span>
              <span className="font-bold leading-tight text-lg tracking-wide">
                BUY $PEDRO
              </span>
              <span className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/2 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 transition-transform duration-500 group-hover:translate-x-[250%]" />
            </a>
          </div>
      </div>
    </section>
  );
};

export default ActionButtons;