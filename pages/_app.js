
import styled from 'styled-components';
import { AnimatePresence } from 'framer-motion';


import '../styles/globals.css';
import MetaInfo from '../components/seo/metaInfo';
import Layout from '../components/hoc/layout/layout';


function MyApp({ Component, pageProps, router }) {

  	return (	
		<Layout>
			  <MetaInfo route={router.route} />
			  <Component {...pageProps} key={router.route} />
		</Layout>
		
	);
}

export default MyApp;

