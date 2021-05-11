import { useState } from 'react';

import classes from './themeButton.module.css';

const themeButton = (props) => {

	return (
		<>
			<button className={classes.Button} onClick={props.click}>
			<svg className={classes.Svg} width="56" height="50" viewBox="0 0 164 139" fill="none" xmlns="http://www.w3.org/2000/svg">
				<g id="ThemeSelect">
				<g id="Dark" className={props.dark ? classes.active : null}>
				<path id="K" d="M136.648 92.936C135.976 92.936 135.4 93.464 135.4 94.184V129.752C135.4 130.424 135.976 131 136.648 131C137.32 131 137.896 130.424 137.896 129.752V94.184C137.896 93.464 137.32 92.936 136.648 92.936ZM158.68 129.08L148.264 112.568C147.928 112.04 147.928 111.416 148.312 110.936L157.96 97.16C158.824 95.912 158.584 94.28 157.48 93.272C156.856 92.744 156.04 92.504 155.224 92.6C154.408 92.744 153.688 93.176 153.208 93.848L138.952 114.152C138.568 114.728 138.712 115.496 139.288 115.88C139.816 116.312 140.632 116.168 141.016 115.592L155.272 95.288C155.368 95.144 155.464 95.096 155.512 95.096C155.608 95.096 155.704 95.096 155.848 95.192C155.992 95.336 155.992 95.528 155.896 95.72L146.248 109.496C145.336 110.792 145.288 112.52 146.152 113.912L156.568 130.424C156.808 130.808 157.24 131 157.624 131C157.864 131 158.104 130.952 158.296 130.808C158.92 130.424 159.064 129.656 158.68 129.08Z" fill="black"/>
				<path id="R" d="M89.648 130.856C88.976 130.856 88.4 130.328 88.4 129.608V95.768C88.4 93.944 89.888 92.456 91.712 92.456H104.528C107.168 92.456 109.712 93.512 111.584 95.384C113.456 97.256 114.464 99.752 114.464 102.44C114.464 105.08 113.456 107.576 111.584 109.448C109.712 111.32 107.168 112.376 104.528 112.376H95.696C95.504 112.376 95.36 112.52 95.36 112.712C95.36 112.904 95.504 113.096 95.696 113.096H103.808C105.056 113.096 106.256 113.432 107.36 114.056C108.416 114.728 109.28 115.688 109.808 116.792L115.952 128.984C116.288 129.608 116.048 130.376 115.424 130.712C114.8 131 114.032 130.76 113.744 130.136L107.6 117.896C106.832 116.504 105.392 115.592 103.808 115.592H95.696C94.112 115.592 92.816 114.296 92.816 112.712C92.816 111.128 94.112 109.88 95.696 109.88H104.528C108.656 109.88 111.968 106.52 111.968 102.44C111.968 98.312 108.656 95 104.528 95H91.712C91.28 95 90.896 95.336 90.896 95.768V129.608C90.896 130.328 90.368 130.856 89.648 130.856Z" fill="black"/>
				<path id="A" className={props.dark ? classes.flicker : null} d="M42.6 130.856C42.456 130.856 42.36 130.808 42.216 130.76C41.544 130.568 41.208 129.848 41.448 129.176L53.208 94.664C53.688 93.32 54.888 92.456 56.328 92.456C57.768 92.456 59.016 93.32 59.496 94.664L66.216 114.296C66.648 115.304 66.504 116.408 65.928 117.32C65.352 118.184 64.392 118.712 63.384 118.712H54.168C53.88 118.712 53.688 118.904 53.688 119.192C53.688 119.48 53.88 119.672 54.168 119.672H65.256C66.696 119.672 67.992 120.536 68.52 121.88L68.568 121.928L71.208 129.128C71.448 129.8 71.112 130.52 70.44 130.76C69.816 131 69.096 130.664 68.856 129.992L66.216 122.84C66.024 122.456 65.688 122.216 65.256 122.216H54.168C52.488 122.216 51.144 120.872 51.144 119.192C51.144 117.512 52.488 116.168 54.168 116.168H63.384C63.624 116.168 63.768 116.024 63.864 115.928C63.912 115.832 64.056 115.592 63.912 115.256L63.864 115.208V115.16L57.096 95.48C56.952 95 56.52 94.952 56.328 94.952C56.184 94.952 55.752 95 55.608 95.48L43.8 129.992C43.608 130.52 43.128 130.856 42.6 130.856Z" fill="black"/>
				<path id="D" d="M15.888 131H6.672C5.952 131 5.376 130.424 5.376 129.752C5.376 129.032 5.952 128.456 6.672 128.456H15.888C18.624 128.456 21.216 127.4 23.136 125.48C25.056 123.56 26.112 120.968 26.112 118.232V105.368C26.112 102.632 25.056 100.04 23.136 98.12C21.216 96.2 18.624 95.144 15.888 95.144H5.712C5.28 95.144 4.944 95.48 4.944 95.912V126.728C4.944 127.448 4.368 128.024 3.648 128.024C2.976 128.024 2.4 127.448 2.4 126.728V95.912C2.4 94.088 3.888 92.6 5.712 92.6H15.888C19.296 92.6 22.512 93.944 24.912 96.344C27.312 98.744 28.656 101.96 28.656 105.368V118.232C28.656 121.64 27.312 124.856 24.912 127.256C22.512 129.656 19.296 131 15.888 131Z" fill="black"/>
				</g>
				<g id="Light" className={!props.dark ? classes.active : null}>
				<path id="T" d="M148.456 48C147.784 48 147.208 47.424 147.208 46.752V16.128C147.208 14.304 148.696 12.816 150.52 12.816H158.68C158.872 12.816 159.016 12.672 159.016 12.48C159.016 12.288 158.872 12.096 158.68 12.096H136.648C135.976 12.096 135.4 11.568 135.4 10.848C135.4 10.176 135.976 9.6 136.648 9.6H158.68C160.264 9.6 161.512 10.896 161.512 12.48C161.512 14.016 160.264 15.312 158.68 15.312H150.52C150.088 15.312 149.704 15.696 149.704 16.128V46.752C149.704 47.424 149.176 48 148.456 48Z" fill="black"/>
				<path id="H" d="M120.112 9.6C119.392 9.6 118.816 10.176 118.816 10.848V45.12C118.816 45.312 118.672 45.456 118.48 45.456C118.288 45.456 118.144 45.312 118.144 45.12V30.192C118.144 28.368 116.608 26.88 114.784 26.88H101.536C100.864 26.88 100.288 27.456 100.288 28.128C100.288 28.848 100.864 29.424 101.536 29.424H114.784C115.216 29.424 115.6 29.76 115.6 30.192V45.12C115.6 46.704 116.896 48 118.48 48C120.064 48 121.36 46.704 121.36 45.12V10.848C121.36 10.176 120.784 9.6 120.112 9.6ZM97.648 9.6C96.928 9.6 96.4 10.176 96.4 10.848V46.752C96.4 47.424 96.928 48 97.648 48C98.368 48 98.896 47.424 98.896 46.752V10.848C98.896 10.176 98.368 9.6 97.648 9.6Z" fill="black"/>
				<path id="G" className={!props.dark ? classes.flicker : null} d="M70.552 48C63.304 48 57.4 42.096 57.4 34.848V22.704C57.4 19.2 58.744 15.936 61.24 13.44C63.736 10.944 67.048 9.6 70.552 9.6H70.936C73.96 9.696 76.888 10.848 79.192 12.864C81.544 14.928 83.08 17.808 83.512 20.928C83.608 21.6 83.128 22.224 82.456 22.32C81.784 22.416 81.112 21.936 81.016 21.264C80.68 18.72 79.432 16.416 77.512 14.736C75.592 13.056 73.096 12.144 70.552 12.144H70.168C64.504 12.336 59.944 16.992 59.944 22.704V34.848C59.944 40.704 64.696 45.456 70.552 45.456C76.36 45.456 81.112 40.704 81.112 34.848V30.624C81.112 30.144 80.776 29.808 80.296 29.808H70.648C69.928 29.808 69.352 29.232 69.352 28.512C69.352 27.84 69.928 27.264 70.648 27.264H80.296C82.168 27.264 83.656 28.752 83.656 30.624V34.848C83.656 42.096 77.752 48 70.552 48Z" fill="black"/>
				<path id="I" d="M39.648 48C38.928 48 38.4 47.424 38.4 46.752V10.848C38.4 10.176 38.928 9.6 39.648 9.6C40.32 9.6 40.896 10.176 40.896 10.848V46.752C40.896 47.424 40.32 48 39.648 48Z" fill="black"/>
				<path id="L" d="M21.496 48H6.712C4.888 48 3.4 46.512 3.4 44.688V10.848C3.4 10.176 3.976 9.6 4.648 9.6C5.368 9.6 5.944 10.176 5.944 10.848V44.688C5.944 45.12 6.28 45.456 6.712 45.456H21.496C22.168 45.456 22.744 46.032 22.744 46.752C22.744 47.424 22.168 48 21.496 48Z" fill="black"/>
				</g>
				</g>
			</svg>
			</button>
		</>
	);
}

