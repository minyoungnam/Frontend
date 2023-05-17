import React, { useState, useRef } from "react";
import { styled } from "styled-components";
// import { registration } from "../axios/api";
import { TbToolsKitchen2, TbAirConditioning, TbIroning2, TbWashDry1 } from "react-icons/tb";
import { FaWifi, FaTv, FaHotel, FaWarehouse, FaUmbrellaBeach, FaHouseUser, FaSwimmingPool } from 'react-icons/fa'
import { BsHouseFill } from 'react-icons/bs'
import { MdApartment, MdForest, MdCastle, MdHouse, MdHouseSiding } from 'react-icons/md'
import { CgSmartHomeWashMachine } from 'react-icons/cg'
import { GiHeatHaze, GiCampingTent, GiFamilyHouse, GiMushroomHouse, GiTreeSwing } from 'react-icons/gi'
import { RiHotelFill } from 'react-icons/ri'
import { RiAncientGateFill, RiBuilding4Fill } from "react-icons/ri";
import { InboxOutlined } from '@ant-design/icons'
import { Collapse, message, Upload } from 'antd';
import { useMutation } from "react-query";
import axios from "axios";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";


const Hosting = () => {

  const [titleValue, setTitleValue] = useState('')
  const [priceValue, setPriceValue] = useState('')
  const [regionValue, setRegionValue] = useState('')
  const [cityValue, setCityValue] = useState('')
  const [capacityValue, setCapacityValue] = useState('')
  const [expiredDateValue, setExpiredDateValue] = useState('')

  const titleValueHandler = (e) => {
    setTitleValue(e.target.value)
  }
  const priceValueHandler = (e) => {
    setPriceValue(e.target.value)
  }
  const regionValueHandler = (e) => {
    setRegionValue(e.target.value)
  }
  const cityValueHandler = (e) => {
    setCityValue(e.target.value)
  }
  const capacityValueHandler = (e) => {
    setCapacityValue(e.target.value)
  }
  const expiredDateValueHandler = (e) => {
    setExpiredDateValue(e.target.value)
  }



  // 중복선택 가능 버튼
  const [selectedButtons, setSelectedButtons] = useState([])
  // const handleButtonClick = (value) => {
  //   setSelectedButtons((prevButtons) => {
  //     if (prevButtons.includes(value)) {
  //       return prevButtons.filter((btn) => btn !== value);
  //     } else {
  //       return [...prevButtons, value];
  //     }
  //   });
  // };


  // const handleCheckboxChange = (value) => {
  //   if (selectedButtons.includes(value)) {
  //     setSelectedButtons(selectedButtons.filter((btn) => btn !== value));
  //   } else {
  //     setSelectedButtons([...selectedButtons, value]);
  //   }
  // };


  // 룸타입, 카테고리 버튼
  const renderRoomButton = (icon, label) => (
    <RoomBtn type="button"
      onClick={() => handleButtonClick(label)}
      selected={selectedButtons.includes(label)}>
      {icon}
      <Icon selected={selectedButtons.includes(label)}>{label}</Icon>
    </RoomBtn>
  )

  const handleButtonClick = (value) => {
    if (selectedButtons.includes(value)) {
      setSelectedButtons(selectedButtons.filter((btn) => btn !== value))
    } else {
      setSelectedButtons([...selectedButtons, value])
    }
  }

  // 호스팅하기
  const registration = async (data) => {
    try {
      const token = Cookies.get("token");
      console.log(data)
      const formData = new FormData();
      formData.append('title', data.title);
      formData.append('price', Number(data.price));
      formData.append('region', data.region);
      formData.append('city', data.city);
      formData.append('capacity', Number(data.capacity));
      formData.append('roomType', data.roomType);
      formData.append('amenities', data.amenities);
      formData.append('categories', data.categories);
      formData.append('expiredDate', Number(data.expiredDate));
      formData.append('image',data.image);

      // formData.append("title", new Blob([JSON.stringify(data.title)], { type: "application/json" }));
      // formData.append("price", new Blob([JSON.stringify(Number(data.price))], { type: "application/json" }));
      // formData.append("region", new Blob([JSON.stringify(data.region)], { type: "application/json" }));
      // formData.append("city", new Blob([JSON.stringify(data.city)], { type: "application/json" }));
      // formData.append("capacity", new Blob([JSON.stringify(Number(data.capacity))], { type: "application/json" }));
      // formData.append("roomType", new Blob([JSON.stringify(data.roomType)], { type: "application/json" }));
      // formData.append("amenities", new Blob([JSON.stringify(data.amenities)], { type: "application/json" }));
      // formData.append("categories", new Blob([JSON.stringify(data.categories)], { type: "application/json" }));
      // formData.append("expiredDate", new Blob([JSON.stringify(Number(data.expiredDate))], { type: "application/json" }));

      for (let [key, value] of formData.entries()) { console.log(`${key}:`, value); }

      const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/rooms/host`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          // 'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      });
      console.log(response)
      // 성공적인 처리 후의 로직 추가
    } catch (err) {
      alert('에러 발생')
      console.log(err)
      // 에러 처리 로직 추가
    } 
  }
  // const registration = async (data) => {
  //   try {
  //     const token = Cookies.get("token");
  //     const formData = new FormData();
  //     formData.append('title', data.title);
  //     formData.append('price', Number(data.price));
  //     formData.append('region', data.region);
  //     formData.append('city', data.city);
  //     formData.append('capacity', Number(data.capacity));
  //     formData.append('roomType', data.roomType);
  //     formData.append('amenities', data.amenities);
  //     formData.append('categories', data.categories);
  //     formData.append('expiredDate', Number(data.expiredDate));
  
  //     const body = {
  //       title: data.title,
  //       price: Number(data.price),
  //       region: data.region,
  //       city: data.city,
  //       capacity: Number(data.capacity),
  //       roomType: data.roomType,
  //       amenities: data.amenities,
  //       categories: data.categories,
  //       expiredDate: Number(data.expiredDate),
  //     };
  
  //     formData.append('data', JSON.stringify(body));
  
  //     const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/rooms/host`, {
  //       method: 'POST',
  //       body: formData,
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  
  //     if (response.ok) {
  //       const result = await response.json();
  //       console.log(result);
  //       // 성공적인 처리 후의 로직 추가
  //     } else {
  //       // 응답이 오류인 경우
  //       throw new Error('파일 전송 실패');
  //     }
  //   } catch (err) {
  //     alert('에러 발생');
  //     console.log(err);
  //     // 에러 처리 로직 추가
  //   }
  // };

  const onSubmitHandler = async () => {
    try {
      const amenities = [];
      const categories = [];

      if (selectedButtons.includes('방(전체)')) {
        categories.push('방(전체)');
      }
      if (selectedButtons.includes('최고의 전망')) {
        categories.push('최고의 전망');
      }
      if (selectedButtons.includes('해변 바로 앞')) {
        categories.push('해변 바로 앞');
      }
      if (selectedButtons.includes('한옥')) {
        categories.push('한옥');
      }
      if (selectedButtons.includes('한적한 시골')) {
        categories.push('한적한 시골');
      }
      if (selectedButtons.includes('멋진 수영장')) {
        categories.push('멋진 수영장');
      }
      if (selectedButtons.includes('국립공원')) {
        categories.push('국립공원');
      }
      if (selectedButtons.includes('캐슬')) {
        categories.push('캐슬');
      }
      if (selectedButtons.includes('기상천외한 숙소')) {
        categories.push('기상천외한 숙소');
      }
      if (selectedButtons.includes('료칸')) {
        categories.push('료칸');
      }
      if (selectedButtons.includes('캠핑장')) {
        categories.push('캠핑장');
      }
      if (selectedButtons.includes('저택')) {
        categories.push('저택');
      }
      if (selectedButtons.includes('초소형 주택')) {
        categories.push('초소형 주택');
      }
      if (selectedButtons.includes('통나무집')) {
        categories.push('통나무집');
      }
      // -------------------------------------------------
      if (selectedButtons.includes('무선 인터넷')) {
        amenities.push('무선 인터넷');
      }
      if (selectedButtons.includes('주방')) {
        amenities.push('주방');
      }
      if (selectedButtons.includes('세탁기')) {
        amenities.push('세탁기');
      }
      if (selectedButtons.includes('에어컨')) {
        amenities.push('에어컨');
      }
      if (selectedButtons.includes('난방')) {
        amenities.push('난방');
      }
      if (selectedButtons.includes('TV')) {
        amenities.push('TV');
      }
      if (selectedButtons.includes('건조기')) {
        amenities.push('건조기');
      }
      if (selectedButtons.includes('다리미')) {
        amenities.push('다리미');
      }
      if (selectedButtons.includes('침실에 딸린 개인 욕실')) {
        amenities.push('침실에 딸린 개인 욕실');
      }
      if (selectedButtons.includes('업무 전용 공간')) {
        amenities.push('업무 전용 공간');
      }
      const data = {
        title: titleValue,
        price: priceValue,
        region: regionValue,
        city: cityValue,
        capacity: capacityValue,
        roomType: selectedButtons.includes('house') ? 'house' :
          selectedButtons.includes('apart') ? 'apart' :
            selectedButtons.includes('condo') ? 'condo' :
              selectedButtons.includes('hotel') ? 'hotel' : '',
        categories: categories,
        amenities: amenities,
        expiredDate: expiredDateValue,
        image: fileImage
      };
      await registration(data);
      console.log(data)
    } catch (error) {
      // 에러 처리 로직 추가
    }
  }
  // const { Dragger } = Upload;
  // const props = {
  //   name: 'file',
  //   multiple: true,
  //   action: 'http://13.124.209.170:8080/rooms/host', // ?
  //   accept: '.jpg, .jpeg, .png',
  //   onChange(info) {
  //     const { status } = info.file;
  //     if (status !== 'uploading') {
  //       console.log(info.file, info.fileList);
  //     }
  //     if (status === 'done') {
  //       message.success(`${info.file.name} file uploaded successfully.`);
  //     } else if (status === 'error') {
  //       message.error(`${info.file.name} file upload failed.`);
  //     }
  //   },
  //   onDrop(e) {
  //     console.log('Dropped files', e.dataTransfer.files);
  //   },
  // };

  //파일 미리볼 url을 저장해줄 state
  const [fileImage, setFileImage] = useState("");
  // console.log(fileImage)
  // 파일 저장
  const saveFileImage = async (e) => {
    try {
      const file = e.target.files[0];
      setFileImage(URL.createObjectURL(file));
      // setFileImage(file)

      
      const formData = new FormData();
      formData.append("image", file);
  
      const response = await axios.post("http://13.124.209.170:8080/rooms/host", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
  
      // 성공적인 처리 후의 로직 추가
      console.log(response);
    } catch (error) {
      // 에러 처리 로직 추가
      console.error(error);
    }
  };
  

  // 파일 삭제
  const deleteFileImage = () => {
    URL.revokeObjectURL(fileImage);
    setFileImage("");
  };

  return (
    <>
      <Top_Box>
        <div style={{ paddingLeft: '80px' }}>비앤비</div>
      </Top_Box>
      <Container>
        <div style={{ marginTop: '20px' }}>계정  호스팅</div>
        <div style={{ fontSize: '30px', fontWeight: '900', }}>호스팅</div>
      </Container>
      <form onSubmit={(e) => {
        e.preventDefault(e)
        onSubmitHandler()
      }}>
        <Container>
          <Font1>숙소 이름</Font1>
          <InputWrap>
            <Input
              type="text"
              placeholder='숙소 이름'
              value={titleValue}
              onChange={titleValueHandler} />
          </InputWrap>
          <Font1>나라</Font1>
          <InputWrap>
            <Input
              type="text"
              placeholder='나라'
              value={regionValue}
              onChange={regionValueHandler} />
          </InputWrap>
          <Font1>도시</Font1>
          <InputWrap>
            <Input
              type="text"
              placeholder='도시'
              value={cityValue}
              onChange={cityValueHandler} />
          </InputWrap>
          <Font1>숙소 가격</Font1>
          <InputWrap>
            <Input
              type="text"
              placeholder='숙소 가격'
              value={priceValue}
              onChange={priceValueHandler} />
          </InputWrap>
          <Font1>숙소 인원</Font1>
          <InputWrap>
            <Input
              type="text"
              placeholder='숙소 인원'
              value={capacityValue}
              onChange={capacityValueHandler} />
          </InputWrap><Font1>호스팅 기간</Font1>
          <InputWrap>
            <Input
              type="text"
              placeholder='0 or 1 or 2 or 3 or 4'
              value={expiredDateValue}
              onChange={expiredDateValueHandler} />
          </InputWrap>
          <Font1>룸 타입(택 1)</Font1>
          <IconContainer>
            {/* <div>
              {checkboxOptions.map((option) => (
                <label key={option.value}>
                  <input
                    type="checkbox"
                    value={option.value}
                    checked={selectedButtons.includes(option.value)}
                    onChange={() => handleCheckboxChange(option.value)}
                  />
                  {option.label}
                </label>
              ))}
            </div> */}
            {renderRoomButton(<BsHouseFill size={25} style={{ marginRight: '10px' }} />, 'house')}
            {renderRoomButton(<MdApartment size={25} style={{ marginRight: '10px' }} />, 'apart')}
            {renderRoomButton(<FaWarehouse size={25} style={{ marginRight: '10px' }} />, 'condo')}
            {renderRoomButton(<FaHotel size={25} style={{ marginRight: '10px' }} />, 'hotel')}
          </IconContainer>
          <Font1>카테고리</Font1>
          <IconContainer>
            {renderRoomButton(<FaHouseUser size={25} style={{ marginRight: '10px' }} />, '방(전체)')}
            {renderRoomButton(<RiBuilding4Fill size={25} style={{ marginRight: '10px' }} />, '최고의 전망')}
            {renderRoomButton(<FaUmbrellaBeach size={25} style={{ marginRight: '10px' }} />, '해변 바로 앞')}
            {renderRoomButton(<RiAncientGateFill size={25} style={{ marginRight: '10px' }} />, '한옥')}
            {renderRoomButton(<GiTreeSwing size={25} style={{ marginRight: '10px' }} />, '한적한 시골')}
            {renderRoomButton(<FaSwimmingPool size={25} style={{ marginRight: '10px' }} />, '멋진 수영장')}
            {renderRoomButton(<MdForest size={25} style={{ marginRight: '10px' }} />, '국립공원')}
            {renderRoomButton(<MdCastle size={25} style={{ marginRight: '10px' }} />, '캐슬')}
            {renderRoomButton(<GiMushroomHouse size={25} style={{ marginRight: '10px' }} />, '기상천외한 숙소')}
            {renderRoomButton(<RiHotelFill size={25} style={{ marginRight: '10px' }} />, '료칸')}
            {renderRoomButton(<GiCampingTent size={25} style={{ marginRight: '10px' }} />, '캠핑장')}
            {renderRoomButton(<GiFamilyHouse size={25} style={{ marginRight: '10px' }} />, '저택')}
            {renderRoomButton(<MdHouse size={25} style={{ marginRight: '10px' }} />, '초소형 주택')}
            {renderRoomButton(<MdHouseSiding size={25} style={{ marginRight: '10px' }} />, '통나무집')}
          </IconContainer>
          <Font1>편의 시설</Font1>
          <IconContainer>
            {renderRoomButton(<FaWifi size={25} style={{ marginRight: '10px' }} />, '무선 인터넷')}
            {renderRoomButton(<TbToolsKitchen2 size={25} style={{ marginRight: '10px' }} />, '주방')}
            {renderRoomButton(<CgSmartHomeWashMachine size={25} style={{ marginRight: '10px' }} />, '세탁기')}
            {renderRoomButton(<TbAirConditioning size={25} style={{ marginRight: '10px' }} />, '에어컨')}
            {renderRoomButton(<GiHeatHaze size={25} style={{ marginRight: '10px' }} />, '난방')}
            {renderRoomButton(<FaTv size={25} style={{ marginRight: '10px' }} />, 'TV')}
            {renderRoomButton(<TbWashDry1 size={25} style={{ marginRight: '10px' }} />, '건조기')}
            {renderRoomButton(<TbIroning2 size={25} style={{ marginRight: '10px' }} />, '다리미')}
            {renderRoomButton(<TbIroning2 size={25} style={{ marginRight: '10px' }} />, '침실에 딸린 개인 욕실')}
            {renderRoomButton(<TbIroning2 size={25} style={{ marginRight: '10px' }} />, '업무 전용 공간')}
          </IconContainer>

          <Font1>이미지</Font1>
          <div>
                {fileImage && (
                  <img
                    alt="sample"
                    src={fileImage}
                    style={{ margin: "auto" }}
                  />
                )}
                <div
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <input
                    name="imgUpload"
                    type="file"
                    accept="image/*"
                    onChange={saveFileImage}
                  />

                  <button
                    type="button"
                    style={{
                      backgroundColor: "gray",
                      color: "white",
                      width: "55px",
                      height: "40px",
                      cursor: "pointer",
                    }}
                    onClick={() => deleteFileImage()}
                  >
                    삭제
                  </button>
                </div>
                </div>
          {/* <Dragger {...props} style={{ marginTop: '10px' }}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">Click or drag file to this area to upload</p>
          <p className="ant-upload-hint">
            Support for a single or bulk upload. Strictly prohibited from uploading company data or other
            banned files.
          </p>
        </Dragger> */}
          <button type="submit" >등록하기</button>
        </Container>
      </form>
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
  margin-bottom: 50px;
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
// const CheckboxInput = styled.input`
//   display: none;
// `;

// const CheckboxLabel = styled.label`
//   display: block;
//   width: 20px;
//   height: 20px;
//   border: 3px solid #707070;
//   position: relative;
//   margin-top: 5px;

//   &::after {
//     content: '✔';
//     font-size: 17px;
//     width: 20px;
//     height: 20px;
//     text-align: center;
//     position: absolute;
//     left: 0;
//     top: 0;
//     visibility: hidden;
//   }
// `
// const Checkbox = styled.div`
//   padding: 10px;
// `
const Icon = styled.div`
  color: ${props => (props.selected ? '#ff7676' : 'black')};
  margin-right: 20px;
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
  border: ${props => (props.selected ? '1px solid #f89c9c' : '1px solid #dddddd')};
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