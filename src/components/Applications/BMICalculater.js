import React, { useState } from 'react';
import './components/Applicaions/BMICalculator.css';

function BMICalculator() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBMI] = useState('');

  const calculateBMI = () => {
    const heightValue = parseFloat(height);
    const weightValue = parseFloat(weight);

    if (isNaN(heightValue) || isNaN(weightValue) || heightValue <= 0 || weightValue <= 0) {
      setBMI('Please enter valid height and weight.');
      return;
    }

    const heightMeters = heightValue / 100;
    const bmiValue = weightValue / (heightMeters * heightMeters);
    const bmiMessage = getBMIMessage(bmiValue);
    setBMI(`Your BMI is ${bmiValue.toFixed(2)} - ${bmiMessage}.`);
  };

  const getBMIMessage = (bmiValue) => {
    if (bmiValue < 18.5) {
      return 'Underweight';
    } else if (bmiValue >= 18.5 && bmiValue < 25) {
      return 'Normal weight';
    } else if (bmiValue >= 25 && bmiValue < 30) {
      return 'Overweight';
    } else {
      return 'Obese';
    }
  };

  return (
    <div className="container">
      <h1>BMI Calculator</h1>
      <div className="input-group">
        <label htmlFor="height">Height (cm):</label>
        <input
          type="number"
          id="height"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label htmlFor="weight">Weight (kg):</label>
        <input
          type="number"
          id="weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <button id="calculate-button" onClick={calculateBMI}>Calculate BMI</button>
      <div className="result" id="result">
        {bmi}
      </div>
    </div>
  );
}

export default BMICalculator;
