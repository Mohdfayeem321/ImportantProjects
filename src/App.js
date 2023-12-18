import React, { useState } from 'react';
import './App.css';

function App() {

  const [offers, setOffers] = useState([50, 40, 60]);

  // Helper function to get the price based on the option
  const getOptionPrice = (option) => {
    switch (option) {
      case 'Option1':
        return '195.00';
      case 'Option2':
        return '345.00';
      case 'Option3':
        return '528.00';
      default:
        return '';
    }
  };

  // Helper function to render the dropdown
  const renderDropdown = (labelText) => (
    <div className="drop-down">
      <label htmlFor="dropdown">{labelText}</label>
      <select id="dropdown">
        <option className="option-size" value="">
          {labelText}
        </option>
      </select>
    </div>
  );


  const [selectedOption, setSelectedOption] = useState('');

  const options = ['Option1', 'Option2', 'Option3'];

  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };

  return (
    <div className="App">
      <div className="bundle-line">
        <div className="line"></div>
        <h3 className="bundle">Bundle & Save</h3>
        <div className="line"></div>
      </div>
      <div className="container">
        {options.map((option) => (
          <label key={option} className="radio-1pair">
            <div className="input-outer-div">
              <div className="radio-1pair">
                <input
                  type="radio"
                  value={option}
                  checked={selectedOption === option}
                  onChange={() => handleOptionChange(option)}
                />
                <div className="pair-div">
                  {option === 'Option1' && <span className="pair-span">1 Pair</span>}
                  {option === 'Option2' && <span className="pair-span">2 Pair</span>}
                  {option === 'Option3' && <span className="pair-span">3 Pair</span>}
                  <span className="pair-span">{`DKK ${getOptionPrice(option)}`}</span>
                  {selectedOption === option && (
                    <>
                      <div className="size-colour">
                        <p>#1</p>
                        {renderDropdown('S')}
                        {renderDropdown('Colour')}
                      </div>
                      <div className="size-colour">
                        <p>#2</p>
                        <div className="drop-down-2">
                          <select className="dropdown">
                            <option className="option-size" value="">
                              S
                            </option>
                          </select>
                          <select className="dropdown">
                            <option className="option-size" value="">
                              Colour
                            </option>
                          </select>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
              <div className="offer">
                {option === 'Option2' && <span id="mostPopular">Most Popular</span> && <span className="pair-span-rs">{`DKK 195.00`}</span>
                }
                {option === 'Option1' && <div className="pair-span">{`${offers[0]} % OFF`}</div>}
                {option === 'Option2' && <div className="pair-span">{`${offers[1]} % OFF`}</div>}
                {option === 'Option3' && <div className="pair-span">{`${offers[2]} % OFF`}</div>}
              </div>
            </div>
          </label>
        ))}
      </div>
      <div className="free-shipping-text">
        <h5 id='free2day'>Free 2 Day Shipping</h5>
        <h5 id='totalAmt'>Total : DKK 360.00</h5>
      </div>
      <div className="button">
        <button className="buttonCart"><span id='cartText'>+ Add to Cart</span></button>
      </div>
    </div>
  );
}

export default App;
