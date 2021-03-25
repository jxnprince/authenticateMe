const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const csurf = require('csurf')
const cookieParser = require('cookie-parser')
const { ValidationError } = require('sequelize')
const helmet = require('helmet')
const { environment } = require('./config')
const routes = require('./routes/index')
const isProduction = (environment === 'production')
const app = express()

//Middleware
	//Functional middleware
app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.json());

	//Pre-request security middleware
if (!isProduction) app.use(cors());
app.use(helmet({ contentSecurityPolicy: false }))
app.use(csurf({ cookie: {
		secure: isProduction,
		sameSite: isProduction && "Lax",
		httpOnly: true
	} //cookieParser will add the req.csrfToken and the XSRF-TOKEN 
})); //methods to all HTTP requests with a '_csrf' header

//Routes
app.use(routes);

//Error Handling
	//Resource Not Found Error-Handler
app.use((_req, _res, next) => {
	const err = new Error("The requested resource couldn't be found.")
	err.title = "404 - Resource Not Found"
	err.errors = ["The requested resource couldn't be found."]
	err.status = 404
	next(err);
});

	//Sequelize Error-Handler
app.use((err, _req, _res, next) => {
  // check if error is a Sequelize error:
  if (err instanceof ValidationError) {
    err.errors = err.errors.map((e) => e.message)
    err.title = 'Validation error'
	};
  next(err);
});

	//Error Formatter Error-Handler
app.use((err, _req, res, _next) => {
	res.status(err.status || 500);
	console.error(err);
	res.json({
		title: err.title || 'Server Error',
		message: err.message,
		errors: err.errors,
		stack: isProduction ? null : err.stack,
	});
});

module.exports = app;