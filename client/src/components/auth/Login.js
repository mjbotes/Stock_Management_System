import React, { Fragment, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    login(email, password);
  };

  if (isAuthenticated)
  {
    return <Redirect to='/home'/>;
  }

  return (
    <Fragment>
      <h1 className='x-large text-primary'>Sign In</h1>
      <p className='lead'>
        <i className='fas fa-user text-primary' /> Sign Into Your Account
      </p>
      <form className='form' onSubmit={e => onSubmit(e)}>
        <section className='form-group'>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            value={email}
            pattern="[[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            title="Please enter a valid email."
            onChange={e => onChange(e)}
            required
          />
        </section>
        <section className='form-group'>
          <input
            type='password'
            placeholder='Password'
            name='password'
            value={password}
            pattern="(?=^.{8,}$)((?=.*\d)(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$" 
		        title="Must contain at least one number,one uppercase, one lowercase letter, one special character and at least 8 or more characters"
            onChange={e => onChange(e)}
            minLength='6'
          />
        </section>
        <input type='submit' className='btn btn-primary' value='Login' />
      </form>
    </Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { login }
)(Login);
