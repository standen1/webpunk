import Link from 'next/link';
import styled from 'styled-components';

export default function footer() {
	return (
		<Footer>
			<div>
				<Link href="/privacy-policy" >
					<a>Privacy Policy</a>
				</Link>
				<p>
					{'\u00A9'}Sean Standen {new Date().getFullYear()}
				</p>
			</div>

			<div>
				<a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/sean-standen/">LinkedIn</a>
				<a target="_blank" rel="noopener noreferrer" href="https://github.com/standen1">GitHub</a>
			</div>

		</Footer>
	);
}

const Footer = styled.footer`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-between;
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 60px;
	background-color: #000;
	color: #65DC98;
	box-sizing: border-box;
	margin: 0;
	padding: 0;
	

	div {
		display: flex;
		flex-direction: column;
		margin: 0 5px;
		padding: 0;
		font-weight: 600;
	}

	div p {
		margin: 3px;
		padding: 0;
	}

	div a {
		margin: 3px;
		color: #65DC98;
		text-decoration: none;
		transition: color 0.3s linear;
	}

	div a:hover {
		color: #00FFFF;
    	cursor: pointer;
	}
`;