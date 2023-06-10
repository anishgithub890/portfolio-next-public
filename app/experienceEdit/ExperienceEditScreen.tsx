'use client';

import { toast } from 'react-hot-toast';
import axios from 'axios';
import { useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';

import { SafeExperience, SafeUser } from '@/app/types';

import Heading from '@/app/components/Heading';
import Container from '@/app/components/Container';
import ExperienceListingCard from '../components/experienceslist/ExperienceListingCard';

interface ExperienceEditScreenProps {
  experiences: SafeExperience[];
  currentUser?: SafeUser | null;
}

const ExperienceEditScreen: React.FC<ExperienceEditScreenProps> = ({
  experiences,
  currentUser,
}) => {
  const router = useRouter();
  const [deletingId, setDeletingId] = useState('');

  const onDelete = useCallback(
    (id: string) => {
      setDeletingId(id);

      axios
        .put(`/api/experiences/${id}`)
        .then(() => {
          toast.success('Experience update');
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
      <Heading title="Experience" subtitle="List of your experiences" />
      <div
        className="
            pt-8
            grid 
            grid-cols-1 
            sm:grid-cols-1 
            md:grid-cols-2 
            lg:grid-cols-3
            xl:grid-cols-3
            2xl:grid-cols-4
            gap-4
          "
      >
        {experiences.map((experience: any) => (
          <ExperienceListingCard
            key={experience.id}
            data={experience}
            actionId={experience.id}
            onAction={onDelete}
            disabled={deletingId === experience.id}
            actionLabel="Update experience"
          />
        ))}
      </div>
    </Container>
  );
};

export default ExperienceEditScreen;
