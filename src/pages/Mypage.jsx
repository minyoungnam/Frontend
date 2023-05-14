import React from "react";
import { styled } from "styled-components";
import { useState, useRef } from "react";
import { Avatar } from "antd";

const Mypage = () => {
  const [Image, setImage] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png")
  const [file, setFile] = useState(null)

  const fileInput = useRef(null)

  const onChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0])
    } else { //업로드 취소할 시
      setImage("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png")
      return
    }
    //화면에 프로필 사진 표시
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage(reader.result)
      }
    }
    reader.readAsDataURL(e.target.files[0])
  }

  return (
    <>
      <Top_Box>에어비엔비 초안</Top_Box>
      <Font1>계정</Font1>
      <Middle_Box>
        <Avatar
          src={Image}
          style={{ margin: '20px' }}
          size={300}
          onClick={() => { fileInput.current.click() }} />
        <input
          type='file'
          style={{ display: 'none' }}
          accept='image/jpg,impge/png,image/jpeg'
          name='profile_img'
          onChange={onChange}
          ref={fileInput} />
        <Font2>닉네임</Font2>
        <Font2>이메일</Font2>
      </Middle_Box>
    </>
  )
};

export default Mypage;

const Top_Box = styled.div`
  border: 1px solid rgb(221, 221, 221);
  border-radius: 12px;
  padding: 30px;
`
const Middle_Box = styled.div`
  margin-left: 80px;
`
const Font1 = styled.div`
  margin-top: 70px;
  margin-left: 80px;
  font-size: 32px;
  line-height: 36px;
  font-weight: 600;
`
const Font2 = styled.div`
  margin-top: 20px;
  font-size: large;
  font-weight: 800;
`