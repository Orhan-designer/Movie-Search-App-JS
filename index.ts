import { MovieSearchPanel } from './components/movie-search-panel/movie-search-panel';

class MovieSearchApp {
  constructor() {
    new MovieSearchPanel().loadTemplate();
  }
}

new MovieSearchApp();
