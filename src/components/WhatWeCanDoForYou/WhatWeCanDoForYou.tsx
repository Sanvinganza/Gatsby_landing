import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Description, PostDescription, SectionTitle } from '../styled';
import { Container, PostBackground, PostBackgroundStyle, PostBackgroundStyleSecond, PostDescriptionStyle, PostDescriptionStyleSecond, PurpleSquare, RedSquare, TitleStyle, YellowSquare } from './styled';

const WhatWeCanDoForYou: React.FC<any> = () => {

    const { 
        WhatWeCanDoForYou: {frontmatter} 
    } = useStaticQuery(
        graphql`
        query{
            WhatWeCanDoForYou: markdownRemark (frontmatter: {type: {eq: "WhatWeCanDoForYou"}}) {
                frontmatter {
                    descriptions
                    title
                }
            }
        }
    `);

    const { title, descriptions } = frontmatter;
        console.log(title)
    return (
        <Container>
            <SectionTitle style={TitleStyle}>
                {title}
            </SectionTitle>
            
            <PostBackground css={PostBackgroundStyle}>
                <Description css={PostDescriptionStyle}>
                    <RedSquare />
                    {descriptions[0]}
                </Description>
            </PostBackground>
            
            <PostBackground css={PostBackgroundStyle} style={PostBackgroundStyleSecond}>
                <Description css={PostDescriptionStyle} style={PostDescriptionStyleSecond}>
                    {descriptions[1]}
                    <PurpleSquare />
                    <YellowSquare />
                </Description>
            </PostBackground>
        </Container>
    );
};

export default WhatWeCanDoForYou;