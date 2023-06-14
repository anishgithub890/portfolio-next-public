import EmptyState from '@/app/components/EmptyState';
import ClientOnly from '@/app/components/ClientOnly';

import getExperiences from '../actions/getExperiences';
import ExperienceListClient from './ExperienceListClient';
import getCurrentUser from '../actions/getCurrentUser';

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
      {currentUser?.role == 'USER' ? (
        <div>
          <EmptyState
            title="OOOPS ACCESS DENIED"
            subtitle="Your role has to be admin.!"
          />
        </div>
      ) : currentUser?.role == 'ADMIN' ? (
        <>
          <ExperienceListClient
            experiences={experiences}
            currentUser={currentUser}
          />
        </>
      ) : (
        <></>
      )}
    </ClientOnly>
  );
};

export default page;
