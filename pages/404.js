import styled, { ThemeProvider } from 'styled-components';
import Link  from 'next/link';

// pages/404.js
export default function Custom404() {
  return (
  	<Div>
		<H1>ERROR | 404</H1>
		<p>Sorry, but the page you are accessing
			does not exist.  Perhaps you were looking
			for one of these pages listed below:</p>
  		<Nav>
  			<Link href="/">
	        <a>Home</a>
	      </Link>
	      <Link href="/about">
	        <a>About</a>
	      </Link>
	      <Link href="/portfolio">
	        <a>Portfolio</a>
	      </Link>
	      <Link href="/blog">
	        <a>Blog</a>
	      </Link>
	      <Link href="/contact">
	        <a>Contact</a>
	      </Link>
  		</Nav>
  	</Div>
  );
}

//Styling
const H1 = styled.h1`
  text-align: center;
  font-size: 1.8rem;
  color: ${props => props.theme.mainBlue};
`;

const Div = styled.div`
	display: flex;
	flex-direction: column;
  max-width: 700px;
  margin: auto;

  p {
    text-align: center;
    font-size: 1.2rem;
  }
`;

const Nav = styled.nav`
	height: 400px;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-content: center;

	a {
        font-size: 1.3rem;
        text-transform: uppercase;
        padding: 0;
        margin: 1.5rem 0;
        font-weight: 400;
        letter-spacing: 0.5rem;
        color: #A2A2A2;
        text-decoration: none;
        transition: color 0.3s linear;
        border: none;
        list-style-type: none;
        outline: none;
        text-align: center;
      }

      a.isActive {
        color: #65DC98;
        opacity: 0.7;
      }

      a:hover {
        color: #00FFFF;
        cursor: pointer;
      }

      a.isActive:hover {
        color: #65DC98;
        cursor: not-allowed;
      }
`;