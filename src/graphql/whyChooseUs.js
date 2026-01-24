import { gql } from "@apollo/client";

export const GET_WHY_CHOOSE_US_SECTION = gql`
query GetWhyChooseUsSection {
    pageBy(uri: "/home"){
        whyChooseUs{
            eyebrow
            heading
            paragraph
            specializations{
                icon{
                    node{
                        sourceUrl
                    }
                }
                heading
                text
            }
            rightImage{
                node{
                    sourceUrl
                }
            }
        }
    }
}      
`;