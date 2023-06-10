'use client';

import Image from 'next/image';
import { SafeTestimonial, SafeUser } from '../types';

interface TestimonialCardProps {
  data: SafeTestimonial;
  currentUser?: SafeUser | null;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ data }) => {
  return (
    <>
      <figure className="md:flex bg-slate-100 hover:bg-slate-50 transition rounded-xl p-8 md:p-0">
        {/* <img
          className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
          src={data.imageSrc}
          alt="testimonial"
          width="384"
          height="512"
        /> */}
        <Image
          className="w-24 h-24 rounded-md mx-auto md:rounded-md md:w-[8rem] md:h-[8rem] md:ml-[0rem]"
          src={data.imageSrc}
          alt="testimonial"
          width="384"
          height="512"
        />

        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">{data.name}</div>
            <div className="text-slate-700 dark:text-slate-500">
              {data.role}
            </div>
            <div className="text-slate-700 dark:text-slate-500">
              {data.company}
            </div>
          </figcaption>
          <blockquote>
            <p className="text-lg font-medium">{data.comment}</p>
          </blockquote>
        </div>
      </figure>
    </>
  );
};

export default TestimonialCard;
