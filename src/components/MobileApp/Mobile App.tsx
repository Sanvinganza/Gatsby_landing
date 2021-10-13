import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { BlackMediumSquere, BlackSmallSquere, BlackSquere, Container, DescriptionContainer, DescriptionFooterStyle, DescriptionStyle, Phone, PhoneBackground, PostDescriptionStyle, Qoutes, QoutesStyle, RedBigSquare, SectionBody, SectionTitleStyle, YellowSquare } from "./styled";
import { Description, PostDescription, SectionTitle } from "../styled";

const MobilyApp: React.FC<any> = () => {
    const {
        MobilyApp: { frontmatter }
    } = useStaticQuery(
        graphql`
        query{
            MobilyApp: markdownRemark (frontmatter: {type: {eq: "MobilyApp"}}) {
                frontmatter {
                    title
                    titleDescription
                    description
                    descriptionFooter
                }
            }
        }
    `);
    
    const { title, titleDescription, description, descriptionFooter } = frontmatter;
    return (
        <Container>
            <SectionTitle style={SectionTitleStyle}>{title}</SectionTitle>
            <Description style={DescriptionStyle}>{titleDescription}</Description>
            <BlackSquere />
            <YellowSquare />
            <SectionBody>
                <PhoneBackground>
                    <Phone />
                </PhoneBackground>
                <DescriptionContainer>
                    <Qoutes />
                    <PostDescription style={PostDescriptionStyle}>{description}</PostDescription>
                    <Description style={DescriptionFooterStyle}>{descriptionFooter}</Description>
                </DescriptionContainer>
                <RedBigSquare />
                <BlackMediumSquere /> 
                <BlackSmallSquere />
            </SectionBody>
        </Container>
    )
}

export default MobilyApp;