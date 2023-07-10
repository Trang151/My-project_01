import React from 'react';
import styled from 'styled-components';
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';
import { Icon } from '@iconify/react';

const StyledAccordion = styled(Accordion)`
  width: 100%;
  // max-width: 600px;
  margin: 0 auto;
`;

const StyledAccordionItem = styled(AccordionItem)`
  // border: 1px solid #ddd;
  // margin-bottom: 10px;
`;

const StyledAccordionItemButton = styled(AccordionItemButton)`
  background-color: #f5f5f5;
  padding: 10px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledAccordionItemPanel = styled(AccordionItemPanel)`
  padding: 20px;
`;

const AccordionTest = () => {
	return (
    <StyledAccordion allowMultipleExpanded>
      <StyledAccordionItem>
        <StyledAccordionItemButton>
          <span>メルカリについて</span>
          <div><Icon icon="icon-park:drop-down-list" width='25px'/></div> 
        </StyledAccordionItemButton>
        <StyledAccordionItemPanel>
			<ul>
				<li><a href="">会社概要</a></li>
				<li><a href="">採用情報</a></li>
				<li><a href="">プレスリリース</a></li>
				<li><a href="">公式ブログ</a></li>
			</ul>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.
        </StyledAccordionItemPanel>
      </StyledAccordionItem>
      <StyledAccordionItem>
        <StyledAccordionItemButton>
          <span>ヘルプ</span>
          <div><Icon icon="icon-park:drop-down-list" width='25px'/></div> 
        </StyledAccordionItemButton>
        <StyledAccordionItemPanel>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.
        </StyledAccordionItemPanel>
      </StyledAccordionItem>
      <StyledAccordionItem>
        <StyledAccordionItemButton>
          <span>プライバシーと利用規約</span>
          <div><Icon icon="icon-park:drop-down-list" width='25px'/></div> 
        </StyledAccordionItemButton>
        <StyledAccordionItemPanel>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.
        </StyledAccordionItemPanel>
      </StyledAccordionItem>
    </StyledAccordion>
  );
}

export default AccordionTest