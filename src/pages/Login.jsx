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

  // ^----- 만약 토큰을 들고 있다면 메인페이지로 라우팅 ----- //
  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      navigate("/");
    }
  }, [navigate]);

  // ^---------- POST 요청으로 로그인을 하는 부분 ---------- //
  const loginUser = async (user) => {
    try {
      // 서버에 POST요청으로 가입 된 유저가 있는지 확인하는 부분
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/users/login`,
        user
      );
      // console.log(response);

      // ^----- 받아온 데이터를 기준으로 Token값을 가공해 브라우저에 저장하는 부분 ----- //
      // 토큰을 양식에 맞게 가공
      const { authorization: tokenOrigin } = response.headers;
      const token = tokenOrigin.replace("Bearer ", "");
      const userToken = jwtDecode(token);
      const expirationTime = new Date(userToken.exp * 1000);

      // 위에서 설정한 설정값과 토큰값을 쿠키에 저장
      Cookies.set("token", token, { expires: expirationTime });
      alert(`로그인 성공`);
      navigate("/");
    } catch (err) {
      alert(`이메일 및 비밀번호를 잘못 입력하셨습니다.`);
      // console.log("✨ ‣ loginUser ‣ err:", err);
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
