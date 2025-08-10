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
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Wall of Fame
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Featuring the most popular Pedro video chats from our community. Each video stays live for exactly 48 hours!
          </p>
        </div>

        <div className="max-w-xl mx-auto text-center py-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border-2 border-dashed border-border/60 bg-card/60 text-accent mb-4">
            <PawPrint className="w-7 h-7" />
          </div>
          <h3 className="text-2xl font-semibold">Coming soon</h3>
          <p className="text-muted-foreground mt-2">
            The Wall of Fame is being polished. Check back after launch!
          </p>
        </div>
      </div>
    </section>
  );
};

export default WallOfFame;