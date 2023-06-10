'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { SafeProject, SafeUser } from '@/app/types';

import Container from '@/app/components/Container';
import ProjectHead from '@/app/components/projectslist/ProjectHead';

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
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

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
            description={project.description}
            github={project.github}
            view={project.view}
            imageSrc={project.imageSrc}
            id={project.id}
            currentUser={currentUser}
          />
        </div>
      </div>
    </Container>
  );
};

export default ProjectClient;
