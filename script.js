let input = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click",function(){
    let items = document.createElement("li");
    items.innerText = input.value;

    let delbtn = document.createElement("button");
    delbtn.innerText = "delete";
    delbtn.classList.add("delete");

    items.appendChild(delbtn);

    ul.appendChild(items);
    input.value="";

});

let delbtns = document.querySelectorAll(".delete");
for(delbtn of delbtns){
    delbtn.addEventListener("click",function (){
        // console.log("element deleted");
        let par = delbtn.parentElement;
        console.log(par);
        par.remove();

    });
}