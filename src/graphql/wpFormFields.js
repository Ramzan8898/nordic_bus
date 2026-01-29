import { gql } from "@apollo/client";

export const GET_WP_FORM_FIELDS = gql`
query GetWPFormFields {
    wpFormFields(formId: 170) {
        id
        label
        type
        required
    }
}
`;