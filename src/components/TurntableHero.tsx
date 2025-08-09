import raccoonSticker from '@/assets/pedro-raccoon-sticker.png'

const TurntableHero = () => {
  return (
    <section className="relative flex items-center min-h-[70vh] px-4 pt-16 pb-8">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <header className="text-center md:text-left space-y-4 animate-fade-in">
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

        <div className="flex justify-center md:justify-end">
          <img
            src={raccoonSticker}
            alt="Pedro raccoon meme sticker"
            className="sticker-image w-64 h-64 md:w-80 md:h-80 object-contain"
            loading="eager"
          />
        </div>
      </div>
    </section>
  )
}

export default TurntableHero
