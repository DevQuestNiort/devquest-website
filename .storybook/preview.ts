import type { Preview } from '@storybook/react';
import '../src/presentation/styles/main.scss';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'centered',
    backgrounds: {
      default: 'marron',
      values: [
        { name: 'sable', value: '#f1ddb7' },
        { name: 'marron', value: '#5a4949' },
      ],
    },
  },
};

export default preview;
