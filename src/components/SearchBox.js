import React, { useState } from 'react';

const SearchBox = ({ onSearch, onRandom }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      onSearch(inputValue.trim());
    }
  };

  return (
    <div className='pa2 relative'>
      <input
        className='pa3 ba bw1 b--black bg-transparent'
        type='search'
        placeholder='Search number...'
        value={inputValue}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', zIndex: 1 }}
      />
      <button
        className='pa3 ba bw1 b--black bg-transparent grow pointer hover-bg-light-gray'
        onClick={onRandom}
        style={{
          marginLeft: '8px',
          transition: 'all 0.2s',
          zIndex: 1,
        }}
      >
        Random
      </button>
    </div>
  );
};

export default SearchBox;
