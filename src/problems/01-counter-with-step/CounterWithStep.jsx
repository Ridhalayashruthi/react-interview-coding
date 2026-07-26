import React from 'react';
import './CounterWithStep.css';

export default function App() {
  const [count, setCount] = React.useState(0);
  const [step, setStep] = React.useState(1);

  const handleIncrement = () => {
    setCount(prev => (prev + step));
  }
  const handleDecrement = () => {
    setCount(prev => (prev - step));
  }
  const handleReset = () => {
    setCount(0);
    setStep(1);
  }
  return (
    <div className='container'>
      <h3 className='h3'>Counter: {count}</h3>
      <input className="input" value={step} type="number" onChange={(e)=> setStep(Number(e.target.value))}/>&nbsp; &nbsp;
      <button onClick= {handleIncrement}>Increment</button>
      &nbsp; &nbsp;
      <button className='button' onClick= {handleDecrement}>Decrement</button>
      &nbsp; &nbsp;
      <button className='button' onClick= {handleReset}>Reset</button>
    </div>
  );
}