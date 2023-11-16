import React from "react";
import styled from "styled-components";

const Text = styled.h1`
  font-weight: bolder;
  padding-top: 5vh;
  padding-left: 5vw;
`;
const Background = styled.div`
  width: 100vw;
  height: auto;
  background-color: #ffffff;
`;

const Count = styled.h2`
  /* padding-top: 5vh; */
  padding-left: 75vw;
`;
const Box = styled.div`
  width: 70vw;
  height: 20vh;
  margin-left: 15vw;
  margin-top: 5%;
  background-color: rgba(217, 217, 217, 1);
  border-radius: 7px;
  text-align: center;
`;

const Next = styled.button`
  width: 80vw;
  height: 7vh;
  margin-left: 10vw;
  margin-top: 5%;
  background-color: rgba(97, 129, 179, 1);
  border-radius: 7px;
  text-align: center;
  color: white;
  font-size: 30px;
  margin-bottom: 5%;
  border: none;
`;
const Highlight = styled.span`
  background: linear-gradient(
    180deg,
    rgba(97, 129, 179, 0.4) 68%,
    rgba(97, 129, 179, 1) 50%
  );
  border-radius: 3px;
  background: rgba(97, 129, 179, 0.4);
`;

const PickStamp = () => {
  return (
    <Background>
      <Text>
        <Highlight>'투썸플레이스'</Highlight>
        에 대한
        <br />
        스탬프입니다
      </Text>
      <Count>0/1</Count>
      <Box>1</Box>
      <Box>2</Box>
      <Box>3</Box>
      <Box>4</Box>
      <Box>5</Box>
      <Box>6</Box>
      <Next>to my Wallet</Next>
    </Background>
  );
};

export default PickStamp;
