import { useState } from 'react';
import AccountInformation from './apiFunctions/accountInformation';
import EmailCount from './apiFunctions/emailCount';
import EmailVerifier from './apiFunctions/emailVerifier';
import EmailFinder from './apiFunctions/emailFinder';
import DomainSearch from './apiFunctions/domainSearch';
import "./styles/styles.css";

function Options() {
  const [activeButton, setActiveButton] = useState(null);

  const buttonsData = [
    { id: 1, text: 'Account Information', content: <AccountInformation /> },
    { id: 2, text: 'Email Count', content: <EmailCount /> },
    { id: 3, text: 'Email Verifier', content: <EmailVerifier /> },
    { id: 4, text: 'Email Finder', content: <EmailFinder /> },
    { id: 5, text: 'Domain Search', content: <DomainSearch /> }
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