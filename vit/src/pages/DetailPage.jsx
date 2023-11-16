import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #ffffff;
`;
const Box = styled.button`
  width: 80vw;
  height: 9vh;
  border: none;
  font-weight: 500;
  margin-left: 10vw;
  margin-top: 3%;
  padding-bottom: 8vh;
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
const Arr = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow-x: auto;
  width: 100%; //부모 컨테이너에 꽉 차게 저장
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
const XSText = styled.h3`
  font-weight: bolder;
  margin-left: 10vw;
  margin-top: 3%;
`;
const ColorText = styled.span`
  font-weight: bolder;
  color: rgba(97, 129, 179, 1);
`;

const Percent = styled.span`
  color: white;
  font-size: xx-large;
  margin-left: 5px;
  display: inline;
  padding-top: 1vh;
`;
const Img = styled.img`
  width: 120px;
  height: 170px;
  min-width: 120px;
  min-height: 170px;
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 1vh;
  margin-bottom: 2%;
`;

const DetailPage = () => {
  const [places, setPlaces] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios.get(`http://43.200.76.188:8000/places/hotplaces/${1}`).then((res) => {
      setPlaces(res.data);
    });
  }, []);

  const cafePlaces = places.filter(
    (place) => place.category_id && place.category_id.name === "카페"
  );
  const foodPlaces = places.filter(
    (place) => place.category_id && place.category_id.name === "맛집"
  );
  const hotPlaces = places.filter(
    (place) => place.category_id && place.category_id.name === "관광지"
  );
  const hotImageSrc = hotPlaces.length > 0 ? hotPlaces[0].image : "";
  const cafeImageSrc = cafePlaces.length > 0 ? cafePlaces[0].image : "";
  const foodImageSrc = foodPlaces.length > 0 ? foodPlaces[0].image : "";
  console.log(hotImageSrc);
  console.log(cafeImageSrc);
  console.log(foodImageSrc);
  const handleImageClick = (id) => {
    navigate(`/AboutPlace/${id}`);
  };

  return (
    <div>
      <Background>
        <SText>옥수수양말님, 환영해요!</SText>
        <Text>
          <ColorText>강릉</ColorText>은 현재 <ColorText>3곳</ColorText>을 방문
          <br />
          하셨네요!
        </Text>
        <Box>
          미션완료까지
          <br />
          앞으로 4곳 남았어요! <Percent>60%</Percent>
        </Box>
        <XSText>HOT PLACE 😎</XSText>
        <Arr>
          <Img
            src={hotImageSrc}
            onClick={() => handleImageClick(hotPlaces[0]?.id)}
          ></Img>
          <Img></Img>
          <Img></Img>
          <Img></Img>
          <Img></Img>
        </Arr>
        <XSText>TRENDY CAFE ☕ </XSText>
        <Arr>
          <Img
            src={cafeImageSrc}
            onClick={() => handleImageClick(cafePlaces[0]?.id)}
          ></Img>
          <Img></Img>
          <Img></Img>
          <Img></Img>
          <Img></Img>
        </Arr>
        <XSText>TRENDY DINING SPOT 🍽️</XSText>
        <Arr>
          <Img
            src={foodImageSrc}
            onClick={() => handleImageClick(foodPlaces[0]?.id)}
          ></Img>
          <Img></Img>
          <Img></Img>
          <Img></Img>
          <Img></Img>
        </Arr>
      </Background>
    </div>
  );
};

export default DetailPage;
