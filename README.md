# CAC — Cochin Arts & Communications website

A rebuilt, modern version of the Cochin Arts & Communications (CAC) website,
recovered from the old site's content and photos.

## Structure

```
index.html          Main page (all sections: home, about, courses, teachers, gallery, contact)
css/style.css        All styling
js/script.js         Mobile nav toggle, enquiry form (mailto), scroll-reveal animation
images/              All photos and the logo used on the site
```

## Running it

No build step needed — it's plain HTML/CSS/JS.

- **Quickest:** double-click `index.html` to open it in a browser.
- **Better (so the nav/links behave exactly as on a real server):** serve the
  folder locally, e.g. from inside this folder run:
  ```
  python3 -m http.server 8000
  ```
  then open `http://localhost:8000` in your browser.
- **To publish:** upload the whole folder (keeping the same structure) to any
  static host — Netlify, Vercel, GitHub Pages, cPanel, etc. `index.html` is
  the entry point.

## Notes

- The two Google Fonts used (Fraunces, Work Sans) are loaded from Google
  Fonts via `<link>` tags in `index.html` — an internet connection is needed
  for them to load; the page still works without it, just with fallback fonts.
- The "Send enquiry" form on the Contact section has no backend — it opens
  the visitor's email client with a pre-filled message to
  `cochinartsandcommunications@gmail.com`. Wire it up to a real form
  service or your own backend if you want submissions collected automatically.
- Phone: +91 99469 46215 · Email: cochinartsandcommunications@gmail.com
- Address: 1/5 Press Road, Kacherippady, Ernakulam, Kerala 682018
