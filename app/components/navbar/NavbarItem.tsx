import React from 'react';

interface NavbarItemProps {
  label: string;
  active?: boolean;
  onClick: () => void;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ label, active, onClick }) => {
  return (
    <div className="gap-4 hidden lg:flex">
      <div
        onClick={onClick}
        className={
          active
            ? `md:block text-sm py-3 px-4 rounded-full bg-neutral-100 transition cursor-pointer font-semibold`
            : 'md:block text-sm py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer'
        }
      >
        {label}
      </div>
    </div>
  );
};

export default NavbarItem;
