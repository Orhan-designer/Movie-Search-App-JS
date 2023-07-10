export const MOVIE_SEARCH_PANEL_TEMPLATE = `
  <form class="well form-search" id="search-by-title-form">
    <div class="sub-container">
      <label class="control-label" for="title">Title:</label>
      <input type="text" id="title" name="title" class="input-small" />
      <label class="control-label" for="yearFrom">Year from:</label>
      <input type="text" id="yearFrom" name="yearFrom" class="input-small" />
      <label class="control-label" for="yearTo">Year to:</label>
      <input type="text" id="yearTo" name="yearTo" class="input-small" />

      <div class="movie-type">
        <select class="movieType">
          <option value="--">--</option>
          <option value="FILM">FILM</option>
          <option value="TV_SHOW">TV SHOW</option>
          <option value="TV_SERIES">TV SERIES</option>
          <option value="MINI_SERIES">MINI SERIES</option>
          <option value="ALL">ALL</option>
        </select>
      </div>
      
      <input type="text" id="genres" />

      <div class="order">
        <select class="order">
          <option value="RATING">Rating</option>
          <option value="AMOUNT_OF_VOTES">Amount of votes</option>
          <option value="YEAR">Year</option>
        </select>
      </div>
      
      <button id="search-by-title-button" type="button" class="btn-sm">
        Search
      </button>
      <button id="search-by-title-reset" type="reset" class="btn-sm">
        Reset
      </button>
    </div>
  </form>
`;
