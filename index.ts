import { MovieSearchPanel } from './src/components/movie-search-panel/movie-search-panel';

class MovieSearchApp {
  public load(): void {
    new MovieSearchPanel().loadTemplate();
  }
}

const app = new MovieSearchApp();

app.load();
