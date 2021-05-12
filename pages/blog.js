import MetaInfo from '../components/seo/metaInfo';
import styled, { ThemeProvider } from 'styled-components';

import Posts from '../components/blog/posts';

export default function Blog() {
  return (
    <>
      <MetaInfo 
        title="WebPunk | Blog"
        desc="Web development blog where I share my experiences for each project that I work on."
        canonical="blog" />
      <main>
        <H1>Blog</H1>
        <Posts isHome={false} />
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
/*
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
`; */