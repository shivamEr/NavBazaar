const jwt = require("jsonwebtoken");
const User = require('../models/userModel')
/**
 * Middleware to verify JWT token from cookies.
 * Attaches the decoded userId to req if valid.
 */
const protectRoute = (req, res, next) => {
	// Retrieve token from cookies
	const token = req.cookies.token;

	// If no token is provided, deny access
	if (!token) {
		return res.status(401).json({
			success: false,
			message: "Unauthorized - no token provided"
		});
	}

	try {
		// Verify the token using the secret key
		const decoded = jwt.verify(token, process.env.JWT_SECRET);

		// If decoding fails, deny access
		if (!decoded) {
			return res.status(401).json({
				success: false,
				message: "Unauthorized - invalid token"
			});
		}

		// Attach user ID to request object
		req.userId = decoded.userId;

		// Proceed to the next middleware or route handler
		next();
	} catch (error) {
		// Handle token verification or server errors
		console.error("Error in verifyToken:", error);
		return res.status(500).json({
			success: false,
			message: "Server error"
		});
	}
};


const adminRoute = async (req, res, next) => {
	try{
		const user = await User.findById(req.userId);
		console.log(user, "adminRoute Hit");
		if(user.role === "admin"){
			next()
		}
		return res.status(403).json({
			success: false,
			message: "Forbidden - not an admin"
		});

	} catch (error) {
		// Handle token verification or server errors
		console.error("Error in verifyAdmin:", error);
		return res.status(500).json({
			success: false,
			message: "Server error"
		});
	}

}

module.exports = {protectRoute, adminRoute};
