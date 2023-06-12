import ClientOnly from '@/app/components/ClientOnly';

import TransitionEffect from '../components/TransitionEffect';
import ProjectCard from './ProjectCard';
import { Widget } from '../feedbackwidget/Widget';
import Container from '../components/Container';
import getProjects from '../actions/getProjects';
import EmptyState from '../components/EmptyState';
import getCurrentUser from '../actions/getCurrentUser';
import Footer from '../components/Footer';

// interface ProjectProps {
//   searchParams: IProjectsParams;
// }

const ProjectPage = async () => {
  const projects = await getProjects();
  const currentUser = await getCurrentUser();

  if (projects.length === 0) {
    return (
      <ClientOnly>
        <EmptyState showReset />
      </ClientOnly>
    );
  }
  return (
    <ClientOnly>
      <TransitionEffect />
      <Container>
        <div className="underline underline-offset-4">
          <p className="font-bold text-3xl text-center block bg-gradient-to-r text-slate-700 from-pink-500 to-violet-500 bg-clip-text text-transparent pt-2">
            My Creative Portfolio Section
          </p>
        </div>
        <div className="flex flex-wrap justify-between gap-4 pt-8">
          {projects.map((project: any) => {
            return (
              <ProjectCard
                currentUser={currentUser}
                key={project.id}
                data={project}
              />
            );
          })}
        </div>
        <Footer />
      </Container>
      <Widget />
    </ClientOnly>
  );
};

export default ProjectPage;
