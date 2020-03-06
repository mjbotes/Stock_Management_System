import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

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
};

Navbar.propTypes = {
	logout: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);
