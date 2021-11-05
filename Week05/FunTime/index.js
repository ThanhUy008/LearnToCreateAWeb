// Get all sections that have an ID defined
const sections = document.getElementsByClassName("small-title border");

// Add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  
  // Get current scroll position
  let scrollY = window.pageYOffset;
  
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
  
  
    const sectionTop = (current.getBoundingClientRect().top + window.pageYOffset) - 50;
    sectionId = current.getAttribute("id");
    
   
    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ){
      document.querySelector(".sidenav a[href*=" + sectionId + "]").classList.add("active");
    } else {
      document.querySelector(".sidenav a[href*=" + sectionId + "]").classList.remove("active");
    }
  });
}