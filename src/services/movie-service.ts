import { SearchParams, SearchResponse } from "../models/search.model";
import { API_KEY, FILMS_URL } from "../constants/constants";
import { Genre } from "../models/movie.model";

export class MovieService {
    public async getMovies$(params: Partial<SearchParams>): Promise<SearchResponse> {
        const searchParams = new URLSearchParams();

        for (const param in params) {
            searchParams.append(param, params[param]);
        }

        const response = await fetch(`${FILMS_URL}?${searchParams}`, {
            method: 'GET',
            headers: {
                'X-API-KEY': API_KEY,
                'Content-Type': 'application/json'
            }
        });

        return response.json().catch(e => console.log(e));
    }

    public async getGenres$(): Promise<Genre[]> {
        const response = await fetch(`${FILMS_URL}/filters`, {
            method: 'GET',
            headers: {
                'X-API-KEY': API_KEY,
                'Content-Type': 'application/json'
            }
        });

        return response.json().then((res) => res.genres).catch(e => console.log(e));
    }
}