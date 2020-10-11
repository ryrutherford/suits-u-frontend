import gql from "graphql-tag";

const CATEGORIES_QUERY = gql`
  query Categories {
    categories {
      category
    }
  }
`;

export default CATEGORIES_QUERY;