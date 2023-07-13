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
      sessionStorage.getItem('searchParams') && this.setSearchInputs();
    }
  }

  public async getMovie(): Promise<void> {
    const keyword = (<HTMLInputElement>document.querySelector('#keyword'))?.value;
    const type = (<HTMLSelectElement>document.querySelector('#type'))?.value;
    const order = (<HTMLSelectElement>document.querySelector('#order'))?.value;
    const genres = +(<HTMLSelectElement>document.querySelector('#genres'))?.value;
    const yearFrom = +(<HTMLInputElement>document.querySelector('#yearFrom'))?.value;
    const yearTo = +(<HTMLInputElement>document.querySelector('#yearTo'))?.value;

    const params: Partial<SearchParams> = {
      ...(!!keyword && { keyword }),
      ...(!!type && { type }),
      ...(!!order && { order }),
      ...(!!genres && { genres }),
      ...(!!yearFrom && +yearFrom <= 3000 && +yearFrom >= 1000 && { yearFrom }),
      ...(!!yearTo && +yearTo <= 3000 && +yearTo >= 1000 && { yearTo })
    }

    sessionStorage.setItem('searchParams', JSON.stringify(params));
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

    const resetButton = document.querySelector(
      '#search-by-title-reset'
    ) as HTMLButtonElement;

    searchButton.onclick = () => this.getMovie();
    resetButton.onclick = () => sessionStorage.clear();
  }

  private setSearchInputs(): void {
    const params: SearchParams = JSON.parse(sessionStorage.getItem('searchParams')!);

    Object.entries(params)
      .filter(([_, value]) => !!value)
      .forEach(
        ([key, value]) => ((document.querySelector(`#${key}`) as HTMLSelectElement).value = String(value))
      );
  }
}
