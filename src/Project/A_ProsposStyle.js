import styled from 'styled-components'

export const Wrapper = styled.div`
	box-sizing: border-box;
	color: #242222;
	font-family: 'EB Garamond', serif;
	span {
		font-family: 'Beau Rivage', cursive;
	}
`
export const Header = styled.div`
	background: linear-gradient(to bottom, #ffeceb 20%, #f7cecb 30%);

	.pen {
		float: right;
	}
	h3 {
		color: #930909;
		padding-bottom: -17px;
		letter-spacing: -0.5px;
	}
	h1 {
		color: #930909;
		font-size: 40px;
		margin-top: -15px;
		letter-spacing: 3px;
	}
	button {
		color: #930909;
		border: 2px solid #f58c84;

		border-radius: 10px;
		width: 280px;
		padding: 15px 32px;
		text-align: center;
		text-decoration: none;
		display: inline-block;
		font-size: 16px;
		margin-top: 50px;
		margin-bottom: 150px;
		cursor: pointer;
	}
	.header {
		margin-left: 100px;
		position: relative;
		top: 70px;
	}
`
export const Services = styled.div`
	margin-left: 100px;
	margin-top: 90px;
	
.service h1 {
		font-size: 60px;
		margin-bottom: 40px;
		color: #1e3a75;
	}
.service p {
		font-size: 20px;
		margin-bottom: -20px;
		color: #1e3a75;
	}
	.column {
		float: left;
		width: 30.33%;
		padding: 10px;
		height: 300px;
		margin-right: 15px;
		text-align: center;
		height: 150px;
		border-radius: 12px;
    color:#fff
	}

	.row:after {
		content: '';
		display: table;
		clear: both;
	}
	h2 {
		padding: 40px 0;
		text-align: center;
		font-size: 25px;
		margin: 4px;
	}
`
export const Articles = styled.div`
	background-color: #f5f5f5;
	margin-top: 90px;
	margin-right: 1px;
	.article {
		margin-left: 100px;
		padding-top: 100px;
	}
	.article h1 {
		font-size: 60px;
		margin-bottom: 90px;
		color: #1e3a75;
	}
	.article p {
		font-size: 20px;
		margin-bottom: -20px;
		color: #1e3a75;
	}
	.column {
		float: left;
		width: 23%;
		padding: 20px;
		height: 600px;
		margin-right: 15px;

		height: 250px;
		border-radius: 12px;
		background-color: #ffffff;
		margin-bottom: 90px;
	}
	.row:after {
		content: '';
		display: table;
		clear: both;
	}
	.column p {
		font-size: 15px;
		color: #242222;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
	.title {
		font-size: 15px;
		padding-bottom: 25px;
		padding-top: 10px;
	}
	.strong {
		font-size: 20px;
	}
`
export const Footer = styled.div`
	margin-left: 100px;
	margin-top: 90px;
	color: #242222;

	img {
		width: 10px;
		float: left;
		margin-top: 9px;
		margin-right: 6px;
	}

	Footer p {
		display: inline;
	}

	* {
		box-sizing: border-box;
	}

	.column {
		float: right;
		width: 30%;

		height: 300px;
		margin-top: -55px;
	}

	.row:after {
		content: '';
		display: table;
		clear: both;
	}
	li {
		line-height: 40px;
		font-size: 14px;
	}
	h6 {
		padding-bottom: 20px;
	}
	p {
		padding-bottom: 20px;
		font-size: 14px;
	}
	.logo {
		font-size: 20px;
	}
`