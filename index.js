const link = document.querySelectorAll(".link");

link.forEach(el => el.addEventListener("mouseover", function( event ) {
// highlight the mouseover target
  event.target.style.backgroundColor = "orange";
  event.target.style.color = "#13ED87"
  event.target.style.padding = "10px";

// reset the styling after a short delay
  setTimeout(function() {
    event.target.style.backgroundColor = "";
    event.target.style.color = "";
    event.target.style.padding = "";
  }, 800);
}, false));

