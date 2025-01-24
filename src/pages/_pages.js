import { KindeAuthProvider } from '@kinde-oss/kinde-auth-nextjs';
import '../styles/globals.css';
// import Header from '@/components/Headers';
function MyApp({ Component, pageProps }) {
  return (
    <KindeAuthProvider
      clientId={process.env.KINDE_CLIENT_ID} 
      domain={process.env.KINDE_DOMAIN}      
    >
      {/* <Header></Header> */}
      <Component {...pageProps} />
    </KindeAuthProvider>
  );
}

export default MyApp;
