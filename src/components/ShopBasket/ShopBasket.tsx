import React, { Children } from 'react';
import './ShopBasket.scss';

type Props = {
  value: string
  children: string;
  onClick: (event: any) => void;
};

const ShopBasket: React.FC<Props> = ({ onClick, children, value }) => (
  // eslint-disable-next-line jsx-a11y/control-has-associated-label
  <button className="shop__basket" onClick={onClick} value={value}>
    {children}
  </button>
);

export default ShopBasket;
