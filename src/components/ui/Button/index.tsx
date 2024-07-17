import React from 'react';

interface ButtonProps {
  onClick: () => void;
  className?: string;
  children: React.ReactNode;
  'data-testid'?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, className, children, 'data-testid': testId }) => {
  return (
    <button onClick={onClick} className={className} data-testid={testId}>
      {children}
    </button>
  );
};

export default Button;
