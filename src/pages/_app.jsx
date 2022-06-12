/* eslint-disable react/prop-types */
import 'styles/globals.css';
import { wrapper } from 'store/store';
import { appWithTranslation } from 'services/TranslationService';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(appWithTranslation(MyApp));
