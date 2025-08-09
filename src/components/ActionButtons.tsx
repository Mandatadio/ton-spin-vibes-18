import { ExternalLink, MessageCircle, Twitter, Music, TrendingUp } from 'lucide-react';

const ActionButtons = () => {
  const buttons = [
    {
      label: '🚀 BUY $PEDRO',
      icon: <TrendingUp className="w-6 h-6" />,
      href: '#buy-token',
      className: 'meme-btn-buy',
      primary: true
    },
    {
      label: '📊 DEX CHART',
      icon: <ExternalLink className="w-6 h-6" />,
      href: '#dexscreener',
      className: 'meme-btn-chart'
    },
    {
      label: '💬 TELEGRAM',
      icon: <MessageCircle className="w-6 h-6" />,
      href: 'https://t.me/PedroCTOTON',
      className: 'meme-btn-telegram'
    },
    {
      label: '🐦 TWITTER',
      icon: <Twitter className="w-6 h-6" />,
      href: 'https://x.com/_PEDROTON?t=qPVKYqS0H9mKDGy5aFR4Ag&s=09',
      className: 'meme-btn-social'
    },
    {
      label: '🎵 TIKTOK',
      icon: <Music className="w-6 h-6" />,
      href: 'https://www.tiktok.com/@pedro.on.ton?_t=ZS-8yj9JGsIHJc&_r=1',
      className: 'meme-btn-tiktok'
    }
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
          {buttons.map((button, index) => (
            <a
              key={button.label}
              href={button.href}
              className={`${button.className} animate-fade-in group`}
              aria-label={`Go to ${button.label}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <span className="transition-transform duration-300 group-hover:scale-110">
                {button.icon}
              </span>
              <span className="font-bold text-center leading-tight">{button.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActionButtons;