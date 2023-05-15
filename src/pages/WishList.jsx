import React from "react";
import { styled } from "styled-components";

const WishList = () => {
  return (
    <>
      <Top_Box>
        <div style={{paddingLeft: '80px'}}>에어비앤비</div>
      </Top_Box>
      <W_L_Box>
        <h1 style={{paddingLeft: '80px'}}>위시리스트</h1>
      </W_L_Box>
      <Image_save></Image_save>
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
  margin-left: 100px;
  width: 300px;
  height: 300px;
  background-color: #ccc; /* 이미지가 없을 때 보일 색상 */
  /* background-image: url('이미지파일.jpg'); */
  background-size: cover;
  background-position: center;
  border-radius: 8px;
`