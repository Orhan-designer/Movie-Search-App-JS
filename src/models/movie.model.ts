export interface Movie {
    year: number;
    type: string;
    genres: Genre[];
    ratingImdb: number;
    posterUrl: string;
    nameOriginal: string;
}
export interface Genre {
    id?: number;
    genre: string;
}
