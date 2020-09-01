//moves the picture back and forth
function moveIt() {
    elemt.style.marginLeft = pos + "px";
    if (pos > 400) {
      towardsRight = false;
    }
    if (pos <= 0) {
      towardsRight = true;
    }
    if (towardsRight) {
      pos += 2;
    } else {
        pos -= 2;
    }
  }
  
  //changes the text color between the two
  function textChange() {
      let elem = document.getElementById("passion");
      if (elem.style.color == "chartreuse") {
          elem.style.color = "violet"
      } else {
          elem.style.color = "chartreuse"
      }
  }
  
  //link will get big when moused over
  function bigLink(elem) {
      elem.style.fontSize = "100px";
  }
  
  //link will get small when the mouse leaves
  function smallLink(elem) {
    elem.style.fontSize = "20px";
  }
  
  //Some globals for text moving
  let elemt = document.getElementById("ani");
  let pos = 0;
  let towardsRight = true;

  //Sets the intervals to change text and move the picture
  window.setInterval(textChange, 300);
  window.setInterval(moveIt, 10);