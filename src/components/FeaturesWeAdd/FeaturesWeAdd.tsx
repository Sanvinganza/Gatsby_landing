import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Description, SectionTitle } from '../styled';
import { PostBackground, PostBackgroundCSS, PostDescriptionCSS } from '../WhatWeCanDoForYou/styled';
import { BlackSquere, Container, PostBackgroundStyle, PostDescriptionStyle, TitleStyle, YellowSquare } from './styled';

const FeaturesWeAdd: React.FC<any> = () => {

    const { 
        FeaturesWeAdd: {frontmatter} 
    } = useStaticQuery(
        graphql`
        query{
            FeaturesWeAdd: markdownRemark (frontmatter: {type: {eq: "FeaturesWeAdd"}}) {
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
            <SectionTitle style={TitleStyle} >
                {title}
            </SectionTitle>
            
            <PostBackground css={PostBackgroundCSS} style={PostBackgroundStyle}>
                <Description css={PostDescriptionCSS} style={PostDescriptionStyle}>
                    {descriptions
                        .map(description => <div>{description}</div>)}
                </Description>
                <BlackSquere />
                <YellowSquare />
            </PostBackground>
        </Container>
    );
};

export default FeaturesWeAdd;