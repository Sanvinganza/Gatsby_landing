import React, { Component } from 'react';
import Slider from 'react-slick';
import styled from "styled-components";
import next from "../../assets/images/OurTeam/next.svg";
import back from "../../assets/images/OurTeam/back.svg";
import { __black, __yellow } from '../styled';

export const Container = styled.div`
    margin-top: 200px;
    display: flex;
    flex-direction: row;
    height: 500px;
    width: 100%;
    max-width: 1440px;
`;
export const SectionTitleStyle = {
  textAlign: 'right',
};
export const TitleContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  height: 340px;
  justify-content: space-between;
`;
export const SliderContainer = styled(Slider)`
  width: 50%;
  margin-left: 106px;
`;
export const Arrows = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  height: 80px;
  background-color: ${__black};
`;
export const NextArrow = styled(next)`
  height: 16px;
  margin: 0 67px;
  cursor: pointer;
`;
export const BackArrow = styled(back)`
  height: 16px;
  margin: 0 67px;
  cursor: pointer;
`;
export const CardContainer = styled.div`
  width: 225px;
  height: 300px;
  align-text: center;
  margin: 25px 10px;
`;
export const CardSectionTitleStyle = {
  fontSize: '20px',
};
export const CardContainerStyle = {
  alignText: 'center',
  margin: '0 10px' 
}