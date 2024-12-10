import Theme from '../src/lib/components/Theme/Theme.svelte';
import './static/variables.css';

export const decorators = [() => Theme];

export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
export const tags = ['autodocs'];
