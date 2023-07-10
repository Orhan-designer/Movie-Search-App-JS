import { API_KEY, getFilmsUrl } from "../constants/constants";

export class MovieService {
    public async getMovies() {
        return await fetch(getFilmsUrl, {
            method: 'GET',
            headers: {
                'X-API-KEY': API_KEY,
                'Content-Type': 'application/json',
            },
        })
            .then(res => res.json())
            .catch(err => console.log(err));
    }
}