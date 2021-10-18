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
  align-self: center;
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
  margin: 25px 0;
`;
export const CardSectionTitleStyle = {
  fontSize: '20px',
  textAlign: 'center',
  maxWidth: '225px',
};
export const CardContainerStyle = {
  margin: '0 10px',
};
export const PostDescriptionStyle = {
  textAlign: 'center',
  maxWidth: '225px',
};
export const ImgStyle = {
  marginTop: '104px',
  maxWidth: '240px',
};
export const YellowSquare = styled.div`
  position: absolute;
  width: 720px;
  height: 307px;
  right: 0;
  bottom: 0;
  background-color: ${__yellow};
  z-index: -1;
`;