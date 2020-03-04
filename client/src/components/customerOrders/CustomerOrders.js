import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

const CustomerOrders = ({isAuthenticated }) => {

  const onSubmit = async e => {
    e.preventDefault();
  };

  // if (!isAuthenticated) {
  //   return <Redirect to='/login' />;
  // }

  // if (Admin) {
  //   return <Redirect to='/notfound' />;
  // }

  return (
    <Fragment>
        <h1 className='x-large text-primary'>My Orders</h1>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  {}
)(CustomerOrders);