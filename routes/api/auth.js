const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const auth = require("../../middleware/auth");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator");
const db_conn = require("../../database");

const User = require("../../models/User");

// @route    GET api/auth
// @desc     Get user by token
// @access   Private
router.get("/", auth, async (req, res) => {
	try {
		const user = db_conn.executeQuery(
			`SELECT [UserID],[Name],[Email],[IsAdmin] FROM [dbo].[Users] WHERE UserID = ${req.user.id}`
		);
		res.json(user);
	} catch (err) {
		console.error(err.message);
		res.status(500).send("Server Error");
	}
});

// @route    POST api/auth
// @desc     Authenticate user & get token
// @access   Public
router.post(
	"/",
	[
		check("email", "Please include a valid email").isEmail(),
		check("password", "Password is required").exists()
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const { email, password } = req.body;

		try {
			let user = db_conn.executeQuery(
				`SELECT [UserID],[Name],[Email],[IsAdmin],[password] FROM [dbo].[Users] WHERE Email = ${email}`
			);

			if (!user) {
				return res
					.status(400)
					.json({ errors: [{ msg: "Invalid Credentials" }] });
			}

			const isMatch = await bcrypt.compare(password, user.password);

			if (!isMatch) {
				return res
					.status(400)
					.json({ errors: [{ msg: "Invalid Credentials" }] });
			}

			const payload = {
				user: {
					id: user.id
				}
			};

			jwt.sign(
				payload,
				config.get("jwtSecret"),
				{ expiresIn: 360000 },
				(err, token) => {
					if (err) throw err;
					res.json({ token });
				}
			);
		} catch (err) {
			console.error(err.message);
			res.status(500).send("Server error");
		}
	}
);

router.post("/login", (req, res) => {
	user.login(req.body.username, req.body.password, function(result) {
		if (result) {
			jwt.sign(
				result,
				config.get("jwtsecret"),
				{ expiresIn: 3000 },
				(err, token) => {
					if (err) throw err;
					res.json({ token });
				}
			);
		} else {
			res.send("Username/Password incorrect!");
		}
	});
});

// Post register data
router.post("/register", (req, res, next) => {
	// prepare an object containing all user inputs.
	let userInput = {
		username: req.body.username,
		fullname: req.body.fullname,
		password: req.body.password
	};

	user.create(userInput, function(lastId) {
		if (lastId) {
			user.find(lastId, function(result) {
				jwt.sign(
					result,
					config.get("jwtsecret"),
					{ expiresIn: 3000 },
					(err, token) => {
						if (err) throw err;
						res.json({ token });
					}
				);
			});
		} else {
			res.status(400).send("Server Errord");
		}
	});
});

// router.get('/loggout', (req, res, next) => {

//     if(req.session.user) {

//         req.session.destroy(function() {
//             res.redirect('/');
//         });
//     }
// });

module.exports = router;
