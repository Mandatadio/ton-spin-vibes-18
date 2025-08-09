import posterImg from '@/assets/turntable-hero.jpg'

const TurntableHero = () => {
  return (
    <section className="relative px-0 pt-10 md:pt-14 pb-0">
      <div className="relative max-w-6xl mx-auto w-full px-4">
        <div className="w-full flex items-center justify-center">
          <div className="turntable-frame raccoon-ears raccoon-soft-shadow" aria-label="DJ turntable video">
            <div className="absolute inset-3 rounded-full overflow-hidden">
              <video
                className="h-full w-full object-cover"
                src="/videos/turntable.mp4"
                autoPlay
                muted
                loop
                playsInline
                poster={posterImg}
              />
            </div>
            <div className="absolute inset-0 rounded-full pointer-events-none">
              <div className="absolute inset-[42%] rounded-full bg-background/70 border border-border" />
            </div>
          </div>
        </div>

        <header className="max-w-2xl mx-auto text-center space-y-4 mt-8 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            PEDRO THE DEGEN RACCOON
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            just dance to the tune.
          </p>
          <p className="text-sm text-accent font-semibold">
            CTO just launched • 48h Wall of Fame • No roadmap, only vibes
          </p>
        </header>
      </div>
    </section>
  )
}

export default TurntableHero
