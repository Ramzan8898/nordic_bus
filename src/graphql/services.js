import { gql } from "@apollo/client";

export const GET_SERVICES = gql`
    query GetServices {
        pageBy(uri: "services") {
            services{
                service{
                    heading
                    content
                    image{
                        node {
                            sourceUrl
                            altText
                        }
                    }
                }
                text
                points{
                    point
                }
            }
        }
    }
`;