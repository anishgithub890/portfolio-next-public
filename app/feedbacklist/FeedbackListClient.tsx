'use client';

import axios from 'axios';
import { useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';

import { toast } from 'react-hot-toast';
import { SafeFeedback, SafeUser } from '@/app/types';

import Heading from '@/app/components/Heading';
import Container from '@/app/components/Container';
import FeedbackListingCard from '../components/feedbackslist/FeedbackListingCard';

interface FeedbackListClientProps {
  feedbacks: SafeFeedback[];
  currentUser?: SafeUser | null;
}

const FeedbackListClient: React.FC<FeedbackListClientProps> = ({
  feedbacks,
  currentUser,
}) => {
  const router = useRouter();
  const [deletingId, setDeletingId] = useState('');

  const onDelete = useCallback(
    (id: string) => {
      setDeletingId(id);

      axios
        .delete(`/api/feedbacks/${id}`)
        .then(() => {
          toast.success('Feedback deleted');
          router.refresh();
        })
        .catch((error) => {
          toast.error(error?.response?.data?.error);
        })
        .finally(() => {
          setDeletingId('');
        });
    },
    [router]
  );

  return (
    <Container>
      <Heading title="Feedback" subtitle="List of your feedbacks" />
      <div
        className="
            pt-8
            grid 
            grid-cols-1 
            sm:grid-cols-1 
            md:grid-cols-2 
            lg:grid-cols-3
            xl:grid-cols-3
            2xl:grid-cols-4
            gap-4
          "
      >
        {feedbacks.map((feedback: any) => (
          <FeedbackListingCard
            key={feedback.id}
            data={feedback}
            actionId={feedback.id}
            onAction={onDelete}
            disabled={deletingId === feedback.id}
            actionLabel="Delete feedback"
          />
        ))}
      </div>
    </Container>
  );
};

export default FeedbackListClient;
