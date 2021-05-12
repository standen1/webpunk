import Head from 'next/head'
const Meta = (props) => {
	const mainURL = "https://webpunk.tech/";
	return (      
		<Head>
			<link rel="preconnect" href="https://fonts.gstatic.com" />
	        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	        <meta name="viewport" content="width=device-width, initial-scale=1" />
			<title>{props.title}</title>
			<meta name="description" content={props.desc} />
			<meta property="og:type" content="website" />
			<meta name="og:title" property="og:title" content={props.title} />
			<meta name="og:description" property="og:description" content={props.desc} />
			<meta property="og:site_name" content="WebPunk" />
			<meta property="og:image" content={mainURL + "webpunk-logo.jpeg"} />
			<meta property="og:url" content={`${mainURL + props.canonical}`} />  
			<meta name="twitter:card" content="summary" /> 
			<meta name="twitter:title" content={props.title} />
			<meta name="twitter:description" content={props.desc} />
			<meta name="twitter:image" content={mainURL + "webpunk-logo.jpeg"} />
			{
			props.canonical &&
			<link rel="canonical" href={`${mainURL + props.canonical}`} />
			}
		</Head>
	);
}
export default Meta;

//Needs an image to add to the image tags.  A logo or something.