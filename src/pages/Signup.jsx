import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { styled } from "styled-components";

const Signup = () => {
  const navigate = useNavigate();

  const [emailInput, setEmailInput] = useState("");
  const [nicknameInput, setNicknameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [passwordCheckInput, setPasswordCheckInput] = useState("");

  // ^----- 정규식 ----- //
  // 이메일의 유형성을 검사하는 정규식
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // 비밀번호 유효성을 검사하는 정규식 (영문, 숫자, 특수문자 포함, 4자 이상 15자 이하)
  const passwordRegex =
    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[a-zA-Z\d@$!%*?&]{4,15}$/;

  // 닉네임 유효성을 검사하는 정규식 (알파벳 또는 한글, 2글자 이상 10글자 이하)
  const nicknameRegex = /^[a-zA-Z가-힣]{2,10}$/;

  // ^---------- POST 요청을 하여 회원가입 정보를 등록 ---------- //
  const signUpUser = async (user) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/users/signup`,
        user
      );
      alert(
        "가입이 완료되었습니다. 가입하신 이메일과 비밀번호로 로그인하여 주세요."
      );
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  // ---------- 이메일 인풋 핸들러 ---------- //
  const emailInputHandler = (e) => {
    setEmailInput(e.target.value);
  };

  // ---------- 닉네임 인풋 핸들러 ---------- //
  const nicknameInputHandler = (e) => {
    setNicknameInput(e.target.value);
  };

  // ---------- 패스워드 인풋 핸들러 ---------- //
  const passwordInputHandler = (e) => {
    setPasswordInput(e.target.value);
  };

  // ---------- 패스워드 확인 핸들러 ---------- //
  const passwordCheckInputHandler = (e) => {
    setPasswordCheckInput(e.target.value);
  };

  // ---------- onSubmit Handler ---------- //
  const onSubmitHandler = (e) => {
    e.preventDefault();

    // ^----- 정규식 검사 ----- //
    if (passwordInput !== passwordCheckInput) {
      setPasswordInput("");
      setPasswordCheckInput("");
      return alert(`비밀번호 확인이 일치하지 않습니다.`);
    }

    if (!emailRegex.test(emailInput)) {
      return alert(`유효한 이메일을 넣어주세요.`);
    }

    if (!passwordRegex.test(passwordInput)) {
      return alert(
        `비밀번호는 영문, 숫자, 특수문자를 포함하여 4자 이상 15자 이하로 입력해주세요.`
      );
    }

    if (!nicknameRegex.test(nicknameInput)) {
      return alert(
        `닉네임은 알파벳 또는 한글로 이루어진 2글자 이상 10글자 이하로 입력해주세요.`
      );
    }

    // ^----- 유저가 입력한 정보를 user에 담기 ----- //
    const user = {
      email: emailInput,
      password: passwordInput,
      nickname: nicknameInput,
    };

    signUpUser(user);
  };

  return (
    <Container>
      <InnerBox>
        {/* ---------- Title ---------- */}
        <TitleBox>에어비엔비에 오신것을 환영합니다.</TitleBox>

        <form onSubmit={onSubmitHandler}>
          {/* ---------- Email ---------- */}
          <div className="emailBox">
            <MailInput
              type="email"
              placeholder="you@email.com"
              value={emailInput}
              onChange={emailInputHandler}
            />
          </div>

          {/* ---------- NickName ---------- */}
          <div className="nickName">
            <NickName
              type="text"
              placeholder="닉네임(알파벳 또는 한글로 이루어진 2~10글자 이하)"
              value={nicknameInput}
              onChange={nicknameInputHandler}
            />
          </div>

          {/* ---------- Password ---------- */}
          <div className="passwordBox">
            <PasswordBox
              type="password"
              placeholder="비밀번호(영문, 숫자, 특수문자를 포함하여 4자~15자 이하)"
              value={passwordInput}
              onChange={passwordInputHandler}
            />
          </div>

          {/* RePassword */}
          <div className="rePasswordBox">
            <RePasswordBox
              type="password"
              placeholder="비밀번호 확인"
              value={passwordCheckInput}
              onChange={passwordCheckInputHandler}
            />
          </div>

          {/* ---------- SignUpBox ---------- */}
          <SignUpBox>
            <SignBtn>가입</SignBtn>
          </SignUpBox>
        </form>
      </InnerBox>
    </Container>
  );
};
export default Signup;

const Container = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  height: 100vh;
  font-size: 15px;
`;

const InnerBox = styled.div`
  width: 450px;
  height: 550px;
  padding: 40px;
  background-color: #fff;
  border: 1px #d2d2d2 solid;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
`;

const TitleBox = styled.div`
  font-family: "Nunito", sans-serif;
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  margin: 20px 20px;
`;

const MailInput = styled.input`
  width: 100%;
  height: 36px;
  border-radius: 5px;
  border: 1px #d2d2d2 solid;
  padding: 6px;
`;

const NickName = styled.input`
  width: 100%;
  height: 36px;
  border-radius: 5px;
  border: 1px #d2d2d2 solid;
  padding: 6px;
`;

const PasswordBox = styled.input`
  width: 100%;
  height: 36px;
  border-radius: 5px;
  border: 1px #d2d2d2 solid;
  padding: 6px;
`;

const RePasswordBox = styled.input`
  width: 100%;
  height: 36px;
  border-radius: 5px;
  border: 1px #d2d2d2 solid;
  padding: 6px;
`;

const SignUpBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 30px;
  border: 1px #e51e53 solid;
  border-radius: 10px;
  background-color: #e51e53;
  margin-top: 24px;
  padding: 6px;
`;

const SignBtn = styled.button`
  font-size: 13px;
  width: 100%;
  background-color: inherit;
  border: none;
  color: #fff;
  font-weight: 600;
`;
