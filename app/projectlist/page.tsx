import EmptyState from '@/app/components/EmptyState';
import ClientOnly from '@/app/components/ClientOnly';

import getCurrentUser from '@/app/actions/getCurrentUser';
import getProjects from '../actions/getProjects';
import ProjectListClient from './ProjectListClient';

const page = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <EmptyState title="Unauthorized" subtitle="Please login" />;
  }

  const projects = await getProjects();

  if (projects.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No project found"
          subtitle="Looks like you have no project."
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
          <ProjectListClient projects={projects} currentUser={currentUser} />
        </>
      ) : (
        <></>
      )}
    </ClientOnly>
  );
};

export default page;
