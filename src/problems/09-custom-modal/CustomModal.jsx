import React from 'react';
import './CustomModal.css';

export default function CustomModal() {
  const [show, setShow] = React.useState(false);

  return (
    <div className='container'>
      <button onClick={() => setShow(true)}> Open Modal</button>
      {show && (
        <div className='overlay'>
          <div className='modal'>
            <h3>React Interview Coding Questions</h3>
            <p>Welcome to React Interview Prep!</p>
            <button onClick={() => setShow(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
