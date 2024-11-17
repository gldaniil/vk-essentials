require('dotenv').config();
const API_REQUEST = process.env.API_VK_REQUEST;
const API_TOKEN = process.env.API_VK_TOKEN;
const API_VERSION = process.env.API_VK_VERSION;

module.exports = {
	API_REQUEST,
	API_TOKEN,
	API_VERSION,
};
