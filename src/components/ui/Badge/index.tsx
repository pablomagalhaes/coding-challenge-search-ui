import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  'data-testid'?: string;
}

const Badge: React.FC<BadgeProps> = ({ children, className, 'data-testid': testId }) => {
  return (
    <span className={`bg-stone-800 text-sm font-medium text-white shadow rounded-md h-9 px-4 ${className}`} data-testid={testId}>
      {children}
    </span>
  );
};

export default Badge;
