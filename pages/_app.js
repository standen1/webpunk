
import styled from 'styled-components';

import '../styles/globals.css';
import Layout from '../components/hoc/layout/layout';


function MyApp({ Component, pageProps, router }) {
  	return (
	  <Layout>
		  <Component {...pageProps} />
	  </Layout>
	);
}

export default MyApp;

//Styles
const Div = styled.div`
	width: 100%;
	height: 100%;
`;