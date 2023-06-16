'use client';

import { SafeUser } from '@/app/types';
import { IconType } from 'react-icons';
import Avatar from '../Avatar';
import Link from 'next/link';
import ToolTip from '../ToolTip';
import { BsGithub } from 'react-icons/bs';
import { BiLinkExternal } from 'react-icons/bi';

interface ProjectInfoProps {
  user: SafeUser;
  title: string;
  description: string;
  view: string | null;
  github: string | null;
}

const ProjectInfo: React.FC<ProjectInfoProps> = ({
  user,
  title,
  description,
  view,
  github,
}) => {
  return (
    <div className="col-span-8 flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <div
          className="
                  text-xl
                  font-semibold
                  flex
                  flex-row
                  items-center
                  gap-2
                  "
        >
          <div>Hosted by {user?.name}</div>
          <Avatar src={user?.image} />
        </div>
      </div>
      <hr />
      <div className="text-lg font-light text-neutral-900">{title}</div>
      <div className="text-lg font-light text-neutral-500">{description}</div>
      <div className="flex gap-6">
        <Link href={`${github}`} target="_blank">
          <ToolTip tooltip="Source code">
            <button className="py-2 rounded-sm px-4 text-slate-700 border border-[#C778DD] hover:bg-[#C778DD33] duration-150">
              <BsGithub className="text-2xl" />
            </button>
          </ToolTip>
        </Link>
        <Link href={`${view}`} target="_blank">
          <ToolTip tooltip="Demo website">
            <button className="py-2 rounded-sm flex gap-2 px-4 text-slate-700 border border-[#C778DD] hover:bg-[#C778DD33] duration-150">
              Live <BiLinkExternal className="text-2xl" />
            </button>
          </ToolTip>
        </Link>
      </div>
      <hr />
    </div>
  );
};

export default ProjectInfo;
