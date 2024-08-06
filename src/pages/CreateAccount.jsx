import styled from "styled-components";
import { Link } from "react-router-dom";

const CreateAccount = () => {
  return (
    <Wrapper>
      <Title>Join</Title>
      <Form>
        <Input
          // onChange={onChange}
          name="id"
          // value={email}
          placeholder="ID"
          type="text"
          required
        />
        <Input
          // onChange={onChange}
          name="password"
          // value={password}
          placeholder="Password"
          type="password"
          required
        />
        <Input type="submit" value="Create" />
      </Form>
      <Switcher>
        이미 계정이 있으신가요? <Link to="/">로그인 &rarr;</Link>
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
  &[type="submit"] {
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }
`;
