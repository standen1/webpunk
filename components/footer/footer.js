import Link from 'next/link';
import styled from 'styled-components';

export default function footer() {
	return (
		<Footer>
			<div>
				<Link href="/" >
					<a>Home</a>
				</Link>
				<Link href="/about" >
					<a>About</a>
				</Link>
				<Link href="/blog" >
					<a>Blog</a>
				</Link>
			</div>

			<div className="center" >
				<Link href="/portfolio" >
					<a>Portfolio</a>
				</Link>
				<Link href="/contact" >
					<a>Contact</a>
				</Link>
				<Link href="/privacy-policy" >
					<a>Privacy Policy</a>
				</Link>
			</div>


			<div className="right">
				<a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/sean-standen/">LinkedIn</a>
				<a target="_blank" rel="noopener noreferrer" href="https://github.com/standen1">GitHub</a>
				<a 
		          href="https://drive.google.com/file/d/1kY5FDhyEOHVYz5D90xLSpCqawvlPyF78/view?usp=sharing"
		          target="_blank" rel="noopener noreferrer"
		        >
		          Resume
		        </a>
			</div>
			<p>
				{'\u00A9'}Sean Standen {new Date().getFullYear()}
			</p>
		</Footer>
	);
}

const Footer = styled.footer`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-between;
	align-content: center;
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 200px;
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
		font-weight: 400;
	}

	div.center {
		text-align: center;
	}

	div.right {
		text-align: right;
	}

	p {
		margin: 3px;
		padding: 0;
		font-size: 0.7rem;
		color: #fff;
		position absolute;
		bottom: 0;
		right: 0;
		text-transform: uppercase;
		opacity: 0.5;
	}

	div a {
		margin: 0 0 20px;
		color: #65DC98;
		text-decoration: none;
		transition: color 0.3s linear;
		text-transform: uppercase;
		letter-spacing: 0.07rem;
		font-size: 0.9rem;
	}

	div a:hover {
		color: #00FFFF;
    	cursor: pointer;
	}
`;