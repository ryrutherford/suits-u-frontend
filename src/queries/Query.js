import React from "react";
import { useQuery } from "@apollo/react-hooks";

const Query = ({ children, query, gender, categoryName, reservedBy}) => {
  const { data, loading, error } = useQuery(query, {
    variables: { 
      gender: gender,
      categoryName: categoryName,
      reservedBy: reservedBy,
    }
  });
  console.log(data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {JSON.stringify(error)}</p>;
  return children({ data });
};

export default Query;