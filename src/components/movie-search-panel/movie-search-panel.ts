import { Genre } from './../../models/movie.model';
import './movie-search-panel.scss';
import { MOVIE_SEARCH_PANEL_TEMPLATE } from './movie-search-panel.template';
import { MovieService } from '../../services/movie-service';
import { MovieList } from '../movie-list/movie-list';
import { SearchParams } from '../../models/search.model';

export class MovieSearchPanel {
  private container = document.querySelector('#movie-search-panel');
  private movieService = new MovieService();
  private movieList = new MovieList();

  public loadTemplate(): void {
    if (this.container) {
      this.container.innerHTML = MOVIE_SEARCH_PANEL_TEMPLATE;
      this.addListenerToSearchButton();
      this.renderGenresList();
    }
  }

  public async getMovie(): Promise<void> {
    const keyword = (<HTMLInputElement>document.querySelector('#keyword'))?.value;
    const type = (<HTMLSelectElement>document.querySelector('.movieType'))?.value;
    const order = (<HTMLSelectElement>document.querySelector('.orderType'))?.value;
    const genres = +(<HTMLSelectElement>document.querySelector('#genres'))?.value;
    const yearFrom = +(<HTMLInputElement>document.querySelector('#year-from'))?.value;
    const yearTo = +(<HTMLInputElement>document.querySelector('#year-to'))?.value;

    const params: Partial<SearchParams> = {
      ...(!!keyword && { keyword }),
      ...(!!type && { type }),
      ...(!!order && { order }),
      ...(!!genres && { genres }),
      ...(!!yearFrom && +yearFrom <= 3000 && +yearFrom >= 1000 && { yearFrom }),
      ...(!!yearTo && +yearTo <= 3000 && +yearTo >= 1000 && { yearTo })
    }

    const service = await this.movieService.getMovies$(params);
    this.movieList.renderTemplate({ data: service.items });
  }

  private async renderGenresList(): Promise<void> {
    const genresElem = (<HTMLSelectElement>document.querySelector('#genres'));
    const genres = await this.movieService.getGenres$();

    genres.forEach((item: Genre) => {
      const option = document.createElement('option');
      option.setAttribute('value', String(item.id));
      option.textContent = item.genre;
      genresElem.append(option);
    });
  }

  private addListenerToSearchButton(): void {
    const searchButton = document.querySelector(
      '#search-by-title-button'
    ) as HTMLButtonElement;

    searchButton.onclick = () => this.getMovie();
  }
}
