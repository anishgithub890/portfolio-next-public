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
import useTestimonialModal from '@/app/hooks/useTestimonialModal';
import TextArea from '../inputs/TextArea';

enum STEPS {
  DESCRIPTION = 0,
  IMAGES = 1,
}

const TestimonialModal = () => {
  const router = useRouter();
  const testimonialModal = useTestimonialModal();

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
      name: '',
      role: '',
      company: '',
      comment: '',
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
      .post('/api/testimonials', data)
      .then(() => {
        toast.success('Testimonial created!');
        router.refresh();
        reset();
        setStep(STEPS.DESCRIPTION);
        testimonialModal.onClose();
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
        title="How would you describe your client or seniors feedbacks?"
        subtitle="Short and sweet works best!"
      />
      <Input
        id="name"
        label="Name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="role"
        label="Role"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="company"
        label="Company Name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <TextArea
        id="comment"
        label="Comment"
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
          title="Add a photo of person"
          subtitle="Show users what your client or seniors looks like!"
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
      isOpen={testimonialModal.isOpen}
      title="Add your testimonial !!"
      actionLabel={actionLabel}
      onSubmit={handleSubmit(onSubmit)}
      secondaryActionLabel={secondaryActionLabel}
      secondaryAction={step === STEPS.DESCRIPTION ? undefined : onBack}
      onClose={testimonialModal.onClose}
      body={bodyContent}
    />
  );
};

export default TestimonialModal;
