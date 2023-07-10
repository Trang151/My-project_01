import React from 'react'
import styled from 'styled-components'
import { Icon } from '@iconify/react';
import AccordionTest from '../pages/AccordionTest';

const Content = styled.div`
	display: grid;
	grid-template-columns: repeat(3,1fr);
	padding: 32px 36px;
`
const Column = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	color: #6b6b6b;
`
const MyIcon = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 81px;
	width: 100%;
	border-top: 1px solid lightgray;
	padding: 24px 36px;
	span {
		color: #666666;
		font-size: 12px;
	}
`
const SocialMedia = styled.div`
	display: flex;
	align-items: center;
	gap: 15px;
`
const MainContainer = styled.footer`
	width: 100%;
	background: #f5f5f5;
	display: flex;
	flex-direction: column;
	font-size: 1.5rem;
	${Content}{
		width: 100%;
		gap: 10px;
		margin: 0;
		${Column}{
			background: pink;
			width: 100%;
			margin: 0;
			li {
				line-height: 21px;
				&:hover {
					text-decoration: underline;
					color: #f5f5f5;
				}
			}
			li+li {
				margin-top: 8px;
			}
			h2 {
				font-size: 15px;
				margin-bottom: 8px;
				color: #333333;
			}
		}
	}
	${AccordionTest}{
		background: green;
	}
	${MyIcon}{
		${SocialMedia}
		}
	}
	@media screen and (max-width: 959.9px) {
			${MyIcon} {
				display: flex;
				flex-direction: column;
				gap: 20px;
				margin: 30px auto;
			}
			${Content} {
				display: none;
			}
		}
`
const Footer = () => {
  return (
		<MainContainer>
			<Content>
				<Column>
					<h2>メルカリについて</h2>
					<ul>
						<li>会社概要（運営会社）</li>
						<li>採用情報</li>
						<li>プレスリリース</li>
						<li>公式ブログ</li>
						<li>プレスキット</li>
						<li>メルカリUS</li>
						<li>メルカリSholis</li>
						<li>メルカリSholis会社概要（運営会社）</li>
						<li>メルカリSholisプレスリリース</li>
					</ul>
				</Column>
				<Column>
					<h2>ヘルプ</h2>
					<ul>
						<li>ヘルプセンター（ガイド・お問い合わせ）</li>
						<li>メルカリSholis出品者向けガイド</li>
						<li>お問い合わせ一覧</li>
						<li>フリーワードから商品をさがす</li>
					</ul>
				</Column>
				<Column>
					<h2>プライバシーと利用規約</h2>
					<ul>
						<li>プライバシーポリシー</li>
						<li>外部送信ポリシー</li>
						<li>メルカリ利用規約</li>
						<li>メルカリSholis利用規約</li>
						<li>メルペイ利用規約</li>
						<li>メルカード利用規約</li>
						<li>メルペイスマートマネー利用規約</li>
						<li>メルペイスマートマネープライバシーポリシー</li>
						<li>電磁交付規約</li>
						<li>コンプライアンスポリシー</li>
						<li>個人データの安全管理に係る基本方針</li>
						<li>特定商取引に関する表記</li>
						<li>資金決済法に基づく表示</li>
						<li>法令順守と犯罪抑止のために</li>
						<li>メルカリあんしん・あんぜん宣言！</li>
						<li>偽ブランド品撲滅への取り組み</li>
					</ul>
				</Column>
			</Content>
			<AccordionTest />
			<MyIcon>
				<SocialMedia>
					<Icon icon="mdi:twitter" width="32px"/>
					<Icon icon="ic:baseline-facebook" width="32px"/>
				</SocialMedia>
				<span>© Mercari, Inc.</span>
			</MyIcon> 
			
		</MainContainer>
  )
}

export default Footer