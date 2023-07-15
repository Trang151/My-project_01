import React from 'react';
import styled from 'styled-components';
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';
import { Icon } from '@iconify/react';

const StyledAccordionItem = styled(AccordionItem)`
  background-color: #f5f5f5;
`
const StyledAccordionItemButton = styled(AccordionItemButton)`
  padding: 10px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const StyledAccordionItemPanel = styled(AccordionItemPanel)`
  padding: 20px;
`
const StyledAccordion = styled(Accordion)`
  width: 100%;
  margin: 0 auto;
  ${StyledAccordionItem}{
    ${StyledAccordionItemButton}{
      span {
        color: #313540;
      }
    }
    ${StyledAccordionItemPanel}{
      a{
        color: #413938;
      }
      li {
        margin: 8px 0 0;
        &:hover{
          a {
            color: #DBD1C6;
            text-decoration: underline;
          }
        }
      }
    }
  }
  @media screen and (min-width: 960px){
    display: none;
  }
`
const AccordionTest = () => {
  return (
    <StyledAccordion allowMultipleExpanded>
      <StyledAccordionItem>
        <StyledAccordionItemButton>
          <span>メルカリについて</span>
          <div><Icon icon="icon-park:drop-down-list" width='25px' /></div>
        </StyledAccordionItemButton>
        <StyledAccordionItemPanel>
          <ul>
            <li><a href="">会社概要</a></li>
            <li><a href="">採用情報</a></li>
            <li><a href="">プレスリリース</a></li>
            <li><a href="">公式ブログ</a></li>
            <li><a href="">プレスキット</a></li>
            <li><a href="">メルカリUS</a></li>
            <li><a href="">メルカリSholis</a></li>
            <li><a href="">メルカリSholis会社概要（運営会社）</a></li>
            <li><a href="">メルカリSholisプレスリリース</a></li>
          </ul>
        </StyledAccordionItemPanel>
      </StyledAccordionItem>
      <StyledAccordionItem>
        <StyledAccordionItemButton>
          <span>ヘルプ</span>
          <div><Icon icon="icon-park:drop-down-list" width='25px' /></div>
        </StyledAccordionItemButton>
        <StyledAccordionItemPanel>
          <li><a href="">ヘルプセンター（ガイド・お問い合わせ）</a></li>
          <li><a href="">メルカリSholis出品者向けガイド</a></li>
          <li><a href="">お問い合わせ一覧</a></li>
          <li><a href="">フリーワードから商品をさがす</a></li>
        </StyledAccordionItemPanel>
      </StyledAccordionItem>
      <StyledAccordionItem>
        <StyledAccordionItemButton>
          <span>プライバシーと利用規約</span>
          <div><Icon icon="icon-park:drop-down-list" width='25px' /></div>
        </StyledAccordionItemButton>
        <StyledAccordionItemPanel>
          <li><a href="">プライバシーポリシー</a></li>
          <li><a href="">外部送信ポリシー</a></li>
          <li><a href="">メルカリ利用規約</a></li>
          <li><a href="">メルカリSholis利用規約</a></li>
          <li><a href="">メルペイ利用規約</a></li>
          <li><a href="">メルカード利用規約</a></li>
          <li><a href="">メルペイスマートマネー利用規約</a></li>
          <li><a href="">メルペイスマートマネープライバシーポリシー</a></li>
          <li><a href="">電磁交付規約</a></li>
          <li><a href="">コンプライアンスポリシー</a></li>
          <li><a href="">個人データの安全管理に係る基本方針</a></li>
          <li><a href="">特定商取引に関する表記</a></li>
          <li><a href="">資金決済法に基づく表示</a></li>
          <li><a href="">法令順守と犯罪抑止のために</a></li>
          <li><a href="">メルカリあんしん・あんぜん宣言！</a></li>
          <li><a href="">偽ブランド品撲滅への取り組み</a></li>
        </StyledAccordionItemPanel>
      </StyledAccordionItem>
    </StyledAccordion>
  );
}

export default AccordionTest