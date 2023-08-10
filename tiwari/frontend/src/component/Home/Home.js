import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/all";
import "./Home.css";
import ProductCard from "./ProductCard.js";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
// import Product from "./Products";

const product={
  name:"bbl",
  image:[{url:"https://i.ibb.co/DRST11n/1.webp"}],
  price:"123",
  _id:"abhhi"
}
const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  // const { products } = useSelector((state) => state.products);
  const { loading, error, products } = useSelector((state) => state.products);

  // useEffect(() => {
  //   // if (error) {
  //   //   alert.error(error);
  //   //   dispatch(clearErrors());
  //   // }
  //   dispatch(getProduct());
  // // }, [dispatch, alert]);
  // }, []);
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);
  // }, [dispatch, alert]);

  return (
    <Fragment>
      {loading ? (
       <Loader /> 
       ) : ( 
        <Fragment>
          <MetaData title="ECOMMERCE" />

          <div className="banner">
            <p>Welcome to Ecommerce</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>

            <a href="#container">
              <button>
                Scroll <CgMouse />
              </button>
            </a>
          </div>

          <h2 className="homeHeading">Featured Products</h2>

          <div className="container" id="container">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
                // <Product product={product} />
                ))}
                {/* <Product product={product} /> */}
          </div>
        </Fragment>
      ) 
      }
    </Fragment>
  );
};

export default Home;