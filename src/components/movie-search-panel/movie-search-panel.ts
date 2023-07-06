import './movie-search-panel.scss';
import { MovieList } from '../movie-list/movie-list';
import { MOVIE_SEARCH_PANEL_TEMPLATE } from './movie-search-panel.template';

export class MovieSearchPanel {
  private container = document.querySelector('#movie-search-panel');
  private apiKey = '53020af1';

  public loadTemplate(): void {
    if (this.container) {
      this.container.innerHTML = MOVIE_SEARCH_PANEL_TEMPLATE;
      this.addListenerToSearchButton();
    }
  }

  public getMovie(): void {
    const title = document.querySelector('#title') as HTMLInputElement;
    const url = `http://www.omdbapi.com/?t=${title.value}&apikey=${this.apiKey}`;
    const movieListComponent = new MovieList();

    if (!title.value?.length) {
      movieListComponent.loadTemplate({
        template: `<h3 class="msg">Please Enter A Movie Name</h3>`
      });
      return;
    }

    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        if (data.Response === 'True') {
          movieListComponent.loadTemplate({ data });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  private addListenerToSearchButton(): void {
    const searchButton = document.querySelector(
      '#search-by-title-button'
    ) as HTMLButtonElement;

    searchButton.onclick = () => this.getMovie();
  }
}
