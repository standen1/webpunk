import Image from 'next/image';
import styled, { ThemeProvider } from 'styled-components';
import { motion } from 'framer-motion';

import MetaInfo from '../../components/seo/metaInfo';
import * as animation from '../../animationState/animationState';
import PageHeader from '../../components/pageHeader/pageHeader';

const robofriends = () => {
	return (
		<>
	      <MetaInfo 
	        title="WebPunk | Portfolio"
	        desc="A project from my web development portfolio."
	        canonical="portfolio" />
	      <Main as={motion.main}
	        variants={animation.containerVariants}
	        initial="hidden"
	        animate="visible"
	        exit="exit"
	      >
	        <PageHeader title={'Portfolio'} />

	        <section>
	        	<h2></h2>
	        	<div className="imgRight">
	        		<Image 
	        			src="" 
	        			alt="" 
	        			layout="fill"
	        			objectFit="contain"
	        		/>
	        	</div>
	        	<div>
		        	<h4></h4>
		        	<p></p>
	        	</div>
	        	
	        	<div>
		        	<h4></h4>
		        	<p></p>
	        	</div>
	        </section>

	        <section>
	        	<h2></h2>
	        	
	        	<div>
		        	<h4></h4>
		        	<p></p>
	        	</div>
	        	
	        	<div>
		        	<h4></h4>
		        	<p></p>
	        	</div>
	        </section>

	      </Main>
        </>
	);
}

export default robofriends;

const Main = styled.main`

`;