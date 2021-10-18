import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Description, } from '../styled';
import { useSpring, animated, config } from "react-spring";

import {
  Container,
  BlackRectangle,
  FormPurpleRectangle,
  FormRedRectangle,
  Form,
  FormInputBox,
  FormInput,
  FormTextarea,
  FormButton,
  DescriptionStyle,
  YellowRectangle,
} from "./styled";

const SendForm: React.FC<any> = () => {

    const {
        SendForm: { frontmatter }
    } = useStaticQuery(
        graphql`
        query{
            SendForm: markdownRemark (frontmatter: {type: {eq: "SendForm"}}) {
                frontmatter {
                    description
                }
            }
        }
    `);

    const { description } = frontmatter;

      return (
        <Container>
          <Form>
            <Description style={DescriptionStyle}>
              {description}
            </Description>
            <FormInputBox>
              <FormInput placeholder="Name" />
              <FormInput placeholder="E-mail" />
            </FormInputBox>
            <FormTextarea placeholder="Message" />
            <FormButton>
              Send
            </FormButton>
          </Form>
          <BlackRectangle>
          </BlackRectangle>
          <FormPurpleRectangle />
          <FormRedRectangle />
          <YellowRectangle />
          <YellowRectangle style={{width: '169px', height: '46px', right: '424px', bottom: '247px'}}/> 
        </Container>
      );
};

export default SendForm;