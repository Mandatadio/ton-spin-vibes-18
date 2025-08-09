import { SiTelegram, SiX, SiTiktok } from 'react-icons/si'

const SocialIconBar = () => {
  const socials = [
    { href: 'https://t.me/PedroCTOTON', label: 'Telegram', Icon: SiTelegram },
    { href: 'https://x.com/_PEDROTON?t=qPVKYqS0H9mKDGy5aFR4Ag&s=09', label: 'X', Icon: SiX },
    { href: 'https://www.tiktok.com/@pedro.on.ton?_t=ZS-8yj9JGsIHJc&_r=1', label: 'TikTok', Icon: SiTiktok },
  ]

  return (
    <section className="w-full px-4 mt-3" aria-label="Pedro community social links">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-center gap-4">
          {socials.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="rounded-full p-3 md:p-4 border bg-card/60 backdrop-blur hover:shadow-md hover-scale focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-all"
            >
              <Icon size={24} />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SocialIconBar
