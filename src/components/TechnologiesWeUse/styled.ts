import styled from 'styled-components'
import {Typescript} from '@styled-icons/simple-icons/Typescript'
import {ReactLogo} from '@styled-icons/boxicons-logos/ReactLogo'
import {Python} from '@styled-icons/boxicons-logos/Python'
import {Js} from '@styled-icons/fa-brands/Js'
import { __red } from '../styled'

export const TitleStyle = {
    maxWidth: '427px',
    margin: '50px 0',
};
export const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;
export const PostBackground = styled.div`
    height: 106px;
    width: 106px;
    background-color: ${__red};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
`;
export const PostDescriptions = styled.div`
    display: flex;
    flex-direction: row;
`;
export const PostImages =
    [Typescript, ReactLogo, Python, Js].map(icon => {
        return styled(icon)`
    max-height: 60px;    
    color: white;
 `
});
export const Post = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 53px;
`;
