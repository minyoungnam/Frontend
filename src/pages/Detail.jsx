import React from 'react'
import { styled } from 'styled-components'

const Detail = () => {
  return (
    <Backdrop>
      <RoomTitle>
        <h1>방 이름</h1>
        <div>지역</div>
        <div>이미지 넣을 css</div>
      </RoomTitle>
      <br />
      <LeftContainer>
        <div>Miny 님이 호스팅하는 공동 주택의 방</div>
        <Line />
        <div>숙소 편의시설</div>
      </LeftContainer>
      
    </Backdrop>
  )
}

export default Detail

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  max-width: 1400px;
  padding: 0 20px;
  left: 50%;
  transform: translate(-50%, 0);
  background-color: #F7F7F7;

  overflow: hidden;
  display: flex;
  flex-direction: column;
`
const RoomTitle = styled.div`
  margin-left: 20px;
`
const LeftContainer = styled.div`
  background-color: #c9c9ca;
  max-width: 830px;
  margin-left: 20px;
`
const Line = styled.div`
  border-top: 1px solid #444444;
  margin: 30px 0px; 
`