import styled from "styled-components";
import icon1 from "../../assets/images/WeWorkWith/icon1.svg";
import icon2 from "../../assets/images/WeWorkWith/icon2.svg";
import icon3 from "../../assets/images/WeWorkWith/icon3.svg";
import icon4 from "../../assets/images/WeWorkWith/icon4.svg";
import icon5 from "../../assets/images/WeWorkWith/icon5.svg";
import icon6 from "../../assets/images/WeWorkWith/icon6.svg";
import icon7 from "../../assets/images/WeWorkWith/icon7.svg";

export const WeWorkWithWrapper = styled.div`
  display: grid;
  height: 100vh;
  max-width: 1280px;                          
  padding: 242px 81px 229px;
  grid-template-columns: repeat(6, [col] 211px ) ;
	grid-template-rows: repeat(3, [row] 211px  );
`;
export const Icons = [icon1, icon2, icon3, icon4, icon5, icon6, icon7].map(icon => {
  return styled(icon)`
    height: 60px;
  `
});
export const WeWorkWithItemsStyle = [
  {
    gridColumn: 'col 4',
    gridRow: 'row 1'
  },
  {
    gridColumn: 'col 6',
    gridRow: 'row 1'
  },
  {
    gridColumn: 'col 1',
    gridRow: 'row 2'
  },
  {
    gridColumn: 'col 3',
    gridRow: 'row 2'
  },
  {
    gridColumn: 'col 5',
    gridRow: 'row 2'
  },
  {
    gridColumn: 'col 2',
    gridRow: 'row 3'
  },
  {
    gridColumn: 'col 4',
    gridRow: 'row 3'
  }
]
// .map( el => {
//   return {...el, height: '106 px'} 
// });
export const WeWorkWithItemBackground = styled.div`
  height: 106px;
  width: 106px;
  background: linear-gradient(90deg, #6E32EE 50%, #1E242F 50%);
  align-items: center;
  text-align: center;
`;
export const WeWorkWithTitleStyle = {
  gridColumn: 'col 1/ span 3',
  gridRow: 'row 1',
  justifySelf: 'center'
};
export const WeWorkWithTitle = styled.div`
  display: flex;
  font: 700 36px "Ubuntu", sans-serif;
  align-text: center;
`;
export const WeWorkWithItemTextStyle = styled.div`
  font: 500 20px "Ubuntu", sans-serif;

`;