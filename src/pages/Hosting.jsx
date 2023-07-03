import React, { useState, useRef } from "react";
import { styled } from "styled-components";
import {
  TbToolsKitchen2,
  TbAirConditioning,
  TbIroning2,
  TbWashDry1,
} from "react-icons/tb";
import {
  FaWifi,
  FaTv,
  FaHotel,
  FaWarehouse,
  FaUmbrellaBeach,
  FaHouseUser,
  FaSwimmingPool,
} from "react-icons/fa";
import { BsHouseFill } from "react-icons/bs";
import {
  MdApartment,
  MdForest,
  MdCastle,
  MdHouse,
  MdHouseSiding,
} from "react-icons/md";
import { CgSmartHomeWashMachine } from "react-icons/cg";
import {
  GiHeatHaze,
  GiCampingTent,
  GiFamilyHouse,
  GiMushroomHouse,
  GiTreeSwing,
} from "react-icons/gi";
import { RiHotelFill } from "react-icons/ri";
import { RiAncientGateFill, RiBuilding4Fill } from "react-icons/ri";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import StatusModal from "../components/StatusModal";

const Hosting = () => {
  const [titleValue, setTitleValue] = useState("");
  const [priceValue, setPriceValue] = useState("");
  const [regionValue, setRegionValue] = useState("");
  const [cityValue, setCityValue] = useState("");
  const [capacityValue, setCapacityValue] = useState("");
  const [expiredDateValue, setExpiredDateValue] = useState("");

  const titleValueHandler = (e) => {
    setTitleValue(e.target.value);
  };
  const priceValueHandler = (e) => {
    setPriceValue(e.target.value);
  };
  const regionValueHandler = (e) => {
    setRegionValue(e.target.value);
  };
  const cityValueHandler = (e) => {
    setCityValue(e.target.value);
  };
  const capacityValueHandler = (e) => {
    setCapacityValue(e.target.value);
  };
  const expiredDateValueHandler = (e) => {
    setExpiredDateValue(e.target.value);
  };

  // ^----- useState 선언 ----- //
  // 선택된 카테고리를 저장하는 상태
  const [selectedCategory, setSelectedCategory] = useState("방(전체)");

  // 서버에서 받아온 데이터를 저장하는 상태
  const [postData, setPostData] = useState([]);

  // 로그인 상태를 위한 useState 선언
  const [isLoggedIn, setIsLoggedIn] = useState(!!Cookies.get("token"));

  // 모달을 위한 useState 선언
  const [isStatusModalOpen, setIsStatusModalOpen] = useState(false);
  const navigate = useNavigate();
  // ^----- 모달 창에 관한 함수 ----- //
  /**
   * 모달 창을 여는 함수 입니다.
   */
  const openStatusModal = () => {
    setIsStatusModalOpen(true);
  };

  /**
   * 모달창을 닫는 함수 입니다.
   */
  const closeStatusModal = () => {
    setIsStatusModalOpen(false);
  };

  /**
   * 모달 창에서 로그인 버튼을 눌렀을 때 로그인 화면으로 넘어갑니다.
   */
  const handleLoginClick = () => {
    closeStatusModal();
    navigate("/login");
  };

  /**
   * 모달 창에서 회원가입 버튼을 눌렀을 때 회원가입 화면으로 넘어갑니다.
   */
  const handleSignupClick = () => {
    closeStatusModal();
    navigate("/signup");
  };

  /**
   * 모달 창에서 숙소 호스팅 하기를 눌렀을 때 숙소 호스팅 페이지로 넘어갑니다.
   */
  const handleHostingClick = () => {
    closeStatusModal();
    // hosting 페이지 추가
    navigate("/hosting");
  };

  // ^----- 로그아웃 함수 ----- //
  /**
   * 실행시 로그아웃이 되는 함수 입니다. 쿠키에서 token값을 삭제합니다.
   */
  const handleLogOut = () => {
    Cookies.remove("token");
    setIsLoggedIn(false);
    navigate("/");
  };

  // 중복선택 가능 버튼
  const [selectedButtons, setSelectedButtons] = useState([]);

  // 룸타입, 카테고리 버튼
  const renderRoomButton = (icon, label) => (
    <RoomBtn
      type="button"
      onClick={() => handleButtonClick(label)}
      selected={selectedButtons.includes(label)}
    >
      {icon}
      <Icon selected={selectedButtons.includes(label)}>{label}</Icon>
    </RoomBtn>
  );

  const handleButtonClick = (value) => {
    if (selectedButtons.includes(value)) {
      setSelectedButtons(selectedButtons.filter((btn) => btn !== value));
    } else {
      setSelectedButtons([...selectedButtons, value]);
    }
  };

  // 호스팅하기
  const registration = async (data) => {
    try {
      const token = Cookies.get("token");
      console.log(data);

      const formData = new FormData();

      formData.append("image", data.image);

      const content = {
        title: data.title,
        price: Number(data.price),
        region: data.region,
        city: data.city,
        capacity: Number(data.capacity),
        roomType: data.roomType,
        amenities: data.amenities,
        categories: data.categories,
        expiredDate: Number(data.expiredDate),
      };

      const blob = new Blob([JSON.stringify(content)], {
        // type에 JSON 타입 지정
        type: "application/json",
      });

      formData.append("content", blob);

      // 블로그에 정리할 것,,,
      // formData.append('title', data.title);
      // formData.append('price', Number(data.price));
      // formData.append('region', data.region);
      // formData.append('city', data.city);
      // formData.append('capacity', Number(data.capacity));
      // formData.append('roomType', data.roomType);
      // formData.append('amenities', data.amenities);
      // formData.append('categories', data.categories);
      // formData.append('expiredDate', Number(data.expiredDate));
      // formData.append('image',data.image);

      // for (let [key, value] of formData.entries()) { console.log(`${key}:`, value); }

      // const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/rooms/host`, formData, {
      //   headers: {
      //     'Content-Type': 'multipart/form-data',
      //     // 'Content-Type': 'application/json',
      //     Authorization: `Bearer ${token}`
      //   }
      // });
      // console.log(response)
      // // 성공적인 처리 후의 로직 추가

      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/rooms/host`,
        formData,
        config
      );
      console.log(response);
      const alertMessage = `숙소명 : '${data.title}', 가격: '${data.price}, 나라 : '${data.region}', 도시: '${data.city},
      인원 : '${data.capacity}', 룸 타입: '${data.roomType}, 편의시설 : '${data.amenities}', 
      카테고리: '${data.categories}, 호스팅 기간 : ${data.expiredDate}'`;
      alert(alertMessage);
      alert("등록완료!");
      navigate("/");
    } catch (err) {
      alert("빈칸을 채워주세요");
      console.log(err);
      // 에러 처리 로직 추가
    }
  };

  const onSubmitHandler = async () => {
    try {
      const categoryValues = [
        "방(전체)",
        "최고의 전망",
        "해변 바로 앞",
        "한옥",
        "한적한 시골",
        "멋진 수영장",
        "국립공원",
        "캐슬",
        "기상천외한 숙소",
        "료칸",
        "캠핑장",
        "저택",
        "초소형 주택",
        "통나무집",
      ];
      const amenityValues = [
        "무선 인터넷",
        "주방",
        "세탁기",
        "에어컨",
        "난방",
        "TV",
        "건조기",
        "다리미",
        "침실에 딸린 개인 욕실",
        "업무 전용 공간",
      ];

      const categories = getSelectedValues(categoryValues, selectedButtons);
      const amenities = getSelectedValues(amenityValues, selectedButtons);

      const roomTypeValues = ["house", "apart", "condo", "hotel"];
      const roomType =
        roomTypeValues.find((value) => selectedButtons.includes(value)) || "";

      const data = {
        title: titleValue,
        price: priceValue,
        region: regionValue,
        city: cityValue,
        capacity: capacityValue,
        roomType: roomType,
        categories: categories,
        amenities: amenities,
        expiredDate: expiredDateValue,
        image: fileImage,
      };
      await registration(data);
      // console.log(data)
    } catch (error) {
      // 에러 처리 로직 추가
    }
  };

  //파일 미리볼 url을 저장해줄 state
  const [fileImage, setFileImage] = useState("");
  // console.log(fileImage)
  // 파일 저장
  const saveFileImage = async (e) => {
    e.preventDefault(e);
    try {
      const file = e.target.files[0];
      // setFileImage(URL.createObjectURL(file));
      setFileImage(file);

      const formData = new FormData();
      formData.append("image", file);

      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/rooms/host`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

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
      <StContainer>
        {/* ^---------- Navigate ---------- */}
        <StNavigate>
          <StLogoBar>
            <StLogoBarImg
              src={process.env.PUBLIC_URL + "/assets/svg/Airbnb_Logo.svg"}
              alt="Airbnb Logo"
            />
          </StLogoBar>
          <StSearchBar>
            <StSearchBarBtnBox>
              <StSearchBarBtn type="button">
                <div>어디든지</div>
              </StSearchBarBtn>
              <div>|</div>
              <StSearchBarBtn type="button">
                <div>언제든 일주일</div>
              </StSearchBarBtn>
              <div>|</div>
              <StSearchBarBtn>
                <div>게스트 추가</div>
              </StSearchBarBtn>
              <StSearchBarBtn>
                <StSearchIcon
                  src={
                    process.env.PUBLIC_URL + "/assets/svg/search-icon-white.svg"
                  }
                  alt="Search Icon"
                />
              </StSearchBarBtn>
            </StSearchBarBtnBox>
          </StSearchBar>
          <StLoginBar>
            <StSearchText>당신의 공간을 에어빈앤비하세요</StSearchText>
            <StLoginArea>
              {/* ----- Login Icon Button ----- */}
              {isLoggedIn ? (
                <>
                  <StLoginBtn onClick={openStatusModal}>
                    <StLoginHImg
                      src={
                        process.env.PUBLIC_URL + "/assets/svg/menu-burger.svg"
                      }
                      alt="menu-burger"
                    />
                    <StLoginUImg
                      src={process.env.PUBLIC_URL + "/assets/svg/tube.png"}
                      alt="menu-burger"
                      style={{
                        width: "36px",
                        padding: "0px",
                        backgroundColor: "inherit",
                      }}
                    />
                  </StLoginBtn>
                  <StStatusModal
                    isOpen={isStatusModalOpen}
                    closeModal={closeStatusModal}
                  >
                    <StStatusModalBtn onClick={handleHostingClick}>
                      <StStatusModalPL>숙소 호스팅 하기</StStatusModalPL>
                    </StStatusModalBtn>
                    <StStatusModalBtn onClick={handleLogOut}>
                      <StStatusModalP>로그 아웃</StStatusModalP>
                    </StStatusModalBtn>
                  </StStatusModal>
                </>
              ) : (
                <>
                  <StLoginBtn onClick={openStatusModal}>
                    <StLoginHImg
                      src={
                        process.env.PUBLIC_URL + "/assets/svg/menu-burger.svg"
                      }
                      alt="menu-burger"
                    />
                    <StLoginUImg
                      src={process.env.PUBLIC_URL + "/assets/svg/icon-user.svg"}
                      alt="menu-burger"
                    />
                  </StLoginBtn>
                  <StStatusModal
                    isOpen={isStatusModalOpen}
                    closeModal={closeStatusModal}
                  >
                    <StStatusModalBtn onClick={handleLoginClick}>
                      <StStatusModalPL>로그인</StStatusModalPL>
                    </StStatusModalBtn>
                    <StStatusModalBtn onClick={handleSignupClick}>
                      <StStatusModalP>회원가입</StStatusModalP>
                    </StStatusModalBtn>
                  </StStatusModal>
                </>
              )}
            </StLoginArea>
          </StLoginBar>
        </StNavigate>

        <StHorizontalLine></StHorizontalLine>
        <Container>
          <div
            style={{ fontSize: "30px", fontWeight: "900", marginTop: "20px" }}
          >
            호스팅
          </div>
        </Container>
        <form
          onSubmit={(e) => {
            e.preventDefault(e);
            onSubmitHandler();
          }}
        >
          <Container>
            <Font1>숙소 이름</Font1>
            <InputWrap>
              <Input
                type="text"
                placeholder="숙소 이름"
                value={titleValue}
                onChange={titleValueHandler}
              />
            </InputWrap>
            <Font1>나라</Font1>
            <InputWrap>
              <Input
                type="text"
                placeholder="나라"
                value={regionValue}
                onChange={regionValueHandler}
              />
            </InputWrap>
            <Font1>도시</Font1>
            <InputWrap>
              <Input
                type="text"
                placeholder="도시"
                value={cityValue}
                onChange={cityValueHandler}
              />
            </InputWrap>
            <Font1>숙소 가격</Font1>
            <InputWrap>
              <Input
                type="text"
                placeholder="숙소 가격"
                value={priceValue}
                onChange={priceValueHandler}
              />
            </InputWrap>
            <Font1>숙소 인원</Font1>
            <InputWrap>
              <Input
                type="text"
                placeholder="숙소 인원"
                value={capacityValue}
                onChange={capacityValueHandler}
              />
            </InputWrap>
            <Font1>호스팅 기간(숫자 입력)</Font1>
            <Period>
              0 : 향후 모든 날짜
              <br />
              1 : 12개월 후<br />
              2 : 9개월 후<br />
              3 : 6개월 후<br />
              4 : 3개월 후<br />
            </Period>
            <InputWrap>
              <Input
                type="text"
                placeholder="0 or 1 or 2 or 3 or 4"
                value={expiredDateValue}
                onChange={expiredDateValueHandler}
              />
            </InputWrap>
            <Font1>룸 타입(택 1)</Font1>
            <IconContainer>
              {renderRoomButton(
                <BsHouseFill size={25} style={{ marginRight: "10px" }} />,
                "house"
              )}
              {renderRoomButton(
                <MdApartment size={25} style={{ marginRight: "10px" }} />,
                "apart"
              )}
              {renderRoomButton(
                <FaWarehouse size={25} style={{ marginRight: "10px" }} />,
                "condo"
              )}
              {renderRoomButton(
                <FaHotel size={25} style={{ marginRight: "10px" }} />,
                "hotel"
              )}
            </IconContainer>
            <Font1>카테고리</Font1>
            <IconContainer>
              {renderRoomButton(
                <FaHouseUser size={25} style={{ marginRight: "10px" }} />,
                "방(전체)"
              )}
              {renderRoomButton(
                <RiBuilding4Fill size={25} style={{ marginRight: "10px" }} />,
                "최고의 전망"
              )}
              {renderRoomButton(
                <FaUmbrellaBeach size={25} style={{ marginRight: "10px" }} />,
                "해변 바로 앞"
              )}
              {renderRoomButton(
                <RiAncientGateFill size={25} style={{ marginRight: "10px" }} />,
                "한옥"
              )}
              {renderRoomButton(
                <GiTreeSwing size={25} style={{ marginRight: "10px" }} />,
                "한적한 시골"
              )}
              {renderRoomButton(
                <FaSwimmingPool size={25} style={{ marginRight: "10px" }} />,
                "멋진 수영장"
              )}
              {renderRoomButton(
                <MdForest size={25} style={{ marginRight: "10px" }} />,
                "국립공원"
              )}
              {renderRoomButton(
                <MdCastle size={25} style={{ marginRight: "10px" }} />,
                "캐슬"
              )}
              {renderRoomButton(
                <GiMushroomHouse size={25} style={{ marginRight: "10px" }} />,
                "기상천외한 숙소"
              )}
              {renderRoomButton(
                <RiHotelFill size={25} style={{ marginRight: "10px" }} />,
                "료칸"
              )}
              {renderRoomButton(
                <GiCampingTent size={25} style={{ marginRight: "10px" }} />,
                "캠핑장"
              )}
              {renderRoomButton(
                <GiFamilyHouse size={25} style={{ marginRight: "10px" }} />,
                "저택"
              )}
              {renderRoomButton(
                <MdHouse size={25} style={{ marginRight: "10px" }} />,
                "초소형 주택"
              )}
              {renderRoomButton(
                <MdHouseSiding size={25} style={{ marginRight: "10px" }} />,
                "통나무집"
              )}
            </IconContainer>
            <Font1>편의 시설</Font1>
            <IconContainer>
              {renderRoomButton(
                <FaWifi size={25} style={{ marginRight: "10px" }} />,
                "무선 인터넷"
              )}
              {renderRoomButton(
                <TbToolsKitchen2 size={25} style={{ marginRight: "10px" }} />,
                "주방"
              )}
              {renderRoomButton(
                <CgSmartHomeWashMachine
                  size={25}
                  style={{ marginRight: "10px" }}
                />,
                "세탁기"
              )}
              {renderRoomButton(
                <TbAirConditioning size={25} style={{ marginRight: "10px" }} />,
                "에어컨"
              )}
              {renderRoomButton(
                <GiHeatHaze size={25} style={{ marginRight: "10px" }} />,
                "난방"
              )}
              {renderRoomButton(
                <FaTv size={25} style={{ marginRight: "10px" }} />,
                "TV"
              )}
              {renderRoomButton(
                <TbWashDry1 size={25} style={{ marginRight: "10px" }} />,
                "건조기"
              )}
              {renderRoomButton(
                <TbIroning2 size={25} style={{ marginRight: "10px" }} />,
                "다리미"
              )}
              {renderRoomButton(
                <TbIroning2 size={25} style={{ marginRight: "10px" }} />,
                "침실에 딸린 개인 욕실"
              )}
              {renderRoomButton(
                <TbIroning2 size={25} style={{ marginRight: "10px" }} />,
                "업무 전용 공간"
              )}
            </IconContainer>

            <Font1>이미지</Font1>
            <div>
              {fileImage && (
                <img alt="sample" src={fileImage} style={{ margin: "auto" }} />
              )}
              <div
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* <CustomFileButton htmlFor="imgUpload">
                  파일 선택
                </CustomFileButton> */}
                <input
                  name="imgUpload"
                  type="file"
                  accept="image/*"
                  onChange={saveFileImage}
                  style={{
                    display: "inline-block",
                    backgroundcolor: "#ccc",
                    color: "#fff",
                    padding: "8px 16px",
                    borderradius: "4px",
                    cursor: "pointer",
                  }}
                />

                <PublicBtn type="button" onClick={() => deleteFileImage()}>
                  삭제
                </PublicBtn>
              </div>
            </div>
            <ContainerBtn>
              <PublicBtn1 type="submit">등록하기</PublicBtn1>
            </ContainerBtn>
          </Container>
        </form>
      </StContainer>
    </>
  );
};

