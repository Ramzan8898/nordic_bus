import { gql } from "@apollo/client";

export const GET_HERO_SECTION = gql`
query GetHeroSection {
  pageBy(uri: "/home") {
    heroSection {
        backgroundImage {
            node {
                sourceUrl
                altText
            }
        }
      eyebrowText
      primaryHeading
      description
rightVideo {
        node {
          mediaItemUrl
          title
          caption
          description
        }
      }
    }
  }
}
`;