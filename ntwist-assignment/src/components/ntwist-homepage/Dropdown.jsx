import React, { useState } from 'react';
// import './Dropdown.css'; // CSS for dropdown

const Dropdown = ({ section, options }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
      <div className="dropdown-label">{section}</div>
      {isOpen && (
        <div className="dropdown-content">
          <ul>
            {options.map((option, index) => (
              <li key={index}>{option}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
