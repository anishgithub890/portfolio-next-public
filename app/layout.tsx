import { Nunito } from 'next/font/google';

import Navbar from '@/app/components/navbar/Navbar';
import LoginModal from '@/app/components/modals/LoginModal';

import RegisterModal from '@/app/components/modals/RegisterModal';
import ClientOnly from './components/ClientOnly';

import './globals.css';
import getCurrentUser from './actions/getCurrentUser';
import ToasterProvider from './providers/ToasterProvider';
import SkillModal from './components/modals/SkillModal';
import ExperienceModal from './components/modals/ExperienceModal';
import TestimonialModal from './components/modals/TestimonailModal';
import ProjectModal from './components/modals/ProjectModal';

export const metadata = {
  title: 'ANISH | MAHATO',
  description: 'Next Portfolio App',
};

const font = Nunito({
  subsets: ['latin'],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <LoginModal />
          <RegisterModal />
          <SkillModal />
          <ExperienceModal />
          <TestimonialModal />
          <ProjectModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        <div className="pb-20 pt-28">{children}</div>
      </body>
    </html>
  );
}
