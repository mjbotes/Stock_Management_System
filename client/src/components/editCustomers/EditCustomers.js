import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const EditCustomers = ({isAuthenticated, Admin }) => {

  const onSubmit = async e => {
    e.preventDefault();
  };

  // if (!isAuthenticated) {
  //   return <Redirect to='/login' />;
  // }

  // if (Admin != 1) {
  //   return <Redirect to='/notfound' />;
  // }

  return (
    <Fragment>
        <h1 className='x-large text-primary'>Add A Customer</h1>
        <p className='lead'>
          <i className='fas fa-user text-primary' /> Enter The Email Address Of The Customer You Want To Add.
        </p>
        <form className='form' onSubmit={e => onSubmit(e)}>
          <div className='form-group'>
            <input
              type='email'
              placeholder='Email Address'
              name='email'
              pattern="[[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              title="Please enter a valid email."
              required
            />
          </div>
          <br />
          <div className=""><button className="btn btn-success" type="submit">Add</button></div>
        </form>
        {/* <br />
        <h1 className='x-large text-primary'>Remove A Customer</h1>
        <p className='lead'>
          <i className='fas fa-user text-primary' /> Enter The Email Address Of The Customer You Want To Remove.
        </p>
        <form className='form' onSubmit={e => onSubmit(e)}>
          <div className='form-group'>
            <input
              type='email'
              placeholder='Email Address'
              name='email'
              pattern="[[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              title="Please enter a valid email."
              required
            />
          </div>
          <br />
          <div className=""><button className="btn btn-success" type="submit">Remove</button></div>
        </form> */}
    </Fragment>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  {}
)(EditCustomers);