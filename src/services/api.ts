import axios from 'axios';
//https://dtmoney-omega.vercel.app
export const api = axios.create({
	baseURL: 'http://localhost:3000/api'
});
