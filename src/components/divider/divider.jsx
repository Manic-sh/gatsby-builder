import React from 'react';
import builder, { Builder } from "@builder.io/react";
import './divider.styles.css';

builder.init("0f9e8947659247f9a7ae2506f4375e34");

function Divider({ text = 'This is a Custom Divider Component' }) {
  return (
    <div className='divider'>
      <p>{text}</p>
    </div>
  );
}

export default Divider;

Builder.registerComponent(Divider, {
  name: "Custom Divider",
  inputs: [
    {
      name: "text",
      type: "string",
      defaultValue: "This is a Custom Divider Component",
      required: true,
      showIf: "true",
    },
  ],
});