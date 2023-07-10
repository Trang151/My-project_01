import React from 'react'
import styled from 'styled-components'

const InfoContainer = styled.div`
  background: pink;
  width: 100%;
  height: 100vh;
`
const PriceSection = styled.div`
  display: inline-flex;
  padding: 0px 358.92px 0px 0px;
  align-items: center;
  gap: 8px;
  p {
    color: #333;
    font-size: 28px;
    font-family: Arial;
    line-height: 21px;
  }
  &:before{
    content: "¥";
    color: #666;
    font-size: 15px;
    font-family: Arial;
    line-height: 0px;
  }
  &:after{
    content: '(税込) 送料込み';
    color: #333;
    font-size: 12px;
    font-family: Arial;
    line-height: 12px;
  }
`
const LikeBox = styled.div`
  display: flex;
  padding: 4px 7.59px 4px 7.57px;
  flex-direction: column;
  align-items: center;
  gap: 1px;
  border-radius: 4px;
  div {
    color: #333;
    text-align: center;
    font-size: 12px;
    font-family: Arial;
    line-height: 16.8px;
  }
`
const Info = () => {
  return (
	 <InfoContainer>
    <PriceSection>
      <p>2680</p>
    </PriceSection>
    <LikeBox>
      <img src="" alt="" />
      <div>4</div>
    </LikeBox>
   </InfoContainer>
  )
}

export default Info