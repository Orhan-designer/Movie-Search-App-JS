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
        <select name="movieType">
          <option value="" selected="">Film</option>
          <option value="">TV Show</option>
          <option value="">TV Series</option>
          <option value="">Mini Series</option>
          <option value="">All</option>
        </select>
      </div>
      
      <select name="genres"></select>

      <div class="order">
        <select name="order">
          <option value="">Rating</option>
          <option value="">Amount of votes</option>
          <option value="">Year</option>
        </select>
      </div>
      
      <div class="plot">
        <label class="control-label" for="plot">Plot:</label>
        <select name="plot" id="plot">
          <option value="" selected="">Short</option>
          <option value="full">Full</option>
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
