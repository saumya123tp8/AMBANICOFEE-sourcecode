
import './App.css';
//npm i axios is for backend connectivity
import { useSelector } from "react-redux";
import Header from"./component/layout/header/Header.js"
import Footer from"./component/layout/footer/Footer.js"
import {BrowserRouter as Router, Route,Switch,Routes} from "react-router-dom"
import webfont from"webfontloader"
import React from 'react';
import Home from "./component/Home/Home.js"
import ProductDetails from "./component/Product/ProductDetails.js"
import Products from "./component/Product/Products.js"
import Search from "./component/Product/Search.js"
import Loader from './component/layout/Loader/Loader';
import { PRODUCT_DETAILS_FAIL } from './constants/productConstants';
import LoginSignUp from './component/user/LoginSignUp';
import About from './component/About/About';
import store from "./store";
import { loadUser } from './actions/userAction';
import UserOptions from './component/layout/header/UserOptions';
// const [mode, setMode] = useState("light");
// import { getProductDetails } from './actions/productAction';
//use effect is used for reload data before page load
function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);
React.useEffect(()=>{
webfont.load({
  google:{
    families:["Roboto","chilanka"],
  },
});
store.dispatch(loadUser());
},[])
  return (
    <Router> 

      <Header/>
          {/* <Routes> */}
            <Switch>
            (isAuthenticated)&&<UserOptions user={user}/>
            <Route exact path="/" component={Home} />
            <Route exact path="/sad" component={Loader} />
            <Route exact path="/product/:id" component={ProductDetails} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/products/:keyword" component={Products} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/login" component={LoginSignUp} />
            <Route exact path="/about" component={About} />
            {/* <Route epath="/Home" element={<Home/>} /> */}
            {/* <Route path="/" element={Home} /> */}

            </Switch>
          {/* </Routes> */}
      <Footer/>

   </Router>
  );
}

export default App;
