import styled, { themeProvider } from 'styled-components';

const pageHeader = ({title}) => {
	return (
		<Div>
			<h1>{title}</h1>
		</Div>
	);
}

export default pageHeader;

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100%;
  height: 330px;

  h1 {
    text-align: center;
    font-size: 3rem;
    color: ${props => props.theme.mainBlue};
    margin: 50px auto 0;
    font-weight: 600;
    padding: 0;

    @media (max-width: 700px) {
      font-size: 2rem;
    }
  }
`;