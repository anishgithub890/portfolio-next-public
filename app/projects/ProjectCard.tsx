'use client';

import React from 'react';
import { SafeProject, SafeUser } from '../types';
import Image from 'next/image';
import Link from 'next/link';
import { BiLinkExternal } from 'react-icons/bi';
import { BsGithub } from 'react-icons/bs';
import { useRouter } from 'next/navigation';
import ToolTip from '../components/ToolTip';

interface ProjectCardProps {
  data: SafeProject;
  currentUser?: SafeUser | null;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ data }) => {
  const router = useRouter();
  return (
    <>
      <div className="border mx-auto w-[90%] md:w-[48%] lg:w-[30%] p-0 border-solid border-slate-400 bg-white shadow-2xl rounded-md mt-8 hover:-translate-y-2 transition-all opacity-70 hover:opacity-100 duration-300">
        <div onClick={() => router.push(`/projects/${data.id}`)}>
          {/* <img className=" w-full" src={data.imageSrc} alt="" /> */}
          <Image
            src={data.imageSrc}
            alt="project"
            className="w-full group-hover:scale-110 rounded-md"
            width="500"
            height="500"
          />
        </div>
        <div className=" p-4">
          <div onClick={() => router.push(`/projects/${data.id}`)}>
            <h2 className="text-slate-700 text-2xl font-medium hover:underline transition">
              {data.title}
            </h2>
            <p className=" py-4 text-slate-600">
              {data.description.substring(0, 200)}
              <strong className="text-rose-400 cursor-pointer">
                ...readmore
              </strong>
            </p>
          </div>
          <div className="pt-1 pb-4">
            <hr />
          </div>
          <div className="flex gap-4">
            <Link href={`${data.github}`} target="_blank">
              <ToolTip tooltip="Source code">
                <button className="py-2 rounded-sm px-4 text-slate-700 border border-[#C778DD] hover:bg-[#C778DD33] duration-150">
                  <BsGithub className="text-2xl" />
                </button>
              </ToolTip>
            </Link>
            <Link href={`${data.view}`} target="_blank">
              <ToolTip tooltip="Expand">
                <button className="py-2 rounded-sm flex gap-2 px-4 text-slate-700 border border-[#C778DD] hover:bg-[#C778DD33] duration-150">
                  Live <BiLinkExternal className="text-2xl" />
                </button>
              </ToolTip>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
