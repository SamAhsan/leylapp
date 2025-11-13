import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu } from 'lucide-react';
import clsx from 'clsx';
import CTAButton from '../CTAButton';
import Container from '../Container';
import { mainNav } from '../../data/nav';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-30 border-b border-neutral-200 bg-white/90 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-3 text-lg font-semibold text-neutral-900">
          <img
            src="/leylapplogo.png"
            alt="Leylapp logo"
            className="h-20 w-auto object-contain md:h-32 lg:h-36"
          />
          <span className="sr-only">Leylapp</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-semibold text-neutral-600 lg:flex">
          {mainNav.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                clsx('transition hover:text-neutral-900', isActive && 'text-neutral-900')
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden lg:flex">
          <CTAButton href="/download" className="rounded-2xl">
            Download
          </CTAButton>
        </div>
        <button
          type="button"
          className="flex items-center gap-2 rounded-full border border-neutral-200 px-3 py-2 text-neutral-700 lg:hidden"
          onClick={() => setOpen(true)}
          aria-label="Open navigation"
        >
          <Menu className="h-5 w-5" aria-hidden />
          Menu
        </button>
      </Container>
      <MobileMenu open={open} onClose={() => setOpen(false)} items={mainNav} />
    </header>
  );
};

export default Navbar;

