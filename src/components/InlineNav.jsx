import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { personaVariants } from '../constants/animations';

const NAV_ITEMS = [
  { label: 'Work', href: '/work' },
  { label: 'Writing', href: '/writing' },
  { label: 'SenseGuard', href: '/senseguard' },
];

const linkClass = (isActive) =>
  `relative font-['IBM_Plex_Mono'] text-xs font-bold uppercase tracking-widest transition-colors inline-flex items-center min-h-[44px] px-1 ${
    isActive
      ? 'text-cmyk-magenta'
      : 'text-black hover:text-cmyk-magenta'
  }`;

export default function InlineNav() {
  const location = useLocation();

  return (
    <motion.nav
      aria-label="Site sections"
      variants={personaVariants.item}
      className="relative flex items-center justify-center py-2 px-[5.75rem] sm:px-24 border-b border-black"
    >
      <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
        {NAV_ITEMS.map((item) => {
          const isActive = location.pathname === item.href;

          return (
            <Link
              key={item.label}
              to={item.href}
              className={linkClass(isActive)}
            >
              {item.label}
              {isActive && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute bottom-1 left-0 right-0 h-0.5 bg-cmyk-magenta"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
            </Link>
          );
        })}
      </div>
      <a
        href="https://vvasa33.neocities.org/"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute right-0 top-1/2 -translate-y-1/2 inline-flex min-h-[44px] items-center justify-center"
      >
        <img
          src="https://vvasa33.neocities.org/assets/buttons/vvasa33.gif"
          width={88}
          height={31}
          alt="vvasa33"
          decoding="async"
          className="block h-auto w-[72px] sm:w-[88px] max-w-full aspect-[88/31] object-contain [image-rendering:pixelated]"
        />
      </a>
    </motion.nav>
  );
}
