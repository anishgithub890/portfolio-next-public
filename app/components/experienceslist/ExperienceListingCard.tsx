'use client';

import { useRouter } from 'next/navigation';

import { useCallback } from 'react';
import Button from '../Button';
import { FiEdit } from 'react-icons/fi';
import { SafeExperience } from '@/app/types';

interface ExperienceListingCardProps {
  data: SafeExperience;
  onAction?: (id: string) => void;
  disabled?: boolean;
  actionLabel?: string;
  actionId?: string;
}

const ExperienceListingCard: React.FC<ExperienceListingCardProps> = ({
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
      <figure className="md:flex bg-slate-100 hover:bg-slate-200 transition rounded-xl p-8 md:p-0">
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <figcaption className="font-medium">
            <div className="text-sky-500">{data.year}</div>
            <div className="text-slate-700">{data.language}</div>
          </figcaption>
          <blockquote>
            <p className="text-lg font-medium">{data.description}</p>
          </blockquote>
        </div>
        <div className="p-4">
          <div className="pt-1 pb-4">
            <hr />
          </div>

          <button
            onClick={() => {}}
            // onClick={() => router.push(`/experienceEdit/${data.id}`)}
            className="py-2 rounded-sm flex gap-2 px-4 text-slate-700 border border-[#C778DD] hover:bg-[#C778DD33] duration-150"
          >
            UPDATE <FiEdit className="text-xl gap-1 text-rose-500" />
          </button>

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
      </figure>
    </>
  );
};

export default ExperienceListingCard;
