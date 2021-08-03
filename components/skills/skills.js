import styled, { themeProvider } from 'styled-components';
import dynamic from 'next/dynamic';

const skills = () => {
	return (
		<>
		<H2>Skills</H2>
		<Div>
			<div className="flex-wrap">
				<div>
					<h5>Design</h5>
					<ul>
						<li>Figma</li>
						<li>Adobe XD</li>
						<li>Photoshop</li>
						<li>UI/UX</li>
					</ul>
				</div>
				<div>
					<h5>Web</h5>
					<ul>
						<li>SEO</li>
						<li>WCAG</li>
						<li>Analytics</li>
						<li>Developer Tools</li>
					</ul>
				</div>
			</div>

			<div className="flex-wrap">
				<div>
					<h5>Development</h5>
					<ul>
						<li>HTML5</li>
						<li>CSS3</li>
						<li>JavaScript</li>
						<li>React</li>
						<li>Next</li>
					</ul>
				</div>
				<div className="list">
					<ul>
						<li>Node/Express</li>
						<li>MongoDB</li>
						<li>SQL</li>
						<li>Wordpress</li>
						<li>JQuery</li>	
					</ul>
				</div>
			</div>
			
		</Div>
		</>
	);
}

export default skills;

const Div = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	flex-wrap: wrap;
	color: ${props => props.theme.mainBlue};
	max-width: 650px;
	margin: auto;
	padding: 35px 0;

	@media (max-width: 620px) {
		justify-content: center;
	}

	h2 {
		text-align: center;
		font-size: 2rem;
		
	}

	div.flex-wrap {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-content: center;
		width: 280px;
		margin: 10px;
	}

	div.list {
		margin-top: 72px;
	}

	ul {
		display: flex;
		flex-direction: column;
		margin: 0;
		padding: 0;
	}

	h5 {
		font-size: 1rem;
		font-weight: 500;
	}

	ul li {
		list-style-type: none;
		font-size: 0.8rem;
		font-weight: 300;
		line-height: 2rem;
		color: ${props => props.theme.text};
	}
`;

const H2 = styled.h2`
  text-align: center;
  font-size: 1.5rem;
  color: ${props => props.theme.mainBlue};
  margin-top: 75px;
  margin-bottom: 5px;
  padding-bottom: 0;
`;