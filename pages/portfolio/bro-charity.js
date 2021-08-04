import Image from 'next/image';
import styled, { ThemeProvider } from 'styled-components';
import { motion } from 'framer-motion';

//import MetaInfo from '../../components/seo/metaInfo';
import * as animation from '../../animationState/animationState';
import PageHeader from '../../components/pageHeader/pageHeader';

const broCharity = () => {
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
	        <PageHeader title={'Baton Rouge Outreach Charity Website'} />

	        <section>
	        	<h2>Project Overview</h2>

		        <div>
			        <h4>Note</h4>
			        <p>This is a fictional organization that I made up for educational purposes only.  Any names or logos that might be identical to actual organizations are purely coincidental.</p>
		        </div>

	        	<div>
		        	<h4>Product:</h4>
		        	<p>A website where users can sign up to volunteer at events with the Baton Rouge Outreach charity.</p>
	        	</div>
	        	<div>
		        	<h4>Project Duration:</h4>
		        	<p>2 weeks in June, 2021.</p>
	        	</div>

	        	<div className="imgRight">
	        		<Image 
	        			src="/images/charity/charity.jpg" 
	        			alt="Plants Cheers Image" 
	        			layout="fill"
	        			objectFit="contain"
	        		/>
	        	</div>

	        	<div>
		        	<h4>The Problem:</h4>
		        	<p>We wanted to make sure users had an easy and convenient way to sign up for volunteer work with Baton Rouge Outreach via their website.</p>
	        	</div>

	        	<div>
		        	<h4>The Goal:</h4>
		        	<p>Design an interface that is intuitive, informational, easy to navigate, and users can complete tasks without issues.</p>
	        	</div>

	        	<div>
		        	<h4>My Role:</h4>
		        	<p>Designer</p>
	        	</div>

	        	<div>
		        	<h4>Responsibilities:</h4>
		        	<p>Brainstorming, Research, Ideation, Design, and Development.</p>
	        	</div>
	        </section>

	        <section>
	        	<h2>Research</h2>

	        	<div>
		        	<h4>Users:</h4>
		        	<p> I analyzed what type of users would use an application like this regularly.  I discovered that my users would most likely be professionals or students who Are passionate about helping people or the environment and need a simple way To sign up for volunteer work due to their busy schedules.</p>
	        	</div>

	        	<div>
		        	<h4>Insights:</h4>
		        	<ul>
		        		<li>Users do not want to have to call or constantly provide information over and over.</li>
		        		<li>Most users felt that having the ability to register online as well as volunteer while signed in would make the process easy for them.</li>
		        		<li>Users would like to be able to read about the organization as well as upcoming volunteer events.</li>
		        	</ul>
	        	</div>

	        	<div>
		        	<h4>User Journey:</h4>
		        	<p>I wanted to make sure that the steps for volunteering at a charity event would be simple and straightforward for users.</p>
	        	</div>
	        </section>

	        <section>
	        	<h2>Planning</h2>

	        	<div className="imgRight">
	        		<Image 
	        			src="/images/charity/sitemap.jpg" 
	        			alt="Sitemap and Information Architecture" 
	        			layout="fill"
	        			objectFit="contain"
	        		/>
	        	</div>

	        	<div>
	        	<h4>Information Architecture:</h4>
		        	<ul>
		        		<li>Home</li>
		        		<li>About</li>
		        		<li>Register</li>
		        		<li>News and Events</li>
		        		<li>Account</li>
		        		<li>Log In</li>
		        		<li>Sign Up</li>
		        	</ul>
	        	</div>

	        	
	        </section>

	        <section>
	        	<h2>Design</h2>

	        	<div>
		        	<h4>Paper To Digital Wireframes:</h4>
		        	<div className="mockFlex">
		        		<div className="desktopMock">
			        		<Image 
			        			src="/images/charity/paper-wireframes.jpg" 
			        			alt="Paper Sketch Wireframes" 
			        			layout="fill"
			        			objectFit="cover"
			        		/>
			        	</div>
			        	<div className="desktopMock">
			        		<Image 
			        			src="/images/charity/home-wireframe-desktop.jpg" 
			        			alt="Home Page Wireframe Desktop" 
			        			layout="fill"
			        			objectFit="cover"
			        		/>
			        	</div>
			        	<div className="desktopMock">
			        		<Image 
			        			src="/images/charity/lo-fi-proto.jpg" 
			        			alt="Low Fidelity Prototype Image" 
			        			layout="fill"
			        			objectFit="cover"
			        		/>
			        	</div>
		        	</div>

		        	<div>
		        		<h4>Mockups:</h4>
		        	</div>

		        	<div className="mockFlex">
		        		<div className="desktopMock">
			        		<Image 
			        			src="/images/charity/home-mockup-desktop.jpg" 
			        			alt="Home Page Mockup Desktop" 
			        			layout="fill"
			        			objectFit="cover"
			        		/>
			        	</div>
			        	<div className="mobileMock">
			        		<Image 
			        			src="/images/charity/home-mockup-mobile.jpg" 
			        			alt="Home Page Mockup Mobile" 
			        			layout="fill"
			        			objectFit="cover"
			        		/>
			        	</div>
			        	<div className="wideMock">
			        		<Image 
			        			src="/images/charity/confirm-mockup-desktop.jpg" 
			        			alt="Confirmation Page Mockup Desktop" 
			        			layout="fill"
			        			objectFit="cover"
			        		/>
			        	</div>
		        	</div>
	        	</div>

	        	
	        	
	        	<div>
		        	<h4>Prototype:</h4>
		        	<a target="_blank" rel="noopener noreferrer" href="https://xd.adobe.com/view/4ef61001-7603-4bc2-a34e-5f68f5db6ddf-1ba5/">https://xd.adobe.com/view/4ef61001-7603-4bc2-a34e-5f68f5db6ddf-1ba5/</a>
	        	</div>

	        </section>

	        <section>
	        	<h2>Future:</h2>
	        	<p>I plan to eventually build the website using React, Node, Express, and MongoDB.</p>
	        </section>

	        <section>
	        	<h2>Image Credits</h2>
	        	
	        	<h4>All images from Pexels website</h4>
	        	<ul>
	        		<li>Group Outdoor Cleanup Photo by Anna Shvets</li>
	        		<li>Hands Holding Plant Photo by Anna Shvets</li>
	        		<li>Water Bottle On Beach Photo by Marta Ortigosa</li>
	        		<li>Plant Cheers Photo by Mikhail Nilov</li>
	        		<li>Water Bottle In Grass Photo by Mikhail Nilov</li>
	        		<li>Hands Carrying Trash Photo by RF Studio</li>
	        		<li>Cleanup Near Lake Photo by ThirdMan</li>
	        		<li>Beach Cleanup Photo by Wahda Nurisna</li>
	        	</ul>
	        </section>

	      </Main>
        </>
	);
}

export default broCharity;

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

	div.mockFlex {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-content: center;;
		flex-wrap: wrap;
		margin: 25px 0;
	}

	div.desktopMock {
		width: 200px;
		height: 300px;
		position: relative;
		margin: 10px;
	}

	div.mobileMock {
		width: 125px;
		height: 300px;
		position: relative;
		margin: 10px;
	}

	div.wideMock {
		width: 300px;
		height: 300px;
		position: relative;
		margin: 10px;
	}
`;