export { default } from 'next-auth/middleware';

export const config = {
  matcher: [
    '/dashboard',
    '/users',
    '/experiencelist',
    '/projectlist',
    '/skilllist',
    '/testimoniallist',
  ],
};
