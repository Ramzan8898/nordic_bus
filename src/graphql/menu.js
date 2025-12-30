import { gql } from '@apollo/client';

export const GET_MENU = gql`
    query GetMenu{
        menuItems{
            nodes{
                id
                label
                uri
            }
        }
    }
`