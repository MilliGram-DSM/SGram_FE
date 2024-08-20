import { useState } from "react";
import styled from "styled-components";

const Home = () => {
  const [chat, setChat] = useState("");
  const onChange = e => {
    const { name, value } = e.target;
    if (name === "chat") {
      setChat(value);
    }
  };

  const onClick = () => {};

  return (
    <Wrapper>
      <Form>
        <ChatField>
          <InputField>
            <ChatInput
              type="text"
              onChange={onChange}
              name="chat"
              value={chat}
            />
            <Button onClick={onClick}>
              <Logo src="/ChatSubmitBtn.svg" />
            </Button>
          </InputField>
        </ChatField>
      </Form>
    </Wrapper>
  );
};

export default Home;

const InputField = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-bottom: 20px;
`;

const Form = styled.form``;

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding-bottom: 40px;
  justify-content: center;
  width: 100vh;
`;
const ChatInput = styled.input`
  padding: 10px 20px;
  font-weight: 600;
  border-radius: 50px;
  border: solid 3px white;
  width: 80%;
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

const ChatField = styled.div`
  display: flex;
  border: white solid;
  width: 100%;
  height: 600px;
  border-radius: 20px;
  justify-content: center;
  align-items: end;
`;
