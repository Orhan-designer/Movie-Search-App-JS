export class MovieList {
  private container = document.querySelector('#movie-list');

  public loadTemplate({
    template,
    data
  }: {
    template?: string;
    data?: any;
  }): void {
    if (template) {
      this.container!.innerHTML = template;
      return;
    }

    this.container!.innerHTML = `
      <div class="info">
        <img src=${data.Poster} class="poster">
        <div>
          <h2>${data.Title}</h2>
          <div class="rating">
              <p><b>Rating</b>: ${data.imdbRating}</p>
          </div>
        </div>
      </div>
      <div class="sub-info">
        <p><b>Year</b>: ${data.Year}</p>
        <p><b>Actors</b>: ${data.Actors}</p>
        <p><b>Plot</b>: ${data.Plot}</p>
      </div>
    `;
  }
}
