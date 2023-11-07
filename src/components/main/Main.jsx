import React, { useEffect, useState } from 'react'
import { Container, Title } from '../../utils'
import { apiInstance } from '../../api'
import Swiperr from '../../utils/swiper/Swiperr'

const Main = () => {
  const [popularData, setPopularData] = useState([])
  useEffect(()=>{
    apiInstance('/post/lastones')
    .then(data => setPopularData(data.data))
  },[])
  console.log(popularData);
  return (
    <>
    <Container>
      <div className="popular__blogs-wrapper">
        <Title text={'Popular Blogs'}/>
        <Swiperr popularData={popularData}/>
      </div>
    </Container>
    </>
  )
}

export default Main