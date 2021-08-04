import Image from 'next/image';
import styled, { ThemeProvider } from 'styled-components';
import { motion } from 'framer-motion';

//import MetaInfo from '../../components/seo/metaInfo';
import * as animation from '../../animationState/animationState';
import PageHeader from '../../components/pageHeader/pageHeader';

const pressureSensitive = () => {
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
	        <PageHeader title={'Pressure Sensitive Website'} />

	        <section>
	        	<h2>Project Overview</h2>
	        	
	        	<div className="imgRight">
	        		<Image 
	        			src="/images/pressureSensitive/ps-coverphoto-compressed.jpg" 
	        			alt="Protest Image" 
	        			layout="fill"
	        			objectFit="cover"
	        		/>
	        	</div>

	        	<div>
		        	<h4>Product:</h4>
		        	<p>A Website where users can get general information about Pressure Sensitive, a music artist.</p>
	        	</div>
	        	
	        	<div>
		        	<h4>Project Duration:</h4>
		        	<ul>
		        		<li>November 2019 to January 2020(original React/Bootstrap site).</li>
		        		<li>January 2021 to March 2021(NextJS version).</li>
		        	</ul>
	        	</div>

	        	<div>
		        	<h4>The Problem:</h4>
		        	<p>I had built the first version of this site as the first album was being released.  I built it with React and Bootstrap.  Since I was relatively new to React when I had built the original version in November of 2019, I was not aware of SEO and accessibility problems related to React.</p>
	        	</div>

	        	<div>
		        	<h4>The Goal:</h4>
		        	<p>Rebuild the website using a framework that would allow for lightning fast load times, use of accessibility standards, and good SEO practices.</p>
	        	</div>
	        </section>

	        <section>
	        	<h2>Research</h2>
	        	
	        	<div>
		        	<h4>Background:</h4>
		        	<p>While continuing my journey into web development, I had learned the hard way that React is not good by itself for a website due to the fact that it is a single page application and it is Javascript that executes over a single, almost plain HTML document.</p>
	        	</div>
	        	
	        	<div>
		        	<h4>Insights:</h4>
		        	<ul>
		        		<li>Screen readers and web crawlers cannot read the website due to no actual HTML elements on the page.  They do not read Javascript.</li>
		        		<li>The original mobile menu, built using Bootstrap, was outdated and needed to be rebuilt in order to have a nicer appearance.</li>
		        	</ul>
	        	</div>
	        </section>

	        <section>
	        	<h2>Planning</h2>

	        	<div className="imgRight">
	        		<Image 
	        			src="/images/pressureSensitive/old-ps-website-desktop.png" 
	        			alt="Old Website Home Page" 
	        			layout="fill"
	        			objectFit="cover"
	        		/>
	        	</div>

		        <p>I began by researching frameworks that I could use to solve my problems.  I discovered Next, a framework that is built on top of React that renders content down to HTML on build in order to fix all of these issues that React is known for when used to build full websites.  It also has many other features that make it stand out, including a great page-linking strategy, optimized images, and even backend functionality. I read through all of the NextJS documentation and followed their main tutorial before I attempted to build the overall website.</p>
	        </section>

	        <section>
	        	<h2>Design</h2>
	        	
	        	<div>
		        	<h4>Wireframes and Mockups:</h4>
		        	<div id="mockDesktopFlex">
		        		<div className="desktopMocks">
		        			<Image 
			        			src="/images/pressureSensitive/home-desktop-wireframe.jpg" 
			        			alt="Home Page Wireframe Desktop" 
			        			layout="fill"
			        			objectFit="cover"
			        		/>
		        		</div>
		        		<div className="desktopMocks">
		        			<Image 
			        			src="/images/pressureSensitive/home-mockup-final.jpeg" 
			        			alt="Home Page Mockup Desktop" 
			        			layout="fill"
			        			objectFit="cover"
			        		/>
		        		</div>
		        	</div>
		        	<div id="mockMobileFlex">
		        		<div className="mobileMocks">
		        			<Image 
			        			src="/images/pressureSensitive/home-mobile-wireframe.jpg" 
			        			alt="Home Page Wireframe Mobile" 
			        			layout="fill"
			        			objectFit="cover"
			        		/>
		        		</div>
		        		<div className="mobileMocks">
		        			<Image 
			        			src="/images/pressureSensitive/home-mobile-mockup-final.jpeg" 
			        			alt="Home Page Mockup Mobile" 
			        			layout="fill"
			        			objectFit="cover"
			        		/>
		        		</div>
		        	</div>
		        	<div>
			        	<h4>Information Architecture:</h4>
			        	<ul>
			        		<li>Home/News</li>
			        		<li>Events</li>
			        		<li>Store(External BandCamp Page)</li>
			        		<li>Contact</li>
			        		<li>Credits(For artwork, band information, etc.)</li>
			        		<li>Privacy Policy(Contact information is stored)</li>
			        	</ul>
		        	</div>
		        	<div id="extraMarginTop">
			        	<h2>Development</h2>
		        	
			        	<div>
				        	<h4>Technology Stack:</h4>
				        	<ul>
				        		<li>Next/React</li>
				        		<li>Styled Components</li>
				        		<li>React Transition Group</li>
				        	</ul>
			        	</div>
		        	</div>
	        	</div>
	        </section>


	        <section>
	        	<h2>Future</h2>
	        	
	        	<p>Once more music is ready, I want to implement a headless CMS for the backend in order to make more news posts.  I will also add a News page for all articles and only feature the most recent on the home page.  I want to implement some more advanced animations in order to make the site seem less static.</p>
	        	
	        	<div>
		        	<h4>Link to Final Site:</h4>
		        	<a target="_blank" rel="noopener noreferrer" href="https://pressuresensitiveband.com/">pressuresensitiveband.com</a>
	        	</div>
	        </section>

	        <section className="bottomGalleryContainer">
	        	<div>
		        	<h4>Original Site:</h4>
		        	<div className="bottomGallery">
		        		<Image 
		        			src="/images/pressureSensitive/old-ps-website-desktop.png" 
		        			alt="Original Website Desktop Home Page" 
		        			layout="fill"
		        			objectFit="cover"
		        		/>
		        	</div>
	        	</div>
	        	
	        	<div>
		        	<h4>New Site:</h4>
		        	<div className="bottomGallery">
		        		<Image 
		        			src="/images/pressureSensitive/pswebsite.jpg" 
		        			alt="New Website Dekstop Home Page" 
		        			layout="fill"
		        			objectFit="conver"
		        		/>

		        	</div>
	        	</div>
	        </section>

	        <section>
	        	<h2>Image Credits</h2>
	        	
	        	<ul>
	        		<li>Protest Photo by Life Matters on Pexels</li>
	        		<li>Pressure Sensitive Album Cover by James Keenan of Keenan Artsd</li>
	        	</ul>
	        </section>

	      </Main>
        </>
	);
}

export default pressureSensitive;
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

	div.imgRight {
		width: 400px;
		height: 250px;
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
	div.bottomGallery {
		width: 300px;
		height: 200px;
		position: relative;
	}

	div.desktopMocks {
		width: 300px;
		height: 400px;
		position: relative;
		margin: 10px;
	}

	div.mobileMocks {
		width: 170px;
		height: 400px;
		position: relative;
		margin: 10px;
	}

	#mockDesktopFlex {
		display: flex;
		flex-direction: row;
		justify-content: center;
		flex-wrap: wrap;
	}

	#mockMobileFlex {
		display: inline-flex;
		float: right;
		flex-direction: row;
		justify-content: center;
		flex-wrap: wrap;

		@media (max-width: 600px) {
			display: flex;
			float: none;
		}
	}

	.bottomGalleryContainer {
		display: grid;
		max-width: 800px;
		justify-content: center;
		grid-template-columns: repeat(auto-fill, 300px);
		grid-gap: 10px;
	}

	#extraMarginTop {
		margin-top: 60px;
	}
`;