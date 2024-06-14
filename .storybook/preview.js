import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../src/styles/global-styles'
import { theme } from '../src/styles/theme'

// .storybook/preview.js
import { configureActions } from '@storybook/addon-actions';

export const parameters = {
  actions: {
    handles: ['click', 'dblclick', 'keydown', 'keyup', 'hover', 'focus'],
  },
  backgrounds: {
    default: 'light',
    values: {
      light: '#ffffff',
      dark: '#000000',
    },
  },
};

// Inicialize as actions
configureActions({
  depth: 3, // Profundidade para mostrar o conteúdo de eventos de clique, etc.
  limit: 10, // Limite de itens mostrados na história
});



export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
      <GlobalStyles />
    </ThemeProvider>
  )
];
export const tags = ['autodocs'];