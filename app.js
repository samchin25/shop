let menu = document.querySelectorAll(".dropdown-item");
let tovar = document.querySelectorAll(".tovar");
//console.log(tovar);

for(let i = 0; i < menu.length; i++) {
    menu[i].onclick = function(event) {
        tovar.forEach(el=>{
            if(el.classList.contains(event.target.id)) el.style.display = "block";
            else el.style.display = "none";            
        })         
    }
}

