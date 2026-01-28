import { gql } from "@apollo/client";

export const GET_BRANDS = gql`
  query GetBrands {
    pageBy(uri: "/home") {
      brands {
        eyebrow
        heading
        logos {
          logo {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  }
`;
