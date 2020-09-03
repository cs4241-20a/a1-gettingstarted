function myAnimation() {
    let pos = 0;
    const box = document.getElementById("animated");   
    const interval = setInterval(border, 2);
    function border() {
      if (pos != 150) {
        pos++; 
        box.style.top = pos + "px"; 
        box.style.left = pos + "px";
      } else {
        clearInterval(interval);
      }
    }
  }
