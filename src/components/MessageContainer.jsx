import React from 'react'
import styled from "styled-components";

const MessageContainer = (props) => {
  return <Container>{props.children}</Container>;
}

export default MessageContainer


const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll
`