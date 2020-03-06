import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { getProducts } from "../../actions/products";

const Home = ({ getProducts, Products, state }) => {
	useEffect(() => {
		getProducts();
	}, [getProducts]);

	const onSubmit = async e => {
		e.preventDefault();
		// order(OrderProducts);
	};

	// if (!isAuthenticated)
	// {
	//   return <Redirect to='/login' />;
	// }

	console.log(Products);

	var i = 0;
	var table = [];
	table.push(
		<tr class="lead text-primary">
			<th>Name</th>
      <th>Category</th>
      <th>Manufacturer</th>
			<th>Price</th>
			<th>Stock</th>
			<th>Add To Cart</th>
		</tr>
	);
	console.log(state);
	Products.products.map(product =>
		table.push(
			<tr>
				<td>{product.ProductName}</td>
        <td>{product.CategoryName}</td>
        <td>{product.Manufacture}</td>
				<td>R{product.Price}</td>
				<td>{product.WarehouseStockQuantity}</td>
				<td>
					<input
						type="text"
						class="form"
						id={i}
						defaultValue="0"
					></input>
				</td>
			</tr>
		)
	);
	i++;

	return (
		<Fragment>
			<h1 className="x-large text-primary">Products</h1>
			<br />
			<form className="form" onSubmit={e => onSubmit(e)}>
				<input type="text"></input>
				<br />
				<div className="">
					<button className="btn btn-success" type="submit">
						Search
					</button>
				</div>
			</form>
			<br />
			<br />
			<br />
			<form className="form" onSubmit={e => onSubmit(e)}>
				<table>{table}</table>
				<br />
				<div className="">
					<button className="btn btn-success" type="submit">
						Order
					</button>
				</div>
			</form>
		</Fragment>
	);
};

Home.propTypes = {
	getProducts: PropTypes.func.isRequired,
	Products: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	isAuthenticated: state.auth.isAuthenticated,
	Products: state.Products,
	state: state
});

export default connect(mapStateToProps, { getProducts })(Home);
