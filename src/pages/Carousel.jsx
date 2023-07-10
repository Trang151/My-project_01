import React, {useState} from 'react'
import { Icon } from '@iconify/react';
import styled from 'styled-components'
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery'
// import dr from './assets/dr-1.png'
import lock from '../assets/lock.svg'
import img from "../assets/img.jpg"

const MainContainer = styled.main`
display: grid;
grid-template-columns: 1fr 1fr;
max-width: 1280px;
background: white;
`
const Title = styled.div`
    font-size: 2.4rem;
    color: #333333;
    font-weight: 700;
    line-height: 34px;
    margin-bottom: 5px;
`
const Brand = styled.div`
    background: red;
    font-size: 1.5rem;
    color: rbg(102,102,102);
`
const Price = styled.div`
  position: relative;
  font-size: 2.8rem;
  display: flex;
  align-items: center;
  &:before {
    content: "¥";
    position: absolute;
    left: 18px;
    bottom: 4px;
    font-size: 1.5rem;
    color: gray;
  }
  span {
    font-size: 1.2rem;
  }
`
const MyImageGallery = styled(ImageGallery)`
  max-width: 500px;
`
const Security = styled.div`
  display: flex;
  width: 100%;
  height: 54px;
  background: #f5f5f5;
  border-radius: 7px;
  align-items: center;
  padding: 10px;
  margin: 5px 0 30px;
  img {
    width: 16px;
  }
  div {
    margin-left: 10px;
    width: 100%;
  }
  p {
    font-size: 12px;
  }
  p:first-child {
    font-weight: 700;
  }
  &:hover {
    background: #e5e5e5;
  }
`
const Delivery = styled.div`
  display: flex;
  width: 100%;
  height: 54px;
  background: #e8f8ff;
  border-radius: 7px;
  align-items: center;
  padding: 10px;
  margin: 20px 0 30px;
  div {
    margin-left: 10px;
    width: 100%;
  }
  p {
    font-size: 12px;
  }
  p:first-child {
    font-weight: 700;
  }
  &:hover {
    background: #c9ebff;
  }
`
const MyIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 51px;
  color: #333333;
  font-size: 15px;
  line-height: 21px;
  margin: 20px auto;
  .review{
    display: flex;
    gap: 25px;
  }
  .heartIcon, .chatBox,.threeDots {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    border-radius: 2px;
    width: 64px;
    height: 51px;
    padding-top: 3px;
    p {
      margin-top: -6px;
    }
  }
  .heartIcon:hover, .chatBox:hover {
    background: rgb(245,245,245);
  }
  .threeDots:hover{
    background: #F5F5F5;
  }
  .threeDots {
    width: 36px;
    height: 36px;
    border-radius: 50px;
  }
`
const BuyButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #FF333F;
  border: none;
  width: 100%;
  height: 45px;
  padding: 11px 15px;
  font-size: 15px;
  color: white;
  font-weight: 700;
  line-height: 21px;
  gap: 5px;
  border-radius: 4px;
  &:hover {
    opacity: 0.8;
  }
`
const ThanksComment = styled.div`
  margin-top: 16px;
  font-size: 1.2rem;
  color: #666666;
  font-weight: 400;
  line-height: 17px;
  // border-bottom: 1px solid lightgray;
  padding-bottom: 35px;
`
const Content1 = styled.section`
  margin-top: 30px;
  h2 {
    font-size: 2rem;
		margin: 20px auto 15px;
		padding-bottom: 10px;
		color: #666666;
		font-weight: 700;
		line-height: 28px;
  }
  p {
    font-size: 1.5rem;
		color: #333333;
		font-weight: 400;
		line-height: 21px;
  }
`
const Content2 = styled.section`
  border-bottom: 1px solid lightgray;
  padding-bottom: 20px;
  h2 {
    font-size: 2rem;
		margin: 20px auto 15px;
		padding-bottom: 20px;
    border-bottom: 1px solid lightgray;
		color: #666666;
		font-weight: 700;
		line-height: 28px;
  }
  div {
    display: grid;
		grid-template-columns: 1fr 1fr;
		align-items: center;
  }
  span {
    color: blue;
		line-height: 20px;
		font-weight: 400;
		font-size: 14px;
    text-decoration: underline;
    // padding-bottom:0;
    &:hover{
      color: #30b2ff;
    }
  }
  p {
    font-size: 1.5rem;
		color: #333333;
		line-height: 21px;
    margin: 5px;
    &:first-child {
      font-weight: 700;
    }
  }
  .link1, .link2 {
    display: flex;
    align-items: center;
  }
`
const Content3 =styled.section`
  h2 {
    font-size: 2rem;
		margin: 20px auto 15px;
		padding-bottom: 10px;
		color: #666666;
		font-weight: 700;
		line-height: 28px;
  }
  .comment {
		display: flex;
		justify-content: space-between;
		align-items: center;
    border-top: 1px solid lightgray;
    border: 1px solid lightgray;
    padding: 50px 0 50px 0;
    height: 80px;
		font-size: 14px;
		line-height: 20px;
		color: #666666;
		font-weight: 400;
    &:hover{
      background-color: #f5f5f5;
      border-radius: 5px;
    }
    .commentContent {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px 0;
      img{
        width: 46px;
        height: 46px;
        border-radius: 50%;
        border-bottom: 1px solid lightgray;
        
      }
      .review2 {
        display: flex;
        flex-direction: column;
        margin-left: 10px;
        p:first-child {
          font-weight: 700;
        }
        p:nth-child(2) {
          display: flex;
          color: #0073cc;
          padding: 4px 0 0 0;
          margin-left: -2px;
          span {
            margin-left: 2px;
          }
        }
        p:nth-child(3) {
          display: flex;
          align-items: center;
          span {
            font-size: 14px;
            margin-left: 4px;
            padding-top: 2px;
          }
        }
      
      }
    }
  
	}
`
const Content4 = styled.section`
  h2 {
    font-size: 2rem;
    margin: 20px auto 15px;
    padding-bottom: 10px;
    color: #666666;
    font-weight: 700;
    line-height: 28px;
  }
  p {
    display: flex;
    justify-content: center;
    align-items: center;
    color: red;
		font-weight: bold;
		background: white;
		border: 1px solid red;
		font-size: 1.5rem;
    height: 40px;
    width: 100%;
    margin-bottom: 20px;
  }
`
const images = [
    {
      original: 'https://picsum.photos/id/1018/600/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/600/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/600/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1018/600/600/',
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
      },
      {
        original: 'https://picsum.photos/id/1015/600/600/',
        thumbnail: 'https://picsum.photos/id/1015/250/150/',
      },
      {
        original: 'https://picsum.photos/id/1019/600/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
      },
  ];

