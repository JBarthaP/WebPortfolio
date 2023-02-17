function hideorshowNav() {
   console.log(document.getElementById("sidebar").style.width );
    document.getElementById("sidebar").style.width = document.getElementById("sidebar").style.width ==="0px" ||  document.getElementById("sidebar").style.width ==="" ? "200px" : "0" 
}

function checkMenu(){
     
     if( window.innerWidth >= "1025") {
        document.getElementById("header").classList.add("flex-row")
        document.getElementById("header").classList.remove("flex-column")
     }
     else {
        document.getElementById("header").classList.add("flex-column")
        document.getElementById("header").classList.remove("flex-row")
        
     } 
}

window.addEventListener('resize', () => checkMenu())
window.addEventListener('load', () => checkMenu())
