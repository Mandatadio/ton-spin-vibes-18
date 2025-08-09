import posterImg from '@/assets/turntable-hero.jpg'

const TurntableHero = () => {
  return (
    <section className="relative min-h-[70vh] px-0 pt-12 md:pt-16 pb-0 overflow-hidden">
      {/* Background video */}
      <div aria-hidden className="absolute inset-0">
        <video
          className="h-full w-full object-cover"
          src="/videos/turntable.mp4"
          autoPlay
          muted
          loop
          playsInline
          poster={posterImg}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/60 to-background/20" />
      </div>

      {/* Foreground content */}
      <div className="relative max-w-6xl mx-auto w-full px-4 py-16 md:py-24">
        <header className="max-w-2xl space-y-4 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            PEDRO THE DEGEN RACCOON
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            Pepe-ish energy on TON. Loud. Chaotic. Community-powered.
          </p>
          <p className="text-base text-accent font-semibold">
            CTO just launched • 48h Wall of Fame • No roadmap, only vibes
          </p>
        </header>
      </div>
    </section>
  )
}

export default TurntableHero
