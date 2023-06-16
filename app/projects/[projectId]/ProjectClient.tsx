'use client';

import Container from '@/app/components/Container';
import { SafeProject, SafeUser } from '@/app/types';
import ProjectHead from '@/app/components/projectslist/ProjectHead';
import ProjectInfo from '@/app/components/projectslist/ProjectInfo';

interface ProjectClientProps {
  project: SafeProject & {
    user: SafeUser;
  };
  currentUser?: SafeUser | null;
}

const ProjectClient: React.FC<ProjectClientProps> = ({
  project,
  currentUser,
}) => {
  return (
    <Container>
      <div
        className="
          max-w-screen-lg 
          mx-auto
        "
      >
        <div className="flex flex-col gap-6">
          <ProjectHead
            title={project.title}
            imageSrc={project.imageSrc}
            id={project.id}
            currentUser={currentUser}
          />
          <div
            className="
              grid 
              grid-cols-1 
              md:grid-cols-7 
              md:gap-10 
              mt-6
            "
          >
            <ProjectInfo
              user={project.user}
              title={project.title}
              description={project.description}
              view={project.view}
              github={project.github}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProjectClient;
