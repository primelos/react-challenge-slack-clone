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
  // const [primary, setPrimary] = useState()

  const onEmojiClick = (event, {emojiObject}) => {
    console.log(event)
    // const ref = inputRef.current
    // ref.focus()
    // const start = input.substring(0, ref.selectionStart)
    // const end = input.substring(ref.selectionStart)
    // const text = start + emojiObject + end
    // setInput(text)
    // setCursor(start.length + emojiObject.length)
  };

  const openIcon = () => {
    // inputRef.current.focus()
    setOpenEmoji(!openEmoji)
  }
  const send = (e) => {
    e.preventDefault()
    if(!input) return 
    sendMessage(input)
    setInput('')
  }
  
  // useEffect(() => {
  //   inputRef.current.selectionEnd = cursor
  // },[cursor])

  // console.log(Picker)
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
            <div style={{  cursor: 'pointer'
}}>
              <i className="fas fa-bolt fa-sm"></i>
              <i className="fas fa-bold fa-sm"></i>
              <i className="fas fa-italic fa-sm"></i>
              <i className="fas fa-strikethrough fa-sm"></i>
              <i className="fas fa-code fa-sm"></i>
              <i className="fas fa-link fa-sm"></i>
              <i className="fas fa-list-ol fa-sm"></i>
              <i className="fas fa-list-ul fa-sm"></i>
              <i className="fas fa-stream fa-sm"></i>
              <i className="far fa-file-code fa-sm"></i>
            </div>
            <RightIcons>
              <i className="fas fa-heading fa-sm"></i>
              <i className="fas fa-at fa-sm"></i>
              <i className="far fa-smile fa-sm" onClick={openIcon}></i>
              <i className="fas fa-paperclip fa-sm fa-flip-horizontal"></i>
              <EmojiContainer>
                {openEmoji ? <Picker onEmojiClick={onEmojiClick} /> : null}
              </EmojiContainer>
              <SendButton primary={input} type="submit" onClick={send}>
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
  /* background: #007a5a; */
  background: ${(props) => (props.primary ? "#007a5a" : "#f2f4f4")};
  border-radius: 2px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => (props.primary ? "#fff" : "#d9d9d9")};
  margin-right: 5px;
  cursor: ${(props) => (props.primary ? "pointer" : "null")};
  border: none;

  .MuiSvgIcon-root {
    width: 18px;
  }
  :hover {
    background: ${(props) => (props.primary ? "#148567" : "#f2f4f4")};
  }
`;
const IconContainer = styled.div`
  display: flex;
  align-items: center;
  padding-top: 1px;
  justify-content: space-between;
  background: #f2f4f4;
`;
const RightIcons = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
`;
const EmojiContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 324px;
  right: 124px;
`;