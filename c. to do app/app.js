let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function(){
    let item = document.createElement("li");
    item.innerText = inp.value;
    
    let delB = document.createElement("button");
    delB.innerText = "delete";
    delB.classList.add("delete");

    item.appendChild(delB);
    ul.appendChild(item);
    inp.value = "";
});

// let delBtns = document.querySelectorAll(".delete");
// for(delBtn of delBtns) {
//     delBtn.addEventListener("click", function(){
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//     });
// }

// delete btns
// ul.addEventListener("click", function (e) {
//     if (e.target.classList.contains("delete")) {
//         let par = e.target.parentElement;
//         par.remove();
//     }
// });

ul.addEventListener("click", function(event){
   if(event.target.nodeName == "BUTTON"){
    let par = event.target.parentElement;
    par.remove();
    console.log("deleteee");
   } 
});
