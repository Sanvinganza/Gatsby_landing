import styled, { css } from "styled-components";
import icon1 from "../../assets/images/WeWorkWith/icon1.svg";
import icon2 from "../../assets/images/WeWorkWith/icon2.svg";
import icon3 from "../../assets/images/WeWorkWith/icon3.svg";
import icon4 from "../../assets/images/WeWorkWith/icon4.svg";
import icon5 from "../../assets/images/WeWorkWith/icon5.svg";
import icon6 from "../../assets/images/WeWorkWith/icon6.svg";
import icon7 from "../../assets/images/WeWorkWith/icon7.svg";
import { __black, __purple } from '../styled';

export const Container = styled.div`
  display: grid;
  padding: 0 81px;
  margin-top: 242px;
  grid-template-columns: repeat(6, [col] 18% ) ;
	grid-template-rows: repeat(3, [row] 40% );
`;
export const TitleStyle = 
{
  gridColumn: 'col 1/ span 3',
  gridRow: 'row 1',
  justifySelf: 'center',
  color: __black
};
export const PostsImages =
  [icon1, icon2, icon3, icon4, icon5, icon6, icon7].map(icon => {
    return styled(icon)`
    height: 60px;
  `
  });
export const PostsStyle = [
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
];
export const PostBackground = styled.div`
  height: 106px;
  width: 106px;
  align-items: center;
  display: flex;
  justify-content: center;
`;
export const PostBackgroundStyle = css`
  background: linear-gradient(90deg, ${__purple} 50%, ${__black} 50%);
`;