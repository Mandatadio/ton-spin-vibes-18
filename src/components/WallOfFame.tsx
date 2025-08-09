import { useState, useEffect } from 'react';
import { Twitter, Clock, Users, PawPrint } from 'lucide-react';

interface FameEntry {
  id: string;
  username: string;
  twitterHandle: string;
  videoTitle: string;
  uploadTime: Date;
  views: number;
  thumbnail: string;
}

const WallOfFame = () => {
  const [fameEntries, setFameEntries] = useState<FameEntry[]>([]);

  // Mock data for demonstration
  useEffect(() => {
    const mockEntries: FameEntry[] = [
      {
        id: '1',
        username: 'CryptoVibes_DJ',
        twitterHandle: '@cryptovibes_dj',
        videoTitle: 'Pedro Audio Mix #1 🔥',
        uploadTime: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
        views: 1247,
        thumbnail: 'https://images.unsplash.com/photo-1571266028243-d220ee4e4834?w=400&h=300&fit=crop'
      },
      {
        id: '2',
        username: 'TonChainBeats',
        twitterHandle: '@tonchainbeats',
        videoTitle: 'PEDRO goes VIRAL! 🚀',
        uploadTime: new Date(Date.now() - 5 * 60 * 60 * 1000), // 5 hours ago
        views: 892,
        thumbnail: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop'
      },
      {
        id: '3',
        username: 'MemeCoinMaster',
        twitterHandle: '@memecoinmaster',
        videoTitle: 'Why PEDRO is the next 100x',
        uploadTime: new Date(Date.now() - 8 * 60 * 60 * 1000), // 8 hours ago
        views: 2156,
        thumbnail: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&h=300&fit=crop'
      },
      {
        id: '4',
        username: 'AudioApe_NFT',
        twitterHandle: '@audioape_nft',
        videoTitle: 'Pedro Audio Community Vibes ✨',
        uploadTime: new Date(Date.now() - 12 * 60 * 60 * 1000), // 12 hours ago
        views: 743,
        thumbnail: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=400&h=300&fit=crop'
      },
      {
        id: '5',
        username: 'BlockchainBeat',
        twitterHandle: '@blockchainbeat',
        videoTitle: 'CTO Launch Analysis 📊',
        uploadTime: new Date(Date.now() - 16 * 60 * 60 * 1000), // 16 hours ago
        views: 1834,
        thumbnail: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=300&fit=crop'
      },
      {
        id: '6',
        username: 'TONTokenTalk',
        twitterHandle: '@tontokentalk',
        videoTitle: 'Pedro on TON: Game Changer? 🎮',
        uploadTime: new Date(Date.now() - 20 * 60 * 60 * 1000), // 20 hours ago
        views: 1092,
        thumbnail: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=300&fit=crop'
      }
    ];

    setFameEntries(mockEntries);
  }, []);

  const formatTimeAgo = (date: Date) => {
    const hours = Math.floor((Date.now() - date.getTime()) / (1000 * 60 * 60));
    if (hours < 1) return 'Just now';
    if (hours === 1) return '1 hour ago';
    return `${hours} hours ago`;
  };

  const formatViews = (views: number) => {
    if (views >= 1000) {
      return `${(views / 1000).toFixed(1)}k`;
    }
    return views.toString();
  };

  const getTimeRemaining = (uploadTime: Date) => {
    const expiryTime = new Date(uploadTime.getTime() + 48 * 60 * 60 * 1000); // 48 hours from upload
    const remaining = expiryTime.getTime() - Date.now();
    const hoursLeft = Math.floor(remaining / (1000 * 60 * 60));
    return Math.max(0, hoursLeft);
  };

  return (
    <section className="w-full px-4 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Wall of Fame
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Featuring the most popular Pedro video chats from our community. Each video stays live for exactly 48 hours!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {fameEntries.map((entry, index) => (
            <div
              key={entry.id}
              className="fame-card group"
              style={{
                animationDelay: `${index * 150}ms`
              }}
            >
              <div className="relative mb-4 flex items-center justify-center">
                <div className="relative raccoon-ears raccoon-soft-shadow w-36 h-36 md:w-44 md:h-44 rounded-full border-2 border-border/60 bg-card/60 p-1">
                  <div className="relative w-full h-full rounded-full overflow-hidden">
                    <img
                      src={entry.thumbnail}
                      alt={entry.videoTitle}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-70" />
                  </div>
                  <div className="absolute -top-3 -left-3 bg-accent/90 text-accent-foreground px-2 py-1 rounded-full text-[10px] flex items-center gap-1 border border-accent/50 shadow-lg backdrop-blur-sm">
                    <PawPrint className="w-3 h-3" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-black/70 text-white px-2 py-1 rounded-full text-xs flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    {formatViews(entry.views)}
                  </div>
                  <div className="absolute -bottom-2 -left-2 bg-black/70 text-white px-2 py-1 rounded-full text-xs flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {getTimeRemaining(entry.uploadTime)}h left
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-foreground line-clamp-2">
                  {entry.videoTitle}
                </h3>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-primary">{entry.username}</p>
                    <p className="text-sm text-muted-foreground">{formatTimeAgo(entry.uploadTime)}</p>
                  </div>
                </div>

                {/* Follow Button */}
                <a
                  href={`https://twitter.com/${entry.twitterHandle.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="action-btn-outline w-full flex items-center justify-center gap-2 text-center"
                >
                  <Twitter className="w-4 h-4" />
                  <span>Follow on X</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            Our team curates the most trending Pedro videos across socials • Videos automatically cycle every 48 hours
          </p>
        </div>
      </div>
    </section>
  );
};

export default WallOfFame;