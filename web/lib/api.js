import fetch from 'isomorphic-unfetch';

const API_BASE_URL = 'http://localhost:3001';

const baseRequest = (url, options) =>
    fetch(`${API_BASE_URL}${url}`, options);

const get = (url) =>
    baseRequest(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },

    });

const post = (url, body) =>
    baseRequest(url, {
        cors: true,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },

        body: JSON.stringify(body),
    });

export default { get, post }

