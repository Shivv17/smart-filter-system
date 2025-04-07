import React, { useState } from 'react';

const FilterDropdown = ({ title, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter(item => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <div className="filter-dropdown">
      <button onClick={toggleDropdown}>
        {title} ({selectedOptions.length})
      </button>
      
      {isOpen && (
        <div className="dropdown-content">
          {options.map((option) => (
            <label key={option.id}>
              <input
                type="checkbox"
                checked={selectedOptions.includes(option)}
                onChange={() => handleOptionClick(option)}
              />
              {option.label}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;