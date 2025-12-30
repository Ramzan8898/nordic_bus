import { gql } from "@apollo/client";

export const GET_HERO_SECTION = gql`
query GetHeroSection {
  pageBy(uri: "/home") {
    heroSection {
      eyebrowText
      primaryHeading
      highlightedHeading
      description
      firstBtn {
        title
        url
      }
      secondBtn {
        title
        url
      }
      rightImage {
  node {
    sourceUrl
    altText
  }
}

    }
  }
}
`;