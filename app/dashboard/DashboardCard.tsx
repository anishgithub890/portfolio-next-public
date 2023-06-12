'use client';
import React from 'react';
import Button from '../components/Button';
import { useRouter } from 'next/navigation';

const DashboardCard = () => {
  const router = useRouter();
  return (
    <>
      <figure className="md:flex bg-slate-100 hover:bg-slate-50 transition rounded-xl p-8 md:p-8">
        <Button
          onClick={() => router.push('/projectlist')}
          label="Manage Project"
        />
      </figure>
      <figure className="md:flex bg-slate-100 hover:bg-slate-50 transition rounded-xl p-8 md:p-8">
        <Button
          onClick={() => router.push('/skilllist')}
          label="Manage Skill"
        />
      </figure>
      <figure className="md:flex bg-slate-100 hover:bg-slate-50 transition rounded-xl p-8 md:p-8">
        <Button
          onClick={() => router.push('/experiencelist')}
          label="Manage Experience"
        />
      </figure>
      <figure className="md:flex bg-slate-100 hover:bg-slate-50 transition rounded-xl p-8 md:p-8">
        <Button
          onClick={() => router.push('/testimoniallist')}
          label="Manage Testimonial"
        />
      </figure>
      <figure className="md:flex bg-slate-100 hover:bg-slate-50 transition rounded-xl p-8 md:p-8">
        <Button
          onClick={() => router.push('/contactlist')}
          label="Read and Delete Contact"
        />
      </figure>
      <figure className="md:flex bg-slate-100 hover:bg-slate-50 transition rounded-xl p-8 md:p-8">
        <Button
          onClick={() => router.push('/feedbacklist')}
          label="Read your feedback"
        />
      </figure>
      <figure className="md:flex bg-slate-100 hover:bg-slate-50 transition rounded-xl p-8 md:p-8">
        <Button onClick={() => {}} label="User" />
      </figure>
    </>
  );
};

export default DashboardCard;
