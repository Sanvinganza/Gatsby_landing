import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import {
    WeWorkWithWrapper,
    WeWorkWithTitle,
    WeWorkWithPostsStyle,
    WeWorkWithTitleStyle,
    WeWorkWithPostTextStyle,
    WeWorkWithPostsImages,
    WeWorkWithPostBackground,
    WeWorkWithPost
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
        <WeWorkWithWrapper>
            <WeWorkWithTitle style={WeWorkWithTitleStyle}>{title}</WeWorkWithTitle>
            {WeWorkWithPostsImages.map( (image, index) => {
                return (
                    <WeWorkWithPost key={index} style={WeWorkWithPostsStyle[index]}>
                        <WeWorkWithPostBackground> 
                            {React.createElement(image)}
                        </WeWorkWithPostBackground>
                        <WeWorkWithPostTextStyle>
                            {descriptions[index]}
                        </WeWorkWithPostTextStyle>
                    </WeWorkWithPost>
                )
            })}
        </WeWorkWithWrapper>
    );
};

export default WeWorkWith;