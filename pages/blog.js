//import MetaInfo from '../components/seo/metaInfo';
import styled, { ThemeProvider } from 'styled-components';
import { motion } from 'framer-motion';

import MetaInfo from '../components/seo/metaInfo';
import * as animation from '../animationState/animationState';
import PageHeader from '../components/pageHeader/pageHeader';
import Posts from '../components/blog/posts';

export default function Blog() {
  return (
    <>
    <Main>
      <MetaInfo 
        title="WebPunk | Blog"
        desc="Web development blog where I share my experiences for each project that I work on."
        canonical="blog" />
      <motion.section
        variants={animation.containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
      <motion.div variants={animation.childVariants}>
        <PageHeader title={'Blog'} />
        <Posts isHome={false} />
      </motion.div>
      </motion.section>
    </Main>
    </>
  )
}

const Main = styled.main`
  min-height: 800px;
`;
