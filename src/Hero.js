import React, { useState, useEffect } from 'react';
import './App.css';
import Card from './Card';

const Hero = (props) => {
  const [userInput, setUserInput] = useState('');
  const [filteredPairs, setFilteredPairs] = useState(props.dataArray);

  useEffect(() => {
    setFilteredPairs(props.dataArray); // Display all pairs initially
  }, [props.dataArray]);

  function handleSearch(e) {
    const searchString = e.target.value;
    setUserInput(searchString);

    if (searchString.trim() === '') {
      setFilteredPairs(props.dataArray); // Show all pairs when input is empty
    } else {
      const filteredPairs = props.dataArray.filter(pair => {
        // Perform your search logic here, comparing the base token's address
        return pair.baseToken.address.toLowerCase().includes(searchString.toLowerCase().trim());
      });
      setFilteredPairs(filteredPairs);
    }
  }

  return (
    <div className='hero'>
      <div className='header1'>
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            value={userInput}
            onChange={handleSearch}
            placeholder="Search by base token address..."
          />
        </div>
        <div className='button1'>
          <button className="custom-button">Connect</button>
        </div>
      </div>
      <div className='allcards'>
        {filteredPairs.map((pair, index) => (
          index <= 2 && <Card key={index} data={pair} />
        ))}
      </div>
    </div>
  );
}

export default Hero;
