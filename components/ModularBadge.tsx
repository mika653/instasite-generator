
import React from 'react';

interface ModularBadgeProps {
  label?: string;
}

export const ModularBadge: React.FC<ModularBadgeProps> = ({ label = "Standard Module" }) => {
  return (
    <div className="flex items-center mb-4 opacity-40 hover:opacity-100 transition-opacity">
      <span className="insta-badge text-[11px] font-bold text-stone-500 border-stone-300">
        InstaSite™ {label}
      </span>
    </div>
  );
};
