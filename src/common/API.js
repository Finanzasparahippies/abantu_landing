import axios from 'axios'

const API = axios.create({
	baseURL: 'http://127.0.0.1:8000/api',
	//baseURL: 'https://masterorohermosillo.com:444/api',
	headers: {
		'Content-Type': 'application/json',
	}
})

export default API