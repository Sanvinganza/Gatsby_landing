import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { SectionTitle } from '../styled';
import { Container, SectionTitleStyle } from './styled';

const SaveTime: React.FC<any> = () => {

    
    const {
        SaveTime: { frontmatter }
    } = useStaticQuery(
        graphql`
        query{
            SaveTime: markdownRemark (frontmatter: {type: {eq: "SaveTime"}}) {
                frontmatter {
                    description
                }
            }
        }
    `);

    const { description } = frontmatter;


    return(
        <Container>
            <SectionTitle style={SectionTitleStyle}>
                {description}
            </SectionTitle>
        </Container>
    )
};

export default SaveTime;