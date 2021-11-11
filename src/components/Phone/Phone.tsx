import React from 'react';
import phoneNumber from '../../data/PhoneNumber';
import './Phone.scss';

type Props = {
    children: string
    onClick: () => void;
  };

const Phone: React.FC<Props> = ({ onClick, children }) => (
  <div className="phone__number" onClick={onClick}>
    {children}
  </div>
);

export default Phone;
