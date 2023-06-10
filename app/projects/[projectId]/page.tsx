import getCurrentUser from '@/app/actions/getCurrentUser';

import ClientOnly from '@/app/components/ClientOnly';
import EmptyState from '@/app/components/EmptyState';
import ProjectClient from './ProjectClient';
import getProjectById from '@/app/actions/getProjectById';

interface IParams {
  projectId?: string;
}

const ProjectPage = async ({ params }: { params: IParams }) => {
  const project = await getProjectById(params);
  const currentUser = await getCurrentUser();

  if (!project) {
    return (
      <ClientOnly>
        <EmptyState />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <ProjectClient project={project} currentUser={currentUser} />
    </ClientOnly>
  );
};

export default ProjectPage;
