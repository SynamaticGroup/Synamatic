import axios from 'axios';

var baseURL;
// if (process.env.REACT_APP_ENVIRONMENT && process.env.REACT_APP_ENVIRONMENT === 'PRODUCTION') {
//     baseURL = process.env.REACT_APP_API_BASE_URL;
// } else {
//     baseURL = 'http://127.0.0.1:8000';
// }
baseURL = 'https://backend-michael30.herokuapp.com/';

const api = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json'
    }
});

export default class API {
    getMovies = async params => {
        let url =
            'https://api.themoviedb.org/3/discover/movie?api_key=a5c5e6fda0c26677175e238d7ee0e1e0&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28&with_watch_monetization_types=flatrate';
        let query = new URLSearchParams();
        for (const key in params) {
            if (params[key] != null) {
                query.append(key, params[key]);
            }
        }

        if (query.toString() != '') {
            url += '?' + query.toString();
        }
        const places = await api
            .get(url)
            .then(response => {
                console.log(response.data);
                return response.data;
            })
            .catch(error => {
                throw new Error(error);
            });
        return places;
    };
}
