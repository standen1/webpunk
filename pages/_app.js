
import styled from 'styled-components';
import { AnimatePresence } from 'framer-motion';

import '../styles/globals.css';
import Layout from '../components/hoc/layout/layout';


function MyApp({ Component, pageProps, router }) {
  	return (	
		<Layout>
			  <Component {...pageProps} key={router.route} />
		</Layout>
		
	);
}

export default MyApp;

