import React from 'react';
import './Button.scss';

type Props = {
  children: string;
  onClick: (event:any) => void;
};

const Button: React.FC<Props> = ({ children, onClick }) => (
  <button className="button" onClick={onClick}>
    {children}
  </button>
);

export default Button;
