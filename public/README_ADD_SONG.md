Place your MP3 file here so the site can play it.

1. Add your audio file named `song.mp3` to this `public/` folder.
2. When using Vite, files in `public/` are served from the root, so the file will be available at `/song.mp3`.

Browser autoplay note: Modern browsers often block autoplay with sound until the user interacts with the page. The site will attempt to play and will mute if the browser blocks autoplay. If you want guaranteed start, consider starting audio after a user gesture (e.g., click).