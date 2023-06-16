import {
  Project,
  Skill,
  Experience,
  Testimonial,
  User,
  Contact,
  Feedback,
} from '@prisma/client';

export type SafeProject = Omit<Project, 'createdAt'> & {
  createdAt: string;
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
