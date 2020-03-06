import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

<<<<<<< HEAD
const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) 
  {
    return <Redirect to='/dashboard' />;
  }
=======
const Landing = ({}) => {
	// if (isAuthenticated) {
	// 	return <Redirect to="/dashboard" />;
	// }
>>>>>>> ef90b2222b2677ad2aa263711a910a239e841933

	return (
		<section className="landing">
			<section className="dark-overlay">
				<section className="landing-inner">
					<h1 className="x-large text-primary">Stock Management</h1>
					<p className="lead">
						This is a website for ordering and managing stock!
					</p>
					<section className="buttons">
						<Link to="/login" className="btn btn-primary">
							Login
						</Link>
					</section>
				</section>
			</section>
		</section>
	);
};

Landing.propTypes = {
	isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
	//	isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
