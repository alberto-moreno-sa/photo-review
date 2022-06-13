/* eslint-disable react/prop-types */
import React from 'react';
import Head from 'next/head';
import { wrapper } from 'store/store';
import { appWithTranslation } from 'services/TranslationService';
import { ThemeProvider } from 'styled-components';

import theme from 'components/theme';
import Global from 'components/global';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/navigation/navigation.scss';

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <meta
          name="viewport"
          key="viewport"
          property="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <Global />
        <Component {...pageProps} />
      </ThemeProvider>
      <noscript>
        <div>
          <h2>Your device has disable JavaScript.</h2>
          <p>You can enanle in the settings of your browser,</p>
          <p>Follow the instructions:</p>
          <ul>
            <li>
              <a
                href="http://www.technipages.com/google-chrome-enable-or-disable-javascript"
                target="_blank"
                rel="noreferrer"
              >
                Chrome
              </a>
            </li>
            <li>
              <a
                href="https://support.mozilla.org/en-US/kb/javascript-settings-for-interactive-web-pages"
                target="_blank"
                rel="noreferrer"
              >
                Firefox
              </a>
            </li>
            <li>
              <a
                href="http://www.technipages.com/internet-explorer-enabledisable-javascript"
                target="_blank"
                rel="noreferrer"
              >
                Internet Explorer
              </a>
            </li>
            <li>
              <a
                href="http://pchelp.ricmedia.com/enable-disable-javascript-opera/"
                target="_blank"
                rel="noreferrer"
              >
                Opera
              </a>
            </li>
          </ul>
        </div>
      </noscript>
    </React.Fragment>
  );
}

export default wrapper.withRedux(appWithTranslation(MyApp));
