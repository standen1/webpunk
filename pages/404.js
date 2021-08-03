import styled, { ThemeProvider } from 'styled-components';
import Link  from 'next/link';
import { motion } from 'framer-motion';

import * as animation from '../animationState/animationState';
import PageHeader from '../components/pageHeader/pageHeader';

// pages/404.js
export default function Custom404() {
  return (
  	<Main as={motion.main}
      variants={animation.containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
		<PageHeader title={'Error | 404'} />
		<motion.p variants={animation.childVariants}>
      Sorry, but the page you are accessing
			does not exist.  Perhaps you were looking
			for one of these pages listed below:
    </motion.p>
  		<motion.nav variants={animation.childVariants}>
  			<Link href="/">
	        <a>Home</a>
	      </Link>
	      <Link href="/about">
	        <a>About</a>
	      </Link>
	      <Link href="/portfolio">
	        <a>Portfolio</a>
	      </Link>
	      <Link href="/blog">
	        <a>Blog</a>
	      </Link>
	      <Link href="/contact">
	        <a>Contact</a>
	      </Link>
        <Link href="/resume">
          <a>Resume</a>
        </Link>
  		</motion.nav>
  	</Main>
  );
}

//Styling

const Main = styled.main`
	display: flex;
	flex-direction: column;
  max-width: 700px;
  margin: 0 auto;

  p {
    text-align: center;
    font-size: 1.2rem;
    margin-bottom: 50px;
  }

  nav {
    height: 400px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
  }

  nav a {
    font-size: 1.3rem;
    text-transform: uppercase;
    padding: 0;
    margin: 1.5rem 0;
    font-weight: 400;
    letter-spacing: 0.5rem;
    color: #A2A2A2;
    text-decoration: none;
    transition: color 0.3s linear;
    border: none;
    list-style-type: none;
    outline: none;
    text-align: center;
  }

  nav a.isActive {
    color: #65DC98;
    opacity: 0.7;
  }

  nav a:hover {
    color: #00FFFF;
    cursor: pointer;
  }

  nav a.isActive:hover {
    color: #65DC98;
    cursor: not-allowed;
  }
`;