import Image from 'next/image';
import Link from 'next/link';
import styled, { ThemeProvider } from 'styled-components';
import { motion } from 'framer-motion';

import MetaInfo from '../../components/seo/metaInfo';
import * as animation from '../../animationState/animationState';
import PageHeader from '../../components/pageHeader/pageHeader';
import PortfolioProjectLink from '../../components/portfolio/portfolioProjectLink';

export default function Portfolio() {
  return (
    <>
      <MetaInfo 
        title="WebPunk | Portfolio"
        desc="My web development portfolio.  These are all my past projects."
        canonical="portfolio" />
      <Main as={motion.main}
        variants={animation.containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <PageHeader title={'Portfolio'} />

        <motion.h2 variants={animation.childVariants}>Websites</motion.h2>

        <motion.section variants={animation.childVariants}>
          <Link href="/portfolio/webpunk">
              <a>              
                <PortfolioProjectLink 
                  imageLink='/images/webpunk/webpunkLogo.jpg'
                  color='#4E8C81' 
                  title="WebPunk Website"
                />
              </a>
            </Link>
            <Link href="/portfolio/pressure-sensitive">
              <a>
                <PortfolioProjectLink 
                  imageLink='/images/pressureSensitive/ps-coverphoto-compressed.jpg' 
                  color='#4E768C' 
                  title="Pressure Sensitive Website"
                />
              </a>
            </Link>
            <Link href="/portfolio/disco-death-bots">
              <a>
                <PortfolioProjectLink 
                  imageLink='/images/discoDeathBots/disco-death-bots.jpg' 
                  color='#834E8C' 
                  title="Disco Death Bots Website"
                />
              </a>
            </Link>
        </motion.section>

        <motion.h2 variants={animation.childVariants}>Design Projects</motion.h2>
        <motion.section variants={animation.childVariants}>
          <Link href="/portfolio/lrn-tutoring">
            <a>
              <PortfolioProjectLink imageLink='/images/tutoring/tutoring.jpg' color='#4E8C81' title="LRN Tutoring App and Website Design"/>
            </a>
          </Link>
          <Link href="/portfolio/bro-charity">
            <a>
              <PortfolioProjectLink imageLink='/images/charity/charity.jpg' color='#834E8C' title="Baton Rouge Outreach Website Design"/> 
            </a>
          </Link>
        </motion.section>
        

        <motion.h2 variants={animation.childVariants}>Other</motion.h2>
        <motion.section variants={animation.childVariants}>
          
            <a href="https://react-burger-app-19011.web.app/" target="_blank" rel="noopener noreferrer">
              <PortfolioProjectLink imageLink='/images/burgerbuilder.jpg' color='#4E768C' title="Burger Builder React App"/>
            </a>
          
          
            <a href="https://standen1.github.io/robofriends/" target="_blank" rel="noopener noreferrer">
              <PortfolioProjectLink imageLink='/images/robofriends.jpg' color='#4E8C81' title="RoboFriends React App"/> 
            </a>
          

        </motion.section>
      </Main>
    </>
  )
}

//Styling
const Main = styled.main`
  h2 {
    text-align: center;
    font-size: 1.5rem;
    font-weight: 500;
    color: ${props => props.theme.mainBlue};
    margin: 75px auto 20px;
    padding-bottom: 0;
  }

  section {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 900px;
    margin: 0 auto;
    justify-content: center; 
  }
`;

