'use client';

import Container from '../Container';
import Logo from './Logo';
import UserMenu from './UserMenu';
import { SafeUser } from '@/app/types';
import { useEffect, useState } from 'react';

interface NavbarProps {
  currentUser?: SafeUser | null;
}

const TOP_OFFSET = 66;

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed w-full bg-white z-10 shadow-sm ${
        showBackground ? 'bg-zinc-200 bg-opacity-90 transition-all' : ''
      }`}
    >
      <div
        className="
          py-4 
          border-b-[1px]
        "
      >
        <Container>
          <div
            className="
            flex 
            flex-row 
            items-center 
            justify-between
            gap-3
            md:gap-0
          "
          >
            <Logo />
            <UserMenu currentUser={currentUser} />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