export default Hosting;

const Top_Box = styled.div`
  border: 1px solid rgb(221, 221, 221);
  border-radius: 12px;
  padding: 30px;
`;
const Container = styled.div`
  padding-left: auto;
  padding-right: auto;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;
`;
const Font1 = styled.div`
  margin-top: 20px;
  font-size: 20px;
  font-weight: bolder;
`;
const Input = styled.input`
  width: 100%;
  outline: none;
  border: none;
  height: 13px;
  font-size: 14px;
  font-weight: 400;
  &::placeholder {
    color: #a0a0a0;
  }
`;
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
`;
const Icon = styled.div`
  color: ${(props) => (props.selected ? "#ff7676" : "black")};
  margin-right: 20px;
  font-size: 18px;
`;
const RoomBtn = styled.button`
  display: flex;
  align-items: center;
  background-color: #ffffff;
  border: ${(props) =>
    props.selected ? "1px solid #f89c9c" : "1px solid #dddddd"};
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
`;
const PublicBtn = styled.button`
  display: flex;
  align-items: center;
  background-color: #ffffff;
  border: 1px solid #888888;
  border-radius: 8px;
  padding: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  margin-top: 10px;
`;
const PublicBtn1 = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f89c9c;
  border: 1px solid #f89c9c;
  border-radius: 8px;
  padding: 14px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  margin-top: 10px;
  width: 30%;
  font-weight: 700;
  font-size: larger;
  color: white;
`;
const ContainerBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* height: 100vh; 화면 전체 높이를 기준으로 가운데 정렬하려면 사용합니다 */
`;
const Period = styled.div`
  margin: 10px;
