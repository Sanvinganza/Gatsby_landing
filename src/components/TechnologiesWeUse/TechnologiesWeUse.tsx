import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { PostDescription, SectionTitle } from "../styled";
import { Container, Post, PostBackground, PostDescriptions, PostImages, TitleStyle } from "./styled";
import AniLink from "gatsby-plugin-transition-link/AniLink";

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
                    toes {
                        to
                      }
                    }
            }
        }
    `);

    const { title, descriptions, toes} = frontmatter;
        console.log(toes)
    return (
        <Container>
            <SectionTitle style={TitleStyle}>{title}</SectionTitle>
            <PostDescriptions>
                {descriptions.map((description, index) => {
                    return (
                        <AniLink key={description} to={toes[index].to}>
                            <Post>
                                <PostBackground>
                                    {React.createElement(PostImages[index])}
                                </PostBackground>
                                <PostDescription key={description}>
                                    {description}
                                </PostDescription>
                            </Post>
                        </AniLink>
                    )
                })}
            </PostDescriptions>
        </Container>
    );
};
export default TechnologiesWeUse;