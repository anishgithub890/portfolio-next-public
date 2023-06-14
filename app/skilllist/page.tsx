import EmptyState from '@/app/components/EmptyState';
import ClientOnly from '@/app/components/ClientOnly';

import getCurrentUser from '@/app/actions/getCurrentUser';
import getSkills from '../actions/getSkills';
import SkillListClient from './SkillListClient';

const page = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <EmptyState title="Unauthorized" subtitle="Please login" />;
  }

  const skills = await getSkills();

  if (skills.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No skill found"
          subtitle="Looks like you have no skil yet!!."
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      {currentUser?.role == 'USER' ? (
        <div>
          <EmptyState
            title="OOOPS! ACCESS DENIED"
            subtitle="Your role has to be admin.!"
          />
        </div>
      ) : currentUser?.role == 'ADMIN' ? (
        <>
          <SkillListClient skills={skills} currentUser={currentUser} />
        </>
      ) : (
        <></>
      )}
    </ClientOnly>
  );
};

export default page;
