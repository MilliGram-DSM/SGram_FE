import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { signUp } from "../utils/apis/auth";
import { Cookie } from "../utils/cookie";

const CreateAccount = () => {
  const [data, setData] = useState({
    account_id: "",
    password: "",
    phone: "",
  });
  const link = useNavigate();

  const { account_id, password, phone } = data;

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
      phone: "",
    });
  };
  const onSignUp = async () => {
    try {
      const res = await signUp(data);
      // link("/login");
    } catch (err) {
      alert("회원가입에 실패했습니다.");
      console.log(err);
      resetValue();
    }
  };

  return (
    <Wrapper>
      <Title>Join</Title>
      <Container>
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
        <Input
          onChange={onChange}
          name="phone"
          value={phone}
          placeholder="Phone"
          type="phone"
          required
        />
        <SignUpBtn onClick={onSignUp}>SignUp</SignUpBtn>
      </Container>
      <Switcher>
        이미 계정이 있으신가요? <Link to="/login">로그인 &rarr;</Link>
      </Switcher>
    </Wrapper>
  );
};
export default CreateAccount;

const Switcher = styled.span`
  margin-top: 10px;
  a {
    color: #1d9bf5;
  }
`;

const SignUpBtn = styled.button`
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

const Title = styled.h1`
  font-size: 42px;
`;

const Container = styled.div`
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
