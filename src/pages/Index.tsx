import TurntableHero from '@/components/TurntableHero';
import ActionButtons from '@/components/ActionButtons';
import WallOfFame from '@/components/WallOfFame';

const Index = () => {
  return (
    <main className="min-h-screen">
      {/* Hero Section with DJ Turntable */}
      <TurntableHero />
      
      {/* Action Buttons Section */}
      <ActionButtons />
      
      {/* Wall of Fame Section */}
      <WallOfFame />
      
      {/* Footer */}
      <footer className="text-center py-8 px-4 border-t border-border/50">
        <p className="text-muted-foreground">
          Pedro Audio © 2024 • Built on TON Blockchain • Community Driven
        </p>
      </footer>
    </main>
  );
};

export default Index;
