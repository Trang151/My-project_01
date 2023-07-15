import React from 'react'
import logo from '../assets/mercari.svg'
import { Container } from '../GlobalStyles'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

const LeftNav = styled.div`
	display: flex;
	align-items: center;
	height: 100%;
	padding: 10px 20px;
`
const LanguageContainer = styled.div`
	display: flex;
	align-items: center;
	height: 100%;
	position: relative;
`
const RightNav = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 100%;
`
const InputBtn = styled.div`
	display: flex;
	align-items: center;
	height: 100%;
	padding: 10px 20px;
`
const NavContainer = styled.nav`
	position: fixed;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-top: 1px solid #CBCBCB;
	border-bottom: 1px solid #CBCBCB;
	width: 100%;
  margin: 10px;
	height: 80px;
	gap: 5px;
	position: relative;
	${LeftNav} {
		width: 60%;
		img {
			width: 110px;
			height: 49px;
		}
		${InputBtn} {
			width: 100%;
			height: 64px;
			padding: 0 0 0 24px;
			position: relative;
			height: 36px;
			font-size:18px;
			color: #cccccc;
			.iconSearch {
				display: flex;
				align-items: center;
				justify-content: center;
				position: absolute;
				right: 2px;
				gap: 10px;
			}
			input {
				width: 100%;
				height: 34px;
				padding: 0px 16px;
				font-size: 14px;
				border-radius: 4px;
				border: 1px solid #cccccc;
				background: #F5F5F5;
			}
		}
	}
	${LanguageContainer} {
		width: 10%;
		display: flex; 
		justify-content: center;
		gap: 5px;
		button{
			height: 20px;
		}
	}
	${RightNav} {
		width: 30%;
		ul {
			display: flex;
			align-items: center;
			align-items: center;
			justify-content: space-between;
			width: 100%;
			margin: auto 20px;	
			li {
				font-size: 14px;
				display: inline-block;
				padding: 8px;
				height: 38px;
				&:hover {
					background: #F5F5F5;
				}
				a {
					color: #333333;
				}
			}
			li + li {
				margin: 10px;
			}
			li:last-child{
				background: #FF333F;
				width: 62px;
				text-align: center;
				border-radius: 5px;
				&:hover {
					opacity: 0.7;
				}
				a {
					color: #fff;
					font-weight: 500;
				}
			}
		}
		.icon {
			display: flex;
			gap: 10px;
			position: absolute;
			top: 10px;
			right: 30px;
		}
	}
	@media screen and (min-width: 960px) {
		${RightNav} {
			.icon {
				display: none;
			}
		}
	}
	@media screen and (max-width: 959.9px) {
		dislay: flex;
		flex-direction: column;
		${LeftNav}{
			dislay: flex;
			justify-content: center;
			align-item: center;
		}
		${InputBtn}{
			display: none;
		}
		${LanguageContainer} {
			display: none;
		}
		${RightNav} {
			ul {
				dislay: flex;
				position: absolute;
				top: 40px;
				right: 10px;
				padding: 0;
				width: 160px;
				li:nth-child(1){
					display: none;
				}
				li:nth-child(4){
					display: none;
				}
				li:nth-child(3){
					display: flex;
					width: fit-content;
					height: 28px;
					order: 1;
					padding: 0;
					a {
						color: #0073cc;
						font-weight: 500;
					}
				}
				li:nth-child(2){
					display: flex;
					width: fit-content;
					height: 28px;
					order: 2;
					padding: 0;
					a {
						color: #0073cc;

					}
				}
				
			}
		}
	}
`
const Navbar = () => {
	return (
		<NavContainer>
			<LeftNav>
				<Link to="/"><img src={logo} alt="" /></Link>
				<InputBtn>
					<input type="text" placeholder="なにをお探しですか？"></input>
					<div className='iconSearch'>
						<Icon icon="iconoir:search" color="black" width="18" />
					</div>
				</InputBtn>
			</LeftNav>
			<RightNav>
				<ul>
					<li><a href="/">お知らせ</a></li>
					<li><Link to="/login">ログイン</Link></li>
					<li><a href="">会員登録</a></li>
					<li><a href="">出品</a></li>
				</ul>
				<div className='icon'>
					<div className='iconSearch'>
						<Icon icon="iconoir:search" color="black" width="22" />
					</div>
					<div className='iconTick'>
						<Icon icon="mdi:tick-outline" color="black" width="25" height="25" />
					</div>
				</div>
			</RightNav>
		</NavContainer>

	)
}

export default Navbar