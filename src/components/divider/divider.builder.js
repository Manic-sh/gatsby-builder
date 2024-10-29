import { Builder } from '@builder.io/react';
import Divider from './divider';

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
  