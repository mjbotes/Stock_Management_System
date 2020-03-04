import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from '../auth/Register';
import Login from '../auth/Login';
import Home from '../home/Home';
import Alert from '../layout/Alert';
import NotFound from '../layout/NotFound';
import EditProducts from '../editProducts/EditProducts';
import Orders from '../orders/Orders';
import CustomerOrders from '../customerOrders/CustomerOrders';
import EditCustomers from '../editCustomers/EditCustomers';

const Routes = () => {
  return (
    <section className='container'>
      <Alert />
      <Switch>
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/editcustomers' component={EditCustomers} />
        <Route exact path='/editproducts' component={EditProducts} />
        <Route exact path='/orders' component={Orders} />
        <Route exact path='/customerorders' component={CustomerOrders} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
