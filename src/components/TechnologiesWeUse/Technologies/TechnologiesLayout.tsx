import { Button } from '@theme-ui/components';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { ButtonText, Description, PostDescription, SectionTitle, __purple } from '../../styled';
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { Container } from '../styled';

const TechnologiesLayout: React.FC<any> = ({index}) => {
  const {
    TechnologiesLayout: { frontmatter: { technologies } }
  } = useStaticQuery(
    graphql`
    query{
        TechnologiesLayout: markdownRemark(frontmatter: { type: { eq: "TechnologiesLayout" } }) {
            frontmatter {
              technologies {
                description
                title
                url
              }
            }
          }
    }
  `);
  const PostDescriptionStyle = {
    maxWidth: '500px',
  }
    return (
    <Container>
      <SectionTitle>{technologies[index].title}</SectionTitle>
      <PostDescription style={PostDescriptionStyle}>{technologies[index].description}</PostDescription>
      <Description><a href={technologies[index].url}>{technologies[index].url}</a></Description>
      <AniLink to="/">
        <Button backgroundColor={__purple}>BACK</Button>
      </AniLink>
    </Container>
  );
};

export default TechnologiesLayout;
