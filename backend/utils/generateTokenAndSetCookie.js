const jwt = require("jsonwebtoken");
/*
 * Ye function ek JWT token generate karta hai based on userId,
 * aur us token ko securely client ke browser me cookie ke form me set karta hai.
 */
const generateTokenAndSetCookie = (res, userId) => {

	// JWT token create kar rahe hain using userId as payload
	const token = jwt.sign(
		{ userId },                      // Payload: user ki ID
		process.env.JWT_SECRET,         // Secret key: environment variable se
		{ expiresIn: "7d" }             // Token 7 din ke liye valid rahega
	);

	// Token ko client ke browser me cookie ke form me set kar rahe hain
	res.cookie("token", token, {
		httpOnly: true,                // JavaScript se access nahi ho payega (security ke liye)
		sameSite: "strict",           // CSRF attacks se bachav ke liye
		maxAge: 7 * 24 * 60 * 60 * 1000 // Cookie ki expiration: 7 din (in milliseconds)
	});

	return token;
};

module.exports = generateTokenAndSetCookie;
