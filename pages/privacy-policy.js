import Link from 'next/link';
import styled, { ThemeProvider } from 'styled-components';
import { motion } from 'framer-motion';

import MetaInfo from '../components/seo/metaInfo';
import * as animation from '../animationState/animationState';
import PageHeader from '../components/pageHeader/pageHeader';

export default function PrivacyPolicy() {
  return (
    <>
      <MetaInfo 
        title="WebPunk | Privacy Policy"
        desc="Information on personal data that might be collected as well as contact information."
        canonical="privacy-policy" />
      <Main as={motion.main}
        variants={animation.privacyPageVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <PageHeader title={'Privacy Policy'} />
        <div>
          <motion.h5 variants={animation.childVariants}>
            Who we are
          </motion.h5>
          <motion.p variants={animation.childVariants}>
            This website address is: <a href="https://webpunk.tech">webpunk.tech</a>
          </motion.p>
          <motion.h5 variants={animation.childVariants}>
            What personal data we collect and why we collect it
          </motion.h5>
          <motion.p variants={animation.childVariants}>
            When visitors use the contact form on our Contact page, the visitor's name and email address
            are stored in a database.  This is done through a third party service called Formspree.
          </motion.p>
          <motion.h5 variants={animation.childVariants}>
            Embedded content from other websites
          </motion.h5>
          <motion.p variants={animation.childVariants}>
            Articles on this site may include embedded content (e.g. videos, images, articles, etc.). 
            Embedded content from other websites behaves in the exact same way as if the visitor has 
            visited the other website.
          </motion.p>
          <motion.p variants={animation.childVariants}>
            These websites may collect data about you, use cookies, embed additional third-party tracking, 
            and monitor your interaction with that embedded content, including tracking your interaction 
            with the embedded content if you have an account and are logged in to that website.
          </motion.p>
          <motion.h5 variants={animation.childVariants}>
            What third parties we receive data from
          </motion.h5>
          <motion.p variants={animation.childVariants}>
            We currently receive data from Google Analytics, Google ReCaptcha, Formspree, and WordPress.
          </motion.p>
          <motion.h5 variants={animation.childVariants}>
            If you have any concerns
          </motion.h5>
          <motion.p variants={animation.childVariants}>
            Please feel free to contact WebPunk through the <Link href="/contact"><a>Contact</a></Link> page
            or email direct at <a href="mailto:sean@webpunk.tech">sean@webpunk.tech</a>.
          </motion.p>
        </div>
      </Main>
    </>
  )
}

//Styling
const Main = styled.main`
  div {
    display: flex;
    flex-direction: column;
    max-width: 900px;
    margin: auto;
  }

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