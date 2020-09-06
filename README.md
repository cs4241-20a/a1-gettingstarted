Joseph Swetz
CS 4241 Assignment 1

Live website: https://a1-joeswetz.glitch.me

## Credits
Various websites were used to learn basic information about JS, CSS and HTML.
These sources are cited in the code wherever they were used. color.adobe.com was used
to create the color palette.

## Important Notes
- The Javascript animation is turned off by default. To turn it on, click the "start/stop
rotation" button (see below under "Technical Achievements" for more details).
- server.js was altered slightly to support sending style_sheet.css and ProfilePicture.jpg 

This project shows ...

## Technical Achievements
- **Simple CSS Rules**: Added the following CSS rules:
    - **position**: Used to allow for movement of elements via **left** rule
    - **left**: Used to move (left side of) elements to the center of the page
    - **transform**: Once elements are at the center of the page, use this with translate()
    to move elements to the left so the center of the element itself is at the center of the
    page
    - **text-align**: Used to center the page title to differentiate it form the left-aligned
    body text.
    - **width**: Used to define the width of the elements, so **transform** rule will translate
    the elements relative to their width (i.e. translate by 50% of the width so the center of 
    the element is in the center of the page)
- **Simple Javascript animation**: The "start/stop rotation" button is used to toggle the profile
    picture continuously rotating. The button can be found in line 18 of index.html, and the script
    that rotates the image can be found on lines 84-104 of index.html
- **Experiment with other HTML tags**: Added the following tags:
    - **img**: added a picture of myself on line 28 of index.html
    - **strong**: Used to emphasize the names of each technology listed. Can be found on lines 62-68 
        of index.html.
    - **a**: Used to create anchors to the separate sections of the webpage
        - Anchor links are located on lines 22-24 of index.html 
        - Anchors are defined on lines 32, 58 and 71 of index.html
    - **button**: Used to create input trigger so user can toggle rotation of the profile picture.
        The button is defined on line 30 of index.html.
    - **br**: Used to provide whitespace between various sections of webpage. Can be found on lines 
        throughout index.html
    
## Design Achievements
- **Used a Color Palette**: Created a monochromatic color palette using color.adobe.com. A screenshot
    of the color wheel for the palette can be found in this directory at color_palette.png.
    - To see how the five colors were used on the web page, look at style_sheet.css
- **Used the Ubuntu Font from Google Fonts**: All text on the site is in the Ubuntu font from google 
    fonts: https://fonts.google.com/specimen/Ubuntu.