import './movie-search-panel.scss';
// import { MovieList } from '../movie-list/movie-list';
import { MOVIE_SEARCH_PANEL_TEMPLATE } from './movie-search-panel.template';

export class MovieSearchPanel {
  private container = document.querySelector('#movie-search-panel');
  private movieList = document.querySelector('#movie-list');
  private apiKey = '44de58bc-8f6d-46e9-bb13-4148aafc51fa';

  public loadTemplate(): void {
    if (this.container) {
      this.container.innerHTML = MOVIE_SEARCH_PANEL_TEMPLATE;
      this.addListenerToSearchButton();
    }
  }

  public getMovie(): void {
    const title = document.querySelector('#title') as HTMLInputElement;
    // const movieListComponent = new MovieList();

    // if (!title.value?.length) {
    //   movieListComponent.loadTemplate({
    //     template: `<h3 class="msg">Please Enter A Movie Name</h3>`
    //   });
    //   return;
    // }

    fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films', {
      method: 'GET',
      headers: {
        'X-API-KEY': this.apiKey,
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(json => {
        for (const item of json.items) {
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
      })
      .catch(err => console.log(err));
  }

  private addListenerToSearchButton(): void {
    const searchButton = document.querySelector(
      '#search-by-title-button'
    ) as HTMLButtonElement;

    searchButton.onclick = () => this.getMovie();
  }
}
