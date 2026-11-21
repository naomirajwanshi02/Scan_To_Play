// The one place that lists the games. Each game is its OWN project/repo and its own
// GitHub Pages site: edit and push it there and this hub opens the new version straight away
// (the hub only redirects to it, it holds no copy of the sushi or ramen games).
//
// `index` is the position of the picture inside targets.mind (tools/make-target.html builds
// it in this order). To add a game: add it here AND rebuild targets.mind.
//
// `demo: true` opens the game with its own picture scan skipped, because the picture
// has already been recognised here.

const BASE = 'https://naomirajwanshi02.github.io/';

export const GAMES = [
  { index: 0, id: 'sushi', name: 'Sushi', line: 'Get ready to play',
    url: BASE + 'sushi-ar/', picture: BASE + 'sushi-ar/sushi_main.jpeg', demo: true },
  { index: 1, id: 'ramen', name: 'Ramen', line: 'Get ready to play',
    url: BASE + 'Ramen_Builder/', picture: BASE + 'Ramen_Builder/target.png', demo: true },
];

export const openUrl = (g) => g.url + (g.demo ? '?demo=1&from=hub' : '?from=hub');
