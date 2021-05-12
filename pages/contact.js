import styled, { ThemeProvider } from 'styled-components';

import MetaInfo from '../components/seo/metaInfo';
import DownArrow from '../components/downArrow/downArrow';
import ContactForm from '../components/contactForm/contactForm';

export default function Contact() {
  return (
    <>
      <MetaInfo 
        title="WebPunk | Contact"
        desc="For web development or any other inquiries, please fill out the form."
        canonical="contact" />
      <main>
        <H1>Contact</H1>
        <section id="contact-form">
          <ContactForm />
        </section>
        <DownArrow link={"#social-media-section"} />
        <section>
          <Div id="social-media-section">
            <h5>Feel free to reach out or give me a follow on your favorite social platforms.  Cheers.</h5>
            <div>
              <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/sean-standen/">LinkedIn</a>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/standen1">GitHub</a>
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

const Div = styled.div`
  text-align: center;
  h5 {
    max-width: 400px;
    margin: auto;
    font-size: 1.1rem;
  }

  div {
    display: flex;
    flex-direction: column;
    max-width: 400px;
    margin: auto;
    margin: 2rem auto
  }

  div a {
    font-size: 1.8rem;
    font-weight: 700;
    margin: 1rem auto 1rem;
    text-decoration: none;
    color: ${props => props.theme.mainBlue};
    transition: color 0.2s ease-in-out;
  }

  div a:hover {
    cursor: pointer;
    color: ${props => props.theme.hover}
  }
`;