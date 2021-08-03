import axios from 'axios';
import parse from 'html-react-parser';
import styled, { ThemeProvider } from 'styled-components';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { getFeaturedImage } from '../../lib/utils';
import { POSTS_API_URL } from '../../lib/constants';
import MetaInfo from '../../components/seo/metaInfo';
import * as animation from '../../animationState/animationState';
import PageHeader from '../../components/pageHeader/pageHeader';

export default function Post({ title, featuredImg, content, excerpt, date}) {
	return (
		<>
			<MetaInfo 
		        title={title}
		        desc={excerpt}
		        canonical="/${[id]}" />
			<motion.main
				variants={animation.containerVariants}
				initial="hidden"
				animate="visible"
				exit="exit"
			>
				<PageHeader title={title} />
				<Section>
					<motion.img src={featuredImg}
						variants={animation.childVariants}
					/>
					<motion.h5 variants={animation.childVariants}>
						{new Date(date).toDateString()}
					</motion.h5>
					<motion.div variants={animation.childVariants}>
						{parse(content)}
					</motion.div>
				</Section>
			</motion.main>
		</>
	);
};

//This is called at build
export async function getStaticPaths() {
	const res = await axios.get(POSTS_API_URL);
	const posts = res.data;

	const paths = posts.map((post) => ({
		params: { 
			id: post.id.toString()
		},
	}));

	return { paths, fallback: false };
};

export async function getStaticProps({ params }) {
	const res = await axios.get(`${POSTS_API_URL}/${params.id}`);
	const post = await res.data;
	const featuredImg = await getFeaturedImage(post.featured_media);

	return {
		props: { title: post.title.rendered, content: post.content.rendered, featuredImg, date: post.date }
	}
};

const Section = styled.section`
	padding: 0 15px 50px;
	max-width: 1000px;
	margin: auto;

	img {
		display: block;
		width: 600px;
		max-width: 100%;
		height: auto;
		margin: 10px auto;
	}

	h1 {
		text-align: center;
		color: ${props => props.theme.mainBlue};
		font-size: 2.4rem;
	}

	h5 {
		font-size: 1.4rem;
		opacity: 0.7;
	}
`;