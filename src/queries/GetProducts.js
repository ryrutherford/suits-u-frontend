import gql from "graphql-tag";

const GET_PRODUCTS = gql`
  query GetProducts($categoryName: String, $gender: ENUM_PRODUCT_GENDER, $sort: String, $reservedBy: String){
    products (sort: $sort, where: {category: {name: $categoryName}, gender: $gender, reservedBy: $reservedBy}) {
      image {
        formats
      }
      price
      shortDescription
      longDescription
      brand
      gender
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