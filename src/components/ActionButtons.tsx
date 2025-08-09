import { ExternalLink, MessageCircle, Twitter, Music, TrendingUp } from 'lucide-react';

const ActionButtons = () => {
  const buttons = [
    {
      label: 'Buy Token',
      icon: <TrendingUp className="w-5 h-5" />,
      href: '#buy-token',
      className: 'action-btn-primary',
      primary: true
    },
    {
      label: 'Dexscreener',
      icon: <ExternalLink className="w-5 h-5" />,
      href: '#dexscreener',
      className: 'action-btn-secondary'
    },
    {
      label: 'Telegram',
      icon: <MessageCircle className="w-5 h-5" />,
      href: '#telegram',
      className: 'action-btn-outline'
    },
    {
      label: 'X (Twitter)',
      icon: <Twitter className="w-5 h-5" />,
      href: '#twitter',
      className: 'action-btn-outline'
    },
    {
      label: 'TikTok',
      icon: <Music className="w-5 h-5" />,
      href: '#tiktok',
      className: 'action-btn-outline'
    }
  ];

  return (
    <section className="w-full px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
          {buttons.map((button, index) => (
            <a
              key={button.label}
              href={button.href}
              className={`${button.className} flex items-center justify-center gap-3 min-h-[60px] group`}
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <span className="transition-transform duration-300 group-hover:scale-110">
                {button.icon}
              </span>
              <span className="font-medium">{button.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActionButtons;