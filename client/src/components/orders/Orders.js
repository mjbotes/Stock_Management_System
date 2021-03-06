import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

const Orders = ({isAuthenticated, Admin }) => {

  const onSubmit = async e => {
    e.preventDefault();
  };

  // if (!isAuthenticated) 
  // {
  //   return <Redirect to='/login' />;
  // }

  // if (Admin != 1) 
  // {
  //   return <Redirect to='/notfound' />;
  // }

  return (
    <Fragment>
        <h1 className='x-large text-primary'>Orders</h1>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  {}
)(Orders);