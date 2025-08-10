import type React from 'react'
import { useEffect, useRef, useState } from 'react'
import posterImg from '@/assets/turntable-hero.jpg'
import { Slider } from '@/components/ui/slider'

const TurntableHero = () => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [volume, setVolume] = useState(0.8)
  const [isScratching, setIsScratching] = useState(false)
  const angleRef = useRef<number | null>(null)
  const secondsPerRevolution = 4

  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    v.volume = volume
    if (volume > 0) v.muted = false
  }, [volume])

  const getAngle = (clientX: number, clientY: number) => {
    const el = containerRef.current
    if (!el) return 0
    const rect = el.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    return Math.atan2(clientY - cy, clientX - cx)
  }

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    containerRef.current?.setPointerCapture(e.pointerId)
    setIsScratching(true)
    angleRef.current = getAngle(e.clientX, e.clientY)
    videoRef.current?.pause()
  }
  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isScratching || angleRef.current === null || !videoRef.current) return
    const newAngle = getAngle(e.clientX, e.clientY)
    let delta = newAngle - angleRef.current
    if (delta > Math.PI) delta -= 2 * Math.PI
    if (delta < -Math.PI) delta += 2 * Math.PI
    const secondsDelta = (delta / (2 * Math.PI)) * secondsPerRevolution
    const v = videoRef.current
    const duration = v.duration || Number.POSITIVE_INFINITY
    v.currentTime = Math.max(0, Math.min(duration, v.currentTime + secondsDelta))
    angleRef.current = newAngle
  }
  const endScratch = () => {
    setIsScratching(false)
    angleRef.current = null
    videoRef.current?.play()
  }

  return (
    <section className="relative px-0 pt-10 md:pt-14 pb-0">
      <div className="relative max-w-6xl mx-auto w-full px-4">
        <div className="w-full flex items-center justify-center">
          <div className="turntable-frame raccoon-soft-shadow" aria-label="DJ turntable video">
            <div className="absolute inset-3 rounded-full overflow-hidden">
              <video
                ref={videoRef}
                className="h-full w-full object-cover"
                src="/videos/VID_20250808_145937_636.mp4"
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
            <div
              ref={containerRef}
              className="absolute inset-0 rounded-full cursor-grab active:cursor-grabbing touch-none"
              aria-label="Scratch the record surface"
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={endScratch}
              onPointerCancel={endScratch}
              onPointerLeave={() => { if (isScratching) endScratch() }}
            />
          </div>
        </div>

        <header className="max-w-2xl mx-auto text-center space-y-4 mt-8 animate-fade-in">
          <h1 className="font-display text-4xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            PEDRO THE DEGEN RACCOON
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            just dance to the tune.
          </p>
          <p className="text-sm text-accent font-semibold">
            CTO just launched • 48h Wall of Fame • No roadmap, only vibes
          </p>
          <div className="pt-2 max-w-md mx-auto">
            <label className="flex items-center justify-between text-sm text-muted-foreground mb-2">
              <span>Volume</span>
              <span className="font-medium">{Math.round(volume * 100)}%</span>
            </label>
            <Slider
              value={[Math.round(volume * 100)]}
              onValueChange={(v) => setVolume((v?.[0] ?? 0) / 100)}
              aria-label="Volume"
              max={100}
              step={1}
            />
          </div>
        </header>
      </div>
    </section>
  )
}

export default TurntableHero
