import { Builder } from '@builder.io/react';
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

Builder.registerComponent(Divider, {
  name: 'Custom Divider',
  inputs: [
    {
      name: 'text',
      type: 'string',
      defaultValue: 'This is a Custom Divider Component',
      required: true,
      showIf: 'true',
    },
  ],
});
