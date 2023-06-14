import EmptyState from '@/app/components/EmptyState';
import ClientOnly from '@/app/components/ClientOnly';

import getCurrentUser from '../actions/getCurrentUser';
import getTestimonials from '../actions/getTestimonials';
import TestimonialListClient from './TestimonialListClient';

const page = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <EmptyState title="Unauthorized" subtitle="Please login" />;
  }

  const testimonials = await getTestimonials();

  if (testimonials.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No testimonial found"
          subtitle="Looks like you have no testimonials yet!!."
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      {currentUser?.role == 'USER' ? (
        <div>
          <EmptyState
            title="OOOPS! ACCESS DENIED"
            subtitle="Your role has to be admin.!"
          />
        </div>
      ) : currentUser?.role == 'ADMIN' ? (
        <>
          <TestimonialListClient
            testimonials={testimonials}
            currentUser={currentUser}
          />
        </>
      ) : (
        <></>
      )}
    </ClientOnly>
  );
};

export default page;
