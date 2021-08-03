import styled from 'styled-components';

const portfolioProjectLink = ({imageLink, color, title}) => {
	return (
		<Div style={{ background: `url(${imageLink}) no-repeat center` }}>
			<div className="innerDiv" style={{ background: color }} >
				<h5>{title}</h5>
			</div>
		</Div>
	);
}

export default portfolioProjectLink;

const Div = styled.div`
	position: relative;
	display: block;
	width: 100vw;
	height: 200px;
	margin: 0;
	padding: 0;
	

	@media (min-width: 620px) {
      width: 300px;
      height: 200px;
    }

    h5 {
    	color: #fff;
    }

    div.innerDiv {
    	position: absolute;
    	left: 0;
    	top: 0;
    	width: 100%;
    	height: 200px;
    	display: flex;
    	align-items: center;
    	justify-content: center;
    	opacity: 0;
    	transition: opacity 0.5s ease;
    	margin: 0;
    	padding: 0;

    	@media (min-width: 620px) {
	      width: 300px;
	      height: 200px;
	    }
    }

    div:hover {
    	opacity: 0.9;
    	cursor: pointer;
    }
`;