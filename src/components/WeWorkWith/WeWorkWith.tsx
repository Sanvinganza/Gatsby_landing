import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { PostDescription, SectionTitle } from '../styled';
import {
    Container,
    PostsStyle,
    TitleStyle,
    PostsImages,
    PostBackground,
    PostBackgroundStyle
} from './styled'

const WeWorkWith: React.FC<any> = () => {

    const { 
        WeWorkWith: {frontmatter} 
    } = useStaticQuery(
        graphql`
        query{
            WeWorkWith: markdownRemark (frontmatter: {type: {eq: "WeWorkWith"}}) {
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
            {PostsImages.map( (image, index) => {
                return (
                    <PostDescription key={index} style={PostsStyle[index]}>
                        <PostBackground css={PostBackgroundStyle}> 
                            {React.createElement(image)}
                        </PostBackground>
                        <PostDescription>
                            {descriptions[index]}
                        </PostDescription>
                    </PostDescription>
                )
            })}
        </Container>
    );
};

export default WeWorkWith;