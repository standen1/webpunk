import styled, { ThemeProvider } from 'styled-components';
import { motion } from 'framer-motion';

import MetaInfo from '../components/seo/metaInfo';
import * as animation from '../animationState/animationState';
import PageHeader from '../components/pageHeader/pageHeader';
import ContactForm from '../components/contactForm/contactForm';

export default function Contact() {
  return (
    <>
      <MetaInfo 
        title="WebPunk | Contact"
        desc="For web development or any other inquiries, please fill out the form."
        canonical="contact" />
      <motion.main
        variants={animation.containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <PageHeader title={'Contact'} />
        <motion.section id="contact-form"
          variants={animation.childVariants}
        >
          <ContactForm />
        </motion.section>
        <section>
          <Div id="social-media-section">
            <motion.h5 variants={animation.childVariants}>
              Feel free to reach out or give me a follow on your favorite social platforms.  Cheers.
            </motion.h5>
            <motion.div variants={animation.childVariants}>
              <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/sean-standen/">LinkedIn</a>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/standen1">GitHub</a>
            </motion.div>
          </Div>
        </section>
      </motion.main>
    </>
  )
}

//Styling
const Div = styled.div`
  text-align: center;
  
  h5 {
    max-width: 400px;
    margin: auto;
    font-size: 1.1rem;
    font-weight: 400;
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
    font-weight: 500;
    letter-spacing: 0.05rem;
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