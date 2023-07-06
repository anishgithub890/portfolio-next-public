'use client';

import axios from 'axios';
import { useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';

import { toast } from 'react-hot-toast';
import { SafeTestimonial, SafeUser } from '@/app/types';

import Heading from '@/app/components/Heading';
import Container from '@/app/components/Container';
import TestimonialListingCard from '../components/testimonialslist/TestimonialListingCard';

interface TestimonialListClientProps {
  testimonials: SafeTestimonial[];
  currentUser?: SafeUser | null;
}

const TestimonialListClient: React.FC<TestimonialListClientProps> = ({
  testimonials,
  currentUser,
}) => {
  const router = useRouter();
  const [deletingId, setDeletingId] = useState('');

  const onDelete = useCallback(
    (id: string) => {
      setDeletingId(id);

      axios
        .delete(`/api/testimonials/${id}`)
        .then(() => {
          toast.success('Testimonial deleted');
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
      <Heading title="Testimonial" subtitle="List of your testimonials" />
      <div
        className="
       pt-8
       grid 
       grid-cols-1 
       sm:grid-cols-1 
       md:grid-cols-1 
       lg:grid-cols-1
       xl:grid-cols-1
       2xl:grid-cols-1
       gap-4
     "
      >
        {testimonials.map((testimonial: any) => (
          <TestimonialListingCard
            key={testimonial.id}
            data={testimonial}
            actionId={testimonial.id}
            onAction={onDelete}
            disabled={deletingId === testimonial.id}
            actionLabel="Delete testimonial"
          />
        ))}
      </div>
    </Container>
  );
};

export default TestimonialListClient;
