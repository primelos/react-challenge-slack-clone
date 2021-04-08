import React, { useEffect, createRef, useState } from 'react'
import styled from "styled-components";
import SendIcon from "@material-ui/icons/Send";
import Picker from "emoji-picker-react";


const ChatInput = ({ sendMessage }) => {

  const inputRef = createRef()
  const [input, setInput] = useState('')
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const [openEmoji, setOpenEmoji] = useState(false);
  const [cursor, setCursor] = useState()


  const onEmojiClick = (event, {emojiObject}) => {
    const ref = inputRef.current
    ref.focus()
    
  };

  const openIcon = () => {

  }
  const send = (e) => {
    e.preventDefault()
    if(!input) return 
    sendMessage(input)
    setInput('')
  }

  console.log(Picker)
  return (
    <Container>
      <InputContainer>
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Message here..."
          />
          <IconContainer>
            <div>
              <i class="fas fa-bolt fa-sm"></i>
              <i class="fas fa-bold fa-sm"></i>
              <i class="fas fa-italic fa-sm"></i>
              <i class="fas fa-strikethrough fa-sm"></i>
              <i class="fas fa-code fa-sm"></i>
              <i class="fas fa-link fa-sm"></i>
              <i class="fas fa-list-ol fa-sm"></i>
              <i class="fas fa-list-ul fa-sm"></i>
              <i class="fas fa-stream fa-sm"></i>
              <i class="far fa-file-code fa-sm"></i>
            </div>
            <RightIcons>
              <i class="fas fa-heading fa-sm"></i>
              <i class="fas fa-at fa-sm"></i>
              <i
                class="far fa-smile fa-sm"
                onClick={() => setOpenEmoji(!openEmoji)}
              ></i>
              <i class="fas fa-paperclip fa-sm fa-flip-horizontal"></i>
              <EmojiContainer>
                {openEmoji ? <Picker onEmojiClick={onEmojiClick} /> : null}
              </EmojiContainer>
              <SendButton type="submit" onClick={send}>
                <SendIcon />
              </SendButton>
            </RightIcons>
          </IconContainer>
        </form>
      </InputContainer>
    </Container>
  );
}

export default ChatInput

const Container = styled.div`
  padding: 0 20px 24px 20px;
`

const InputContainer = styled.div`
  border: 1px solid #8d8d8e;
  border-radius: 4px;

  form {
    height: 42px;
    align-items: center;
    padding-bottom: 19px;
    padding-top: 10px;

    i {
      padding: 0 8px;
    }

    input {
      flex: 1;
      border: none;
      font-size: 13px;
      outline: none;
      border-bottom: 1px solid lightgray;
      width: 99%;
      padding-bottom: 8px;
    }
    /* input:focus {
      outline:none
    } */
  }
`;

const SendButton = styled.button`
  background: #007a5a;
  border-radius: 2px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #D9D9D9;
  margin-right: 5px;
  cursor: pointer;
  border: none;

  .MuiSvgIcon-root {
    width: 18px;
  }
  :hover {
    background: #148567;
  }
`;
const IconContainer = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  padding-top: 1px;
  justify-content: space-between;
`;
const RightIcons = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;
const EmojiContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 324px;
  right: 124px;
`;