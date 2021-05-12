import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const Meta = () => {
	const [pageInfo, setPageInfo] = useState({});
	const mainURL = "https://webpunk.tech/";
	const router = useRouter();

	//Switch statement that generates SEO meta for each page.  I have to do this
	//Because my ThemeProvider and Animations components wrap my page content
	//so it disregards my SEO completely.  I will have to implement a basic blog one
	//that works for all posts.
	useEffect(() => {
		switch (router.pathname) {
			case '/blog' : {
				setPageInfo({
					title: 'Blog',
					desc: 'Web development blog where I share my experiences for each project that I work on.',
					canonical: 'blog'
				});
				break;
			}
			case '/about' : {
				setPageInfo({
					title: 'About',
					desc: 'My name is Sean Standen.  I created this website to act as a portfolio and blog for my web development journey.',
					canonical: 'about'
				});
				break;
			}
			case '/contact' : {
				setPageInfo({
					title: 'Contact',
					desc: 'For web development or any other inquiries, please fill out the form.',
					canonical: 'contact'
				});
				break;
			}
			case '/portfolio' : {
				setPageInfo({
					title: 'Portfolio',
					desc: 'My web development portfolio.  These are all my past projects.',
					canonical: 'portfolio'
				});
				break;
			}
			case '/privacy-policy' : {
				setPageInfo({
					title: 'Privacy Policy',
					desc: 'Information on personal data that might be collected as well as contact information.',
					canonical: 'privacy-policy'
				});
				break;
			}
			default : {
				setPageInfo({
					title: 'Home',
					desc: 'A portfolio and blog for website design and development by Sean Standen.',
					canonical: ''
				});
				break;
			}

		}
	}, []);
	

	return (      
		<Head>
			<link rel="preconnect" href="https://fonts.gstatic.com" />
	        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	        <meta name="viewport" content="width=device-width, initial-scale=1" />
			<title>Webpunk | {pageInfo.title}</title>
			<meta name="description" content={pageInfo.desc} />
			<meta property="og:type" content="website" />
			<meta name="og:title" property="og:title" content="WebPunk"} />
			<meta name="og:description" property="og:description" content={pageInfo.desc} />
			<meta property="og:site_name" content="WebPunk" />
			<meta property="og:image" content={mainURL + "webpunk.jpg"} />
			<meta property="og:url" content={`${mainURL + pageInfo.canonical}`} />  
			<meta name="twitter:card" content="summary" /> 
			<meta name="twitter:title" content="WebPunk" />
			<meta name="twitter:description" content={pageInfo.desc} />
			<meta name="twitter:image" content={mainURL + "webpunk.jpg"} />
			{
			pageInfo.canonical &&
			<link rel="canonical" href={`${mainURL + pageInfo.canonical}`} />
			}
		</Head>
	);
}
export default Meta;

//Needs an image to add to the image tags.  A logo or something.