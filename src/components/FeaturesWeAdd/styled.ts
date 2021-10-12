import styled from "styled-components";
import { __black, __yellow } from "../styled";

export const Container = styled.div`
    margin-top: 229px;
    position: relative;
`;
export const PostBackground = styled.div`
  margin-top: 52px;
`;
export const TitleStyle = {
    maxWidth: '427px',
    marginLeft: '293px',
    marginRight: 'auto',
};
export const PostDescriptionStyle = {
  maxWidth: '594px'
};
export const BlackSquere = styled.div`
  width: 157px;
  height: 149px;
  background-color: ${__black};
  position: absolute;
  right: 82px;
  bottom: 100px;
`;
export const YellowSquare = styled.div`
  width: 60px;
  height: 60px;
  background-color: ${__yellow};
  position: absolute;
  right: 142px;
  bottom: 159px;
`;
export const PostBackgroundStyle = {
  paddingLeft: 'calc(20% - 15px)',
  backgroundSize: 'calc(20% - 15px)',
}