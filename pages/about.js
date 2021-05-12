import Image from 'next/image';
import styled, { ThemeProvider } from 'styled-components';

import MetaInfo from '../components/seo/metaInfo';
import DownArrow from '../components/downArrow/downArrow';
import Skills from '../components/skills/skills';

export default function About() {
  return (
    <>
      <MetaInfo 
        title="WebPunk | About"
        desc="My name is Sean Standen.  I created this website to act as a portfolio and blog for my web development journey."
        canonical="about" />

      <main>
        <H1>
          About Me
        </H1>

        <section>
          <Article>
          <Image
            src="/images/sean-standen.jpg"
            alt="Sean Standen"
            width={600}
            height={498}
            className="about-image"
            lazy />
            <h3>I'm Sean Standen...</h3>
            <p>I was raised in San Clemente, a beach town located 
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
            and wine.</p>
            <p>I started getting into programming in 2016 while 
            attending school.  I took courses in Java and C++ including 
            Data Structures and Algorithms.  Then, I started teaching 
            myself web development in 2018.  I spent a lot of time in 
            HTML, CSS, vanilla JavaScript, and JQuery over my first year 
            but have since focused heavily on the React ecosystem and 
            frameworks that are built on top of it, such as Next, 
            Frontity, and Gatsby.</p>
            <p>While brainstorming this website, I wanted to pick a name 
            and theme that went along with my background in music, growing 
            up as a surfer and skateboarder from southern California, and 
            my love for cheesy sci fi movies from the ‘70s and ‘80s.  Thus, 
            WebPunk was born.  Thanks for visiting my site.  I hope you find 
            some inspiration from my experiences.  Cheers.</p>
          </Article>

          <DownArrow link={"#skills-section"} />
        </section>

        <section>
          <Skills id="skills-section" scrollDown link={"#learning-section"}/>
        </section>

        <section>
          <Div id="learning-section">
            <div className="flex-wrap">
              <h3>Currently Learning</h3>
              <ul>
                <li>TypeScript</li>
                <li>MongoDB</li>
                <li>WebPack</li>
                <li>GraphQL</li>
                <li>FireBase</li>
              </ul>
            </div>
            <div className="flex-wrap">
              <h3>Other Interests</h3>
              <ul>
                <li>SASS/SCSS</li>
                <li>Docker</li>
                <li>Bit</li>
                <li>HHR</li>
                <li>Gatsby</li>
              </ul>
            </div>
          </Div>
        </section>
      </main>
    </>
  )
}

//Styling
const H1 = styled.h1`
  text-align: center;
  font-size: 1.8rem;
  color: ${props => props.theme.mainBlue};
`;

const Article = styled.article`
  max-width: 700px;
  margin: auto;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h3 {
    font-size: 1.6rem;
    color: ${props => props.theme.mainBlue};
  }

  p {
    font-size: 1rem;
  }
`;

const Div = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  width: 100%;
  height: auto;
  padding-bottom: 75px;

  div.flex-wrap {
    margin: 5px 30px;
  }

  div.flex-wrap h3 {
    text-align: center;
    font-size: 1.6rem;
    color: ${props => props.theme.mainBlue};
    text-align: center;
  }

  div.flex-wrap ul {
    padding: 0;
    margin: 0;
  }

  div.flex-wrap ul li {
    list-style-type: none;
    font-size: 1.2rem;
    font-weight: 600;
    line-height: 2rem;
    text-align: center;
  }
`;