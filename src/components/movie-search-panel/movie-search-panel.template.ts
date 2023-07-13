export const MOVIE_SEARCH_PANEL_TEMPLATE = `
  <form class="well form-search" id="search-by-title-form">
    <div class="sub-container">
      <label class="control-label" for="keyword">Title:</label>
      <input type="text" id="keyword" name="keyword" class="input-small" />
      <label class="control-label" for="yearFrom">Year from:</label>
      <input type="text" id="yearFrom" name="yearFrom" class="input-small" />
      <label class="control-label" for="yearTo">Year to:</label>
      <input type="text" id="yearTo" name="yearTo" class="input-small" />

      <div class="movie-type">
        <label class="control-label" for="type">Types:</label>
        <select id="type">
          <option value>--</option>
          <option value="FILM">ФИЛЬМЫ</option>
          <option value="TV_SHOW">ТВ_ШОУ</option>
          <option value="TV_SERIES">ТВ_СЕРИАЛЫ</option>
          <option value="MINI_SERIES">МИНИ_СЕРИАЛЫ</option>
          <option value="ALL">ВСЕ</option>
        </select>
      </div>
      
      <div class="genres">
        <label class="control-label" for="genres">Genres:</label>
        <select id="genres"></select>
      </div>
      
      <div class="order">
        <label class="control-label" for="order">Order:</label>
        <select id="order">
          <option value>--</option>
          <option value="RATING">РЕЙТИНГ</option>
          <option value="NUM_VOTE">НОМЕР ГОЛОСОВ</option>
          <option value="YEAR">ГОД</option>
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
