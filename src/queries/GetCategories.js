import gql from "graphql-tag";

const GET_CATEGORIES = gql`
  query GetCategories($gender: ENUM_PRODUCT_GENDER, $reservedBy: String){
    products (where: {gender: $gender, reservedBy: $reservedBy}) {
      category {
        name
      }
    }
  }
`

export default GET_CATEGORIES