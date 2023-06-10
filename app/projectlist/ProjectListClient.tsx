'use client';

import { toast } from 'react-hot-toast';
import axios from 'axios';
import { useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';

import { SafeProject, SafeUser } from '@/app/types';

import Heading from '@/app/components/Heading';
import Container from '@/app/components/Container';
import ProjectListingCard from '../components/projectslist/ProjectListingCard';

interface ProjectsClientProps {
  projects: SafeProject[];
  currentUser?: SafeUser | null;
}

const ProjectListClient: React.FC<ProjectsClientProps> = ({
  projects,
  currentUser,
}) => {
  const router = useRouter();
  const [deletingId, setDeletingId] = useState('');

  const onDelete = useCallback(
    (id: string) => {
      setDeletingId(id);

      axios
        .delete(`/api/projects/${id}`)
        .then(() => {
          toast.success('Project deleted');
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
      <Heading title="Project" subtitle="List of your project" />
      <div className="flex flex-wrap justify-between gap-4 pt-8">
        {projects.map((project: any) => (
          <ProjectListingCard
            key={project.id}
            data={project}
            actionId={project.id}
            onAction={onDelete}
            disabled={deletingId === project.id}
            actionLabel="Delete project"
          />
        ))}
      </div>
    </Container>
  );
};

export default ProjectListClient;
