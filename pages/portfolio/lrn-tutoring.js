import Image from 'next/image';
import styled, { ThemeProvider } from 'styled-components';
import { motion } from 'framer-motion';

import MetaInfo from '../../components/seo/metaInfo';
import * as animation from '../../animationState/animationState';
import PageHeader from '../../components/pageHeader/pageHeader';

const lrnTutoring = () => {
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
	        <PageHeader title={'LRN Tutoring App and Website'} />

	        <section>
	        	<h2>Project Overview</h2>
	        	
	        	<div>
			        <h4>Note</h4>
			        <p>This is a fictional organization that I made up for educational purposes only.  Any names or logos that might be identical to actual organizations are purely coincidental.</p>
		        </div>

		        <div className="imgLeft">
	        		<Image 
	        			src="/images/tutoring/tutoring.jpg" 
	        			alt="Tutoring Outside" 
	        			layout="fill"
	        			objectFit="cover"
	        		/>
	        	</div>

		        <div>
		        	<h4>Product:</h4>
		        	<p>Design a mobile application and accompanying responsive website that allows users to find and book tutors for help with schoolwork. Our target users are students of all ages as well as parents with children in school.</p>
	        	</div>
	        	<div>
		        	<h4>Project Duration:</h4>
		        	<p>1 Month in July, 2021.</p>
	        	</div>

	        	<div id="clearImgFrame">
		        	<h4>The Problem:</h4>
		        	<p>Finding tutors for help with schoolwork can be very difficult. Whether it be a parent trying to find somebody to help their child with studying for a certain subject or a part time college student who works full time trying to fit something into their schedule, there are many problems associated with finding the right tutor and at a time that is convenient</p>
	        	</div>

	        	<div className="imgRight">
	        		<Image 
	        			src="/images/tutoring/convention.jpg" 
	        			alt="Convention" 
	        			layout="fill"
	        			objectFit="cover"
	        		/>
	        	</div>

	        	<div>
		        	<h4>The Goal:</h4>
		        	<p>Design a mobile application and accompanying responsive website that allows users to find and book tutors easily and conveniently in order to improve users’ education.</p>
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
		        	<p>I analyzed what type of users would benefit from using an application like This on a regular basis. I discovered that my users would most likely be students Of all ages or parents of younger students.  I also performed a competitive audit.</p>
	        	</div>

	        	<div>
		        	<h4>Insights:</h4>
		        	<ul>
		        		<li>Users wanted a calendar based app that would allow them to easily sign in and make appointments with tutors in their area.</li>
		        		<li>Most of the current tutoring systems force you to call to book appointments or are entirely based on the school system.</li>
		        	</ul>
	        	</div>
	        </section>

	        <section>
	        	<h2>Planning</h2>
	        	
	        	<div>
		        	<h4>Ideation:</h4>
		        	<p>I did some quick ideation exercises to come up with ideas for a user flow, as well as what sort of content might fit into the app.</p>
	        	</div>
	        </section>

	        <section>
	        	<h2>Design</h2>
	        	
	        	<div>
		        	<h4>Paper To Digital Wireframes:</h4>
		        	<div className="wireframes">
		        		<div className="wireframe">
			        		<Image 
			        			src="/images/tutoring/home-page-sketch.jpg" 
			        			alt="Home Page Paper Sketch Wireframe" 
			        			layout="fill"
			        			objectFit="cover"
			        		/>
			        	</div>
			        	<div className="wireframe">
			        		<Image 
			        			src="/images/tutoring/schedule-sketch.jpg" 
			        			alt="Schedule Page Sketch Wireframe" 
			        			layout="fill"
			        			objectFit="cover"
			        		/>
			        	</div>
			        	<div className="wireframe">
			        		<Image 
			        			src="/images/tutoring/homepage-wireframe.jpg" 
			        			alt="Home Page Digital Wireframe Mobile" 
			        			layout="fill"
			        			objectFit="cover"
			        		/>
			        	</div>
			        	<div className="wireframe">
			        		<Image 
			        			src="/images/tutoring/schedule-wireframe.jpg" 
			        			alt="Schedule Page Digital Wireframe Mobile" 
			        			layout="fill"
			        			objectFit="cover"
			        		/>
			        	</div>
		        	</div>
	        	</div>

	        	<div>
		        	<h4>Low-Fidelity Prototype:</h4>
		        	<a href="https://www.figma.com/file/ 2HvalkXnqsQL5mZrCtA8dR/Tutor- App-and-Website?node-id=0%3A1">https://www.figma.com/file/ 2HvalkXnqsQL5mZrCtA8dR/Tutor- App-and-Website?node-id=0%3A1</a>
	        	</div>

	        	<div>
		        	<h4>Mockups:</h4>
		        	<div className="mockups">
		        		<div className="desktopMock">
			        		<Image 
			        			src="/images/tutoring/home-page-mockup.jpg" 
			        			alt="Home Page Mockup Desktop" 
			        			layout="fill"
			        			objectFit="cover"
			        		/>
			        	</div>
			        	<div className="desktopMock">
			        		<Image 
			        			src="/images/tutoring/home-mobile-app-mockup.jpg" 
			        			alt="Mobile App Homepage" 
			        			layout="fill"
			        			objectFit="cover"
			        		/>
			        	</div>
			        	<div className="mobileMock">
			        		<Image 
			        			src="/images/tutoring/home-mobile-mockup.jpg" 
			        			alt="Home Page Mockup Mobile" 
			        			layout="fill"
			        			objectFit="cover"
			        		/>
			        	</div>
		        	</div>
	        	</div>

	        	<div>
		        	<h4>High-Fidelity Prototype:</h4>
		        	<a href="https://www.figma.com/file/ 2HvalkXnqsQL5mZrCtA8dR/Tutor- App-and-Website?node-id=0%3A1">https://www.figma.com/file/ 2HvalkXnqsQL5mZrCtA8dR/Tutor- App-and-Website?node-id=0%3A1</a>
	        	</div>
	        </section>

	        <section>
	        	<h2>Future</h2>
		        <p>I plan to eventually build the website using React, Node, Express, and MongoDB.  I also would like to implement a calendar based booking API for the backend of the booking portion of the site and application.</p>
	        </section>

	        <section>
	        	<h2>Image Credits</h2>
	        	
	        	<div>
		        	<h4>All images from Pexels website</h4>
		        	<ul>
		        		<li>Convention Center Photo by Riciardus</li>
		        		<li>Tutoring Outside Photo by Zen Chunch</li>
		        		<li>Studying Dining Room Photo by Ketut Subiyanto</li>
		        		<li>Library Lights Photo by Janko Ferlic</li>
		        		<li>Black and White Library Photo by Pixabay</li>
		        	</ul>
	        	</div>
	        </section>

	      </Main>
        </>
	);
}

