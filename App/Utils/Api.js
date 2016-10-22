const API_KEY = 'AIzaSyDE63ZNCrb0mNii1Lh8nXY5laPayFFEM9U';

export default class Api {
  static search(query) {
    let url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=20&q=${query}&key=${API_KEY}`;

    return fetch(url)
    .then(response => response.json())
    .then(json     => json)
    .catch(error   => console.warn(error));
  }
}
