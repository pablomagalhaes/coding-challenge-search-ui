import React from 'react';

interface InputProps {
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  'data-testid'?: string;
}

const Input: React.FC<InputProps> = ({ type, value, onChange, onKeyDown, placeholder, className, 'data-testid': testId }) => {
  return (
    <input
      data-testid={testId}
      type={type}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
      className={className}
    />
  );
};

export default Input;
