'use client';

import React, { useState } from 'react';
import SocialMedia from '../components/SocialMedia';
import { motion } from 'framer-motion';
import { FaReact } from 'react-icons/fa';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiMongodb, SiPrisma, SiTailwindcss } from 'react-icons/si';
import { Widget } from '../feedbackwidget/Widget';
import Container from '../components/Container';
import Footer from '../components/Footer';
import Image from 'next/image';
import ParticlesContainer from '../components/ParticlesContainer';

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible,
};
const itemVariantsleft = {
  hidden: { opacity: 0, y: 20 },
  visible,
};

function Profile({ id }: { id: number }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);

  return (
    <Container>
      <section className="pt-[2rem] justify-center sm:pl-2 md:pl-2 lg:pl-2 pl-9 pr-1">
        <motion.div
          initial={false}
          animate={
            isLoaded && isInView
              ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
              : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
          }
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          onViewportEnter={() => setIsInView(true)}
        >
          <Image
            src={`/images/profile.png`}
            alt="profile"
            onLoad={() => setIsLoaded(true)}
            sizes="500"
            width="500"
            height="500"
            className="bg-neutral-500 hover:bg-neutral-400 transition rounded-full"
          />
        </motion.div>
      </section>
    </Container>
  );
}

function HomeClient() {
  return (
    <Container>
      <motion.article
        initial="hidden"
        animate="visible"
        exit={{ opacity: 0, transition: { duration: 1 } }}
        variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
      >
        <section className="flex top-0 mx-auto max-w-[15750px] items-center justify-between flex-col lg:flex-row md:flex-row">
          <ParticlesContainer />
          <div className="space-y-8">
            <h1 className="space-y-3 text-4xl font-semibold tracking-wide lg:text-5xl xl:text-6xl">
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: -100 },
                  visible,
                }}
              >
                <span className="block text-slate-700">HI I AM</span>

                <span className="block bg-gradient-to-r text-slate-700 from-pink-500 to-violet-500 bg-clip-text text-transparent pt-2">
                  ANISH MAHATO
                </span>
              </motion.div>
              <motion.div variants={itemVariants}>
                <span className="block">Full-Stack Developer</span>
              </motion.div>
            </h1>
            <motion.div variants={itemVariants}>
              <ul className="flex flex-row gap-6 text-2xl">
                <div className="font-bold text-blue-400 uppercase">
                  skill on
                </div>
                <span className="flex flex-row gap-4">
                  <FaReact className="hover:text-rose-500 w-8 h-8 bg-slate-100 text-black bg-opacity-25 text-xl inline-flex items-center justify-center rounded-md hover:bg-opacity-40 hover:-translate-y-1 transition-all duration-300" />
                  <TbBrandNextjs className="hover:text-blue-700 w-8 h-8 bg-slate-100 text-black bg-opacity-25 text-xl inline-flex items-center justify-center rounded-md hover:bg-opacity-40 hover:-translate-y-1 transition-all duration-300" />
                  <SiMongodb className="hover:text-green-700 w-8 h-8 bg-slate-100 text-black bg-opacity-25 text-xl inline-flex items-center justify-center rounded-md hover:bg-opacity-40 hover:-translate-y-1 transition-all duration-300" />
                  <SiTailwindcss className="hover:text-sky-500 w-8 h-8 bg-slate-100 text-black bg-opacity-25 text-xl inline-flex items-center justify-center rounded-md hover:bg-opacity-40 hover:-translate-y-1 transition-all duration-300" />
                  <SiPrisma className="hover:text-green-700 w-8 h-8 bg-slate-100 text-black bg-opacity-25 text-xl inline-flex items-center justify-center rounded-md hover:bg-opacity-40 hover:-translate-y-1 transition-all duration-300" />
                </span>
              </ul>
            </motion.div>

            <div className="block">
              <motion.div variants={itemVariantsleft}>
                <SocialMedia />
              </motion.div>
            </div>
          </div>

          <div className="relative h-[450px] w-[450px] transition-all duration-500 md:inline lg:h-[650px] lg:w-[600px]">
            <>
              {[1].map((image, idx) => (
                <Profile key={idx} id={image} />
              ))}
            </>
          </div>
        </section>

        <Widget />
      </motion.article>
      <div className="pt-[2rem]">
        <Footer />
      </div>
    </Container>
  );
}

export default HomeClient;
