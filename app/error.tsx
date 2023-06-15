'use client';

import { useEffect } from 'react';
import Heading from './components/Heading';

interface ErrorStateProps {
  title?: string;
  subtitle?: string;
  error: Error;
}

const ErrorState: React.FC<ErrorStateProps> = ({
  error,
  title = 'Uh Oh',
  subtitle = 'Something went wrong!',
}) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

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
      <Heading center title={title} subtitle={subtitle} />
    </div>
  );
};

export default ErrorState;
