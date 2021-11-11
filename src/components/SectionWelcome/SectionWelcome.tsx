import React from 'react';
import './SectionWelcome.scss';

type Props = {
  onClick: () => void;
  children: string;
};

const SectionWelcome: React.FC<Props> = ({ onClick, children }) => (
  <div className="welcome__section">
    <div className="welcome__inner">
      <div className="welcome__title welcome__titile--small">
        Welcome To&nbsp;
        <span className="welcome__title welcome__title--large">
          Grandma
          <span className="welcome__title welcome__title--symbol">&#39;</span>
          s
        </span>
      </div>
      <button className="welcome__button" onClick={onClick}>{children}</button>
    </div>

  </div>
);

export default SectionWelcome;
