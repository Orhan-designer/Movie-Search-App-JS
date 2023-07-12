import { Movie } from "../../models/movie.model";
export class MovieList {
  private container = document.querySelector('#movie-list') as HTMLDivElement;

  public renderTemplate({
    template,
    data
  }: {
    template?: string;
    data?: Movie[];
  }): void {
    if (!this.container) {
      return;
    }

    if (template) {
      this.container!.innerHTML = template;
      return;
    }

    data!.filter((el: Movie) => {
      const div = document.createElement('div');
      div.className = 'info';
      div.innerHTML = `
        <div>
          <img src=${el.posterUrl} class="poster">
        </div>
        <div>
          <h2>${el.nameOriginal}</h2>
          <div class="rating">
            <p><b>Rating</b>: ${el.ratingImdb}</p>
          </div>
        </div>
        <div class="sub-info">
          <p><b>Year</b>: ${el.year}</p>
          <p><b>Type</b>: ${el.type}</p>
          <p><b>Genres</b>: ${el.genres.map((value: { genre: string }) => value.genre)}</p>
        </div>`

      this.container?.append(div);
    });
  }
}
