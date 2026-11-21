# Scan to Play: one link, many games

One web link for one NFC tag. It opens the camera and asks you to scan a picture:

- **Sushi picture** → opens the [Sushi game](https://github.com/naomirajwanshi02/sushi-ar)
- **Ramen picture** → opens the [Ramen Builder game](https://github.com/naomirajwanshi02/Ramen_Builder)

This hub holds **no game code**. It only recognises the picture and redirects to that game's own live
page, so each game stays independently editable: change and push it in its own repo and the hub
serves the new version (GitHub Pages refreshes in about a minute).

| File | What it is |
|---|---|
| `index.html`, `js/app.js`, `js/scan.js` | Camera permission, scanner, redirect |
| `js/games.js` | The list of games (name, page URL, picture, index in `targets.mind`) |
| `targets.mind` | Both pictures compiled together (index 0 Sushi, 1 Ramen) |
| `tools/make-target.html`, `tools/serve.ps1` | Rebuild `targets.mind` from the live pictures |

**Only if a game's picture changes, or a game is added:** edit `js/games.js`, run `tools/serve.ps1`,
open `http://localhost:8140/tools/make-target.html?build=1`, then commit `targets.mind`.
Changes to a game's play or look need nothing here.

Phones need HTTPS for the camera (GitHub Pages provides it).
