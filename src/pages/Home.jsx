import { useState } from 'react';
import styled from 'styled-components'
import { useQuery } from '@tanstack/react-query';

const Main = styled.main`
	max-width: 1208px;
	margin: 10px auto;
	padding: 10px;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
	gap: 10px;
	@media screen and (max-width: 1208px){
		grid-template-columns: 1fr 1fr 1fr 1fr;		
	}
	@media screen and (max-width: 980px){
		grid-template-columns: 1fr 1fr 1fr;		
	}
	@media screen and (max-width: 680px){
		grid-template-columns: 1fr 1fr;		
	}
`
const BoxContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	
	img {
		width: 100%;
		margin-bottom: auto;
	}
	
	span {
		position: absolute;
		top: 5%;
		left: 0px;
		background: rgba(0,0,0,0.7);
		padding: 2px 12px 2px 8px;
		margin-bottom: 8px;
		border-radius: 0 20px 20px 0;
		color: #FFFFFF;
		font-size: 20px;
		font-family: Arial;
		font-weight: 700;
		line-height: 28px;
	}
	p {
		padding: 0 5px;
		margin-top: 3px;
		color: #333;
		font-size: 1.4rem;
		font-family: Arial;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
	}
`

const Home = () => {
	//state
	const [i, setI] = useState(0)

	const { isLoading, error, data } = useQuery({
		queryKey: ['productData'],
		queryFn: () =>
			fetch('https://lusty.asia:1443/api/products?populate=images').then(
				(res) => res.json(),
			),
	})
	if (isLoading) return 'Loading...'

	if (error) return 'An error has occurred: '

	return (
		<Main>
			{data?.data && data.data.map((item, index) => {
				console.log(item.attributes.images.data)
				if (item.attributes.images.data) {
					return (
						<>
							<BoxContainer key={index}>
								<img src={"https://lusty.asia:1443" + item.attributes.images.data[0].attributes.url} alt="" />
								<span>¥{item.attributes.price}</span>
								<p>{item.attributes.title}</p>
							</BoxContainer>
						</>
					)
				}
			})}
		</Main>
	)
}

export default Home