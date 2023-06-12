import { ArrowLeft } from 'phosphor-react';
import { FormEvent, useState } from 'react';
import { FeedbackType, feedbackTypes } from '..';
import { CloseButton } from '../../CloseButton';
import { ScreenshotButton } from '../ScreenshotButton';
import Loader from '@/app/components/Loader';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import Button from '@/app/components/Button';
import Input from '@/app/components/inputs/Input';
import Image from 'next/image';

interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
  onFeedbackRestartRequested: () => void;
  onFeedbackSent: () => void;
}

export function FeedbackContentStep({
  feedbackType,
  onFeedbackRestartRequested,
  onFeedbackSent,
}: FeedbackContentStepProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [isSendingFeedback, setIsSendingFeedback] = useState(false);

  const feedbackTypeInfo = feedbackTypes[feedbackType];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      type: feedbackType,
      comment: '',
      screenshot: 'not assigned',
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    setIsSendingFeedback(true);

    axios
      .post('/api/feedbacks', data)
      .then(() => {
        // toast.success('Feedbacks send!');
      })
      .catch((error) => {
        toast.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
    setIsSendingFeedback(false);
    onFeedbackSent();
  };

  return (
    <>
      <header>
        <button
          type="button"
          className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
          onClick={onFeedbackRestartRequested}
        >
          <ArrowLeft weight="bold" className="w-4 h-4 text-slate-900" />
        </button>

        <span className="text-xl leading-6 flex items-center gap-2 ">
          <Image
            src={feedbackTypeInfo.image.source}
            alt={feedbackTypeInfo.image.alt}
            className="w-6 h-6"
            width={200}
            height={200}
          />
          {feedbackTypeInfo.title}
        </span>

        <CloseButton />
      </header>

      <form className="my-4 w-full text-slate-700">
        <Input
          id="comment"
          label="Comment"
          type="comment"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />

        <footer className="flex gap-2 mt-2">
          <ScreenshotButton
            screenshot={screenshot}
            onScreenshotTook={setScreenshot}
          />

          <Button
            outline
            small
            label={`${isSendingFeedback ? <Loader /> : 'Send feedback'}`}
            onClick={handleSubmit(onSubmit)}
          />
        </footer>
      </form>
    </>
  );
}
