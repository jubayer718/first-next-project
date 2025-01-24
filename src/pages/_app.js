import '../styles/globals.css';
import Header from '@/components/Headers';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header></Header>
      <Component {...pageProps} />
    </>
  );
}
