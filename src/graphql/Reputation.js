import { gql } from "@apollo/client";

export const GET_REPUTATION_SECTION = gql`
query GetReputationSection {
    pageBy(uri: "/home"){
        reputation{
            leftImage{
                node{
                    sourceUrl
                    altText
                }
            }
        }
    }
}
`;