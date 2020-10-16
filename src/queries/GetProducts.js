import gql from "graphql-tag";

const GET_PRODUCTS = gql`
  query GetProducts($categoryName: String, $gender: ENUM_PRODUCT_GENDER, $reservedBy: String){
    products (where: {category: {name: $categoryName}, gender: $gender, reservedBy: $reservedBy}) {
      image {
        formats
      }
      price
      quantity
      description
      brand
      gender
      reservedBy
      category {
        name
      }
      size {
        size
      }
    }
  }
`

export default GET_PRODUCTS