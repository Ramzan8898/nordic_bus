import { gql } from "@apollo/client";

export const GET_FLEET_SECTION = gql`
query GetFleetSection {
    pageBy(uri: "/home") {
        fleet {
            eyebrow
            heading
            fleets{
                fleetImage{
                    node{
                    sourceUrl
                    }
                }
                fleetHeading
                fleetSlug
                fleetDescription
                fleetBtn {
                    ... on AcfLink{
                        url
                        title
                    }   
                }
            }
            buttonUrl{
                url
                title
            }
        }
    } 
}
`;
