import React from "react";
import styled from "styled-components";
import gangneung from "../assets/gangneung.png";
import cafe from "../assets/cafe.png";
import tofu from "../assets/tofu.png";
import landmark from "../assets/landmark.png";
import beach from "../assets/beach.png";
import { IoChevronBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Body = styled.div`
  width: 380px;
  height: 840px;
  display: flex;
  align-items: center;
  flex-flow: column;
`;

const ButtonWrapper = styled.div`
  display: flex;
  @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap");
  font-family: "Noto Sans KR", sans-serif;
  font-size: 25px;
  font-weight: bold;
  width: 100%;
  height: 50px;
  margin-left: 15px;
  margin-top: 55px;
`;

const LocalNameWrapper = styled.div`
  display: flex;
  justify-content: center;
  @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap");
  font-family: "Noto Sans KR", sans-serif;
  font-size: 36px;
  font-weight: bold;
  color: #184386;
  width: 100%;
`;

const LocalImageWrapper = styled.img`
  display: flex;
  justify-content: center;
  width: 360px;
  border-radius: 5px;
  object-fit: fill;
  margin-top: 10px;
`;

const StampWrapper = styled.div`
  width: 360px;
  height: 420px;
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const EachStamp = styled.div`
  width: 95px;
  height: 95px;
  border-radius: 10px;
  background-color: #d9d9d9;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StampImg = styled.img`
  width: 70px;
  height: 70px;
`;

const OwnStampPage = () => {
  const navigate = useNavigate();

  const onClickMain = () => {
    navigate("/mainPage");
  };

  return (
    <Body>
      <ButtonWrapper>
        <IoChevronBack onClick={onClickMain} />
        &nbsp;&nbsp;보유 스탬프 내역
      </ButtonWrapper>
      <LocalNameWrapper>Gangneung</LocalNameWrapper>
      <LocalImageWrapper src={gangneung} />
      <StampWrapper>
        <EachStamp>
          <StampImg src={cafe} />
        </EachStamp>
        <EachStamp>
          <StampImg src={cafe} />
        </EachStamp>
        <EachStamp>
          <StampImg src={cafe} />
        </EachStamp>
        <EachStamp>
          <StampImg src={tofu} />
        </EachStamp>
        <EachStamp>
          <StampImg src={tofu} />
        </EachStamp>
        <EachStamp>
          <StampImg src={tofu} />
        </EachStamp>
        <EachStamp>
          <StampImg src={landmark} />
        </EachStamp>
        <EachStamp>
          <StampImg src={landmark} />
        </EachStamp>
        <EachStamp>
          <StampImg src={landmark} />
        </EachStamp>
        <EachStamp>
          <StampImg src={beach} />
        </EachStamp>
        <EachStamp>
          <StampImg src={beach} />
        </EachStamp>
        <EachStamp>
          <StampImg src={beach} />
        </EachStamp>
      </StampWrapper>
    </Body>
  );
};

export default OwnStampPage;
