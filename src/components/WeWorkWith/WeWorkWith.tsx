import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import {
    WeWorkWithWrapper,
    WeWorkWithTitle,
    WeWorkWithItemsStyle,
    WeWorkWithTitleStyle,
    WeWorkWithItemTextStyle,
    Icons,
    WeWorkWithItemBackground
} from './styled';

const WeWorkWith: React.FC<any> = () => {

    const { 
        WeWorkWith: {frontmatter} 
    } = useStaticQuery(
        graphql`
        query{
            WeWorkWith: markdownRemark (frontmatter: {type: {eq: "WeWorkWith"}}) {
                frontmatter {
                    items
                    title
                }
            }
        }
    `);

    const { title, items } = frontmatter;

    return (
        <WeWorkWithWrapper>
            <WeWorkWithTitle style={WeWorkWithTitleStyle}>{title}</WeWorkWithTitle>
            {Icons.map( (icon, index) => {
                return (
                    <div  key={index} style={WeWorkWithItemsStyle[index]}>
                        <WeWorkWithItemBackground> 
                            {React.createElement(icon)}
                        </WeWorkWithItemBackground>
                        <WeWorkWithItemTextStyle>{items[index]}</WeWorkWithItemTextStyle>
                    </div>
                )
            })}
        </WeWorkWithWrapper>
    );
};

export default WeWorkWith;