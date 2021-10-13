import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { PostDescription, SectionTitle } from "../styled";
import { Container, Post, PostBackground, PostDescriptions, PostImages, TitleStyle } from "./styled";

const TechnologiesWeUse: React.FC<any> = () => {
    const {
        TechnologiesWeUse: { frontmatter }
    } = useStaticQuery(
        graphql`
        query{
            TechnologiesWeUse: markdownRemark (frontmatter: {type: {eq: "TechnologiesWeUse"}}) {
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
            <SectionTitle style={TitleStyle}>{title}</SectionTitle>
            <PostDescriptions>
                {descriptions.map((description, index) => {
                    return (
                        <Post key={description}>
                            <PostBackground>
                                {React.createElement(PostImages[index])}
                            </PostBackground>    
                            <PostDescription key={description}>
                                {description}
                            </PostDescription>
                        </Post>
                    )
                })}
            </PostDescriptions>
        </Container>
    );
};
export default TechnologiesWeUse;