import './movie-search-panel.scss';
import { MOVIE_SEARCH_PANEL_TEMPLATE } from './movie-search-panel.template';
import { MovieService } from '../../services/movie-service';
import { SearchParams } from '../../models/movie.model';
import { MovieList } from '../movie-list/movie-list';

export class MovieSearchPanel {
  private container = document.querySelector('#movie-search-panel');
  private movieService = new MovieService();
  private movieList = new MovieList();

  public loadTemplate(): void {
    if (this.container) {
      this.container.innerHTML = MOVIE_SEARCH_PANEL_TEMPLATE;
      this.addListenerToSearchButton();
    }
  }

  public async getMovie() {
    const keyword = (<HTMLInputElement>document.querySelector('#keyword'))?.value;
    const type = (<HTMLSelectElement>document.querySelector('.movieType'))?.value;
    const order = (<HTMLSelectElement>document.querySelector('.orderType'))?.value;
    const genres = (<HTMLSelectElement>document.querySelector('#genres'))?.selectedIndex;
    const yearFrom = (<HTMLInputElement>document.querySelector('#year-from'))?.value;
    const yearTo = (<HTMLInputElement>document.querySelector('#year-to'))?.value;

    const params: Partial<SearchParams> = {
      ...(!!keyword && { keyword }),
      ...(!!type && { type }),
      ...(!!order && { order }),
      ...(!!genres && { genres }) as any, //use 'as' because 'params' give an error (Types of property 'genres' are incompatible)
      ...(!!yearFrom && +yearFrom <= 3000 && +yearFrom >= 1000 && { yearFrom }),
      ...(!!yearTo && +yearTo <= 3000 && +yearTo >= 1000 && { yearTo })
    }

    const service = await this.movieService.getMovies$(params);
    this.movieList.renderTemplate({ data: service.items });
  }

  private addListenerToSearchButton(): void {
    const searchButton = document.querySelector(
      '#search-by-title-button'
    ) as HTMLButtonElement;

    searchButton.onclick = () => this.getMovie();
  }
}
