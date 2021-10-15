import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { PostDescription, SectionTitle } from "../styled";
import { Arrows, BackArrow, CardContainer, Container, NextArrow, SectionTitleStyle, SliderContainer, TitleContainer } from "./styled";
import Img from "gatsby-image";
import {useState} from 'react';
import { number } from "prop-types";

const OurTeam: React.FC<any> = () => {
    const {
        OurTeam: { frontmatter }
    } = useStaticQuery(
        graphql`
    query{
        OurTeam: markdownRemark(frontmatter: { type: { eq: "OurTeam" } }) {
            frontmatter {
                title
              cards {
                name
                position
                image_on {
                  childImageSharp {
                    fixed(height: 350, width: 225) {
                      height
                      width
                      src
                    }
                  }
                }
                image {
                  childImageSharp {
                    fixed(width: 225, height: 300) {
                      height
                      width
                      src
                    }
                  }
                }
              }
            }
          }
    }
`);
    const { title, cards } = frontmatter;
    const slider = React.useRef(null);

    interface IState {
        activeSlide: number;
    }

    const [state, setState] = useState<IState>({
        activeSlide: 0
    });
    
    const settings = {
        className: "center",
        focusOnSelect: true,
        infinite: true,
        centerMode: true,
        arrows: false,
        speed: 2000,
        slidesToShow: 3,
        autoplay: true,
        slidesToScroll: 1,
        centerPadding:"25px",
        beforeChange: (current: number, next: number) => setState({ activeSlide: next }),
        afterChange: (current: number) => setState({ activeSlide: current })
    };

    interface ICard {
        name: string;
        position: string;
        image: any;
        image_on: any;
    };

    return (
        <Container>
            <TitleContainer>
                <SectionTitle 
                    style={SectionTitleStyle}>
                        {title}
                </SectionTitle>
                <Arrows>
                    <BackArrow onClick={() => slider?.current?.slickPrev()}/>
                    <NextArrow onClick={() => slider?.current?.slickNext()}/>
                </Arrows>
            </TitleContainer>
            <SliderContainer 
                ref={slider} 
                {...settings} 
                >
                {cards.map((card: ICard,index: number) => {
                    return(
                        <CardContainer key={card.name}>
                            {
                                state.activeSlide === index?
                                <>
                                    <SectionTitle>{card.name}</SectionTitle>
                                    <PostDescription>{card.position}</PostDescription>
                                    <Img fixed={card.image_on.childImageSharp.fixed}/> 
                                </>
                                :
                                <Img fixed={card.image.childImageSharp.fixed} />
                            }
                        </CardContainer>
                    )
                })}
            </SliderContainer>
        </Container>
    )
}

export default OurTeam;