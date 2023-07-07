import { options } from '../helpers/moviesOptions.js';
const title = document.getElementById('title');
const searchBtn = document.getElementById('search-by-title-button');
const showResults = document.getElementById('search-by-title-response');

class Movie {
    constructor(movieName, url, apiKey) {
        this.movieName = movieName;
        this.url = url;
        this.apiKey = apiKey;
    }

    async getMovies() {
        this.movieName = title.value;
        this.apiKey = options.apiKey;
        this.url = `${options.url}${this.movieName}&apikey=${options.apiKey}`;

        if (this.movieName.length <= 0) {
            showResults.innerHTML = '<h3 class="msg">Please Enter A Movie Name</h3>';
            return;
        }

        await fetch(this.url)
            .then((resp) => resp.json())
            .then((data) => {
                if (data.Response === "True") {
                    showResults.innerHTML = `
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
                        </div>`;
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

}
searchBtn.addEventListener('click', new Movie(title.value, options.url, options.apiKey).getMovies);
showResults.addEventListener('load', new Movie().getMovies);
