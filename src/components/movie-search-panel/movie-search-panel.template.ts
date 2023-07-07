export const MOVIE_SEARCH_PANEL_TEMPLATE = `
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

      <button id="search-by-title-button" type="button" class="btn-sm">
        Search
      </button>
      <button id="search-by-title-reset" type="reset" class="btn-sm">
        Reset
      </button>
    </div>
  </form>
`;
