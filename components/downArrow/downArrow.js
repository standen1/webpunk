import styled, { keyframes, themeProvider } from 'styled-components';

const downArrow = (props) => {
	return (
		<div>
			<A href={props.link}>
				<svg className="arrows">
		          <path className="a1" d="M0 0 L30 32 L60 0"></path>
		          <path className="a2" d="M0 20 L30 52 L60 20"></path>
		          <path className="a3" d="M0 40 L30 72 L60 40"></path>
		        </svg>
	    	</A>
		</div>
	);
}

export default downArrow;

const arrow = keyframes`
	0% {opacity:0}
	40% {opacity:1}
	80% {opacity:0}
	100% {opacity:0}
`;

const A = styled.a`
	&:hover {
		cursor: pointer;
	}

	svg {
		display: block;
		width: 60px;
  		height: 72px;
  		margin: 30px auto;
	}

	svg path {
	  	stroke: ${props => props.theme.mainBlue};
	  	fill: transparent;
	  	stroke-width: 1.2px;  
	  	animation: ${arrow} 2s infinite;
	  	transition: stroke 0.2s ease-in-out;
	}

	&:hover svg path {
		stroke: ${props => props.theme.hover};
	}

	svg path.a1 {
	  animation-delay:-1s;
	}

	svg path.a2 {
	  animation-delay:-0.5s;
	}

	svg path.a3 { 
	  animation-delay:0s;
	}
`;