'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { useCallback } from 'react';
import Button from '../Button';
import { FiEdit } from 'react-icons/fi';
import { SafeTestimonial } from '@/app/types';

interface TestimonialListingCardProps {
  data: SafeTestimonial;
  onAction?: (id: string) => void;
  disabled?: boolean;
  actionLabel?: string;
  actionId?: string;
}

const TestimonialListingCard: React.FC<TestimonialListingCardProps> = ({
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
        {/* <img
          className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
          src={data.imageSrc}
          alt="testimonial"
          width="384"
          height="512"
        /> */}
        <Image
          className="w-24 h-24 rounded-md mx-auto md:rounded-md md:w-[8rem] md:h-[8rem] md:ml-[0rem]"
          src={data.imageSrc}
          alt="testimonial"
          width="384"
          height="512"
        />

        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">{data.name}</div>
            <div className="text-slate-700 dark:text-slate-500">
              {data.role}
            </div>
            <div className="text-slate-700 dark:text-slate-500">
              {data.company}
            </div>
          </figcaption>
          <blockquote>
            <p className="text-lg font-medium">{data.comment}</p>
          </blockquote>
        </div>
        <div className="p-4">
          <div className="pt-1 pb-4">
            <hr />
          </div>

          <button
            onClick={() => {}}
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

export default TestimonialListingCard;
