import P from 'prop-types';
import { ThemeProvider } from 'styled-components';
import {theme} from '../styles/theme';
import { GlobalStyles } from '@/styles/global-styles';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <ThemeProvider theme={theme}>
    <Component {...pageProps} />
    <GlobalStyles />
  </ThemeProvider>
  )
}

export default MyApp;

MyApp.propTypes = {
  Component: P.elementType.isRequired,
  pageProps: P.any,
};