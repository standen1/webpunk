import styled, { ThemeProvider } from 'styled-components';
import Link from 'next/link';
import { motion } from 'framer-motion';

import MetaInfo from '../components/seo/metaInfo';
import * as animation from '../animationState/animationState';
import PageHeader from '../components/pageHeader/pageHeader';
import PortfolioProjectLink from '../components/portfolio/portfolioProjectLink';


export default function Home() {


  return (
    <>
      <MetaInfo 
        title="WebPunk | Home"
        desc="A portfolio and blog for website design and development by Sean Standen."
        canonical="" />
      <Main as={motion.main}
        variants={animation.containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
      >
        <PageHeader title={'Welcome To WebPunk'}/>
        <section>
          <motion.article
            variants={animation.childVariants}
          >
            <motion.p variants={animation.childVariants}>I created this site to act as a portfolio for my 
            web development skills as well as to share my experiences 
            as I progress along my journey into the technology industry.  
            I have been learning development since 2018 and thought it 
            would be a great idea to start a blog about all of my 
            projects.  I wanted a space where I could share my work, 
            accomplishments, skills, obstacles, and setbacks that I 
            experience along the way.</motion.p>
            <motion.p variants={animation.childVariants}>This website is built for other developers, new developers 
            looking for ideas or inspiration, or potential clients who might 
            need a new site for their business, project, blog, or store.  
            I hope you find this site inspiring.  Thank you for visiting 
            WebPunk.tech.</motion.p>
          </motion.article>
        </section>
          
          <motion.h2
            variants={animation.childVariants}
          >
            Recent
          </motion.h2>
          <motion.section className="recent"
            variants={animation.extraVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
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
      </Main>
    </>
  )
}


//Styling

const Main = styled.main`
  article {
    max-width: 500px;
    margin: 0 auto;
    padding: 0 10px;
  }

  article p {
    font-size: 1rem;
  }

  h2 {
    text-align: center;
    font-size: 1.5rem;
    color: ${props => props.theme.mainBlue};
    margin-top: 75px;
    margin-bottom: 20px;
    padding-bottom: 0;
  }

  section.recent {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 900px;
    margin: 0 auto;
    justify-content: center;
  }
`;


