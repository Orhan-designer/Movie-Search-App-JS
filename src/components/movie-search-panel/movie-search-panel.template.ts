export const MOVIE_SEARCH_PANEL_TEMPLATE = `
  <form class="well form-search" id="search-by-title-form">
    <div class="sub-container">
      <label class="control-label" for="keyword">Title:</label>
      <input type="text" id="keyword" name="keyword" class="input-small" />
      <label class="control-label" for="year-from">Year from:</label>
      <input type="text" id="year-from" name="year-from" class="input-small" />
      <label class="control-label" for="year-to">Year to:</label>
      <input type="text" id="year-to" name="year-to" class="input-small" />

      <div class="movie-type">
        <label class="control-label" for="movieType">Types:</label>
        <select class="movieType">
          <option value>--</option>
          <option value="FILM">FILM</option>
          <option value="TV_SHOW">TV_SHOW</option>
          <option value="TV_SERIES">TV_SERIES</option>
          <option value="MINI_SERIES">MINI_SERIES</option>
          <option value="ALL">ALL</option>
        </select>
      </div>
      
      <div class="genres">
        <label class="control-label" for="genres">Genres:</label>
        <select id="genres">
          <option value="">--</option>
          <option value="THRILLER">THRILLER</option>
          <option value="DRAMA">DRAMA</option>
          <option value="DETECTIVE">DETECTIVE</option>
          <option value="FANTASTIC">FANTASTIC</option>
          <option value="FANTASY">FANTASY</option>
          <option value="ACTION">ACTION</option>
          <option value="ADVENTURES">ADVENTURES</option>
          <option value="COMEDY">ACTION</option>
          <option value="CARTOON">CARTOON</option>
          <option value="FAMILY">FAMILY</option>
        </select>
      </div>
      
      <div class="order">
        <label class="control-label" for="orderType">Order:</label>
        <select class="orderType">
          <option value>--</option>
          <option value="RATING">RATING</option>
          <option value="NUM_VOTE">NUM_VOTE</option>
          <option value="YEAR">YEAR</option>
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
