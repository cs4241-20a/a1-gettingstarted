README.md
===

CS 4241: Webware Assignment 1
---

### Author: Eric Reardon

**Live App Link**: https://a1-ejreardon.glitch.me

This project shows a very simple webpage utlizing basic html, CSS styling within the style tag, and 
  a background animation utilizing a JavaScript function in the script tag. I have a small introduction
  about myself, my mqp, class year, and major/minor. I have also included a picture of myself from a 
  few years back and put down my involvement at WPI and outside of school. I put a list of my technical
  experience and then made a table of all of the CS classes I've taken. I've had a decent amount of experience
  with front-end development, but this project was a good way to refresh myself with html, css, and js.
  
The most challenging part of this assigment was the styling to make the text and pictures
appear next to each other on the page in "columns". Using the "float" internal styling within the 
span and divs were very fragile, and took a lot of testing to make sure it all worked
and looks nice on the screen.

Additionally, getting the colors to fade in the background was very challenging
until I discovered the cubic-bezier() function that handles page transitions much more easily.

### Technical Achievements
- **Styled page with CSS**
  - **Body**: Styled with background-color, color, font-family (see google fonts below), and transition (see JavaScript animation below)
  - **h1**: Styled with color
  - **h2**: Styled with color
  - **h3** Styled with color
  - **h4** Styled with color
  - **img**: Styled with border size and color
  - **ul**: Styled with padding size
  - **table**: Styled with border-collapse (condensed border lines) and width
  - **table.center**: Styled to center table on page
  - **td, th**: (table data and header cells) Styled to align text, apply padding, and background/text color
  - **tr**: (table row) Styled background color of even rows so table rows alternate color
  - **cubic-bezier**: Styled background color transition (see JavaScript animation below)
  - **span&div**: Used internal styling using float, width, margin-right, and clear to put some items side by side in "columns"
    - example: picture next to intro text, Involvement & Hobbies section. I used span for text and div for the image
    - Used the following: style="float:left; width:40%; margin-right:50px", style="float:left; width:40%", style="clear:both;"
- **Add a simple JavaScript animation to the page**
  - My simple JavaScipt page animation fades the background color of the page between three colors ("#F2F2F2", "#ADD1DA", "#9FBFDF").
  - In order to do this, I utilized the SetInterval() JavaScript function as shown in class. 
  I chose three colors that fade from a light grey to a deeper blue-grey to match the adobe color scheme I picked.
  - I initiate an array that holds the three colors and then apply the document background color at the beginning index, 0.
  The index increments until it hits the last color in the array. Once it reaches the end, the index starts decrementing 
  until it reaches the first element, and so on. This makes the background switch between the 3 colors, back and forth.
  - The last part of this animation is the use of the cubic-bezier() function in the CSS tag. By making the animation follow 
  cubic-bezier(1, 1, 1, 1) (which is a straight line) with a 0s transition time, the background color linearly fades between the three colors
  instead of switching between them.
- **Experiment with other HTML tags**:
 - Within this project, I used the following tags: h1, h2, h3, h4, p, strong, img, ul, li, table, tr, th, td, span, and div

### Design Achievements
- **Create a color palette using [color.adobe.com](https://color.adobe.com)**:
  - <img src="https://cdn.glitch.com/5211f451-a4aa-439c-951d-59a70f859025%2FScreen%20Shot%202020-09-06%20at%2011.11.08%20AM.png?v=1599436249793">
  - I used the Monochromatic Color Harmony Rule and used all 5 on the scale
  - h3, h4, and th are #033440
  - background color transition uses #ADD1DA
  - table even rows are (base color) #089BBF
  - p is #3C4142
  - image frame is #06718C
- **Use a font from [Goolge Fonts](https://fonts.google.com)**:
  - I used the "Slabo 27px" Google Font for all of the body.
  - To do this, I put "<link href="https://fonts.googleapis.com/css2?family=Slabo+27px&display=swap" rel="stylesheet">"
  in the head tag and "font-family: 'Slabo 27px', serif" in the body tag 
  within the style tag, as directed by the Google Fonts website


