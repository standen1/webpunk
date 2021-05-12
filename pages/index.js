import styled, { ThemeProvider } from 'styled-components';

//import MetaInfo from '../components/seo/metaInfo';
import DownArrow from '../components/downArrow/downArrow';
import Skills from '../components/skills/skills';
import Posts from '../components/blog/posts';

export default function Home() {


  return (
    <>
      {/*<MetaInfo 
        title="WebPunk | Home"
        desc="A portfolio and blog for website design and development by Sean Standen."
        canonical="" />*/}
      <main>

        <H1>
          Welcome to WebPunk.tech
        </H1>
        <section>
          <Article>
            <p>I created this site to act as a portfolio for my 
            web development skills as well as to share my experiences 
            as I progress along my journey into the technology industry.  
            I have been learning development since 2018 and thought it 
            would be a great idea to start a blog about all of my 
            projects.  I wanted a space where I could share my work, 
            accomplishments, skills, obstacles, and setbacks that I 
            experience along the way.</p>
            <p>This website is built for other developers, new developers 
            looking for ideas or inspiration, or potential clients who might 
            need a new site for their business, project, blog, or store.  
            I hope you find this site inspiring.  Thank you for visiting 
            WebPunk.tech.</p>
          </Article>

          <DownArrow link={"#blog-section"} />
        </section>
          
          <H2>Recent Posts</H2>
          <section id="blog-section" >
            <Posts isHome={true} />

            <DownArrow link={"#skills-section"} />
          </section>

        <section>
          <Skills id="skills-section" />
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
  padding: auto 10px;
`;

const H2 = styled.h2`
  text-align: center;
  font-size: 1.5rem;
  color: ${props => props.theme.mainBlue};
  margin-top: 75px;
`;

const Article = styled.article`
  max-width: 700px;
  margin: auto;
  padding: 0 10px;

  p {
    font-size: 1rem;
  }
`;

const Div = styled.div`
  display: block
  width: 100%;
  height: 400px;
`;



