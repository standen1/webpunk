import Image from 'next/image';
import styled, { ThemeProvider } from 'styled-components';


/*This component is used to display each website
built in the portfolio as well as what it is built on.
It will receive all information needed as props.*/
const portfolio = (props) => {
	let builtWithArray = [];
	builtWithArray = props.webInfo.builtWith.map((value) => (
    		<li key={value}>{value}</li>
    	));
	return (
		<Div>
			<h5>{props.webInfo.title}</h5>
			<Image 
				src={props.webInfo.imageLink}
	            alt={props.webInfo.altImage}
		        width={400}
		        height={233}
		        className="websiteImage"

		        lazy />
		    <a href={props.webInfo.link} target="_blank">{props.webInfo.shortLink}</a>
		    <p><strong>Built with:</strong></p>
		    <ul>
		    	{builtWithArray}
		    </ul>
		</Div>
	);
}

export default portfolio;

const Div = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	box-sizing: border-box;
	padding: 0 10px;

	.websiteImage {
		object-fit: contain;
	}

	h5 {
		font-size: 1.3rem;
		padding: 0;
		margin-bottom: 5px;
		color: ${props => props.theme.mainBlue};
	}

	a {
		color: ${props => props.theme.mainBlue};
		transition: color 0.2s ease-in-out;
		text-decoration: none;
	}

	a:hover {
		cursor: pointer;
		color: ${props => props.theme.hover}
	}

	p {
		margin-bottom: 5px;
	}

	p strong {
		font-size: 1.2rem;
	}

	ul {
		margin: 0;
		padding:0;
	}

	ul li {
		padding: 3px 0;
		list-style-type: none;
	}
`;