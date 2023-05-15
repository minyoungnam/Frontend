import React from "react";
import { styled } from "styled-components";
import { registration } from "../axios/api";
import { VscGithubAlt } from "react-icons/vsc";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faKitchenSet, faWifi } from "@fortawesome/free-solid-svg-icons";
import { TbToolsKitchen2, TbAirConditioning, TbIroning2, TbWashDry1 } from "react-icons/tb";
import { FaWifi, FaTv, FaHotel, FaWarehouse } from 'react-icons/fa'
import { BsHouseFill } from 'react-icons/bs'
import { MdApartment } from 'react-icons/md'
import { CgSmartHomeWashMachine } from 'react-icons/cg'
import { GiHeatHaze } from 'react-icons/gi'

const Hosting = () => {
  return (
    <>
      <Top_Box>
        <div style={{ paddingLeft: '80px' }}>에어비앤비</div>
      </Top_Box>
      <Container>
        <div style={{ marginTop: '20px' }}>계정  호스팅</div>
        <div style={{ fontSize: '30px', fontWeight: '900', }}>호스팅</div>
        <Font1>숙소 이름</Font1>
        <InputWrap>
          <Input
            type="text"
            placeholder='숙소 이름' />
        </InputWrap>
        <Font1>숙소 주소</Font1>
        <InputWrap>
          <Input
            type="text"
            placeholder='숙소 주소' />
        </InputWrap>
        <Font1>숙소 가격</Font1>
        <InputWrap>
          <Input
            type="text"
            placeholder='숙소 가격' />
        </InputWrap>
        <Font1>숙소 인원</Font1>
        <InputWrap>
          <Input
            type="text"
            placeholder='숙소 인원' />
        </InputWrap>
        <Font1>룸 타입</Font1>
        <IconContainer>
          <RoomBtn>
            <BsHouseFill size={25} style={{ marginRight: '10px' }} />
            <Icon>house</Icon>
          </RoomBtn>
          <RoomBtn>
            <MdApartment size={25} style={{ marginRight: '10px' }} />
            <Icon>apart</Icon>
          </RoomBtn>
          <RoomBtn>
            <FaWarehouse size={25} style={{ marginRight: '10px' }} />
            <Icon>condo</Icon>
          </RoomBtn>
          <RoomBtn>
            <FaHotel size={25} style={{ marginRight: '10px' }} />
            <Icon>hotel</Icon>
          </RoomBtn>
        </IconContainer>
        <Font1>편의 시설</Font1>
        <IconContainer>
          <RoomBtn>
            <FaWifi size={25} style={{ marginRight: '10px' }} />
            <Icon>무선 인터넷</Icon>
          </RoomBtn>
          <RoomBtn>
            <TbToolsKitchen2 size={25} style={{ marginRight: '10px' }} />
            <Icon>주방</Icon>
          </RoomBtn>
          <RoomBtn>
            <CgSmartHomeWashMachine size={25} style={{ marginRight: '10px' }} />
            <Icon>세탁기</Icon>
          </RoomBtn>
          <RoomBtn>
            <TbAirConditioning size={25} style={{ marginRight: '10px' }} />
            <Icon>에어컨</Icon>
          </RoomBtn>
          <RoomBtn>
            <GiHeatHaze size={25} style={{ marginRight: '10px' }} />
            <Icon>난방</Icon>
          </RoomBtn>
          <RoomBtn>
            <FaTv size={25} style={{ marginRight: '10px' }} />
            <Icon>TV</Icon>
          </RoomBtn>
          <RoomBtn>
            <TbWashDry1 size={25} style={{ marginRight: '10px' }} />
            <Icon>건조기</Icon>
          </RoomBtn>
          <RoomBtn>
            <TbIroning2 size={25} style={{ marginRight: '10px' }} />
            <Icon>다리미</Icon>
          </RoomBtn>
        </IconContainer>
        {/* <Checkbox>
          <CheckboxInput type="checkbox" id="check1" />
          <CheckboxLabel for="check1"></CheckboxLabel >
          <style jsx>{`
        ${CheckboxInput}:checked + ${CheckboxLabel}::after {
          visibility: visible;
        }
      `}</style>
        </Checkbox> */}
        <Font1>이미지</Font1>
        <button>등록하기</button>
      </Container>
    </>
  )
};

export default Hosting;

const Top_Box = styled.div`
  border: 1px solid rgb(221, 221, 221);
  border-radius: 12px;
  padding: 30px;
`
const Container = styled.div`
  padding-left: auto;
  padding-right: auto;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
`
const Font1 = styled.div`
  margin-top: 20px;
  font-size: 20px;
  font-weight: bolder;
`
const Input = styled.input`
  width: 100%;
  outline: none;
  border: none;
  height: 13px;
  font-size: 14px;
  font-weight: 400;
  &::placeholder {
      color: #a0a0a0
  }
`
const InputWrap = styled.div`
  display: flex;
  border-radius: 8px;
  padding: 16px;
  margin-top: 8px;
  background-color: white;
  border: 1px solid #a0a0a0;
  &:focus-within {
      border: 1px solid #f07665;
  }
`
const CheckboxInput = styled.input`
  display: none;
`;

const CheckboxLabel = styled.label`
  display: block;
  width: 20px;
  height: 20px;
  border: 3px solid #707070;
  position: relative;
  margin-top: 5px;

  &::after {
    content: '✔';
    font-size: 17px;
    width: 20px;
    height: 20px;
    text-align: center;
    position: absolute;
    left: 0;
    top: 0;
    visibility: hidden;
  }
`
const Checkbox = styled.div`
  padding: 10px;
`
const Icon = styled.div`
  margin-right: 20px;
  margin-top: 10px;
  font-size: 18px;
`
const RoomBtn = styled.button`
  /* border-color: transparent;
  box-shadow: 0 0 0 2px #000000;
  background-color: #F7F7F7;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid #DDDDDD;
  cursor: pointer;
  transition: box-shadow 0.2s ease,transform 0.1s ease;
  flex-direction: column;
  align-items: flex-start;
  min-height: 88px;
  display: flex;
  box-sizing: border-box;
  width: 20%;
  height: 100%;
  outline: none; */
  display: flex;
  align-items: center;
  background-color: #ffffff;
  border: 1px solid #dddddd;
  border-radius: 8px;
  padding: 12px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #f1f1f1;
  }

  &:focus {
    outline: none;
  }

  svg {
    color: #ff8d85;
  }
`;

const IconContainer = styled.div`
  /* display: flex;
  gap: 20px;
  margin-top: 10px; */
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 1rem;

  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`