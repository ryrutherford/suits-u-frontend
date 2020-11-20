import gql from "graphql-tag";

const GET_SINGLE_PRODUCT = gql`
  query GetSingleProduct($id: ID!){
    products (where: {id: $id, reservedBy: "NONE"}) {
      image {
        url
      }
      originalPrice
      price
      shortDescription
      longDescription
      measurements
      brand
      gender
      condition
      category {
        name
      }
      sizes {
        size
      }
      id
    }
  }
`

export default GET_SINGLE_PRODUCT