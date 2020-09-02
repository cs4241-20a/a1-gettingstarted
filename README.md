Trevor Paley  
https://a1-theunlocked.glitch.me/

This project shows a simple example of HTML, CSS, and JavaScript being used together to create a clean resume-like page.

## Technical Achievements
- **Styled page with CSS**  
    I use both tag and id selectors, as well as CSS variables. `linear-gradient` is used to make the highlight over my name slightly thinner. `margin` and `display: inline-block` are used to make things look prettier, and `min()` is used to make the page cleanly support a variety of aspect ratios nicely. Several other styles are used as well but it would be easier to just look at the CSS.
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
    Padding on the top, left, and right makes the site nicer to read. This involved the `min()` function as well as exact margins and `margin: auto`, especially to make the UI responsive.
- **Optional dark theme**  
    A dark theme is provided for people who like their web pages to look black, and it will be automatically enabled if the user has enabled a dark theme on a browser or system level.
- **ARIA attributes used for accessibility**  
    The dark theme toggle button uses a `span` which has no semantic meaning, so the `role`, `aria-label`, and `aria-pressed` attributes are used to annotate the button and make it more accessible to screen readers.
- **Emoji used for displaying skill level**  
    Rather than just using text, the face on an emoji is used to indicate my proficiency at a particular skill. This seems to be a popular kind of design decision among "hip" sites nowadays, so while this wasn't really _hard_ to do, it does keep my site trendy.
