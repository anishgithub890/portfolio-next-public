'use client';

interface MobileMenuProps {
  onClick: () => void;
  label: string;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ onClick, label }) => {
  return (
    <div
      onClick={onClick}
      className="px-4 py-3 hover:bg-neutral-100 transition font-semibold text-center"
    >
      {label}
    </div>
  );
};

export default MobileMenu;
