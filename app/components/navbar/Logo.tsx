'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const MotionLink = motion(Link);

const Logo = () => {
  const router = useRouter();
  return (
    <div className="flex flex-row pt-2 sm:pl-2 md:pt-4 lg:pb-4 md:pb-4 cursor-pointer items-center h-8 md:h-10 lg:h-12 w-auto">
      <MotionLink
        href="/"
        className="w-12 h-12 pl-2 bg-black text-white flex items-center rounded-full text-xl font-bold"
        whileHover={{
          scale: 1.2,
          backgroundColor: [
            '#121212',
            'rgb(131,58,180,1)',
            'rgb(253,29,29,1)',
            'rgb(252,176,69,1)',
            'rgb(131,58,180,1)',
          ],
          transition: { duration: 1, repeat: Infinity, scale: 1.2 },
        }}
      >
        AM
      </MotionLink>
    </div>
  );
};

export default Logo;
