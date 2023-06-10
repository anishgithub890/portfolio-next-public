import EmptyState from '@/app/components/EmptyState';
import ClientOnly from '@/app/components/ClientOnly';

import getExperiences from '../actions/getExperiences';
import getCurrentUser from '../actions/getCurrentUser';
import ExperienceEditScreen from './ExperienceEditScreen';

const page = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <EmptyState title="Unauthorized" subtitle="Please login" />;
  }

  const experiences = await getExperiences();

  if (experiences.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No experience found"
          subtitle="Looks like you have no experience yet!!."
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <ExperienceEditScreen
        experiences={experiences}
        currentUser={currentUser}
      />
    </ClientOnly>
  );
};

export default page;
