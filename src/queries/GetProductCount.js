import gql from "graphql-tag";

const GET_PRODUCT_COUNT = gql`
  query GetProductCount($categoryName: String, $gender: ENUM_PRODUCT_GENDER, $reservedBy: String){
    productsCount (where: {category: {name: $categoryName}, gender: $gender, reservedBy: $reservedBy})
  }
`

export default GET_PRODUCT_COUNT