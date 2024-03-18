// App.js
import React, { useState } from 'react';
import SearchBox from '../components/SearchBox';
import './App.css';

function App() {
  const [numberFact, setNumberFact] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchNumberFact = async (number) => {
    try {
      setLoading(true);
      const response = await fetch(`http://numbersapi.com/${number}/trivia`);
      const data = await response.text();
      setNumberFact(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleSearch = (number) => {
    if (number.trim() !== '') {
      fetchNumberFact(number);
    }
  };

  const handleRandom = () => {
    fetchNumberFact('random');
  };

  return (
    <div className='tc bg-gradient'>
      <h1 className='f1'>Number Facts</h1>
      <SearchBox onSearch={handleSearch} onRandom={handleRandom} />
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div>
          {numberFact.trim() !== '' ? (
            <p className="f2 fw6 mb3">{numberFact}</p>
          ) : (
            <p>Type a number and press Enter or click Random to get a fact about it</p>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