const Carousel = () => {
  const [price, setPrice] = useState(Number(1600).toLocaleString())
  return (
    <MainContainer>
      <MyImageGallery items={images} showThumbnails={true} thumbnailPosition="left" thumbnailWidth="20" />
      <div className="description">
        <Title>ドクタージー　Dr.G レッドB・Cスージングクリーム</Title>
        <Price>
        　{price}<span>（税込）送料込み</span>
        </Price>
        <MyIcon>
          <div className='review'>
            <div className="heartIcon">
              <Icon icon="fluent:heart-28-regular" width="30"/>
              <p>2</p>
            </div>
            <div className="chatBox">
              <Icon icon="ion:chatbox-outline" width='30'/>
              <p>コメント</p>
            </div>
          </div>
          <div className='threeDots'>
            <Icon icon="ph:dots-three-vertical-bold" width="30" />
          </div>
        </MyIcon>
        <BuyButton>
          <span>Buy this item!</span>
          <Icon icon="material-symbols:logout-rounded" />
        </BuyButton>
        <ThanksComment>
          Thanks to our partnership with Buyee, we ship to over 100 countries worldwide! For international purchases, your transaction will be with Buyee.
        </ThanksComment>
        <Content1>
          <h2> 商品の説明</h2> 
          <p>
            コメ無し即購入okです！<br /><br />
            Dr.G ドクタージー<br />
            レッドブレミッシュクリアスージングクリーム 50ml<br />
            定価 ¥3,465<br />
            肌荒れを防ぐクリーム。<br />
            本体開けようとして失敗した跡があります。<br />
            使用してませんが、気になる方はお控えくださいませ。<br /><br />
            2時間前
          </p>
        </Content1>
        <Content2>
          <h2>商品の情報</h2> 
          <div>
            <p>カテゴリー</p>
            <p>
              <p className='link1'>
              <span>コスメ・香水・美容</span> 
              <Icon icon="ic:twotone-greater-than" color="#333333" width='25px'/><br /> 
              </p>
              <p className='link2'>
              <span>コスメ・香水・美容</span> 
              <Icon icon="ic:twotone-greater-than" color="#333333" width='25px'/><br /> 
              </p>
              <span>フェイスクリーム</span>
            </p>
          </div>
          <div>
            <p>商品の状態</p>
            <p>未使用に近い</p>
          </div>
          <div>
            <p>配送料の負担</p>
            <p>送料込み(出品者負担)</p>
          </div>
          <div>
            <p>配送の方法</p>
            <p>未定</p>
          </div>
          <div>
            <p>発送元の地域</p>
            <p>東京都</p>
          </div>
          <div>
            <p>発送までの日数</p>
            <p>2~3日で発送</p>
          </div>
        </Content2>
        <br></br>
        <Security>
          <img src={lock} alt="" />
          <div>
            <p>メルカリ安心への取り組み</p>
            <p>お金は事務局に支払われ、評価後に振り込まれます</p>
          </div>
          <Icon icon="ic:sharp-greater-than" width="30"/>
        </Security>
        <Content3>
          <h2>出品者</h2> 
          <div className="comment">
            <div className='commentContent'>
              <img src={img} alt={"img"}/> 
              <div className="review2">
                <p>m♥まとめ買い歓迎</p>
                <p>
                  <Icon icon="ic:round-star" color="orange" width="18"/>
                  <Icon icon="ic:round-star" color="orange" width="18" />
                  <Icon icon="ic:round-star" color="orange" width="18"/>
                  <Icon icon="ic:round-star" color="orange" width="18"/>
                  <Icon icon="ic:round-star" color="orange" width="18"/>
                  <span>1585</span>
                </p>
                <p>
                  <Icon icon="icon-park-solid:protect" color="lightgray" width="14" />
                  <span>本人確認前</span>
                </p>
              </div>
            </div>
            <Icon icon="ic:sharp-greater-than" width="30"/>
          </div>
        </Content3>
        <Delivery>
          <Icon icon="ri:truck-fill" color="#0095ee" width="22"/>
          <div>
            <p>スピード発送</p>
            <p>この出品者は平均24時間以内に発送しています</p>
          </div>
          <Icon icon="ic:sharp-greater-than" width="30"/>
        </Delivery>
        <Content4>
          <h2>コメント (0)</h2> 
          <p>Login to comment</p>
        </Content4>
      </div>
    </MainContainer>
     
  )
}

export default Carousel