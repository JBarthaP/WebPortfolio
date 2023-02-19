let opensidebar = true

function hideorshowNav() {
   if(!opensidebar) {
      document.getElementById("sidebar").classList.add("showSidebar")
      document.getElementById("sidebar").classList.remove("hideSidebar")
      opensidebar = true
   }
   else {
    document.getElementById("sidebar").classList.add("hideSidebar")
    document.getElementById("sidebar").classList.remove("showSidebar")
    opensidebar = false
      
   } 
}

function checkMenu(){
     if( window.innerWidth >= "900") {
        document.getElementById("sidebar").classList.add("showSidebar")
        document.getElementById("sidebar").classList.remove("hideSidebar")
        opensidebar = true

     }
     else {
      document.getElementById("sidebar").classList.add("hideSidebar")
      document.getElementById("sidebar").classList.remove("showSidebar")
      opensidebar = false
        
     } 
}

window.addEventListener('resize', () => checkMenu())
window.addEventListener('load', () => checkMenu())

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
