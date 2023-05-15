import React, { useState, useEffect } from 'react'
import { styled } from 'styled-components'
import { addDays, format } from 'date-fns'
import { DateRange, DayPicker, isDateRange } from 'react-day-picker'
import 'react-day-picker'
import 'react-day-picker/dist/style.css';
import Slider from 'react-slick'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { FaWifi, FaTv } from 'react-icons/fa'
import { VscGithubAlt } from "react-icons/vsc";
import { SlGhost } from "react-icons/sl";

const Detail = () => {

  // 체크인, 체크아웃
  const [selectedDays, setSelectedDays] = useState({ from: undefined, to: undefined })
  const [showCalendar, setShowCalendar] = useState(false)

  const handleDayClick = (day) => {
    if (!selectedDays.from || (selectedDays.from && selectedDays.to)) {
      // 이전에 선택한 범위가 없거나, 범위의 끝점이 이미 선택된 경우
      setSelectedDays({ from: day, to: undefined }); // 시작점을 선택
    } else {
      // 범위의 시작점이 이미 선택된 경우
      const range = {
        from: selectedDays.from,
        to: day,
      };
      setSelectedDays(range) // 선택한 범위 업데이트
      setShowCalendar(false)
    }
  };

  const handleCheckinButtonClick = () => {
    setShowCalendar(!showCalendar);
  };
  
  const handleCheckoutButtonClick = () => {
    setShowCalendar(!showCalendar);
  };

  const modifiers = {
    disabled: { before: new Date() },
    selected: selectedDays,
    range: { from: selectedDays.from, to: selectedDays.to },
    today: new Date(),
  };

  // 더 알아보기 모달창
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  const openModalHandler = () => {
    setIsOpen(true)
  }
  const closeModalHandler = () => {
    setIsOpen(false)
  }
  const closeModalWithOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false)
    }
  }
  
  return (

    <Entire>
      
      <Backdrop>
        <RoomTitle>
          <h1>방 이름</h1>
          <div>지역</div>
          <Main_bg>
            <Image_1><img src='/bnb1.jpg' width='560px' height='562px' /></Image_1>
            <Image_2><img src='/bnb1.jpg' width='270px' height='275px' /></Image_2>
            <Image_3><img src='/bnb1.jpg' width='270px' height='275px' /></Image_3>
            <Image_4><img src='/bnb1.jpg' width='270px' height='275px' /></Image_4>
            <Image_5><img src='/bnb1.jpg' width='270px' height='275px' /></Image_5>
          </Main_bg>
        </RoomTitle>
        <br />
        <Big>
          <LeftContainer>
            <h3 style={{ margin: '20px 0' }}>Miny 님이 호스팅하는 공동 주택의 방</h3>
            <Line />
            <h2><Air>에어</Air>커버</h2>
            <div>모든 예약에는 호스트가 예약을 취소하거나 숙소 정보가 정확하지 않은 경우 또는 체크인에 문제가 있는 상황에 대비한 무료 보호 프로그램이 포함됩니다.</div>
            <div>
              <NagativeButton onClick={openModalHandler}>더 알아보기</NagativeButton>
              {isOpen && (
                <ModalBackground onClick={closeModalWithOutsideClick}>
            
                  <ModalView onClick={(e) => e.stopPropagation()}>
                    <ModalExitBtnTwo onClick={closeModalHandler}>X</ModalExitBtnTwo>
                    <div className='desc'>
                      <h1><Air>에어</Air>커버</h1>
                      <ModalFont3>에어커버는 모든 예약에 적용되는 포괄적인 보호 장치입니다.</ModalFont3>
                      <Line />
                      <ModalFont2>예약 지원 보장</ModalFont2>
                      <ModalFont>드물지만 체크인까지 30일 이내로 남은 시점에 호스트가 예약을 취소하는 경우, 에어비앤비에서 기존 숙소와 비슷한 숙소 또는 더 나은 숙소를 찾아드리거나 요금을 환불해 드립니다.</ModalFont>
                      <ModalFont2>체크인 지원 보장</ModalFont2>
                      <ModalFont>숙소에 체크인할 수 없으며 호스트가 문제를 해결할 수 없는 경우, 예약한 기간 동안 머물 수 있도록 기존 숙소와 비슷한 숙소 또는 더 나은 숙소를 찾아드리거나 요금을 환불해 드립니다.</ModalFont>
                      <ModalFont2>숙소 정확도 보장</ModalFont2>
                      <ModalFont>냉장고가 고장 났는데 호스트가 쉽게 고칠 수 없는 경우, 침실 수가 숙소 페이지에 표시된 것보다 적은 경우 등 숙박 중 언제라도 실제 숙소가 숙소 페이지 설명과 다른 것을 알게 될 경우, 문제 발견 시점으로부터 3일 이내에 신고해주세요. 에어비앤비에서 비슷한 숙소 또는 더 나은 숙소를 찾아드리거나 요금을 환불해드립니다.</ModalFont>
                      <ModalFont2>24시간 안전 지원 라인</ModalFont2>
                      <ModalFont>안전하지 않다고 느낄 경우, 24시간 언제든 특별 교육을 받은 안전 전문 상담원의 신속한 지원을 받으실 수 있습니다.</ModalFont>
                      <ModalFont3>에어커버를 통한 예약 보호에 대한 전체 내용은 도움말 센터에서 확인하세요.</ModalFont3>
                    </div>
                  </ModalView>
                 
                </ModalBackground>
              )}
            </div>
            <Line />
            <h3>숙소 편의시설</h3>
            <Icon>
              <FaWifi size={25} style={{ marginRight: '10px' }} />
              <span style={{ marginRight: '20px' }}>무선 와이파이</span>
            </Icon>
            <Icon>
              <FaTv size={25} style={{ marginRight: '10px' }} />
              <span style={{ marginRight: '20px' }}>22인치 TV + 크롬캐스트</span>
            </Icon>
            <Icon>
              <VscGithubAlt size={25} style={{ marginRight: '10px' }} />
              <span style={{ marginRight: '20px' }}>고양이 있음</span>
            </Icon>
            <Icon>
              <SlGhost size={25} style={{ marginRight: '10px' }} />
              <span style={{ marginRight: '20px' }}>유령 없음</span>
            </Icon>
            <Facilities>편의 시설 더 알아보기</Facilities>
            <br />
          </LeftContainer>
          <RightContainer>
            <Reservation_box>
              <div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{fontSize: '20px', fontWeight: 'bold'}}>₩12,345</div>
                /박</div>
                <CkeckinBtn onClick={handleCheckinButtonClick}>
                  {selectedDays.from ? selectedDays.from.toLocaleDateString() : '체크인'}
                </CkeckinBtn>
                <CkeckinBtn onClick={handleCheckoutButtonClick}>
                  {selectedDays.to ? selectedDays.to.toLocaleDateString() : '체크아웃'}
                </CkeckinBtn>
                {showCalendar && (
                  <DayPicker
                    selectedDays={selectedDays}
                    onDayClick={handleDayClick}
                    modifiers={modifiers}
                    numberOfMonths={2}
                    disabledDays={{ before: new Date() }}
                    // dir="rtl" //달력이 왼쪽으로 나오게 하기
                    style={{ position: 'absolute', left: '0', background: 'white' }}
                  />
                )}
              </div>
              <PersonnelBtn>인원</PersonnelBtn>
            </Reservation_box>
          </RightContainer>
        </Big>

      </Backdrop>


    </Entire>
  )
}

