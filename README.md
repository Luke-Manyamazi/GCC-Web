# GCC-Web

A static, multi-page website for Grace Chapter Church ("Revealing Christ to the World"). It presents the church's welcome message, campuses (Johannesburg, Cape Town, Harare, UK/Mozambique), house-church contacts, ministries, and events, and includes a "Join Us" visitor form.

> **Note:** This appears to be an earlier, plain HTML/CSS/JS prototype of the church site. A newer version of the same site — [Grace-Chapter-Church-Web](https://github.com/Luke-Manyamazi/Grace-Chapter-Church-Web), built with React, Vite, and Tailwind CSS — was created later and should be treated as the current/actively maintained site.

## Tech Stack

- Plain HTML5, CSS3, and vanilla JavaScript (no build tooling or framework)
- [Font Awesome 6.5.0](https://fontawesome.com/) (via CDN) for icons on inner pages
- Google Fonts (Montserrat, Nunito, Quicksand)
- Visitor form submissions are posted to a Google Apps Script web app endpoint (`script.js`), which forwards data to a Google Sheet/backend

## Project Structure

```
GCC-Web/
├── index.html          # Home page (hero carousel, welcome, campuses, house churches)
├── style.css           # Global styles for all pages
├── script.js           # Carousel, scroll-reveal animations, nav toggle, form submit handler
├── assets/              # Images, fonts (Stolzl family), favicon, and social icons
└── pages/
    ├── about.html
    ├── contacts.html
    ├── events.html
    ├── form.html        # "Join Us" visitor form
    ├── house-churches.html
    └── ministries.html
```

## Running Locally

No build step or dependencies are required — this is a static site.

1. Clone the repository.
2. Open `index.html` directly in a browser, **or** serve the folder with any static file server for correct relative-path behavior, e.g.:

   ```bash
   npx serve .
   # or
   python -m http.server 8000
   ```

3. Visit `http://localhost:8000` (or the port shown).
