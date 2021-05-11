import axios from 'axios';
import parse from 'html-react-parser';
import styled, { ThemeProvider } from 'styled-components';

import { getFeaturedImage } from '../../lib/utils';
import { POSTS_API_URL } from '../../lib/constants';
import MetaInfo from '../../components/seo/metaInfo';

export default function Post({ title, featuredImg, content, excerpt, date}) {
	return (
		<>
			<MetaInfo 
		        title={title}
		        desc={excerpt}
		        canonical="/${[id]}" />
			<main>
				<Section>
					<img src={featuredImg} />
					<h1>{title}</h1>
					<h5>{new Date(date).toDateString()}</h5>
					<div>{parse(content)}</div>
				</Section>
			</main>
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
		max-width: 600px;
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