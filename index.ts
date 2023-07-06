class MovieSearchApp {
  title = document.getElementById('title') as HTMLInputElement;
  searchBtn = document.getElementById('search-by-title-button');
  searchResults = document.getElementById('search-by-title-response');
  apiKey = '53020af1';

  constructor() {
    this.searchBtn?.addEventListener('click', () => this.getMovie());
  }

  getMovie() {
    const url = `http://www.omdbapi.com/?t=${this.title.value}&apikey=${this.apiKey}`;

    if (!this.title.value?.length) {
      this.searchResults!.innerHTML = `<h3 class="msg">Please Enter A Movie Name</h3>`;
      return;
    }

    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        if (data.Response === 'True') {
          this.searchResults!.innerHTML = `
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
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

const app = new MovieSearchApp();