export default Detail

const ModalBackground = styled.div`
    // Modal이 떴을 때의 배경을 깔아주는 CSS를 구현
    z-index: 1; //위치지정 요소
    position: absolute;
    display : flex;
    justify-content : center;
    align-items : center;
    background-color: rgba(75, 75, 75, 0.4);
    border-radius: 10px;
    top : 0;
    left : 0;
    right : 0;
    bottom : 0;
`
const NagativeButton = styled.button`
    margin-top: 10px;
    border: none;
    background-color: transparent;
    text-decoration: underline;
    cursor: pointer;
`

const ModalView = styled.div.attrs(() => ({
  // attrs 메소드를 이용해서 아래와 같이 div 엘리먼트에 속성을 추가할 수 있다.
  role: 'dialog',
}))`
  // Modal창 CSS를 구현합니다.
  /* 
  margin: 50px auto;
  z-index: 9999; */
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  border-radius: 20px;
  width: 90%;
  height: 50%;

    >div.desc {
      margin: 50px;
      font-size: 20px;
      color: var(--coz-purple-600);
    }
`;
const ModalExitBtnTwo = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  width: 50px;
  height: 50px;
  border-radius: 50%; // 모서리 곡선값
  text-align: center; // 가로정렬
  line-height: 50px; // 세로정렬
  cursor: pointer;
  font-weight: 600;
`
const ModalFont = styled.div`
  color: #797979;
  font-Size: 17px;
  margin-bottom: 15px;
`
const ModalFont2 = styled.div`
  font-Size: 17px;
  font-weight: 600;
  margin-bottom: 5px;
`
const ModalFont3 = styled.div`
  font-Size: 17px;
  margin-bottom: 5px;
`
const Entire = styled.div`
  /* overflow-y: scroll; */
`
const Backdrop = styled.div`
  position: relative;
  top: 0;
  bottom: 0;
  width: 88.88%;
  height: fit-content;
  max-width: 1120px;
  padding: 0 20px;
  left: 50%;
  transform: translate(-50%, 0);
  /* background-color: #c5cec7; */

  display: flex;
  flex-direction: column;
`
const RoomTitle = styled.div`
  margin-left: 5px;
  margin-right: 10px;
`
const LeftContainer = styled.div`
  /* background-color: #bcd4eb; */
  max-width: 58%;
  margin-left: 20px;
`
const Line = styled.div`
  border-top: 1px solid #b6b6b6;
  margin: 30px 0px; 
`
const Air = styled.span`
  color: red;
`;
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
const Big = styled.div`
  display: flex;
  justify-content: space-between;
`
const RightContainer = styled.div`
  position: relative !important;
  width: 33.33333333333333% !important;
  margin-left: 8.333333333333332% !important;
  margin-right: 0% !important;
`
const Reservation_box = styled.div`
  border: 1px solid rgb(221, 221, 221);
  border-radius: 12px;
  padding: 24px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px;
`
const CkeckinBtn = styled.button`
  border: 1px solid rgb(146, 146, 146);
  border-radius: 8px;
  /* min-height: 10px; */
  width: 50%;
  font-size: medium;
  font-weight: 700;
  margin-top: 20px;
  background-color: transparent;
  padding: auto;
`
const PersonnelBtn = styled.button`
  border: 1px solid rgb(146, 146, 146);
  border-radius: 8px;
  width: 100%;
  font-size: medium;
  font-weight: 700;
  background-color: transparent;
  padding: auto;
`
const Icon = styled.div`
  display: flex;
  align-Items: center; 
  margin-Bottom: 10px;
`
const Facilities = styled.button`
  border: 1px solid rgb(0, 0, 0);
  background: rgba(255, 255, 255, 0);
  border-radius: 12px;
  padding: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
`