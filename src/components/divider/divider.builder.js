import builder, { Builder } from '@builder.io/react';
import Divider from './divider';

import config from '../../config';

builder.init("0f9e8947659247f9a7ae2506f4375e34");

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
  