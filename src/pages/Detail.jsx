import React from 'react'
import { styled } from 'styled-components'

const Detail = () => {
  return (
    <Entire>
      <Backdrop>
        <RoomTitle>
          <h1>방 이름</h1>
          <div>지역</div>
          <Main_bg>
            <Image_1><img src='/bnb1.jpg' width='700px' height='620px' /></Image_1>
            <Image_2><img src='/bnb1.jpg' width='330px' height='300px' /></Image_2>
            <Image_3><img src='/bnb1.jpg' width='330px' height='300px' /></Image_3>
            <Image_4><img src='/bnb1.jpg' width='330px' height='300px' /></Image_4>
            <Image_5><img src='/bnb1.jpg' width='330px' height='300px' /></Image_5>
          </Main_bg>
        </RoomTitle>
        <br />
        <LeftContainer>
          <div style={{ margin: '20px 0' }}>Miny 님이 호스팅하는 공동 주택의 방</div>
          <Line />
          <div>에어커버</div>
          <div>모든 예약에는 호스트가 예약을 취소하거나 숙소 정보가 정확하지 않은 경우 또는 체크인에 문제가 있는 상황에 대비한 무료 보호 프로그램이 포함됩니다.</div>
          <Line />
          <div>숙소 편의시설</div>
          <div>가져올 데이터</div>
        </LeftContainer>

      </Backdrop>
    </Entire>
  )
}

export default Detail

const Entire = styled.div`
  overflow-y: scroll;
`
const Backdrop = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  max-width: 1400px;
  padding: 0 20px;
  left: 50%;
  transform: translate(-50%, 0);
  background-color: #a5caae;

  display: flex;
  flex-direction: column;
`
const RoomTitle = styled.div`
  margin-left: 10px;
  margin-right: 10px;
`
const LeftContainer = styled.div`
  background-color: #bcd4eb;
  max-width: 830px;
  margin-left: 20px;
`
const Line = styled.div`
  border-top: 1px solid #444444;
  margin: 30px 0px; 
`
const Main_bg = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 10px;
  margin-top: 20px;
`
const Image_1 = styled.div`
  grid-row-start: 1;
  grid-row-end: 3;
  grid-column-start: 1;
  grid-column-end: 2;
`
const Image_2 = styled.div`
  grid-row-start: 1;
  grid-row-end: 2;
  grid-column-start: 2;
  grid-column-end: 3;
`
const Image_3 = styled.div`
  grid-row-start: 1;
  grid-row-end: 2;
  grid-column-start: 3;
  grid-column-end: 4;
`
const Image_4 = styled.div`
  grid-row-start: 2;
  grid-row-end: 3;
  grid-column-start: 2;
  grid-column-end: 3;
`
const Image_5 = styled.div`
  grid-row-start: 2;
  grid-row-end: 3;
  grid-column-start: 3;
  grid-column-end: 4;
`