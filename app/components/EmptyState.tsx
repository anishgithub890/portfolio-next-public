'use client';

import { useRouter } from 'next/navigation';

import Button from './Button';
import Heading from './Heading';
import Image from 'next/image';

interface EmptyStateProps {
  title?: string;
  subtitle?: string;
  showReset?: boolean;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  title = "OOOPS! It's Empty",
  subtitle = "Looks like you haven't added any data yet...!!!",
  showReset,
}) => {
  const router = useRouter();

  return (
    <div
      className="
        h-[60vh]
        flex 
        flex-col 
        gap-2
        justify-center 
        items-center 
      "
    >
      <Image src="/images/empty.png" alt="empty" width={200} height={200} />
      <Heading center title={title} subtitle={subtitle} />
      <div className="w-48 mt-4">
        {showReset && (
          <Button
            outline
            label="Remove all filters"
            onClick={() => router.push('/')}
          />
        )}
      </div>
    </div>
  );
};

export default EmptyState;
