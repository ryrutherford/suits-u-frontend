import React from "react";
import { useQuery } from "@apollo/react-hooks";
import ProductSkeleton from "../common/ProductSkeleton";


const Query = ({ children, query, gender, sort, categoryName, reservedBy, numProducts}) => {
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
    }
  });

  if (loading){ 
    return (
      <ProductSkeleton numProducts={numProducts ? numProducts : 4}/>
    );
  }
  if (error) {
    console.log(error);
    return (
      <span className="auth-error">Products can't be loaded</span>
    );
  }
  return children({ data });
};

export default Query;