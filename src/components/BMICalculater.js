import React, { useState } from 'react';

function BMICalculator() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBMI] = useState(null);

  const calculateBMI = () => {
    const heightMeters = height / 100;
    const bmiValue = weight / (heightMeters * heightMeters);
    setBMI(bmiValue.toFixed(2));
  };

  return (
    <div className="details-container color-container">
      <h2 className="experience-sub-title project-title">BMI Calculator</h2>
      <div>
        <label htmlFor="height">Height (cm):</label>
        <input 
          type="number" 
          id="height" 
          value={height} 
          onChange={(e) => setHeight(e.target.value)} 
        />
      </div>
      <br></br>
      <div>
        <label htmlFor="weight">Weight (kg):</label>
        <input 
          type="number" 
          id="weight" 
          value={weight} 
          onChange={(e) => setWeight(e.target.value)} 
        />
      </div>
      <button onClick={calculateBMI}>Calculate BMI</button>
      {bmi !== null && (
        <div>
          <p>Your BMI is: {bmi}</p>
          <p>Interpretation: {interpretBMI(bmi)}</p>
        </div>
      )}
    </div>
  );
}

function interpretBMI(bmi) {
  if (bmi < 18.5) {
    return 'Underweight';
  } else if (bmi >= 18.5 && bmi < 24.9) {
    return 'Normal weight';
  } else if (bmi >= 25 && bmi < 29.9) {
    return 'Overweight';
  } else {
    return 'Obese';
  }
}

export default BMICalculator;
