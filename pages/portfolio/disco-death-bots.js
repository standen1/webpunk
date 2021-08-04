import Image from 'next/image';
import styled, { ThemeProvider } from 'styled-components';
import { motion } from 'framer-motion';

//import MetaInfo from '../../components/seo/metaInfo';
import * as animation from '../../animationState/animationState';
import PageHeader from '../../components/pageHeader/pageHeader';

const discoDeathBots = () => {
	return (
		<>
{/*	      <MetaInfo 
	        title="WebPunk | Portfolio"
	        desc="A project from my web development portfolio."
	        canonical="portfolio" />*/}
	      <Main as={motion.main}
	        variants={animation.containerVariants}
	        initial="hidden"
	        animate="visible"
	        exit="exit"
	      >
	        <PageHeader title={'Disco Death Bots Website'} />

	        <section>
	        	<h2>Project Overview</h2>
	        	
	        	<div className="imgRight">
	        		<Image 
	        			src="/images/discoDeathBots/disco-death-bots.jpg" 
	        			alt="Disco Death Bots Logo" 
	        			layout="fill"
	        			objectFit="contain"
	        		/>
	        	</div>

	        	<div>
		        	<h4>Product:</h4>
		        	<p>A Website where users can get general information about Disco Death Bots, a music artist.</p>
	        	</div>

	        	<div>
	        	<h4>Project Duration:</h4>
		        	<ul>
		        		<li>December 2015 to January 2016(original Wordpress site).</li>
		        		<li>December 2020 to February 2021(Frontity version).</li>
		        	</ul>
	        	</div>

	        	<div>
		        	<h4>The Problem:</h4>
		        	<p>The site was initially a wordpress.com website built with a theme that had limited ability and needed some major updates.  With a new album in the works, I needed to build something new that had a nice interface, a better user experience, and (because I’m a developer) something lightning fast.</p>
	        	</div>

	        	<div>
		        	<h4>The Goal:</h4>
		        	<p>Come up with a nice design where I could implement a headless CMS for the blog with a frontend in React. </p>
	        	</div>
	        </section>

	        <section>
	        	<h2>Research</h2>
	        	
	        	<div>
		        	<h4>Users:</h4>
		        	<p>I interviewed people that I knew such as friends, family, and other fellow musicians that had visited the website when I initially released my first album.</p>
	        	</div>

	        	<div>
		        	<h4>Insights:</h4>
		        	<ul>
		        		<li>The overall look needed a lot of work.  The theme did not look right with the context.</li>
		        		<li>The main text over a background image was difficult to read.</li>
		        		<li>There wasn’t much along the line of branding or overall public image.</li>
		        	</ul>
	        	</div>
	        </section>

	        <section>
	        	<h2>Planning</h2>
	        	
		        <p>I began to plan the pages that I wanted and the exterior links that I would use.  I also developed a logo for Disco Death Bots.</p>

	        	
	        	<div>
		        	<h4>Information Architecture:</h4>
		        	<ul>
		        		<li>Home/News</li>
		        		<li>Events</li>
		        		<li>Listen</li>
		        		<li>Store(External BandCamp Page)</li>
		        		<li>Contact</li>
		        	</ul>
	        	</div>
	        </section>

	        <section>
	        	<h2>Design</h2>
	        	
	        	<div>
		        	<h4>Wireframes and Mockups:</h4>
		        	<div className="mockupsGrid">
		        		<div className="desktopMock">
			        		<Image 
			        			src="/images/discoDeathBots/home-desktop-wireframe.jpg" 
			        			alt="Home Page Wireframe Desktop" 
			        			layout="fill"
			        			objectFit="cover"
			        		/>
			        	</div>
			        	<div className="mobileMock">
			        		<Image 
			        			src="/images/discoDeathBots/home-mobile-wireframe.jpg" 
			        			alt="Home Page Wireframe Mobile" 
			        			layout="fill"
			        			objectFit="cover"
			        		/>
			        	</div>
		        	</div>

		        	<div className="mockupsGrid">
		        		<div className="desktopMock">
			        		<Image 
			        			src="/images/discoDeathBots/home-desktop-mockup.jpg" 
			        			alt="Home Page Mockup Desktop" 
			        			layout="fill"
			        			objectFit="cover"
			        		/>
			        	</div>
			        	<div className="mobileMock">
			        		<Image 
			        			src="/images/discoDeathBots/home-mobile-mockup.jpg" 
			        			alt="Home Page Mockup Mobile" 
			        			layout="fill"
			        			objectFit="cover"
			        		/>
			        	</div>
		        	</div>
	        	</div>
	        </section>

	        <section>
	        	<h2>Development</h2>
	        	
		        <p>I managed to find out about Frontity, which is a framework built on top of React that is meant to improve SEO for multi-page websites and integrate easily with Wordpress as a headless CMS.  I decided to learn Frontity for this site and keep my Wordpress site as the backend, headless blog.  As I was developing it, I found an animation library that allows the background of an element to change color automatically.  So, I decided to use it.  I researched Cyberpunk and Sci-Fi color palettes until I found some colors that fit with my theme and kept the text in the foreground readable and accessible.</p>
	        	
	        	<div>
		        	<h4>Technology Stack:</h4>
		        	<ul>
		        		<li>Frontity/React</li>
		        		<li>Styled Components</li>
		        		<li>React Animated Background</li>
		        	</ul>
	        	</div>
	        </section>

	        <section>
	        	<h2>Future</h2>
	        	
	        	<ul>
	        		<li>As much as Frontity was easy to integrate with Wordpress, I did have a lot of difficulty in the development phase due to really slow page updates when running a local development server.  It also had a very slow build time when pushing to production mode. I ran into more issues when setting up hosting.</li>
	        		<li>I want to fix the React Animated Background component because it would not fit the inner content correctly without making an inner scroll container.</li>
	        		<li>I would like to eventually add more imagery to the site and do a bit of a redesign.</li>
	        	</ul>
	        	
	        	<div>
		        	<h4>Link to Final Site:</h4>
		        	<a target="_blank" rel="noopener noreferrer" href="https://discodeathbots.com/">discodeathbots.com</a>
	        	</div>
	        </section>

	        <section className="bottomGalleryContainer">
	        	<div>
		        	<h4>Original Site:</h4>
		        	<div className="bottomGallery">
		        		<Image 
		        			src="/images/discoDeathBots/disco-death-bots-original-site.png" 
		        			alt="Original Website Home Page Desktop" 
		        			layout="fill"
		        			objectFit="contain"
		        		/>
		        	</div>
	        	</div>
	        	
	        	<div>
		        	<h4>New Site:</h4>
		        	<div className="bottomGallery">
		        		<Image 
		        			src="/images/discoDeathBots/ddbwebsite.jpg" 
		        			alt="New Website Home Page Desktop" 
		        			layout="fill"
		        			objectFit="contain"
		        		/>
		        	</div>
	        	</div>
	        </section>

	      </Main>
        </>
	);
}

