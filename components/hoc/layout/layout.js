import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import useDarkMode from 'use-dark-mode';
import { motion } from 'framer-motion';

import Header from '../../header/header';
import ThemeButton from '../../themeButton/themeButton';
import { lightTheme, darkTheme, GlobalStyles } from "../../../theme/ThemeConfig";
import Footer from '../../footer/footer';


//These 2 components represent the main menus.  They are loaded dynamically
//based on the screen size.  SidebarNav contains the burger icon menu for
//mobile devices/smaller screens and TableOfContents is the menu for 
//larger screens.
const SidebarNav = dynamic(() => import('../../sidebarNav/sidebarNav'));
const MenuNav = dynamic(() => import('../../menuNav/menuNav'));

const layout = (props) => {
	const darkmode = useDarkMode(true);
	const theme = darkmode.value ? darkTheme : lightTheme;
	const [isMounted, setIsMounted] = useState(false);
	const router = useRouter();
	//Create a variable that returns whichever component
	//is rendered based on the screen size.
	let smallScreen = useMediaQuery(600);
	let menu = smallScreen ? <SidebarNav light={!darkmode.value} /> : <MenuNav />;

	useEffect(() => {
	  setIsMounted(true)
	}, [])

	return (
		<>
			<ThemeProvider theme={theme}>
	  		<GlobalStyles />
		  	{isMounted &&
		  		<body>
		  		<Header>
		  			<ThemeButton click={darkmode.toggle} dark={darkmode.value} />
		  			{menu}
		  		</Header>
		 		<Div as={motion.div} 
					key={router.route} 
					initial="pageInitial" 
					animate="pageAnimate" 
					variants={
						{
						  pageInitial: {
						    opacity: 0
						  },
						  pageAnimate: {
						    opacity: 1
					      }
						}
					}
					className="content-wrap"
					>
					{props.children}
				</Div>
				<Footer />
				</body>}
				
			
			</ThemeProvider>
		</>
	);
}

export default layout;

// Hook for checking the screen size for dynamically rendering
//either the tableOfContents component for larger screens or
//the sidebarNav component(hamburger icon and menu) for smaller
//screens.

const useMediaQuery = (width) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addListener(updateTarget);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeListener(updateTarget);
  }, []);

  return targetReached;
};

//Styling
const Div = styled.div`
	position: relative;
	display: flex;
	width: 100%;
	justify-content: center;
	padding-top: 100px;
	padding-bottom: 60px;
`;
