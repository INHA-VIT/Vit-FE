import React from "react";
import styled from "styled-components";

const Img = styled.img`
  width: 50%;
  height: 20%;
  margin-left: 25%;
  margin-top: 30vh;
`;

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(97, 129, 179, 1);
`;

const Intro = () => {
  return (
    <div>
      <Background>
        <Img src="Vit.svg"></Img>
      </Background>
    </div>
  );
};

export default Intro;
