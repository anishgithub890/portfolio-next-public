'use client';

import axios from 'axios';
import { toast } from 'react-hot-toast';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import Modal from './Modal';

import Input from '../inputs/Input';
import Heading from '../Heading';
import useExperienceModal from '@/app/hooks/useExperienceModal';
import TextArea from '../inputs/TextArea';

const ExperienceModal = () => {
  const router = useRouter();
  const experienceModal = useExperienceModal();

  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      year: '',
      language: '',
      company: '',
      description: '',
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axios
      .post('/api/experiences', data)
      .then(() => {
        toast.success('Experience created!');
        router.refresh();
        reset();
        experienceModal.onClose();
      })
      .catch(() => {
        toast.error('Something went wrong.');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  let bodyContent = (
    <div className="flex flex-col gap-8">
      <Heading
        title="How would you describe your experience?"
        subtitle="Short and sweet works best!"
      />
      <Input
        id="year"
        label="Year"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="language"
        label="Language"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="company"
        label="Company"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <TextArea
        id="description"
        label="Description"
        type="description"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <hr />
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={experienceModal.isOpen}
      title="Add your experiences!"
      actionLabel={'Create'}
      onSubmit={handleSubmit(onSubmit)}
      secondaryActionLabel={''}
      onClose={experienceModal.onClose}
      body={bodyContent}
    />
  );
};

export default ExperienceModal;
