'use client';

import { SafeUser } from '@/app/types';
import Heading from '../Heading';
import Image from 'next/image';
import Loading from '@/app/loading';

interface ProjectHeadProps {
  title: string;
  imageSrc: string;
  id: string;
  currentUser?: SafeUser | null;
}

const ProjectHead: React.FC<ProjectHeadProps> = ({
  title,
  imageSrc,
  id,
  currentUser,
}) => {
  return (
    <>
      <Heading title={title} subtitle={''} />
      <div
        className="
      w-full
      h-[60vh]
      overflow-hidden
      rounded-xl
      relative
      "
      >
        <Loading /> ?
        {
          <Image
            src={imageSrc}
            alt="Image"
            fill
            className="object-cover w-full"
          />
        }
        : {''}
      </div>
    </>
  );
};

export default ProjectHead;
