import axios from "axios";
import { setAlert } from "./alert";

import {
	GET_PRODUCT,
	GET_PRODUCTS,
	PRODUCT_ERROR,
	UPDATE_PRODUCT,
	CLEAR_PRODUCT,
	CLEAR_PRODUCTS
} from "./types";

// Get current users profile
export const getCurrentProduct = () => async dispatch => {
	try {
		const res = await axios.get("/api/profile/me");

		dispatch({
			type: GET_PRODUCT,
			payload: res.data
		});
	} catch (err) {
		dispatch({
			type: PRODUCT_ERROR,
			payload: {
				msg: err.response.statusText,
				status: err.response.status
			}
		});
	}
};

// Get all profiles
export const getProducts = () => async dispatch => {
	dispatch({ type: CLEAR_PRODUCTS });

	try {
		const res = await axios.get("/api/product/");
		dispatch({
			type: GET_PRODUCTS,
			payload: res.data.recordset
		});
	} catch (err) {
		dispatch({
			type: PRODUCT_ERROR,
			payload: {
				msg: err.response.statusText,
				status: err.response.status
			}
		});
	}
};

// Create or update profile
export const createProduct = (
	formData,
	history,
	edit = false
) => async dispatch => {
	try {
		const config = {
			headers: {
				"Content-Type": "application/json"
			}
		};

		const res = await axios.post("/api/profile", formData, config);

		dispatch({
			type: GET_PRODUCT,
			payload: res.data
		});

		dispatch(
			setAlert(edit ? "Product Updated" : "Product Created", "success")
		);

		if (!edit) {
			history.push("/dashboard");
		}
	} catch (err) {
		const errors = err.response.data.errors;

		if (errors) {
			errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
		}

		dispatch({
			type: PRODUCT_ERROR,
			payload: {
				msg: err.response.statusText,
				status: err.response.status
			}
		});
	}
};

// Delete account & profile
export const deleteProduct = () => async dispatch => {
	if (window.confirm("Are you sure? This can NOT be undone!")) {
		try {
			await axios.delete("/api/profile");

			dispatch({ type: CLEAR_PRODUCT });

			dispatch(setAlert("This Product has been permanantly deleted"));
		} catch (err) {
			dispatch({
				type: PRODUCT_ERROR,
				payload: {
					msg: err.response.statusText,
					status: err.response.status
				}
			});
		}
	}
};
