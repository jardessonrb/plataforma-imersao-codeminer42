import '../styles/globals.css'
import MediaProvider, { MediaContext } from '../contexts/MediaContext';

function MyApp({ Component, pageProps }) {
console.log({pageProps})
  return (
    <MediaProvider
      countLessons={pageProps.countLessons as number}
      viewsLessons={pageProps.countLessons as number}
      dataModules={pageProps.dataModules}
    >
      <Component {...pageProps} />
    </MediaProvider>
  );
}

export default MyApp
