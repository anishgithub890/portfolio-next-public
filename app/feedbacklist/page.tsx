import EmptyState from '@/app/components/EmptyState';
import ClientOnly from '@/app/components/ClientOnly';

import getCurrentUser from '../actions/getCurrentUser';
import FeedbackListClient from './FeedbackListClient';
import getFeedbacks from '../actions/getFeedbacks';

const page = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <EmptyState title="Unauthorized" subtitle="Please login" />;
  }

  const feedbacks = await getFeedbacks();

  if (feedbacks.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No feedback found"
          subtitle="Looks like you have no feedback yet!!."
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <FeedbackListClient feedbacks={feedbacks} currentUser={currentUser} />
    </ClientOnly>
  );
};

export default page;
