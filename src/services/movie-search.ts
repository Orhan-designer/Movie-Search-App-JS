import { API_KEY, getFilmsUrl } from "../constants/constants";
import { movieType } from "../enums/enum";
export class MovieService {
    public async getMovies(item?: string) {
        const selectButton = document.querySelector('.movieType') as HTMLSelectElement;
        item = selectButton.value;

        if (item === '--') {
            return await fetch(`${getFilmsUrl}`, {
                method: 'GET',
                headers: {
                    'X-API-KEY': API_KEY,
                    'Content-Type': 'application/json',
                },
            })
                .then(res => res.json())
                .catch(err => console.log(err));
        }

        if (item === movieType.ALL ||
            item === movieType.FILM ||
            item === movieType.MINI_SERIES ||
            item === movieType.TV_SERIES ||
            item === movieType.TV_SHOW) {
            return await fetch(`${getFilmsUrl}?type=${item}`, {
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
}