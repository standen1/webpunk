import Link from 'next/link';

import MetaInfo from '../components/seo/metaInfo';
import styled, { ThemeProvider } from 'styled-components';

export default function PrivacyPolicy() {
  return (
    <>
      <MetaInfo 
        title="WebPunk | Privacy Policy"
        desc="Information on personal data that might be collected as well as contact information."
        canonical="https://webpunk.tech/privacy-policy" />
      <main>
        <H1>Privacy Policy</H1>
        <Div>
          <h5>Who we are</h5>
          <p>This website address is: <a href="https://webpunk.tech">webpunk.tech</a></p>
          <h5>What personal data we collect and why we collect it</h5>
          <p>When visitors use the contact form on our Contact page, the visitor's name and email address
            are stored in a database.  This is done through a third party service called Formspree.</p>
          <h5>Embedded content from other websites</h5>
          <p>Articles on this site may include embedded content (e.g. videos, images, articles, etc.). 
            Embedded content from other websites behaves in the exact same way as if the visitor has 
            visited the other website.</p>
          <p>These websites may collect data about you, use cookies, embed additional third-party tracking, 
          and monitor your interaction with that embedded content, including tracking your interaction 
          with the embedded content if you have an account and are logged in to that website.</p>
          <h5>What third parties we receive data from</h5>
          <p>We currently receive data from Google Analytics, Google ReCaptcha, Formspree, and WordPress.</p>
          <h5>If you have any concerns</h5>
          <p>Please feel free to contact WebPunk through the <Link href="/contact"><a>Contact</a></Link> page
            or email direct at <a href="mailto:sean@webpunk.tech">sean@webpunk.tech</a>.</p>
        </Div>
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

const Div = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 900px;
  margin: auto;

  h5 {
    font-size: 2rem;
    margin: 0;
    padding: 0;
  }

  p {
    font-size: 1.2rem;
    padding-bottom: 50px;
  }

  a {
    font-weight: 600;
    text-decoration: none;
    color: ${props => props.theme.mainBlue};
    transition: color 0.2s ease-in-out;
  }

  a:hover {
    cursor: pointer;
    color: ${props => props.theme.hover}
  }
`;