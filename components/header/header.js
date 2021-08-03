import styled, { themeProvider } from 'styled-components';

const header = (props) => {
	return (
		<Header>
			{props.children}
			
		</Header>
	);
}

export default header;

//Styling

const Header = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 55px;
	z-index: 100;
	// background: ${props => props.theme.headerBackground};
	background: #000;
	opacity: 0.9;
	

	h1 {
		text-align: center;
		color: #ccc;
		margin: 0;
		padding: 0;
		font-size: 2rem;
	}
`;