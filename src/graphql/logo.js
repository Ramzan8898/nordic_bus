import { gql } from "@apollo/client";

export const GET_SITE_LOGO = gql`
  query GetLogo {
    mediaItem(id: 55, idType: DATABASE_ID) {
      sourceUrl
      altText
    }
  }
`;