`;
const StContainer = styled.div`
  /* background-color: gray; */
  width: 100%;
`;

const StHorizontalLine = styled.div`
  width: 100%;
  height: 1.5px;
  background-color: #e1e1e1;
`;

// ^---------- Navigate ---------- //

const StNavigate = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 60px;
  margin: auto;
`;

// *----- Logo Bar ----- //
const StLogoBar = styled.div``;

const StLogoBarImg = styled.img`
  width: 7rem;
  height: 5rem;
`;

// *----- Search Bar ----- //
const StSearchBar = styled.div``;

const StSearchBarBtnBox = styled.div`
  display: flex;
  border: 1px gray solid;
  padding: 3px;
  border-radius: 25px;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
`;

const StSearchBarBtn = styled.button`
  background-color: inherit;
  border: none;
  margin: 5px 15px;
  font-weight: 600;
`;

const StSearchIcon = styled.img`
  display: block;
  height: 20px;
  width: 20px;
  background-color: #e51e53;
  padding: 6px;
  border-radius: 25px;
`;

// *----- Search LoginBar ----- //
const StLoginBar = styled.div`
  display: flex;
`;

// -- Search Text -- //
const StSearchText = styled.div`
  font-weight: 600;
  display: flex;
  align-items: center;
`;

// -- Login Area -- //
const StLoginArea = styled.div`
  margin-left: 30px;
`;

