import { gql } from "@apollo/client";

export const GET_ABOUT = gql`
    query GetAbout {
        pageBy(uri: "about") {
            about {
                heading
                para
                image{
                    node{
                        sourceUrl
                        altText
                    }
                }
                grid {
                    text
                    icon{
                        node{
                            sourceUrl
                            altText
                        }
                    }
                }

            }
        }
    }
`;