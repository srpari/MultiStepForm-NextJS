import { createGlobalStyle } from 'styled-components';

import '../styles/style.css'
import { ApolloProvider } from '@apollo/client';

import { useApollo } from '../lib/apolloClient';

import DefaultLayout from '../layouts/DefaultLayout';

import { StepLinks } from '../components/context/StepLinks';

import { motion,AnimatePresence } from 'framer-motion'; 


import { SignupFormProvider } from '../components/context/SignupFormContext';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  a {
    color: #2D8AC4;
    transition: 0.3s all;
  }
  a:hover {
    color: #E70805;
  }
  body {
    background: #f7f7f7;
    color: #333644;
    font-family: 'Space Mono', sans-serif;
    margin: 0;
    min-height: 100vh;
    padding: 0;
    padding-top: 64px;
    position: relative;
  }
  code {
    background-color: rgba(202,234,250, 0.5);
    border-radius: 3px;
    font-size: 85%;
    margin: 0;
    padding: 0.2em 0.4em;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Source Sans Pro', sans-serif;
    margin-top: 1em;
    color: #4889BF;
    font-weight: 600;
  }
  h1 {
    font-size: 3.5em;
    letter-spacing: -3px;
    @media screen and (max-width: 580px) {
      font-size: 1.5em;
      letter-spacing: -1px;
    }
  }
  h2 {
    font-size: 2.25em;

  }
  h3 {
    font-size: 1.75em;
    letter-spacing: 1px;
  }
  h2,
  h4,
  h6 {
    text-shadow: 2px -1px 0 #D0E9F8, 1px -1px 0 #D0E9F8, -1px 1px 0 #D0E9F8,
      1px -2px 0 #D0E9F8;
  }

  form {
    background: #fff;
    border-radius: 30px;
    padding: 40px;
    min-width: 500px;
    min-height: 350px;
    display: flex;
    flex-direction: column;
  }
  
 p {
    align-items: center;
    justify-content: center;
    color: rgb(184, 109, 109);
    margin-top: 8px;
    margin-bottom: 20px;
    padding-left: 8px;
    font-size: 14px;
    width: 100%;
  }

 input, text,email {
  border: none;
  background: #eee;
  border-radius: 50px;
  outline: none;
  padding: 20px;
  width: 100%;
  transition: 0.3s ease all;
  font-size: 16px;
  font-family: 'Merriweather', serif;
  &:hover {
    border-color: black;
  }
  &:focus {   
    background: #ddd;
  }
 }
 
`;

const App = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps);
  const Layout = Component.Layout || DefaultLayout;

  return (
    <ApolloProvider client={apolloClient}>
      <Layout>        
    <SignupFormProvider>
          <h1 style={{ textAlign: 'center' }} >Multi Step Form</h1>
    
    {/* <h1 style={{ textAlign: 'center' }}>Multi Step Form</h1>  */}
         <StepLinks/>          
         <Component {...pageProps} />
        <GlobalStyle />
    </SignupFormProvider>      
      </Layout>
    </ApolloProvider>
  );
};

export default App;
