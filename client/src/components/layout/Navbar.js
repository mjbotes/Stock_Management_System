import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

<<<<<<< HEAD
const Navbar = ({ auth: { isAuthenticated, Admin, loading }, logout }) => {
  const admin = (
    <ul>
      <li>
        <Link to='/editcustomers'>Edit Customers</Link>
      </li>
      <li>
        <Link to='/editproducts'>Edit Products</Link>
      </li>
      <li>
        <Link to='/orders'>Orders</Link>
      </li>
      <li>
        <a onClick={logout} href='#!'>
          <i className='fas fa-sign-out-alt text-primary' />{' '}
          <span className='hide-sm'>Logout</span>
        </a>
      </li>
    </ul>
  );
=======
const Navbar = ({ logout }) => {
	const admin = (
		<ul>
			<li>
				<Link to="/editcustomers">Edit Customers</Link>
			</li>
			<li>
				<Link to="/editproducts">Edit Products</Link>
			</li>
			<li>
				<Link to="/orders">Orders</Link>
			</li>
			<li>
				<a onClick={logout} href="#!">
					<i className="fas fa-sign-out-alt text-primary" />{" "}
					<span className="hide-sm">Logout</span>
				</a>
			</li>
		</ul>
	);
>>>>>>> ef90b2222b2677ad2aa263711a910a239e841933

	const manager = (
		<ul>
			<li>
				<Link to="/customerorders">My Orders</Link>
			</li>
			<li>
				<a onClick={logout} href="#!">
					<i className="fas fa-sign-out-alt text-primary" />{" "}
					<span className="hide-sm">Logout</span>
				</a>
			</li>
		</ul>
	);

<<<<<<< HEAD
  if (isAuthenticated)
  {
    if (Admin == 1)
    {
      return (
        <nav className='navbar bg-dark'>
          <h1>
            <Link to='/home'>
              <i className='fas fa-code text-primary' /> StockManagement
            </Link>
          </h1>
          {admin}
        </nav>
      );
    }
    else
    {
      return (
        <nav className='navbar bg-dark'>
          <h1>
            <Link to='/home'>
              <i className='fas fa-code text-primary' /> StockManagement
            </Link>
          </h1>
          {manager}
        </nav>
      );
    }
  }
  else
  return (
    <nav className='navbar bg-dark'>
      <h1>
        <Link to='/'>
          <i className='fas fa-code text-primary' /> StockManagement
        </Link>
      </h1>
    </nav>
  );
=======
	return (
		<nav className="navbar bg-dark">
			<h1>
				<Link to="/home">
					<i className="fas fa-code text-primary" /> StockManagement
				</Link>
			</h1>
			{admin}
			{/* {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )} */}
		</nav>
	);
>>>>>>> ef90b2222b2677ad2aa263711a910a239e841933
};

Navbar.propTypes = {
	logout: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);
