import axios from 'axios';
//https://dtmoney-omega.vercel.app
export const api = axios.create({
	baseURL: 'https://dtmoney-omega.vercel.app/api'
});
