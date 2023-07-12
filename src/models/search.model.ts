import { Movie } from "./movie.model";
export interface SearchResponse {
    total: number;
    totalPages: number;
    items: Movie[];
}
export interface SearchParams {
    keyword: string;
    type: string;
    order: string;
    genres: number;
    yearFrom: number;
    yearTo: number;
}