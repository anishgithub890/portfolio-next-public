import {
  Skill,
  Experience,
  Testimonial,
  User,
  Contact,
  Feedback,
} from '@prisma/client';

type Project = {
  createdAt: Date;
  updatedAt: Date;
  id: string;
  title: string;
  description: string;
  view: string | null;
  github: string | null;
  imageSrc: string;
  userId: string;
};

export type SafeProject = Omit<Project, 'createdAt' | 'updatedAt'> & {
  createdAt: string;
  updatedAt: string;
};

export type SafeSkill = Omit<Skill, 'updatedAt' | 'createdAt'> & {
  createdAt: string;
  updatedAt: string;
};

export type SafeExperience = Omit<Experience, 'createdAt' | 'updatedAt'> & {
  createdAt: string;
  updatedAt: string;
};

export type SafeTestimonial = Omit<Testimonial, 'createdAt' | 'updatedAt'> & {
  createdAt: string;
  updatedAt: string;
};
export type SafeContact = Omit<Contact, 'createdAt' | 'updatedAt'> & {
  createdAt: string;
  updatedAt: string;
};
export type SafeFeedback = Omit<Feedback, 'createdAt'> & {
  createdAt: string;
};

export type SafeUser = Omit<
  User,
  'createdAt' | 'updatedAt' | 'emailVerified'
> & {
  createdAt: string;
  updatedAt: string;
  emailVerified: string | null;
};
