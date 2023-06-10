'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { SafeProject } from '@/app/types';
import { useCallback } from 'react';
import Button from '../Button';
import Link from 'next/link';
import ToolTip from '../ToolTip';
import { BsGithub } from 'react-icons/bs';
import { BiLinkExternal } from 'react-icons/bi';
import { FiEdit } from 'react-icons/fi';

interface ProjectListingProps {
  data: SafeProject;
  onAction?: (id: string) => void;
  disabled?: boolean;
  actionLabel?: string;
  actionId?: string;
}

const ProjectListingCard: React.FC<ProjectListingProps> = ({
  data,
  onAction,
  disabled,
  actionLabel,
  actionId = '',
}) => {
  const router = useRouter();

  const handleDelete = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();

      if (disabled) {
        return;
      }

      onAction?.(actionId);
    },
    [disabled, onAction, actionId]
  );

  return (
    <>
      <div className="border mx-auto w-[90%] md:w-[48%] lg:w-[30%] p-0 border-solid border-slate-400 bg-white shadow-2xl rounded-md mt-8 hover:-translate-y-2 transition-all opacity-100 hover:opacity-100 duration-300">
        <div>
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
          <h2 className="text-slate-700 text-2xl font-medium hover:underline transition">
            {data.title}
          </h2>
          <p className=" py-4 text-slate-600">{data.description}</p>
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
              <ToolTip tooltip="Demo website">
                <button className="py-2 rounded-sm flex gap-2 px-4 text-slate-700 border border-[#C778DD] hover:bg-[#C778DD33] duration-150">
                  Live{' '}
                  <BiLinkExternal className="text-xl gap-1 text-rose-500" />
                </button>
              </ToolTip>
            </Link>

            <button
              onClick={() => router.push(`/projects/${data.id}`)}
              className="py-2 rounded-sm flex gap-2 px-4 text-slate-700 border border-[#C778DD] hover:bg-[#C778DD33] duration-150"
            >
              UPDATE <FiEdit className="text-xl gap-1 text-rose-500" />
            </button>
          </div>
          <div className="pb-4 pt-4">
            <hr />
          </div>
          <div className="flex gap-4">
            {onAction && actionLabel && (
              <Button
                disabled={disabled}
                small
                label={actionLabel}
                onClick={handleDelete}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectListingCard;
