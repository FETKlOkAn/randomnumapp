// App.js
import React, { useState } from 'react';
import SearchBox from '../components/SearchBox';
import './App.css';
import ParticlesBg from 'particles-bg';
import Footer from '../components/Footer'

function App() {
  const [numberFact, setNumberFact] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchNumberFact = async (number) => {
    try {
      setLoading(true);
      const response = await fetch(`http://localhost:3000/api/${number}`);
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
    <div className='tc bg-gradient 'style={{ overflowX: 'hidden' }}>
      <ParticlesBg type="cobweb" bg={true} />
      <h1 className='f1'>Number Facts</h1>
      <SearchBox onSearch={handleSearch} onRandom={handleRandom} />
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div>
          {<p className='f1 fw6 lucky-number-animation'> Your Lucky Number is ...</p>}
          {<p className='f1 fw8 number-animation'> {numberFact.match(/^\d+/)} </p>}
          {numberFact.trim() !== '' ? (
            <p className="f2 fw6 mb3 fact-typing-animation">{numberFact}</p>
          ) : (
            <p>Type a number and press Enter or click Random to get a fact about it</p>
          )}
          
        </div>
      )}
      <Footer/>
    </div>
  );
}

export default App;
