import styled from "styled-components";
import icon1 from "../../assets/images/WeWorkWith/icon1.svg";
import icon2 from "../../assets/images/WeWorkWith/icon2.svg";
import icon3 from "../../assets/images/WeWorkWith/icon3.svg";
import icon4 from "../../assets/images/WeWorkWith/icon4.svg";
import icon5 from "../../assets/images/WeWorkWith/icon5.svg";
import icon6 from "../../assets/images/WeWorkWith/icon6.svg";
import icon7 from "../../assets/images/WeWorkWith/icon7.svg";

export const WeWorkWithContainer = styled.div`
  display: grid;
  height: 100vh;
  max-width: 1280px;
  min-height: 708px;                          
  position: relative;
  padding: 242px 81px 229px;            
`;

export const Icons = [icon1, icon2, icon3, icon4, icon5, icon6, icon7].map( icon => {
  return styled(icon)
});

export const Icon1 = styled(icon1)`
  margin: 5px;
`;

export const WeWorkWithTitle = styled.div`
  display: flex;
  font: 700 36px "Ubuntu", sans-serif;
`
export const WeWorkWithItem = styled.div`
  display: flex;
`