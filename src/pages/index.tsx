import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Head from "../components/Head";
import Header from "../components/Header";
import DefaultLayout from "../components/Layout/DefaultLayout";
import ErrorBoundry from "../components/ErrorBoundry";
import "./normalize.scss";
import "./fonts.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const IndexPage: React.FC<any> = () => {
  const {
    header: { frontmatter },
  } = useStaticQuery(
    graphql`
      query {
        header: markdownRemark(frontmatter: { type: { eq: "header" } }) {
          frontmatter {
            promo
            description
            buttonText
            to
          }
        }
      }
    `
  );
  return (
    <React.Fragment>
      <Head pageTitle="Health Care" pathname="/" />
      <ErrorBoundry>
        <DefaultLayout>
          <Header frontmatter={frontmatter} />
        </DefaultLayout>
      </ErrorBoundry>
    </React.Fragment>
  );
};

export default IndexPage;