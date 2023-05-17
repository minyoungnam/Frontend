import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { styled } from "styled-components";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";

const Login = () => {
  // ---------- Input useState ---------- //
  const [user, setUser] = useState({ email: "", password: "" });
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  // ---------- useNavigate ---------- //
  const navigate = useNavigate();

  // ---------- useDispatch ---------- //
  // const dispatch = useDispatch();

  //  ---------- Post 요청  ---------- //
  const loginUser = async (user) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/users/login`,
        user
      );
      const { tokenmake: token } = response.data;
      const userToken = jwtDecode(token);
      const expirationTime = new Date(userToken.exp * 1000);
      Cookies.set("token", token, { expires: expirationTime });
    } catch (err) {
      alert(`이메일 및 비밀번호를 잘못 입력하셨습니다.`);
      console.log(err);
    }
  };

  // ---------- Input Handler ---------- //
  const emailInputHandler = (e) => {
    setEmailInput(e.target.value);
    setUser({ ...user, email: e.target.value });
  };

  const passwordInputHandler = (e) => {
    setPasswordInput(e.target.value);
    setUser({ ...user, password: e.target.value });
  };

  // ---------- Submit Handler ----------
  const submitHandler = async (e) => {
    // console.log(user);
    e.preventDefault();
    if (emailInput.trim() === "" || passwordInput.trim() === "") {
      alert("이메일 또는 비밀번호를 입력해주세요.");
      return;
    }
    loginUser(user);
  };

  return (
    <Container>
      <InnerBox>
        {/* ---------- Title ---------- */}
        <TitleBox>에어비엔비에 오신것을 환영합니다.</TitleBox>

        <form onSubmit={submitHandler}>
          {/* ---------- Email ---------- */}
          <div className="emailBox">
            <MailInput
              type="email"
              placeholder="you@email.com"
              value={emailInput}
              onChange={emailInputHandler}
            />
          </div>

          {/* ---------- Password ---------- */}
          <div className="passwordBox">
            <PasswordBox
              type="password"
              placeholder="비밀번호"
              value={passwordInput}
              onChange={passwordInputHandler}
            />
          </div>

          {/* ---------- SignUpBox ---------- */}
          <SignUpBox>
            <SignBtn>로그인</SignBtn>
          </SignUpBox>
        </form>
      </InnerBox>
    </Container>
  );
};
export default Login;

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

const PasswordBox = styled.input`
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