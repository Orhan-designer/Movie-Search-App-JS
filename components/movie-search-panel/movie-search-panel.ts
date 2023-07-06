import { MovieList } from '../movie-list/movie-list';

export class MovieSearchPanel {
  private container = document.querySelector('#movie-search-panel');
  private searchButton: HTMLButtonElement;
  private template = `
    <form class="well form-search" id="search-by-title-form">
      <div>
        <label class="control-label" for="title">Title:</label>
        <input type="text" id="title" name="title" class="input-small" />
        <label class="control-label" for="year">Year:</label>
        <input type="text" id="year" name="year" class="input-small" />
        <label class="control-label">Plot:</label>

        <select name="plot">
          <option value="" selected="">Short</option>
          <option value="full">Full</option>
        </select>

        <button id="search-by-title-button" type="button" class="btn-sm"">
          Search
        </button>
        <button id="search-by-title-reset" type="reset" class="btn-sm">
          Reset
        </button>
      </div>
    </form>
  `;
  private apiKey = '53020af1';

  public loadTemplate(): void {
    if (this.container) {
      this.container.innerHTML = this.template;
      this.searchButton = document.querySelector(
        '#search-by-title-button'
      ) as HTMLButtonElement;
      this.searchButton.onclick = () => this.getMovie();
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
}
