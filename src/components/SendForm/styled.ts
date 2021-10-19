import styled from "styled-components";
import { __black, __purple, __red, __yellow } from "../styled";

export const DescriptionStyle = {
    paddingTop: '94px',
    color: '#fff',
    fontSize: '20px',
};
export const Container = styled.div`
  display: grid;
  width: 100%;
  height: 540px;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(6, 1fr);
`;
export const BlackRectangle = styled.div`
  position: relative;
  grid-row: 1 / span 2;
  grid-column: 1 / span 4;
  background-color: ${__black};
`;
export const FormPurpleRectangle = styled.div`
  grid-row: 1;
  grid-column: 5 / span 2;
  background-color: ${__purple};
`;
export const FormRedRectangle = styled.div`
  grid-row: 2;
  grid-column: 5 / span 2;
  background-color: ${__red};
`;
export const Form = styled.form`
  z-index: 2;
  grid-row: 1 / span 2;
  grid-column: 2 / span 2;
  width: 428px;
`;
export const FormInputBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const FormInput = styled.input`
  margin-top: 63px;
  width: 203px;
  height: 40px;

  font-family: Ubuntu;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 150%;
  border: 1px solid rgba(255, 255, 255, 0.5);
  background: transparent;
  padding: 9px 12px;
  color: #fff;
`;
export const FormTextarea = styled.textarea`
  margin-top: 24px;
  width: 426.89px;
  height: 98.36px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-sizing: border-box;
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 150%;
  background: transparent;
  padding: 9px 12px;
  color: #fff;
`;
export const FormButton = styled.button`
margin-top: 40px;
width: 50%;
height: 41px;
background: transparent;
color: #fff;
border: 1px solid #fff;
`;
export const YellowRectangle = styled.div`
    width: 46px;
    height: 169px;
    background-color: ${__yellow};
    position: absolute;
    right: -23px;
    bottom: 190px;
`;