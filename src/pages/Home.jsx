import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AiOutlineHeart } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import StatusModal from "../components/StatusModal";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";

const Home = () => {
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
    // navigate("/");
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

  // ^----- 데이터를 가져오는 함수 ----- //
  // token 가져오기
  const token = Cookies.get("token");

  // Axios instance
  const authApi = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  // http://13.124.209.170:8080/rooms/?categories=방(전체)
  // 방(전체) 가져오는 함수
  const getPostAll = async () => {
    try {
      const response = await authApi.get(`/rooms/`);
      setPostData(response.data.content);
    } catch (error) {
      console.log("✨ ‣ getPostAll ‣ error:", error);
    }
  };

  // 최고의 전망 가져오는 함수
  const getPostChlrh = async () => {
    try {
      const response = await authApi.get(`/rooms/?categories=최고의 전망`);
      setPostData(response.data.content);
    } catch (error) {
      console.log("✨ ‣ getPostChlrh ‣ error:", error);
    }
  };

  // 해변 바로 앞 가져오는 함수
  const getPostGoqus = async () => {
    try {
      const response = await authApi.get(`/rooms/?categories=해변 바로 앞`);
      setPostData(response.data.content);
    } catch (error) {
      console.log("✨ ‣ getPostGoqus ‣ error:", error);
    }
  };

  // 한옥 가져오는 함수
  const getPostGksdhr = async () => {
    try {
      const response = await authApi.get(`/rooms/?categories=한옥`);
      setPostData(response.data.content);
    } catch (error) {
      console.log("✨ ‣ getPostGoqus ‣ error:", error);
    }
  };

  // 한적한 시골 가져오는 함수
  const getPostTlrhf = async () => {
    try {
      const response = await authApi.get(`/rooms/?categories=한적한 시골`);
      setPostData(response.data.content);
    } catch (error) {
      console.log("✨ ‣ getPostGoqus ‣ error:", error);
    }
  };

  // 멋진 수영장 가져오는 함수
  const getPostTndudwkd = async () => {
    try {
      const response = await authApi.get(`/rooms/?categories=멋진 수영장`);
      setPostData(response.data.content);
    } catch (error) {
      console.log("✨ ‣ getPostGoqus ‣ error:", error);
    }
  };

  // 국립 공원 가져오는 함수
  const getPostRhddnjs = async () => {
    try {
      const response = await authApi.get(`/rooms/?categories=국립 공원`);
      setPostData(response.data.content);
    } catch (error) {
      console.log("✨ ‣ getPostGoqus ‣ error:", error);
    }
  };

  // 캐슬 가져오는 함수
  const getPostZotmf = async () => {
    try {
      const response = await authApi.get(`/rooms/?categories=캐슬`);
      setPostData(response.data.content);
    } catch (error) {
      console.log("✨ ‣ getPostGoqus ‣ error:", error);
    }
  };

  // 선택한 카테고리에 따라 데이터를 가져오는 함수
  const fetchDataByCategory = async (category) => {
    setSelectedCategory(category);
    switch (category) {
      case "방(전체)":
        await getPostAll();
        break;
      case "최고의 전망":
        await getPostChlrh();
        break;
      case "해변 바로 앞":
        await getPostGoqus();
        break;
      case "한옥":
        await getPostGksdhr();
        break;
      case "멋진 수영장":
        await getPostTndudwkd();
        break;
      case "국립 공원":
        await getPostRhddnjs();
        break;
      case "캐슬":
        await getPostZotmf();
      default:
        // setPostData([]);
        await getPostAll();
        break;
    }
  };

  useEffect(() => {
    // 초기 렌더링 시 "방(전체)" 카테고리의 데이터를 가져옴
    fetchDataByCategory("방(전체)");
  }, []);

  useEffect(() => {
    // selectedCategory가 변경될 때마다 fetchDataByCategory 함수를 호출하여 데이터 업데이트
    fetchDataByCategory(selectedCategory);
  }, [selectedCategory]);

  return (
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
                    src={process.env.PUBLIC_URL + "/assets/svg/menu-burger.svg"}
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
                    src={process.env.PUBLIC_URL + "/assets/svg/menu-burger.svg"}
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
      {/* ^---------- Header ---------- */}
      <StHeaderBox>
        <StHeader>
          <StNaviIconBox>
            <StNaviIconBtn onClick={() => fetchDataByCategory("방(전체)")}>
              <StNaviIconImg src="https://a0.muscache.com/pictures/7630c83f-96a8-4232-9a10-0398661e2e6f.jpg" />
              <StNaviIconP>방(전체)</StNaviIconP>
            </StNaviIconBtn>
            <StNaviIconBtn onClick={() => fetchDataByCategory("최고의 전망")}>
              <StNaviIconImg src="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg" />
              <StNaviIconP>최고의 전망</StNaviIconP>
            </StNaviIconBtn>
            <StNaviIconBtn onClick={() => fetchDataByCategory("해변 바로 앞")}>
              <StNaviIconImg src="https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg" />
              <StNaviIconP>해변 바로 앞</StNaviIconP>
            </StNaviIconBtn>
            <StNaviIconBtn onClick={() => fetchDataByCategory("한옥")}>
              <StNaviIconImg src="https://a0.muscache.com/pictures/51f5cf64-5821-400c-8033-8a10c7787d69.jpg" />
              <StNaviIconP>한옥</StNaviIconP>
            </StNaviIconBtn>
            <StNaviIconBtn onClick={() => fetchDataByCategory("한적한 시골")}>
              <StNaviIconImg src="https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg" />
              <StNaviIconP>한적한 시골</StNaviIconP>
            </StNaviIconBtn>
            <StNaviIconBtn onClick={() => fetchDataByCategory("멋진 수영장")}>
              <StNaviIconImg src="https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg" />
              <StNaviIconP>멋진 수영장</StNaviIconP>
            </StNaviIconBtn>
            <StNaviIconBtn onClick={() => fetchDataByCategory("국립 공원")}>
              <StNaviIconImg src="https://a0.muscache.com/pictures/c0a24c04-ce1f-490c-833f-987613930eca.jpg" />
              <StNaviIconP>국립 공원</StNaviIconP>
            </StNaviIconBtn>
            <StNaviIconBtn onClick={() => fetchDataByCategory("캐슬")}>
              <StNaviIconImg src="https://a0.muscache.com/pictures/1b6a8b70-a3b6-48b5-88e1-2243d9172c06.jpg" />
              <StNaviIconP>캐슬</StNaviIconP>
            </StNaviIconBtn>
            <StNaviIconBtn>
              <StNaviIconImg src="https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg" />
              <StNaviIconP>기상천외한 숙소</StNaviIconP>
            </StNaviIconBtn>
            <StNaviIconBtn>
              <StNaviIconImg src="https://a0.muscache.com/pictures/827c5623-d182-474a-823c-db3894490896.jpg" />
              <StNaviIconP>료칸</StNaviIconP>
            </StNaviIconBtn>
            <StNaviIconBtn>
              <StNaviIconImg src="https://a0.muscache.com/pictures/ca25c7f3-0d1f-432b-9efa-b9f5dc6d8770.jpg" />
              <StNaviIconP>캠핑장</StNaviIconP>
            </StNaviIconBtn>
            <StNaviIconBtn>
              <StNaviIconImg src="https://a0.muscache.com/pictures/78ba8486-6ba6-4a43-a56d-f556189193da.jpg" />
              <StNaviIconP>저택</StNaviIconP>
            </StNaviIconBtn>
            <StNaviIconBtn>
              <StNaviIconImg src="https://a0.muscache.com/pictures/35919456-df89-4024-ad50-5fcb7a472df9.jpg" />
              <StNaviIconP>초소형 주택</StNaviIconP>
            </StNaviIconBtn>
            <StNaviIconBtn>
              <StNaviIconImg src="https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg" />
              <StNaviIconP>통나무집</StNaviIconP>
            </StNaviIconBtn>
            <StNaviIconBtn>
              <StRightArrowImg
                src={process.env.PUBLIC_URL + "/assets/svg/right-arrow.svg"}
              />
            </StNaviIconBtn>
          </StNaviIconBox>
        </StHeader>
        <StFilterBox>
          {/* ----- 필터 아이콘 버튼 ----- */}
          <StFilterBoxBtn>
            <StFilterImg
              src={process.env.PUBLIC_URL + "/assets/svg/icon-filter.svg"}
              alt="filter icon"
            />
            <StFilterP>필터</StFilterP>
          </StFilterBoxBtn>
        </StFilterBox>
      </StHeaderBox>

      {/* ^---------- Contents ---------- */}
      <StContents>
        {/* ----- CardBox ----- */}
        <StCardBox>
          {selectedCategory && (
            <>
              {postData.map((item) => {
                return (
                  <StCard>
                    <StCardPhoto>
                      <StCardPhotoImg src={`${item.imageUrl[0].imageUrl}`} />
                    </StCardPhoto>
                    <StCardTextBoxBtn>
                      <StCardTextBoxP>{item.region}</StCardTextBoxP>
                      <StCardTextBoxP>호스트: {item.host}</StCardTextBoxP>
                      <StCardPriceBox>
                        {item.price
                          .toString()
                          .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
                        원
                      </StCardPriceBox>
                    </StCardTextBoxBtn>
                  </StCard>
                );
              })}
            </>
          )}
        </StCardBox>
      </StContents>
    </StContainer>
  );
};

export default Home;

// !---------- Navigate Container ---------- //

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

// *----- 카테고리 아이콘 영역----- //
const StNaviIconBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StNaviIconBtn = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: inherit;
  padding-bottom: 5px;
  &:hover {
    border-bottom: 2px double #e51e53;
  }
`;

const StRightArrowImg = styled.img`
  width: 24px;
`;

const StNaviIconImg = styled.img`
  width: 20px;
`;

const StNaviIconP = styled.p`
  color: #525252;
  font-size: 10px;
  font-weight: 600;
`;

// *----- 필터 아이콘 영역----- //

const StFilterBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
`;

const StFilterBoxBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px gray solid;
  border-radius: 10px;
  padding: 10px;
`;

const StFilterImg = styled.img`
  width: 14px;
  padding: 5px;
`;

const StFilterP = styled.p`
  font-size: 10px;
  padding: 5px;
`;

// ^---------- Contents ---------- //

const StContents = styled.div`
  /* background-color: #818181; */
`;

const StCardBox = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
`;

// *----- 나열되는 카드 영역 ----- //
const StCard = styled.div`
  width: 22%;
  padding: 10px;
  margin: 15px;
`;

const StCardPhoto = styled.div`
  width: 100%;
  text-align: center;
  position: relative;
`;

const StAiOutlineHeart = styled(AiOutlineHeart)`
  position: absolute;
  font-size: 30px;
  top: 10px;
  right: 20px;
`;

const StFcLike = styled(FcLike)`
  position: absolute;
  font-size: 30px;
  top: 10px;
  right: 20px;
`;

const StCardPhotoImg = styled.img`
  /* width: 240px; */
  width: 100%;
  border-radius: 10px;
`;

const StCardTextBoxBtn = styled.div``;

const StCardTextBoxP = styled.p`
  font-weight: 600;
  color: #878282;
`;

const StCardPriceBox = styled.div`
  font-weight: 600;
`;
