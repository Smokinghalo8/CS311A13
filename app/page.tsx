'use client'


import { useState } from 'react';

const Home = () => {
  const [inputValue, setInputValue] = useState<number | string>('');
  const [displayValue, setDisplayValue] = useState<number | string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    setDisplayValue(inputValue);
  };

  return (
    <div>
      <h1>Number Input Form</h1>
      <input
        type="number"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter a number"
      />
      <button onClick={handleButtonClick}>Submit</button>
      <input
        type="text"
        value={displayValue}
        readOnly
        placeholder="Last input"
      />
    </div>
  );
};

export default Home;
