// SearchBox.js
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
    <div className='pa2'>
      <input
        className='pa3 ba b--green bg-lightest-blue'
        type='search'
        placeholder='Search number...'
        value={inputValue}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <button className='pa3 ba b--green bg-lightest-blue' onClick={onRandom}>
        Random
      </button>
    </div>
  );
};

export default SearchBox;
