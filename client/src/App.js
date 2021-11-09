
import React, { Fragment} from 'react';
import Landing from './components/Landing';
import BuyerHomePage from './components/Home/BuyerHomePage';
import SellerHomePage from './components/Home/SellerHomePage';
import BuyerProfile from './components/Profiles/BuyerProfile';
import SellerProfile from './components/Profiles/SellerProfile';
import './css/Styles.css';
import AddProduct from './components/Products/AddProduct';
import { Route, Switch } from 'react-router-dom';
import Products from './components/Buyer/Products';
import SingleProductPage from './components/SingleProductPage';

function App() {
  return (
        <Fragment>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/buyer/home" component={BuyerHomePage} />
            <Route exact path="/buyer/home/products" component={Products} />
            <Route exact path="/buyer/profile" component={BuyerProfile} />
            <Route exact path="/seller/profile" component={SellerProfile} />
            <Route exact path="/seller/products/add" component={AddProduct} />
            <Route exact path="/seller/home" component={SellerHomePage} />
            <Route exact path="/buyer/spp/:product_id" component={SingleProductPage}/>
          </Switch>
        </Fragment>

  );
}

export default App;
