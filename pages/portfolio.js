import Image from 'next/image';
import styled, { ThemeProvider } from 'styled-components';

import MetaInfo from '../components/seo/metaInfo';
import PortfolioComponent from '../components/portfolio/portfolio';
import DownArrow from '../components/downArrow/downArrow';

//These are all of the imports that carry the information
//for each portfolio component used on this page.
import { 
          pressureSensitive, 
          discoDeathBots, 
          apptech,
          burgerBuilder,
          robofriends
        } from '../portfolioState/portfolioState';

export default function Portfolio() {
  return (
    <>
      <MetaInfo 
        title="WebPunk | Portfolio"
        desc="My web development portfolio.  These are all my past projects."
        canonical="portfolio" />
      <main>
        <H1>Portfolio</H1>

        <H2>Websites</H2>
        <Section>
          <div>
            <PortfolioComponent webInfo={pressureSensitive} />
          </div>
          <div>
            <PortfolioComponent webInfo={discoDeathBots} />
          </div>
          <div>
            <PortfolioComponent webInfo={apptech} />
          </div>
        </Section>

        <DownArrow link="#learningProjects" />

        <H2>Learning Projects</H2>
        <Section id="learningProjects" >
          <div>
            <PortfolioComponent webInfo={burgerBuilder} />
          </div>
          <div>
            <PortfolioComponent webInfo={robofriends} />
          </div>
        </Section>
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

const H2 = styled.h2`
  text-align: center;
  font-size: 1.5rem;
  color: ${props => props.theme.mainBlue};
  margin: 75px auto 0;
`;

const Section = styled.section`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: auto;
  max-width: 1000px;
  margin: auto;
  align-items: start;
  padding: 35px 20px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: auto;
    padding: 20px 0;
  }
`;
