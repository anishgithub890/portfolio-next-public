'use client';

import axios from 'axios';
import { toast } from 'react-hot-toast';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { useMemo, useState } from 'react';

import Modal from './Modal';

import ImageUpload from '../inputs/ImageUpload';
import Input from '../inputs/Input';
import Heading from '../Heading';
import useProjectModal from '@/app/hooks/useProjectModal';

enum STEPS {
  DESCRIPTION = 0,
  IMAGES = 1,
}

const ProjectModal = () => {
  const router = useRouter();
  const projectModal = useProjectModal();

  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(STEPS.DESCRIPTION);

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

  const imageSrc = watch('imageSrc');

  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };

  const onBack = () => {
    setStep((value) => value - 1);
  };

  const onNext = () => {
    setStep((value) => value + 1);
  };

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    if (step !== STEPS.IMAGES) {
      return onNext();
    }

    setIsLoading(true);

    axios
      .post('/api/projects', data)
      .then(() => {
        toast.success('Project created!');
        router.refresh();
        reset();
        setStep(STEPS.DESCRIPTION);
        projectModal.onClose();
      })
      .catch(() => {
        toast.error('Something went wrong.');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const actionLabel = useMemo(() => {
    if (step === STEPS.IMAGES) {
      return 'Create';
    }

    return 'Next';
  }, [step]);

  const secondaryActionLabel = useMemo(() => {
    if (step === STEPS.DESCRIPTION) {
      return undefined;
    }

    return 'Back';
  }, [step]);

  let bodyContent = (
    <div className="flex flex-col gap-8">
      <Heading
        title="How would you describe your skill?"
        subtitle="Short and sweet works best!"
      />
      <Input
        id="title"
        label="Title"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="description"
        label="Description"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="view"
        label="View"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="github"
        label="Github"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <hr />
    </div>
  );

  if (step === STEPS.IMAGES) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Add a photo of project"
          subtitle="Show users what your project logo looks like!"
        />
        <ImageUpload
          onChange={(value) => setCustomValue('imageSrc', value)}
          value={imageSrc}
        />
      </div>
    );
  }

  return (
    <Modal
      disabled={isLoading}
      isOpen={projectModal.isOpen}
      title="Add your project !!"
      actionLabel={actionLabel}
      onSubmit={handleSubmit(onSubmit)}
      secondaryActionLabel={secondaryActionLabel}
      secondaryAction={step === STEPS.DESCRIPTION ? undefined : onBack}
      onClose={projectModal.onClose}
      body={bodyContent}
    />
  );
};

export default ProjectModal;
