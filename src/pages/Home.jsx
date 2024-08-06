import { useState } from "react";
import styled from "styled-components";

const Home = () => {
  const [chat, setChat] = useState("");
  const onChange = e => {
    let { value } = e.target;
    setChat(value);
  };

  const onClick = () => {
    console.log(chat);
  };

  return (
    <Wrapper>
      <Form>
        <ChatInput type="text" onChange={onChange} />
        <Button onClick={onClick}>
          <Logo src="/ChatSubmitBtn.svg" />
        </Button>
      </Form>
    </Wrapper>
  );
};

export default Home;

const Form = styled.form`
  display: flex;
  width: 100%;
`;

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: end;
  padding-bottom: 40px;
  justify-content: center;
  width: 100vh;
`;
const ChatInput = styled.input`
  padding: 10px 20px;
  font-weight: 600;
  border-radius: 50px;
  border: solid 3px white;
  width: 100%;
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: #1d9bf0;
  }
`;

const Button = styled.span`
  background-color: #1d9bf5;
  padding: 6px 20px;
  margin-left: 10px;
  border-radius: 20px;
  cursor: pointer;
`;
const Logo = styled.img`
  height: 25px;
  padding: 0;
`;
