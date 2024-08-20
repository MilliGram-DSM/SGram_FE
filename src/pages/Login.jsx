import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { login } from "../utils/apis/auth";

const Login = () => {
  const link = useNavigate();

  const [data, setData] = useState({
    account_id: "",
    password: "",
  });
  const { account_id, password } = data;

  const onChange = e => {
    let { name, value } = e.target;

    setData({
      ...data,
      [name]: value,
    });
  };
  const resetValue = () => {
    setData({
      account_id: "",
      password: "",
    });
  };

  const onLogin = async () => {
    try {
      const res = await login(data);
      link("/");
      Cookie.set("accessToken", res.data.accessToken);
    } catch (err) {
      alert("로그인에 실패했습니다.");
      console.log(err);
      resetValue();
    }
  };

  return (
    <Wrapper>
      <Title>Log in</Title>
      <Form>
        <Input
          onChange={onChange}
          name="account_id"
          value={account_id}
          placeholder="ID"
          type="text"
          required
        />
        <Input
          onChange={onChange}
          name="password"
          value={password}
          placeholder="Password"
          type="password"
          required
        />

        <LoginBtn onClick={onLogin}>Login</LoginBtn>
      </Form>
      <Switcher>
        계정이 없으신가요? <Link to="/create-account">회원가입 &rarr;</Link>
      </Switcher>
    </Wrapper>
  );
};

export default Login;

const Switcher = styled.span`
  a {
    color: #1d9bf5;
  }
  margin-top: 10px;
`;

const Title = styled.h1`
  font-size: 42px;
`;

const Form = styled.form`
  margin-top: 50px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

const Wrapper = styled.div`
  height: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 420px;
  padding: 50px 0px;
`;

const Input = styled.input`
  padding: 10px 20px;
  border-radius: 50px;
  border: none;
  width: 100%;
  font-size: 16px;
`;

const LoginBtn = styled.button`
  padding: 10px 20px;
  border-radius: 50px;
  border: none;
  width: 100%;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
