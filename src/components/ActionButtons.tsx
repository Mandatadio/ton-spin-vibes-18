import { TrendingUp } from 'lucide-react';

const ActionButtons = () => {

  return (
    <section className="w-full px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
            Join the Pedro Revolution! 🎉
          </h2>
          <p className="text-muted-foreground">
            Get in early, moon later! 🌙
          </p>
        </div>
        
          <div className="flex justify-center">
            <a
              href="https://t.me/stonks_sniper_bot?start=id=chibhanzi=EQBGtsm26tdn6bRjZrmLZkZMqk-K8wd4R66k52ntPU4UzcV0"
              className="sticker-btn sticker-buy animate-fade-in"
              aria-label="Buy $PEDRO via Stonks Sniper Bot"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TrendingUp className="w-6 h-6" />
              <span className="font-extrabold leading-tight text-lg tracking-wide">
                BUY $PEDRO
              </span>
            </a>
          </div>
      </div>
    </section>
  );
};

export default ActionButtons;