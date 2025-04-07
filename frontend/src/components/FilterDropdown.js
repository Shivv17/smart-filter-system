import React, { useState } from 'react';

const FilterDropdown = ({ title, options, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOptionClick = (option) => {
    const updatedOptions = selectedOptions.includes(option)
      ? selectedOptions.filter((item) => item !== option)
      : [...selectedOptions, option];

    setSelectedOptions(updatedOptions);
    onChange && onChange(updatedOptions);
  };

  const handleSelectAll = () => {
    setSelectedOptions(options);
    onChange && onChange(options);
  };

  const handleClearAll = () => {
    setSelectedOptions([]);
    onChange && onChange([]);
  };

  return (
    <div className="relative inline-block text-left w-full max-w-xs">
      <button
        onClick={toggleDropdown}
        className="w-full bg-white border border-gray-300 rounded px-4 py-2 text-sm font-medium shadow-sm hover:bg-gray-50"
      >
        {title} ({selectedOptions.length})
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded shadow-lg max-h-60 overflow-y-auto p-2">
          <div className="flex justify-between items-center mb-2 text-xs text-gray-500">
            <button onClick={handleSelectAll}>Select All</button>
            <button onClick={handleClearAll}>Clear All</button>
          </div>
          {options.map((option) => (
            <label key={option.id} className="flex items-center gap-2 px-2 py-1 hover:bg-gray-100 rounded">
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
