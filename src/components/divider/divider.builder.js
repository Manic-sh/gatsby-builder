import builder, { Builder } from '@builder.io/react';
import Divider from './divider';

import config from '../../config';

builder.init(config.builderAPIKey);

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
  