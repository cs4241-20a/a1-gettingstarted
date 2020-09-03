Trevor Paley  
https://a1-theunlocked.glitch.me/

~~

## Technical Achievements
- **Name shuffles through fonts**  
    Every 300ms, my name will randomly switch to a new font (of three total).
- **Variety of HTML tags**  
    `em`, `strong`, `mark`, `div`, and `span` were used.
- **Light/dark theme switching and storage**
    Credit to [https://stackoverflow.com/a/57795495/4937286]() for providing the code to detect the system theme. The system theme is used to decide whether to use the page's light or dark theme by default when you load the page. `localStorage` is used to maintain this setting between site visits.

### Design Achievements
- **Used various fonts from Google Fonts**  
    Roboto is used as the primary font and Cedarville Cursive and Abril Fatface are used as secondary fonts for when my name shuffles through fonts.
- **Padding to make the site more breathable and have a responsive UI**  
    Margins on the sides makes the site nicer to read. This involved the `min()` function as well as exact margins and `margin: auto`, especially to make the UI responsive.
- **ARIA attributes used for accessibility**  
    The dark theme toggle button uses a `span` which has no semantic meaning, so the `role`, `aria-label`, and `aria-pressed` attributes are used to annotate the button and make it more accessible to screen readers.
