import { useState } from 'react';
import EmailVerifier from './apiFunctions/emailVerifier';
import EmailFinder from './apiFunctions/emailFinder';
import DomainSearch from './apiFunctions/domainSearch';
import "./styles/styles.css";

function Options() {
  const [activeButton, setActiveButton] = useState(1);

  const buttonsData = [
    { id: 1, text: 'Email Verifier', content: <EmailVerifier /> },
    { id: 2, text: 'Email Finder', content: <EmailFinder /> },
    { id: 3, text: 'Domain Search', content: <DomainSearch /> }
  ];

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  return (
    <section>
      <div className="container">
        <div className="button-list">
          {buttonsData.map((button) => (
            <button
              key={button.id}
              onClick={() => handleButtonClick(button.id)}
              className={`button ${activeButton === button.id ? 'active' : ''}`}
            >
              {button.text}
            </button>
          ))}
        </div>
        <div className="content">
          {activeButton !== null && (
            <div>{buttonsData.find((button) => button.id === activeButton).content}</div>
          )}
        </div>
        <div className="container-sentence">
          <span>We have validated and found over </span>
          <span className="span-color">100,000 emails </span>
          <span>for over </span>
          <span className="span-color">25,000 users </span>
          <span>in the past year.</span>
        </div>
        <div className="sentence-button">
          <button className="sentence-button">Join</button>
        </div>
      </div>
    </section>
  );
}

export default Options;