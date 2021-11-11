import React from 'react';
import './SectionAbout.scss';

type Props = {
  onClick: () => void;
  children: string;
};

// eslint-disable-next-line max-len
const aboutParagraph: string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, aliquam voluptas beatae vitae expedita consectetur nesciunt quia deserunt asperiores facere fuga dicta fugiat corrupti et omnis porro at dolorum! Ad!';

const SectionAbout: React.FC<Props> = ({ onClick, children }) => (
  <div className="about__section">
    <div className="about__wrapper">
      <div className="about__text">
        <div className="about__title about__title--small">
          About&nbsp;
          <span className="about__title about__title--large">
            Us
          </span>
        </div>
        <p className="about__paragraph">{aboutParagraph}</p>
        <button className="about__button" onClick={onClick}>{children}</button>
      </div>
      <div className="image__wrapper">
        <img className="about__image" alt="" />
      </div>
    </div>
  </div>
);

export default SectionAbout;
