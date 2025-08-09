import { ExternalLink, TrendingUp } from 'lucide-react';

const ActionButtons = () => {
  const buttons = [
    {
      label: '🚀 BUY $PEDRO',
      icon: <TrendingUp className="w-6 h-6" />,
      href: 'https://app.ston.fi/swap',
      className: 'sticker-buy',
      primary: true,
    },
    {
      label: '📊 DEX CHART',
      icon: <ExternalLink className="w-6 h-6" />,
      href: 'https://dexscreener.com/search?q=EQBGtsm26tdn6bRjZrmLZkZMqk-K8wd4R66k52ntPU4UzcV0',
      className: 'sticker-chart',
    },
  ];

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
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
          {buttons.map((button, index) => {
            const tilts = ['-rotate-3', 'rotate-2', '-rotate-2', 'rotate-3', '-rotate-1']
            const tilt = tilts[index % tilts.length]
            return (
              <a
                key={button.label}
                href={button.href}
                className={`sticker-btn ${button.className} ${tilt} animate-fade-in group`}
                aria-label={`Go to ${button.label}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <span className="transition-transform duration-300 group-hover:scale-110">
                  {button.icon}
                </span>
                <span className="font-bold text-center leading-tight">{button.label}</span>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default ActionButtons;