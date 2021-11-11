import React from 'react';
import './Card.scss';

type Props = {
    title: string;
    price: number;
    imgSrc: string;
    type: string;
    onClick: ()=> void;
  };

const Card:React.FC<Props> = ({
  title, price, imgSrc, type, onClick,
}) => (
  <div className="card__item" onClick={onClick}>
    <div className="card__inner">
      <img src={imgSrc} alt={title} />
    </div>
    <div className="text__wrapper">
      <h6>
        {title}
      </h6>
      <p>
        {`$ ${price}`}
      </p>
    </div>
  </div>
);

export default Card;
