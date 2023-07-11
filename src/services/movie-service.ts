import { API_KEY, FILMS_URL } from "../constants/constants";
import { SearchParams } from "../models/movie.model";

export class MovieService {
    public async getMovies$(params: Partial<SearchParams>): Promise<any> {
        const searchParams = new URLSearchParams();

        for (const param in params) {
            searchParams.append(param, params[param]);
        }

        return await fetch(`${FILMS_URL}?${searchParams}`, {
            method: 'GET',
            headers: {
                'X-API-KEY': API_KEY,
                'Content-Type': 'application/json'
            }
        }).then(res => res.json()).catch(e => console.log(e));
    }
}