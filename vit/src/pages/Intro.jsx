import React from "react";
import styled from "styled-components";

const Body = styled.div`
  /* width: 380px;
  height: 840px; */
  width: 100vw;
  height: 100vh;
  background-color: rgba(97, 129, 179, 1);
`;

const Img = styled.img`
  width: 50%;
  height: 20%;
  margin-left: 25%;
  margin-top: 30vh;
`;

const Intro = () => {
  return (
    <div>
      <Body>
        <Img src="Vit.svg"></Img>
      </Body>
    </div>
  );
};

export default Intro;
