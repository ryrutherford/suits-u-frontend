import React from "react";
import { useQuery } from "@apollo/react-hooks";


const Query = ({ children, query, gender, sort, categoryName, reservedBy, id, bag, limit, start}) => {
  if(gender === 'men'){
    gender = 'Men';
  }
  else if(gender === 'women'){
    gender = 'Women';
  }
  const { data, loading, error } = useQuery(query, {
    variables: { 
      gender: gender,
      categoryName: categoryName,
      sort: sort,
      reservedBy: reservedBy,
      id: id,
      bag: bag,
      limit: limit,
      start: start
    }
  });

  if (loading){
    return (<></>);
  }
  if (error) {
    console.log(error);
    return (
      <span className="auth-error">Query Error</span>
    );
  }
  return children({ data });
};

export default Query;