import React, { useState, Fragment } from "react";
import { useSelector } from "react-redux";
import Loader from "../layout/Loader/Loader";
import MetaData from "../layout/MetaData";
import "./Search.css";

const Search = ({ history }) => {
  const [keyword, setKeyword] = useState("");

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/products/${keyword}`);
    } else {
      history.push("/products");
    }
  };
  const {
    loading,
  } = useSelector((state) => state.products);
  return (
  // <Fragment>
  //    {loading ? (
  //     <Loader />
  //   ) : ( 
    <Fragment>
      <MetaData title="Search A Product -- ECOMMERCE" />
      <form className="searchBox" onSubmit={searchSubmitHandler}>
        <input
          type="text"
          placeholder="Search a Product ..."
          onChange={(e) => setKeyword(e.target.value)}
        />
        <input type="submit" value="Search" />
      </form>
    </Fragment>
    // )}
    //  </Fragment>
  );
};

export default Search;