import React from 'react';
import './divider.styles.css';

function Divider({ text = 'This is a Custom Divider Component' }) {
  return (
    <div className='divider'>
      <p>{text}</p>
    </div>
  );
}

export default Divider;