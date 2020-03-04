
import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const Home = ({ home, isAuthenticated }) => {

  if (isAuthenticated) {
    return <Redirect to='/' />;
  }

  return (
    <Fragment>
        <h2>Table here</h2>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { home }
)(Home);