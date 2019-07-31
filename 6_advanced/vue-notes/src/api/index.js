import axios from 'axios';

function createInstance(options) {
	return axios.create({
		baseURL: 'http://localhost:3000',
		...options,
	});
}

let auth = createInstance({
	timeout: 5000,
});
let posts = createInstance({
	headers: {
		Authorization: '$a1e2',
	},
});

export { auth, posts };
// let products = createInstance({

// })

// instance.post('/signup');
// axios.post('http://localhost:3000/signup');
