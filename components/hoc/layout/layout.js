import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import useDarkMode from 'use-dark-mode';
import { motion, AnimatePresence } from 'framer-motion';

import MetaInfo from '../../seo/metaInfo';
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
	let smallScreen = useMediaQuery(675);
	let menu = smallScreen ? <SidebarNav light={!darkmode.value} /> : <MenuNav />;

	//Motion states
	const spaceVariants = {
		hidden: {
			opacity: 0
		},
		visible: {
			opacity: 1,
			transition: {		
				duration: 2
			}
		}
	}


	useEffect(() => {
	  setIsMounted(true)
	}, [])

	return (
		<>
			<MetaInfo route={router.route} />
			<ThemeProvider theme={theme}>
	  		<GlobalStyles />
		  	{isMounted &&
		  		<>
		  		<Header>
		  			<ThemeButton click={darkmode.toggle} dark={darkmode.value} />
		  			{menu}
		  		</Header>
		  	<Section as={motion.section}
		  		variants={spaceVariants}
		  		initial="hidden"
		  		animate="visible"
		  		 >
		  		}
		  	</Section>
		  	<AnimatePresence exitBeforeEnter onExitComplete={() => window.scrollTo(0, 0)} >
			 		<Div key={router.route} >{props.children}</Div>
				</AnimatePresence>
				<Footer />
				</>
			}
				
			
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
const Section = styled.section`
	position: absolute;
	z-index: -1;
	left: 0;
	top: 0;
	width: 100%;
	height: 400px;
	margin: 0;
	padding: 0;
  background: linear-gradient(rgba(29, 26, 33, 0.9), rgba(0, 0, 0, 0.9)), url("./images/space.jpg") no-repeat fixed center;
  filter: ${props => props.theme.space};
`

const Div = styled.div`
	position: relative;
	display: flex;
	width: 100%;
	justify-content: center;
	padding-top: 100px;
	padding-bottom: 250px;
`;
