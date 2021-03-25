const { environment } = require('./config');
const isProduction = (environment === 'production');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const csurf = require('csurf');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const app = express();
const routes = require('./routes/index');

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
	}
}));
	//cookieParser will add the req.csrfToken and the XSRF-TOKEN 
	//methods to all HTTP requests with a '_csrf' header

//routes
app.use(routes);

module.exports = app;