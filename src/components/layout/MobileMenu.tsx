import { Fragment } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTAButton from '../CTAButton';
import type { NavItem } from '../../data/nav';

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
  items: NavItem[];
};

const MobileMenu = ({ open, onClose, items }: MobileMenuProps) => (
  <AnimatePresence>
    {open && (
      <Fragment>
        <motion.div
          className="fixed inset-0 z-30 bg-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          aria-hidden
        />
        <motion.div
          className="fixed inset-y-0 right-0 z-40 w-72 bg-white p-6 shadow-glow"
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          role="dialog"
          aria-modal="true"
        >
          <button type="button" className="mb-6 text-neutral-500" onClick={onClose} aria-label="Close menu">
            <X className="h-6 w-6" aria-hidden />
          </button>
          <nav className="space-y-4">
            {items.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="block text-lg font-semibold text-neutral-900"
                onClick={onClose}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <CTAButton href="/download" className="mt-8 w-full rounded-2xl" onClick={onClose}>
            Download Leylapp
          </CTAButton>
        </motion.div>
      </Fragment>
    )}
  </AnimatePresence>
);

export default MobileMenu;

