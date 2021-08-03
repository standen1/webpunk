import Image from 'next/image';
import styled, { ThemeProvider } from 'styled-components';
import { motion } from 'framer-motion';

//import MetaInfo from '../components/seo/metaInfo';
import * as animation from '../animationState/animationState';
import PageHeader from '../components/pageHeader/pageHeader';
import Skills from '../components/skills/skills';


export default function About() {
  return (
    <>
{/*      <MetaInfo 
        title="WebPunk | About"
        desc="My name is Sean Standen.  I created this website to act as a portfolio and blog for my web development journey."
        canonical="about" />*/}

      <Main as={motion.main}
        variants={animation.containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <PageHeader title={'About Me'} />

        <section>
          <article>
            <motion.div 
              className="imgWrapper"
              variants={animation.childVariants}
            >
              <Image
              src="/images/sean-standen.jpg"
              alt="Sean Standen"
              width={600}
              height={510}
              className="about-image"
              lazy />
            </motion.div>
            
            <motion.h3 variants={animation.childVariants}>
              I'm Sean Standen...
            </motion.h3>
            <motion.p variants={animation.childVariants}>
              I was raised in San Clemente, a beach town located 
              in south Orange County, California.  I grew up 
              bodyboarding, surfing, swimming, and skateboarding.  
              I got into music when I was very young.  I started out 
              playing guitar and ended up picking up bass, drums, 
              synths, and keys along the way.  I have several music 
              projects, most of which have websites that I built and 
              included on here as part of my portfolio.  I currently 
              live in San Diego, California with my wife.  We spend a 
              lot of time hiking, biking, picnicking, camping, 
              listening to records, and enjoying coffee, craft beer, 
              and wine.
            </motion.p>
            
            <motion.p variants={animation.childVariants}>
              I started getting into programming in 2016 while 
              attending school.  I took courses in Java and C++ including 
              Data Structures and Algorithms.  Then, I started teaching 
              myself web development in 2018.  I spent a lot of time in 
              HTML, CSS, vanilla JavaScript, and JQuery over my first year 
              but have since focused heavily on the React ecosystem and 
              frameworks that are built on top of it, such as Next, 
              Frontity, and Gatsby.
            </motion.p>
            <motion.p variants={animation.childVariants}>
              While brainstorming this website, I wanted to pick a name 
              and theme that went along with my background in music, growing 
              up as a surfer and skateboarder from southern California, and 
              my love for cheesy sci fi movies from the ‘70s and ‘80s.  Thus, 
              WebPunk was born.  Thanks for visiting my site.  I hope you find 
              some inspiration from my experiences.  Cheers.
            </motion.p>
            
          </article>
        </section>

        <motion.section
          variants={animation.extraVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <Skills />
        </motion.section>
      </Main>
    </>
  )
}

//Styling
const Main = styled.main`
  article {
    max-width: 700px;
    margin: auto;
    padding: 0 10px;
  }

  h3 {
    font-size: 1.3rem;
    font-weight: 600;
    color: ${props => props.theme.mainBlue};
    margin-bottom: 0;
  }

  div.imgWrapper {
    width: 100%;
    height: 400px;
    display: inline-block;
    float: left;
    margin: 0 20px 10px 0;

    @media (min-width: 620px) {
      display: block;
      width: 300px;
      height: 250px;
    }
  }

  p {
    font-size: 1rem;
  }
`;
