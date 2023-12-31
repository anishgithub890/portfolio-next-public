'use client';

import Image from 'next/image';
import { SafeSkill, SafeUser } from '../types';

interface SkillCardProps {
  data: SafeSkill;
  currentUser?: SafeUser | null;
}

const SkillCard: React.FC<SkillCardProps> = ({ data }) => {
  return (
    <>
      <div className="col-span-1 cursor-pointer group">
        {/* <ParticlesContainer /> */}
        <div className="flex flex-col gap-2 w-[6rem] ml-5 mr-5 pt-6 text-center">
          <div
            className="
            aspect-square 
            w-[6rem] 
            relative 
            overflow-hidden 
            gap-2
            rounded-xl
          "
          >
            <Image
              fill
              className="
                object-cover 
                h-[6rem] 
                w-[6rem] 
                group-hover:scale-110
                bg-neutral-100
                hover:bg-neutral-200
                rounded-md
                transition           
            "
              src={data.imageSrc}
              alt="Listing"
            />
          </div>
          <div className="text-center text-slate-700 text-sm font-serif">
            {data.title}
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillCard;
