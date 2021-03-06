import React from "react";
import styled from "styled-components";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { sidebarItemsData } from "../data/SidebarData";
import AddIcon from "@material-ui/icons/Add";
import db from '../firebase'
import { useHistory } from 'react-router-dom';


function Sidebar({ rooms }) {
  // console.log('sidebar', rooms)
  const history = useHistory()

  const goToChannel = (id) => {
    if(id) {
      // console.log(id);
      history.push(`/room/${id}`)
    }
  }

  const addChannel = () => {
    const promptName = prompt('Enter channel name')
    if(promptName){
      db.collection('rooms').add({
        name: promptName
      })
    }
  }


  return (
    <Container>
      <WorkspaceContainer>
        <Name>CleverProgrammer</Name>
        <NewMessage>
          <AddCircleOutlineIcon />
        </NewMessage>
      </WorkspaceContainer>
      <ControlChannel>
        <MainChannels>
          {sidebarItemsData.map((item, id) => (
            <MainChannelItem key={id}>
              {item.icon}
              {item.text}
            </MainChannelItem>
          ))}
        </MainChannels>
        <ChannelsContainer>
          <NewChannelContainer>
            <div>Channels</div>
            <Plus onClick={addChannel} />
          </NewChannelContainer>
          <ChannelsList>
            {rooms.map((item) => {
              return (
                <Channel onClick={() => goToChannel(item.id)} key={item.id}>
                  # {item.name}
                </Channel>
              );
            })}
          </ChannelsList>
        </ChannelsContainer>
      </ControlChannel>
    </Container>
  );
}

export default Sidebar;

const Container = styled.div`
  background: #016d7e;
  display: grid;
`;

const WorkspaceContainer = styled.div`
  color: white;
  height: 64px;
  display: flex;
  align-items: center;
  padding-left: 19px;
  justify-content: space-between;
  border-bottom: 1px solid #532753;
`;

const Name = styled.div``;

const NewMessage = styled.div`
  width: 36px;
  height: 36px;
  background: white;
  color: #016d7e;
  fill: #016d7e;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 20px;
  cursor: pointer;
`;

const MainChannels = styled.div`
  padding-top: 20px;
`;

const MainChannelItem = styled.div`
  color: rgb(188, 171, 188);
  display: grid;
  grid-template-columns: 15% auto;
  height: 28px;
  align-items: center;
  padding-left: 19px;
  cursor: pointer;
  :hover {
    background: #350d36;
  }
`;

const ChannelsContainer = styled.div`
  color: rgb(188, 171, 188);
  margin-top: 10px;
  height: 100%;
`;

const NewChannelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 28px;
  padding-left: 19px;
  padding-right: 12px;
`;

const ChannelsList = styled.div``;

const Channel = styled.div`
  height: 28px;
  display: flex;
  align-items: center;
  padding-left: 19px;
  cursor: pointer;
  :hover {
    background: #350d36;
  }
`;

const Plus = styled(AddIcon)`
  cursor: pointer;
`
const ControlChannel = styled.div`
  overflow: auto;
  height: 100%;

`