export default themeButton;
/*
//Styles
const Svg = styled.svg`
	display: block;
	margin: 100px auto;

	path {
	fill: #fff;
	fill-opacity: 0.3;
}

.active path {
  fill: #39ff14;
  fill-opacity: 1;
  -webkit-animation: glow 1s ease-in-out infinite alternate;
  -moz-animation: glow 1s ease-in-out infinite alternate;
  animation: glow 1s ease-in-out infinite alternate;
}

@-webkit-keyframes glow {
  from {
     -webkit-filter: drop-shadow(2px 2px 2px rgba(222, 255, 216, 0.7));
     filter: drop-shadow(2px 2px 2px rgba(222, 255, 216, 0.5));
  }
  to {
     -webkit-filter: drop-shadow(4px 4px 4px rgba(222, 255, 216, 0.9));
     filter: drop-shadow(4px 4px 4px rgba(222, 255, 216, 0.7));
  }
}

.flicker {
	-webkit-animation: flicker 2s linear infinite alternate;
  	-moz-animation: ficker 2s linear infinite alternate;
  	animation: flicker 2s linear infinite alternate;
}

@-webkit-keyframes flicker {
	0% {
		fill: #fff;
		fill-opacity: 0.3;
    	-webkit-filter: drop-shadow(0 0 0 rgba(222, 255, 216, 0.7));
     	filter: drop-shadow(0 0 0 rgba(222, 255, 216, 0.5));
  	}
  
  	5% {
		fill: #39ff14;
		fill-opacity: 1;
    	-webkit-filter: drop-shadow(2px 2px 2px rgba(222, 255, 216, 0.7));
     	filter: drop-shadow(2px 2px 2px rgba(222, 255, 216, 0.5));
  	}
  	
  	8% {
		fill: #fff;
		fill-opacity: 0.3;
    	-webkit-filter: drop-shadow(0 0 0 rgba(222, 255, 216, 0.7));
     	filter: drop-shadow(0 0 0 rgba(222, 255, 216, 0.5));
  	}
  
  	15% {
		fill: #39ff14;
		fill-opacity: 1;
    	-webkit-filter: drop-shadow(2px 2px 2px rgba(222, 255, 216, 0.7));
     	filter: drop-shadow(2px 2px 2px rgba(222, 255, 216, 0.5));
  	}
  	60% {
		fill: #fff;
		fill-opacity: 0.3;
    	-webkit-filter: drop-shadow(0 0 0 rgba(222, 255, 216, 0.7));
     	filter: drop-shadow(0 0 0 rgba(222, 255, 216, 0.5));
  	}
  
  	65% {
		fill: #39ff14;
		fill-opacity: 1;
    	-webkit-filter: drop-shadow(2px 2px 2px rgba(222, 255, 216, 0.7));
     	filter: drop-shadow(2px 2px 2px rgba(222, 255, 216, 0.5));
  	}
  	
  	80% {
		fill: #fff;
		fill-opacity: 0.3;
    	-webkit-filter: drop-shadow(0 0 0 rgba(222, 255, 216, 0.7));
     	filter: drop-shadow(0 0 0 rgba(222, 255, 216, 0.5));
  	}
  
  	82% {
		fill: #39ff14;
		fill-opacity: 1;
    	-webkit-filter: drop-shadow(2px 2px 2px rgba(222, 255, 216, 0.7));
     	filter: drop-shadow(2px 2px 2px rgba(222, 255, 216, 0.5));
  	}
  
  	95% {
		fill: #fff;
		fill-opacity: 0.3;
    	-webkit-filter: drop-shadow(0 0 0 rgba(222, 255, 216, 0.7));
     	filter: drop-shadow(0 0 0 rgba(222, 255, 216, 0.5));
  	}
  
  	97% {
		fill: #39ff14;
		fill-opacity: 1;
    	-webkit-filter: drop-shadow(2px 2px 2px rgba(222, 255, 216, 0.7));
     	filter: drop-shadow(2px 2px 2px rgba(222, 255, 216, 0.5));
  	}
  	100% {
		fill: #39ff14;
		fill-opacity: 1;
    	-webkit-filter: drop-shadow(2px 2px 2px rgba(222, 255, 216, 0.7));
     	filter: drop-shadow(2px 2px 2px rgba(222, 255, 216, 0.5));
  	}
}
`; */