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
export type SafeSkill = Omit<
  Skill,
  'id' | 'userId' | 'updatedAt' | 'createdAt'
> & {
  createdAt: string;
};

export type SafeExperience = Omit<Experience, 'createdAt'> & {
  createdAt: string;
};

export type SafeTestimonial = Omit<
  Testimonial,
  'id' | 'createdAt' | 'updatedAt' | 'userId'
> & {
  createdAt: string;
};
export type SafeContact = Omit<Contact, 'id' | 'createdAt' | 'updatedAt'> & {
  createdAt: string;
};
export type SafeFeedback = Omit<Feedback, 'id' | 'createdAt'> & {
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
