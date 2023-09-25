import React, { useState } from 'react';

function ButtonList() {
  // State to track the active button
  const [activeButton, setActiveButton] = useState(null);

  // Data for your buttons and their associated content
  const buttonsData = [
    { id: 1, text: 'Button 1', content: 'Content for Button 1' },
    { id: 2, text: 'Button 2', content: 'Content for Button 2' },
    { id: 3, text: 'Button 3', content: 'Content for Button 3' },
  ];

  // Function to handle button click and update the active button
  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  return (
    <div>
      <div className="button-list">
        {buttonsData.map((button) => (
          <button
            key={button.id}
            onClick={() => handleButtonClick(button.id)}
            className={activeButton === button.id ? 'active' : ''}
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
    </div>
  );
}

export default ButtonList;