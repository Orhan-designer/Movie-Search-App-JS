import './movie-search-panel.scss';
// import { MovieList } from '../movie-list/movie-list';
import { MOVIE_SEARCH_PANEL_TEMPLATE } from './movie-search-panel.template';
import { MovieService } from '../../services/movie-search';

export class MovieSearchPanel {
  private container = document.querySelector('#movie-search-panel');
  private movieList = document.querySelector('#movie-list');
  private movieService = new MovieService();

  public loadTemplate(): void {
    if (this.container) {
      this.container.innerHTML = MOVIE_SEARCH_PANEL_TEMPLATE;
      this.addListenerToSearchButton();
    }
  }

  public async getMovie() {
    await this.movieService.getMovies().then(data => {
      for (const item of data.items) {
        const div = document.createElement('div');
        div.className = 'info';
        div.innerHTML = `
          <div>
            <img src=${item.posterUrl} class="poster">
          </div>
          <div>
            <h2>${item.nameOriginal}</h2>
            <div class="rating">
                <p><b>Rating</b>: ${item.ratingImdb}</p>
            </div>
          </div>
          <div class="sub-info">
            <p><b>Year</b>: ${item.year}</p>
          </div>`;

        this.movieList?.append(div);
      }
    });
  }

  private addListenerToSearchButton(): void {
    const searchButton = document.querySelector(
      '#search-by-title-button'
    ) as HTMLButtonElement;

    searchButton.onclick = () => this.getMovie();
  }
}
