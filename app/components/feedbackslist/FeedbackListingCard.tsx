'use client';

import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

import { SafeFeedback } from '@/app/types';
import Button from '../Button';

interface FeedbackListingCardProps {
  data: SafeFeedback;
  onAction?: (id: string) => void;
  disabled?: boolean;
  actionLabel?: string;
  actionId?: string;
}

const FeedbackListingCard: React.FC<FeedbackListingCardProps> = ({
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
      <figure className="md:flex bg-slate-100 hover:bg-slate-50 transition rounded-xl p-8 md:p-0">
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <figcaption className="font-medium">
            <div className="text-sky-500">{data.type}</div>
          </figcaption>
          <blockquote>
            <p className="text-lg font-medium">{data.comment}</p>
          </blockquote>
        </div>
        <div className="p-4">
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
          <div className="pb-4 pt-4">
            <hr />
          </div>
        </div>
      </figure>
    </>
  );
};

export default FeedbackListingCard;
