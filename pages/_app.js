// import '../styles/globals.css'
import '../styles/main.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'

const App = ({ Component, pageProps } ) => {

  return <Component {...pageProps} />

}
App.getInitialProps =async ({ Component, ctx }) => {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { pageProps };
}

export default App;
