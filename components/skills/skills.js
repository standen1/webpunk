import styled from 'styled-components';
import dynamic from 'next/dynamic';

//This is a component used on multiple pages.
//Some pages require the downArrow component
//and others don't, so I am dynamically
//rendering the downArrow component based
//on props passed into the component.
const DownArrow = dynamic(() => import('../downArrow/downArrow'));

const skills = (props) => {
	return (
		<Div id={props.id}>
			<h2>Skills</h2>
			<div className="flex-wrap">
				<ul>
					<li>HTML5</li>
					<li>CSS3</li>
					<li>JavaScript</li>
					<li>React</li>
					<li>Next</li>
				</ul>
				<ul>
					<li>SQL</li>
					<li>JQuery</li>
					<li>Wordpress</li>
					<li>SEO</li>
					<li>Node/Express</li>
				</ul>
			</div>
			{props.scrollDown ? <DownArrow link={props.link} /> : null}
		</Div>
	);
}

export default skills;

const Div = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-content: center;
	width: 100%;
	background: #222035;
	color: #85EBD9;
	padding: 35px 0;

	h2 {
		text-align: center;
		font-size: 2rem;
	}

	div.flex-wrap {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-content: center;
	}

	ul {
		display: flex;
		flex-direction: column;
		margin: 0 25px 25px;
	}

	ul li {
		list-style-type: none;
		font-weight: 500;
		line-height: 2rem;
	}
`;