'use client';

import axios from 'axios';
import { useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';
import { SafeSkill, SafeUser } from '@/app/types';
import { toast } from 'react-hot-toast';

import Heading from '@/app/components/Heading';
import Container from '@/app/components/Container';

import SkillListingCard from '../components/skillslist/SkillListingCard';

interface SkillListClientProps {
  skills: SafeSkill[];
  currentUser?: SafeUser | null;
}

const SkillListClient: React.FC<SkillListClientProps> = ({
  skills,
  currentUser,
}) => {
  const router = useRouter();
  const [deletingId, setDeletingId] = useState('');

  const onDelete = useCallback(
    (id: string) => {
      setDeletingId(id);

      axios
        .delete(`/api/skills/${id}`)
        .then(() => {
          toast.success('Skill deleted');
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
      <Heading title="Skill" subtitle="List of your Skills" />
      <div className="flex flex-wrap justify-between gap-4 pt-8">
        {skills.map((skill: any) => (
          <SkillListingCard
            key={skill.id}
            data={skill}
            actionId={skill.id}
            onAction={onDelete}
            disabled={deletingId === skill.id}
            actionLabel="Delete skill"
          />
        ))}
      </div>
    </Container>
  );
};

export default SkillListClient;
