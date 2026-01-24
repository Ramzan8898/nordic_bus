import { gql } from "@apollo/client";

export const GET_REPUTATION_SECTION = gql`
query GetReputationSection {
    pageBy(uri: "/home"){
        reputation{
        counter{
                counterText
                counterValue
            }
            leftImage{
                node{
                    sourceUrl
                    altText
                }
            }
            eyebrow
            heading
            para1
            para2
            para3
            btnLink{
                ... on AcfLink{
                    url
                    title
                }
            }
            
        }
    }
}
`;