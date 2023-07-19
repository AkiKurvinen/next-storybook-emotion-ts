import { withThemeFromJSXProvider } from '@storybook/addon-styling'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import type { Preview } from '@storybook/react';
import { GlobalStyles }  from '../src/GlobalStyles'

export const decorators = [
  withThemeFromJSXProvider({
  GlobalStyles,
})];

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'someDefault',
    },
  },
};

export default preview;