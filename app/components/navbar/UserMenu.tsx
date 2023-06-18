'use client';

import { AiOutlineMenu, AiFillCaretDown } from 'react-icons/ai';
import Avatar from '../Avatar';
import { useCallback, useState } from 'react';
import MenuItem from './MenuItem';

import useRegisterModal from '@/app/hooks/useRegisterModal';
import useLoginModal from '@/app/hooks/useLoginModal';

import { signOut } from 'next-auth/react';

import { SafeUser } from '@/app/types';
import { useRouter } from 'next/navigation';
import NavbarItem from './NavbarItem';
import MobileMenu from './MobileMenu';
import ToolTip from '../ToolTip';
import useSkillModal from '@/app/hooks/useSkillModal';
import useExperienceModal from '@/app/hooks/useExperienceModal';
import useTestimonialModal from '@/app/hooks/useTestimonialModal';
import useProjectModal from '@/app/hooks/useProjectModal';

interface UserMenuProps {
  currentUser?: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const router = useRouter();
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const projectModal = useProjectModal();
  const skillModal = useSkillModal();
  const experienceModal = useExperienceModal();
  const testimonialModal = useTestimonialModal();

  const [isOpen, setIsOpen] = useState(true);
  const [showMobileMenu, setShowMobileMenu] = useState(true);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu((current) => !current);
  }, []);

  return (
    <div className="relative">
      <div className="flex flex-rows gap-3">
        <div>
          <ToolTip tooltip="Home Page">
            <NavbarItem onClick={() => router.push('/')} label="Home" active />
          </ToolTip>
          <ToolTip tooltip="Project Page">
            <NavbarItem
              onClick={() => router.push('/projects')}
              label="Project"
            />
          </ToolTip>
          <ToolTip tooltip="Skill & Others">
            <NavbarItem onClick={() => router.push('/skills')} label="Skill" />
          </ToolTip>
          <ToolTip tooltip="Contact Page">
            <NavbarItem
              onClick={() => router.push('/contacts')}
              label="Contact"
            />
          </ToolTip>
          <ToolTip tooltip="Article Page">
            <NavbarItem
              onClick={() => router.push('/articles')}
              label="Article"
            />
          </ToolTip>
        </div>

        <div
          onClick={toggleMobileMenu}
          className="lg:hidden text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition flex flex-row cursor-pointer items-center"
        >
          <p className="text-black text-sm font-semibold">Browse</p>
          <AiFillCaretDown
            className={`w-8 text-black fill-black mt-1 transition-all ${
              showMobileMenu ? 'rotate-0' : 'rotate-180'
            }`}
          />
          {/* for mobile */}
          {!showMobileMenu && (
            <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm mr-12">
              <div className="flex flex-col cursor-pointer">
                <>
                  <MobileMenu onClick={() => router.push('/')} label="Home" />
                  <MobileMenu
                    onClick={() => router.push('/projects')}
                    label="Project"
                  />
                  <MobileMenu
                    onClick={() => router.push('/skills')}
                    label="Skill"
                  />
                  <MobileMenu
                    onClick={() => router.push('/contacts')}
                    label="Contact"
                  />
                  <MobileMenu
                    onClick={() => router.push('/articles')}
                    label="Article"
                  />
                </>
              </div>
            </div>
          )}
        </div>
        <div
          onClick={toggleOpen}
          className="
          p-4
          md:py-1
          md:px-2
          border-[1px]
          border-neutral-100
          flex
          flex-row
          items-center
          gap-3
          rounded-full
          cursor-pointer
          hover:bg-neutral-200 
          transition
        "
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar src={currentUser?.image} />
          </div>
        </div>
      </div>
      {!isOpen && (
        <div
          className="
          absolute
          rounded-xl
          shadow-md
          w-[40vw]
          md:w-3/4
          bg-white
          overflow-hidden
          right-0
          top-12
          text-sm
          "
        >
          <div className="flex flex-col cursor-pointer">
            {currentUser?.role == 'USER' ? (
              <>
                <MenuItem onClick={() => {}} label="Your profile" />
                <MenuItem onClick={() => {}} label="Change language" />
                <hr />
                <MenuItem onClick={() => signOut()} label="Logout" />
              </>
            ) : currentUser?.role == 'ADMIN' ? (
              <>
                <MenuItem
                  onClick={() => router.push('/dashboard')}
                  label="Dashboard"
                />
                <MenuItem onClick={projectModal.onOpen} label="Add Project" />
                <MenuItem onClick={skillModal.onOpen} label="Add Skill" />
                <MenuItem
                  onClick={experienceModal.onOpen}
                  label="Add Experience"
                />
                <MenuItem
                  onClick={testimonialModal.onOpen}
                  label="Add Testimonial"
                />
                <MenuItem onClick={() => {}} label="Your profile" />
                <MenuItem onClick={() => {}} label="Change language" />
                <hr />
                <MenuItem onClick={() => signOut()} label="Logout" />
              </>
            ) : (
              <>
                <MenuItem onClick={loginModal.onOpen} label="Login" />

                <MenuItem onClick={registerModal.onOpen} label="Sign up" />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
