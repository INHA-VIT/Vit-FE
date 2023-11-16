import React from "react";
import styled from "styled-components";

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #c4d1e6;
`;
const Box = styled.div`
  width: 80vw;
  height: 9vh;
  font-weight: 500;
  margin-left: 10vw;
  margin-top: 3%;
  background-color: rgba(97, 129, 179, 1);
  border-radius: 7px;
  text-align: left;
  color: rgba(255, 255, 255, 0.91);
  padding-left: 2vh;
  font-size: larger;
  padding-top: 15px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;
const Text = styled.h1`
  font-weight: bolder;
  padding-left: 5vw;
`;
const SText = styled.h2`
  font-weight: bolder;
  padding-top: 5vh;
  padding-left: 5vw;
`;
const ColorText = styled.span`
  font-weight: bolder;
  color: rgba(97, 129, 179, 1);
`;

const Percent = styled.span`
  color: white;
  font-size: xx-large;
  margin-left: 60vw;
  margin-left: 5px;
  display: inline;
`;
const DetailPage = () => {
  return (
    <div>
      <Background>
        <SText>옥수수양말님, 환영해요!</SText>
        <Text>
          <ColorText>강릉</ColorText>은 현재 <ColorText>3곳</ColorText>을
          방문하셨네요!
        </Text>

        <Box>
          미션완료까지
          <br />
          앞으로 4곳 남았어요! <Percent>60%</Percent>
        </Box>
      </Background>
    </div>
  );
};

export default DetailPage;
