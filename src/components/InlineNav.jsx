import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { personaVariants } from '../constants/animations';
import portfolioData from '../data/portfolio.json';

const NAV_ITEMS = [
  { label: 'Work', href: '/work' },
  { label: 'Writing', href: '/writing' },
  { label: 'SenseGuard', href: '/senseguard' },
  { label: 'Contact', href: '/#contact', isContact: true },
];

const linkClass = (isActive) =>
  `relative font-['IBM_Plex_Mono'] text-xs font-bold uppercase tracking-widest transition-colors inline-flex items-center min-h-[44px] px-1 ${
    isActive
      ? 'text-cmyk-magenta'
      : 'text-black hover:text-cmyk-magenta'
  }`;

export default function InlineNav() {
  const location = useLocation();
  const { email } = portfolioData.personal;

  return (
    <motion.nav
      aria-label="Site sections"
      variants={personaVariants.item}
      className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 py-2 border-b border-black"
    >
      {NAV_ITEMS.map((item) => {
        const isActive = !item.isContact && location.pathname === item.href;

        if (item.isContact && location.pathname !== '/') {
          return (
            <a
              key={item.label}
              href={`mailto:${email}`}
              className={linkClass(false)}
            >
              {item.label}
            </a>
          );
        }

        if (item.isContact) {
          return (
            <a
              key={item.label}
              href="#contact"
              className={linkClass(false)}
            >
              {item.label}
            </a>
          );
        }

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
    </motion.nav>
  );
}
