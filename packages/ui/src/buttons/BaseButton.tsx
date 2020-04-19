import React, { ButtonHTMLAttributes } from 'react';

export interface BaseButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

function BaseButton({ children, ...props }: BaseButtonProps) {
  return <button {...props}>{children}</button>;
}

export { BaseButton };
