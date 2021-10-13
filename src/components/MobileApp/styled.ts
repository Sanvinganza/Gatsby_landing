import { DoubleQuotesL } from "@styled-icons/remix-editor";
import styled, { css } from "styled-components";
import { __black, __yellow, __purple, __red } from "../styled";
import phone from '../../assets/images/MobilyApp/Group.svg';
import { NoEncryption } from "@styled-icons/material";

export const Container = styled.div`
    margin-top: 237px;
    display: flex;
    flex-direction: column;
    position: relative;
    max-width: 1440px;
`;
export const SectionTitleStyle = {
    maxWidth: '306px',
    textAlign: 'end',
    alignSelf: 'flex-end',
    marginRight: '293px',
};
export const DescriptionStyle = {
    maxWidth: '427px',
    textAlign: 'end',
    alignSelf: 'flex-end',
    marginRight: '293px',
    marginTop: '23px',
}
export const BlackSquere = styled.div`
  width: 107px;
  height: 107px;
  background-color: ${__black};
  position: absolute;
  left: 80px;
`;
export const YellowSquare = styled.div`
  width: 45px;
  height: 45px;
  background-color: ${__yellow};
  position: absolute;
  left: 134px;
  top: 46px;
`;
export const Qoutes = styled(DoubleQuotesL)`
    color: ${__purple};
    height: 60px;
`;
export const QoutesStyle = {
    height: '40px',
    color: __purple
};
export const Phone = styled(phone)``;
export const SectionBody = styled.div`
    flex-direction: row;
    display: flex;
`;
export const PhoneBackground = styled.div`
    padding-left: 270px;
    background: linear-gradient(180deg,#FFFFFF 20%, ${__purple} 20%);
    height: 410px;
    align-self: center;
`;
export const DescriptionContainer = styled.div`
    padding-left: 30px;
    width: 415px;
    align-self: center;
    padding-top: 50px;
`;
export const PostDescriptionStyle = {
    maxWidth: 'none',
    marginTop: '37px',  
};
export const DescriptionFooterStyle = {
    marginTop: '64px',
};
export const BlackMediumSquere = styled.div`
  width: 88px;
  height: 88px;
  background-color: ${__black};
  position: absolute;
  right: 166px;
  top: 373px;
`;
export const RedBigSquare = styled.div`
  width: 146px;
  height: 146px;
  background-color: ${__red};
  position: absolute;
  right: 82px;
  top: 290px;
`;
export const BlackSmallSquere = styled.div`
  width: 40px;
  height: 40px;
  background-color: ${__black};
  position: absolute;
  right: 446px;
  bottom: -60px;
`;