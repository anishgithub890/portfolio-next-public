'use client';

import { SafeProject, SafeUser } from '@/app/types';
import Heading from '../Heading';
import Image from 'next/image';
import Input from '../inputs/Input';
import { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';

interface ProjectHeadProps {
  title: string;
  description: string;
  view?: string | null;
  github?: string | null;
  imageSrc: string;
  id: string;
  currentUser?: SafeUser | null;
  data: SafeProject;
}

const ProjectHead: React.FC<ProjectHeadProps> = ({
  title,
  description,
  view,
  github,
  imageSrc,
  id,
  currentUser,
  data,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      title: '',
      description: '',
      view: '',
      github: '',
      imageSrc: '',
    },
  });
  return (
    <>
      <Heading title={title} subtitle={`${description}`} />
      <div
        className="
      w-full
      h-[60vh]
      overflow-hidden
      rounded-xl
      relative
      "
      >
        <Image
          src={imageSrc}
          alt="Image"
          fill
          className="object-cover w-full"
        />
      </div>
      <Input
        id={data.title}
        label="Title"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </>
  );
};

export default ProjectHead;
