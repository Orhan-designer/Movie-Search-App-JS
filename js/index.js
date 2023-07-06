const title = document.getElementById('title');
const searchBtn = document.getElementById('search-by-title-button');
const showResults = document.getElementById('search-by-title-response');
const key = '53020af1';

const getMovies = async () => {
    const movieName = title.value;
    const url = `http://www.omdbapi.com/?t=${movieName}&apikey=${key}`;

    if (movieName.length <= 0) {
        showResults.innerHTML = `<h3 class="msg">Please Enter A Movie Name</h3>`;
        return;
    }

    await fetch(url)
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

searchBtn.addEventListener('click', getMovies);
showResults.addEventListener('load', getMovies);
