import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import parse from 'html-react-parser';
import styled from 'styled-components';
import { useRouter } from'next/router';

import { getFeaturedImage } from '../../lib/utils';

//This is for displaying a post with a featured image in the 
//POSTS component.  This is not for displaying an individual post
//page.
export default function Post(props) {
	const router = useRouter();
	//Fetch and store the featured image for the post.
	const [postImgUrl, setPostImgUrl] = useState('');
	useEffect(() => {
		let mounted = true;
		if (mounted) {
			const featuredImg = getFeaturedImage(post.featured_media);
			//Resolve promise for getFeaturedImg async function
			Promise.all([featuredImg]).then((res) => {
				setPostImgUrl(res[0]);
			});
		}

		return () => {
			mounted = false;
		}
	}, []);

	//Store posts in a variable
	const post = props.post;

	//Get rid of read more link in excerpt so it doesn't link to 
	//wordpress and then add a ... at the end.
	const excerpt = post.excerpt.rendered.split('&hellip;')[0] + "...";

	//If fallback, render a loader
	if (router.isFallback) {
		return (
			<div>Loading</div>
		);
	}
	//Else Render the component
	else {
		return (
			<Div>
			    <img src={postImgUrl} />
			    <Link href={`/blog/${post.id}`}>
			    	<a className="title">{post.title.rendered}</a>
			    </Link>
			    <h4>{new Date(post.date).toDateString()}</h4>
			    	<p>{parse(excerpt)}</p>
			    	<Link href={`/blog/${post.id}`}>
			    		<a>Read More</a>
			    	</Link>
			</Div>
		);
	}
};

//Styling
const Div = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	box-sizing: border-box;
	padding: 0 10px 30px;

	img {
		object-fit: contain;
	}

	h4 {
		font-size: 1rem;
		font-weight: 600;
		padding: 0;
		margin: 0;
		color: ${props => props.theme.mainBlue};
	}

	a {	
		font-size: 1.3rem;
		padding: 0;
		margin: 0;
		color: ${props => props.theme.mainBlue};
		transition: color 0.2s ease-in-out;
		text-decoration: none;
	}

	a.title {
		font-size: 1.6rem;
		font-weight: 800;
	}

	a:hover {
		cursor: pointer;
		color: ${props => props.theme.hover}
	}

	p {
		padding: 0;
		margin: 0 0 5px;
	}
`;