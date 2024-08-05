import styled from "styled-components";

const Login = () => {
  return (
    <Wrapper>
      <Title>Log in</Title>
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
        <Input type="submit" value="Login" />
      </Form>
    </Wrapper>
  );
};

export default Login;

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
