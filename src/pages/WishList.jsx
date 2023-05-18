import React from "react";
import { styled } from "styled-components";
import axios from "axios";
import { useQuery } from "react-query";

const WishList = () => {

  // const get_My_WishList = async () => {
  //   const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/wishlists`)
  //   console.log(response)
  //   return response.data
  // }
  // const { isError: isErrorWishList, isLoading: isLoadingWishList, data: WishListData } = useQuery("get_My_WishList", get_My_WishList)


  return (
    <>
      <Top_Box>
        <div style={{ paddingLeft: '80px' }}>에어비앤비</div>
      </Top_Box>
      <W_L_Box>
        <h1 style={{ paddingLeft: '80px' }}>위시리스트</h1>
      </W_L_Box>
      <Container>
        <Image_save></Image_save>
      </Container>
      <Title>설정한 타이틀</Title>
    </>
  )
};

export default WishList;

const Top_Box = styled.div`
  border: 1px solid rgb(221, 221, 221);
  border-radius: 12px;
  padding: 30px;
`
const W_L_Box = styled.div`
  padding-left: 24px;
  padding-right: 24px;
  margin-top: 36px;
  margin-bottom: 24px;
`
const Image_save = styled.div`
  /* border-radius: 12px;
  background: transparent;
  border: none; */
  width: 300px;
  height: 300px;
  background-color: #ccc; /* 이미지가 없을 때 보일 색상 */
  /* background-image: url('이미지파일.jpg'); */
  background-size: cover;
  background-position: center;
  border-radius: 8px;
`
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  /* align-items: column;
  justify-content: center; */
  margin-left: 100px;
`
const Title = styled.div`
  margin-top: 20px;
  margin-left: 110px;
  font-size: 25px;
  font-weight: 800;
`