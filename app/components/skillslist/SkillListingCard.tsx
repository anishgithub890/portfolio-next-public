'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

import { FiEdit } from 'react-icons/fi';
import { SafeSkill } from '@/app/types';

import Button from '../Button';
interface SkilltListingProps {
  data: SafeSkill;
  onAction?: (id: string) => void;
  disabled?: boolean;
  actionLabel?: string;
  actionId?: string;
}

const SkillListingCard: React.FC<SkilltListingProps> = ({
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
      <div className="border mx-auto w-[50%] md:w-[35%] lg:w-[20%] p-0 border-solid border-slate-400 bg-white shadow-2xl rounded-md mt-8 hover:-translate-y-2 transition-all opacity-100 hover:opacity-100 duration-300">
        <div>
          {/* <img className=" w-full" src={data.imageSrc} alt="" /> */}
          <Image
            src={data.imageSrc}
            alt="skill"
            className="w-full group-hover:scale-110"
            width="500"
            height="500"
          />
        </div>
        <div className=" p-4">
          <h2 className="text-slate-700 text-2xl font-medium hover:underline transition">
            {data.title}
          </h2>
          <div className="pt-1 pb-4">
            <hr />
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => {}}
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

export default SkillListingCard;