export default lrnTutoring;

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

	#clearImgFrame {

		@media (min-width: 700px) {
			margin-top: 70px;
		}
	}

	div.imgRight, div.imgLeft {
		width: 400px;
		height: 280px;
		position: relative;
	}

	div.imgRight {
		position: relative;
		display: inline-block;
		float: right;
		margin:  0 10px 10px;
		@media (max-width: 600px) {
			display: block;
			float: none;
			margin: auto;
			width: 100%;
		}
	}

	div.imgLeft {
		position: relative;
		display: inline-block;
		float: left;
		margin: 25px 10px 10px 0;
		@media (max-width: 600px) {
			display: block;
			float: none;
			margin: auto;
			width: 100%;
		}
	}

	div.desktopMock {
		width: 200px;
		height: 300px;
		position: relative;
	}

	div.mobileMock, div.wireframe {
		width: 170px;
		height: 300px;
		position: relative;
	}

	div.wireframes {
		display: grid;
		max-width: 800px;
		margin: 20px auto 0;
		justify-content: center;
		grid-template-columns: repeat(auto-fill, 170px);
		grid-gap: 10px;
	}

	div.mockups {
		display: flex;
		flex-direction: row;
		justify-content: center;
		max-width: 700px;
		margin: auto;
		flex-wrap: wrap;
	}

	div.mockups div {
		margin: 10px;
	}
`;