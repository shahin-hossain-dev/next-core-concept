import React from "react";

const CategoryDetailsPage = ({ params }) => {
  console.log(params);
  if (params.features.length === 3) {
    return <div>variant 3</div>;
  }
  if (params.features.length === 2) {
    return <div>example 2</div>;
  }
  if (params.features.length === 1) {
    return <div>feature1</div>;
  }
  return (
    <div className="h-screen">
      <h2>Category Details Page</h2>
    </div>
  );
};

export default CategoryDetailsPage;
