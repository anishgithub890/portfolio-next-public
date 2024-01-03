'use client';

import React from 'react';
import Button from '../components/Button';
import { useRouter } from 'next/navigation';

const DashboardCard = () => {
  const router = useRouter();
  const MNG = [
    {
      label: 'Manage Skill',
      link: '/skilllist',
    },
    {
      label: 'Manage Project',
      link: '/projectlist',
    },
    {
      label: 'Manage Experience',
      link: '/experiencelist',
    },
    {
      label: 'Manage Testimonial',
      link: '/testimoniallist',
    },
    {
      label: 'Read and Delete Contact',
      link: '/contactlist',
    },
    {
      label: 'Read feedback',
      link: '/feedbacklist',
    },
    {
      label: 'Manage User',
      link: '',
    },
  ];
  return (
    <>
      {MNG.map(({ label, link }, key) => (
        <div key={key}>
          <figure className="md:flex bg-slate-100 hover:bg-slate-50 transition rounded-xl p-8 md:p-8">
            <Button onClick={() => router.push(link)} label={label} />
          </figure>
        </div>
      ))}
    </>
  );
};

export default DashboardCard;
