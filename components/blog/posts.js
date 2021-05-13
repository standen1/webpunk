import { useState, useEffect } from 'react';
import styled from 'styled-components';

import { getAllPostsFromServer } from '../../lib/utils';

import Post from './post';

//This component is used to fetch all blog posts and display them.
//It is used on the home page and the blog page.  It takes one
//argument called isHome which is a boolean that determines whether
//it is on the home page or the blog page.  If it's on the home page,
//we only want the 3 most recent posts.

export default function Posts(props) {
	//Fetch and store posts.
	const [posts, setPosts] = useState([]);
	useEffect(async () => {
		let mounted = true;
		if (mounted) {
			const postsFromServer = await getAllPostsFromServer();
			setPosts(postsFromServer);
		}
		return () => (mounted = false);
	}, []);

	//Convert posts into an array of JSX elements.
	// let postsRenderArray;
	// if (posts) {
	// 	postsRenderArray = 
	// 		posts.map((post, id) => {
	// 			(
	// 				<div key={id}>
	// 					<Post post={post} />
	// 				</div>
	// 			);
	// 		});
	// } else {
	// 	postsRenderArray = <h4>There are currently no posts to display.</h4>;
	// }

	//Render the posts
	return (
		<Section>
			{
				posts && (
					
						posts.map((post, id) => {
							return (
								<div key={id}>
									<Post post={post} />
								</div>
							);
						})
					
				)
			}

		</Section>
	);
};

//Styles
const Section = styled.section`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: auto;
  max-width: 1000px;
  margin: auto;
  align-items: start;
  padding: 5px 20px 35px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: auto;
    padding: 20px 0;
  }
`;