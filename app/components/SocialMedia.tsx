import React from 'react';
import { BsTwitter, BsLinkedin, BsGithub } from 'react-icons/bs';
import { FaReact } from 'react-icons/fa';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiMongodb, SiPrisma, SiTailwindcss } from 'react-icons/si';

const SocialMedia = () => {
  return (
    <div className="text-neutral-800 justify-center">
      <ul className="flex flex-row gap-6 text-2xl ">
        <div className="font-bold text-blue-400 uppercase mt-1">find me in</div>
        <div>
          <a
            id="linkedinLink"
            href="https://www.linkedin.com/in/anish-mahato-08b43a219/"
            target="_blank"
          >
            <BsLinkedin className="hover:bg-white hover:text-blue-700 w-8 h-8 bg-black bg-opacity-25 text-gray-200 text-xl inline-flex items-center justify-center rounded-md hover:bg-opacity-40 hover:-translate-y-1 transition-all cursor-pointer duration-300" />
          </a>
        </div>
        <div>
          <a
            id="twitterLink"
            href="https://twitter.com/AnishMa40489848"
            target="_blank"
          >
            <BsTwitter className="hover:text-sky-400 w-8 h-8 bg-black bg-opacity-25 text-gray-200 text-xl inline-flex items-center justify-center rounded-md hover:bg-opacity-40 hover:-translate-y-1 transition-all cursor-pointer duration-300" />
          </a>
        </div>
        <div>
          <a
            id="gitLink"
            href="https://github.com/anishgithub890"
            target="_blank"
          >
            <BsGithub className="hover:bg-black hover:text-black hover:rounded-xl w-8 h-8 bg-black bg-opacity-25 text-gray-200 text-xl inline-flex items-center justify-center rounded-md hover:bg-opacity-40 hover:-translate-y-1 transition-all cursor-pointer duration-300" />
          </a>
        </div>
      </ul>
    </div>
  );
};

export default SocialMedia;
