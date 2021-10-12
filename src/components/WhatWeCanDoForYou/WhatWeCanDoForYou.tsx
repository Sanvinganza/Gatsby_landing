import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Description, SectionTitle } from '../styled';
import { Container, PostBackground, PostBackgroundCSS, PostBackgroundStyleSecond, PostDescriptionCSS, PostDescriptionStyleSecond, PurpleSquare, RedSquare, TitleStyle, YellowSquare } from './styled';

const WhatWeCanDoForYou: React.FC<any> = () => {

    const {
        WhatWeCanDoForYou: { frontmatter }
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

    return (
        <Container>
            <SectionTitle style={TitleStyle}>
                {title}
            </SectionTitle>

            <PostBackground css={PostBackgroundCSS}>
                <Description css={PostDescriptionCSS}>
                    <RedSquare />
                    {descriptions
                        .slice(0, 6)
                        .map(description => <div>{description}</div>)}
                </Description>
            </PostBackground>

            <PostBackground css={PostBackgroundCSS} style={PostBackgroundStyleSecond}>
                <Description css={PostDescriptionCSS} style={PostDescriptionStyleSecond}>
                    {descriptions
                        .slice(6)
                        .map(description => <div>{description}</div>)}
                    <PurpleSquare />
                    <YellowSquare />
                </Description>
            </PostBackground>
        </Container>
    );
};

export default WhatWeCanDoForYou;