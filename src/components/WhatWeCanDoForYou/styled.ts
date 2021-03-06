import styled, { css } from "styled-components";
import { __greyLite, __purple, __red, __yellow } from "../styled";

export const Container = styled.div`
    position: relative;
    margin-top: 200px;
`;
export const TitleStyle = {
    textAlign: 'end',
    marginRight: '13%',
    marginLeft: 'auto',
    marginRigth: '211px',
    maxWidth: '224px'
};
export const PostDescriptionCSS = css`
    max-width: 302px;
    margin-left: 30px;
`;
export const PostBackgroundCSS = css`
    background: linear-gradient(90deg, ${__greyLite} calc(100% - 15px), ${__purple} 15px);
    background-repeat: no-repeat;
    padding-left: calc(36% - 15px);
    background-size: calc(36% - 15px)
`;
export const PostBackground = styled.div`
  margin-top: 52px;
`;
export const RedSquare = styled.div`
  position: absolute;
  left: calc(100% - 294px);
  width: 90px;
  height: 90px;
  background-color: ${__red};
`;
export const PurpleSquare = styled.div`
    width: 136px;
    height: 136px;
    position: absolute;
    bottom: 151px;
    left: 81px;
    background-color: ${__purple}; 
`;
export const PostDescriptionStyleSecond = {
    paddingLeft: 'calc(13% - 15px)',
    maxWidth: '350px',
};
export const PostBackgroundStyleSecond = {
    marginTop: '60px',
    paddingLeft: 'calc(66% - 15px)',
    backgroundSize: 'calc(69.5% - 15px)',
};
export const YellowSquare = styled.div`
    width: 69px;
    height: 69px;
    position: absolute;
    left: 181px;
    bottom: 125px;
    background-color: ${__yellow};
`;