export default discoDeathBots;

const Main = styled.main`
	max-width: 800px;
	margin: auto;
	box-style: border-box;
	padding: 15px;

	section {
		margin-bottom: 70px;
		box-style: border-box;
	}

	ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
	}

	h4 {
		margin: 40px 0 0 0;
		opacity: 0.8;
	}

	a {
	    font-weight: 600;
	    text-decoration: none;
	    color: ${props => props.theme.mainBlue};
	    transition: color 0.2s ease-in-out;
	  }

	  a:hover {
	    cursor: pointer;
	    color: ${props => props.theme.hover}
	  }

	div.imgRight, div.bottomGallery {
		width: 300px;
		height: 200px;
		position: relative;
	}

	div.imgRight {
		width: 400px;
		height: 300px;
		position: relative;
		display: inline-block;
		float: right;
		margin: 0 0 10px 10px;
		@media (max-width: 600px) {
			display: block;
			float: none;
			margin: auto;
			width: 100%;
		}
	}

	div.desktopMock {
		width: 500px;
		height: 400px;
		position: relative;

		@media (max-width: 700px) {
			width: 300px;
			height: 200px;
		}
	}

	div.mobileMock {
		width: 110px;
		height: 400px;
		position: relative;

		@media (max-width: 700px) {
			width: 60px;
			height: 200px;
		}
	}

	div.mockupsGrid {
		display: grid;
		max-width: 800px;
		justify-items: center;
		margin: 10px auto 25px;
		grid-template-columns: 2fr 1fr;

	}

	.bottomGalleryContainer {
		display: grid;
		max-width: 800px;
		justify-content: center;
		grid-template-columns: repeat(auto-fill, 300px);
		grid-gap: 10px;
	}
`;