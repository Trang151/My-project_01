import styled, { createGlobalStyle, css } from 'styled-components';
import { Link } from 'react-router-dom';

/**
	https://www.programcreek.com/typescript/?api=styled-components.createGlobalStyle
**/
const GlobalStyle = createGlobalStyle`
	* {
		padding: 0;
		margin: 0;
		list-style: none;
		text-decoration: none;
		box-sizing: border-box;
		/* white-space: pre-wrap; */
	}
	html {
		/* 16pxの62.5%=10px */
		font-size: 62.5%;
	}
	.description {
		margin: 0 20px auto;
		min-width: 400px;
	}
	.text, {
		font-size: 1.2rem;
		color: #333333;
		line-height: 17px;
		font-weight: 400;
	}
	body {
		font-size: 1.6rem;
		font-family: 'Roboto', sans-serif;
		width: 100%;
		height: 100vh;
	}
	.spec {
		font-weight: 700;
	}
	h1 {
		font-size: 3.5rem;
	}
	.introduce {
		border-bottom: 0;
	}
	h3 {
		font-size: 2.5rem;
	}
	h4 {
		font-size: 1.8rem;
	}
	p {
		font-size: 1.5rem;
		color: #333333;
		font-weight: 400;
		line-height: 21px;
	}
	@media (max-width:580px) {
		html {
			 font-size: 31.25%;
		}
	}
	
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`
export const MainContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`
export default GlobalStyle;