// login Btn //
const StLoginBtn = styled.button`
  background-color: inherit;
  border: 1px gray solid;
  border-radius: 25px;
  padding: 7px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  position: relative;
`;

// 모달창
const StStatusModal = styled(StatusModal)``;

// 모달창 버튼
const StStatusModalBtn = styled.button`
  background-color: inherit;
  padding: 7px;
  border: none;
  border-radius: 5px;

  &:hover {
    background-color: #dbdbdb;
  }
`;

// 모달창 회원가입 글씨
const StStatusModalP = styled.p``;

// 모달창 로그인 글씨
const StStatusModalPL = styled.p`
  font-weight: 600;
`;

// StLogin burger Img //
const StLoginHImg = styled.img`
  width: 16px;
  padding: 0 7px;
`;

// StLogin User Img //
const StLoginUImg = styled.img`
  width: 16px;
  padding: 7px;
  border-radius: 50px;
  background-color: #525252;
`;

// ^---------- Header ---------- //
const StHeaderBox = styled.div`
  display: grid;
  grid-template-columns: 9fr 1fr;
  width: 100%;
  margin: 0 24px;
`;

const StHeader = styled.div`
  padding: 24px 0;
`;
const CustomFileButton = styled.label`
  display: inline-block;
  background-color: #ccc;
  color: #fff;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
`;
const FileInput = styled.input`
  display: none; /* 기본 파일 선택 버튼을 숨김 */
`;
