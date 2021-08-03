import Image from 'next/image';
import styled, { ThemeProvider } from 'styled-components';
import { motion } from 'framer-motion';

//import MetaInfo from '../../components/seo/metaInfo';
import * as animation from '../../animationState/animationState';
import PageHeader from '../../components/pageHeader/pageHeader';

const webpunk = () => {
	return (
		<>
	{/*      <MetaInfo 
	        title="WebPunk | Portfolio"
	        desc="A project from my web development portfolio."
	        canonical="portfolio" />*/}
	      <Main as={motion.main}
	        variants={animation.containerVariants}
	        initial="hidden"
	        animate="visible"
	        exit="exit"
	      >
	        <PageHeader title={'WebPunk Website'} />

	        <section>
	        	<h2>Project Overview</h2>
	        	
	        	<div>
		        	<h4>Product:</h4>
		        	<p>A website for my own design and development portfolio as well as contact information for freelance work.</p>
	        	</div>
	        	
	        	<div>
		        	<h4>Project Duration:</h4>
		        	<ul>
		        		<li>January, 2021 to March, 2021(Initial design and development).</li>
		        		<li>June, 2021 to Auguse, 2021(Updated version).</li>
		        	</ul>
	        	</div>

	        	<div id="logo">
	        		<Image 
	        			src="/images/webpunk/webpunkLogo.jpg" 
	        			alt="WebPunk Logo" 
	        			layout="fill"
	        			objectFit="cover"
	        		/>
	        	</div>

	        	<div>
		        	<h4>The Problem:</h4>
		        	<p>As a web developer and UX designer, I needed a website that would showcase my skills, highlight my portfolio of work, and include relevant background information.</p>
	        	</div>

	        	<div>
		        	<h4>The Goal:</h4>
		        	<p>Come up with a personal brand, a design that reflects that brand, and develop a website for my work and skills.</p>
	        	</div>
	        </section>

	        <section>
	        	<h2>Research</h2>
	        	
	        	<div>
		        	<h4>Background:</h4>
		        	<p>I started by researching other developers’ portfolio websites.  I analyzed the technology stacks that their sites were built on using WhatRuns(a web browser extension), I took notes of ideas that I might be able to utilize on my own site, and I asked some other professionals in the industry what their thoughts were about these websites, including what features they liked and disliked.</p>
	        	</div>
	        	
	        	<div>
		        	<h4>Insights:</h4>
		        	<ul>
		        		<li>All of the portfolio websites that I found had amazing designs, really great animation effects, and were built using modern JavaScript frameworks such as React, Vue, and Angular.</li>
		        		<li>None of these portfolio sites included case studies of UI/UX research, design, and overall development strategies.  They mostly only listed skills and included links to websites and projects that they had built.</li>
		        		<li>Most websites included some sort of blog for writing articles about their thoughts on recent web development trends or tutorials for certain topics.</li>
		        	</ul>
	        	</div>
	        </section>

	        <section>
	        	<h2>Planning</h2>

		        <p>I started thinking about what I wanted to include in my portfolio.  After having learned UI/UX Design, I wanted to include full case studies for all of my projects in my portfolio from user research all the way through the development and production process.  I also decided to include a blog for tutorials and things I discover along the way.</p>
	        	
	        	<div></div>

	        	<div>
		        	<h4>Information Architecture:</h4>
		        	<ul>
		        		<li>Home</li>
		        		<li>About</li>
		        		<li>Portfolio</li>
		        		<li>Project Pages</li>
		        		<li>Blog</li>
		        		<li>Article Pages</li>
		        		<li>Contact</li>
		        		<li>Resume(Link to PDF Document)</li>
		        		<li>Privacy Policy(Contact info is stored)</li>
		        	</ul>
	        	</div>
	        </section>

	        <section>
	        	<h2>Design</h2>
	        	
	        	<div>
		        	<h4>Wireframes and Mockups:</h4>
		        	<div id="wireframes">
			        	<div className="wireframeImg">
			        		<Image 
			        			src="/images/webpunk/home-mobile.jpg" 
			        			alt="Home Page Wireframe" 
			        			layout="fill"
			        			objectFit="contain"
			        		/>
			        	</div>
			        	<div className="wireframeImg">
			        		<Image 
			        			src="/images/webpunk/home-mobile-dark.jpg" 
			        			alt="Home Page Mobile Mockup" 
			        			layout="fill"
			        			objectFit="contain"
			        		/>
			        	</div>
			        	<div className="wireframeImg">
			        		<Image 
			        			src="/images/webpunk/about-mobile.jpg" 
			        			alt="About Page Wireframe" 
			        			layout="fill"
			        			objectFit="contain"
			        		/>
			        	</div>
			        	<div className="wireframeImg">
			        		<Image 
			        			src="/images/webpunk/about-mobile-dark.jpg" 
			        			alt="About Page Mobile Mockup" 
			        			layout="fill"
			        			objectFit="contain"
			        		/>
			        	</div>
		        	</div>
	        	</div>
	        </section>
	        <section className="protoLength">
	        	<div>
		        	<h4>Prototype:</h4>
		        	<a href="https://www.figma.com/proto/5fhdGwUbxVVaVyDJEHiIR0/Webpunk-Updates?page-id=4%3A24&node-id=24%3A1170&viewport=48%2C558%2C0.20000000298023224&scaling=min-zoom&starting-point-node-id=24%3A1170&show-proto-sidebar=1">https://www.figma.com/proto/5fhdGwUbxVVaVyDJEHiIR0/Webpunk-Updates?page-id=4%3A24&node-id=24%3A1170&viewport=48%2C558%2C0.20000000298023224&scaling=min-zoom&starting-point-node-id=24%3A1170&show-proto-sidebar=1</a>
	        	</div>
	        </section>

	        <section>
	        	<h2>Development</h2>
	        	
	        	<p>I decided to build the site using Next, my favorite JavaScript framework that is built on top of React.  It is great for SEO and WCAG standards, it is lightning fast, scalable, and even includes backend functionality.  I also wanted to include a blog, so, I built a de-coupled Wordpress instance as a headless CMS and connected my frontend NextJS website to it in order to push blog posts onto my front-end without having to manually build a page every time I write an article.  I also included Framer Motion as an animation library to make my site appear dynamic.  In order to keep up with accessibility standards, I included code that would dynamically disable all animations if a user’s browser settings called for it.  I also included a Light Mode/Dark Mode toggle for user preferences.</p>

	        	<div id="homePageMocks">
		        	<div className="homePageMock">
		        		<Image 
		        			src="/images/webpunk/home-desktop-light.jpg" 
		        			alt="Home Page Mockup Light Mode" 
		        			layout="fill"
		        			objectFit="cover"
		        		/>
		        	</div>
		        	<div className="homePageMock">
		        		<Image 
		        			src="/images/webpunk/home-desktop-dark.jpg" 
		        			alt="Home Page Mockup Dark Mode" 
		        			layout="fill"
		        			objectFit="cover"
		        		/>
		        	</div>
	        	</div>

	        	<div>
		        	<h4>Technology Stack:</h4>
		        	<ul>
		        		<li>Next/React</li>
		        		<li>Styled Components</li>
		        		<li>Framer Motion</li>
		        		<li>Wordpress(As a headless CMS)</li>
		        		<li>Axios</li>
		        		<li>UseDarkMode</li>
		        	</ul>
	        	</div>
	        	
	        </section>

	        <section>
	        	<h2>Future</h2>
	        	
	        	<ul>
	        		<li>I plan to learn ThreeJS, a 3D rendering engine for JavaScript.  I want to dynamically implement 3D backgrounds and elements for users with animation settings turned on for certain portions of the site.</li>
	        		<li>I will continue adding case studies and blog content as I complete more projects.</li>
	        		<li>I plan to update my website every year or two with improved designs and latest technologies.</li>
	        	</ul>
	        </section>

	        <section id="bottomGallery">
	        	<div className="galleryImg">
	        		<Image 
	        			src="/images/webpunk/portfolio-light-desktop.jpg" 
	        			alt="Portfolio Page Desktop Light Mode" 
	        			layout="fill"
	        			objectFit="cover"
	        		/>
	        	</div>
	        	<div className="galleryImg">
	        		<Image 
	        			src="/images/webpunk/portfolio-dark-desktop.jpg" 
	        			alt="Portfolio Page Desktop Dark Mode" 
	        			layout="fill"
	        			objectFit="cover"
	        		/>
	        	</div>
	        	<div className="galleryImg">
	        		<Image 
	        			src="/images/webpunk/project-light-desktop.jpg" 
	        			alt="Project Page Desktop Light Mode" 
	        			layout="fill"
	        			objectFit="cover"
	        		/>
	        	</div>
	        	<div className="galleryImg">
	        		<Image 
	        			src="/images/webpunk/project-dark-desktop.jpg" 
	        			alt="Project Page Desktop Dark Mode" 
	        			layout="fill"
	        			objectFit="cover"
	        		/>
	        	</div>
	        </section>

	      </Main>
        </>
	);
}

export default webpunk;

const Main = styled.main`

max-width: 800px;
margin: auto;
box-style: border-box;
padding: 15px;

@media (max-width: 600px) {
	width: 100%;
}



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
	#logo {
		width: 300px;
		height: 200px;
		position: relative;
		display: inline-block;
		float: left;
		margin: 40px 10px 10px 0;
		@media (max-width: 600px) {
			display: block;
			float: none;
			margin: 20px auto;
			width: 100%;
		}
	}

	div.wireframeImg {
		width: 200px;
		height: 500px;
		position: relative;
	}

	div.homePageMock {
		width: 300px;
		height: 200px;
		position: relative;
		margin: 10px;
	}

	div.galleryImg {
		width: 150px;
		height: 300px;
		position: relative;
	}

	#wireframes, #bottomGallery {
		display: grid;
		max-width: 800px;
		margin: 20px auto 0;
		justify-content: center;
		grid-template-columns: repeat(auto-fill, 170px);
		grid-gap: 10px;
	}

	#homePageMocks {
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
`;