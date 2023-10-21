//get tablinks & tab contents
var tabLinks = document.getElementsByClassName("tab-links"),
tabContents = document.getElementsByClassName("tab-contents");
//on open tab function call
function openTab(tabname){
    for(item of tabLinks){
        item.classList.remove("active-link");
    }
    for(item of tabContents){
        item.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// get side menu 
var sideMenu = document.getElementById("sidemenu");

// on open menu function call 

function openMenu(){
    sideMenu.style.right = "0";
}
// on closs menu function call 

function closeMenu(){
    sideMenu.style.right = "-200px";
}