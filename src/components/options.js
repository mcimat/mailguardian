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
    </section>
  );
}

export default Options;