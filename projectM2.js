    

function init(){
    const input=document.createElement("div");
    input.classList.add("input")
    input.innerHTML=`<input type="text" id="text-input"> <img class="delete" src="./images/delete.svg" alt="delete">`
    document.querySelector("#list").append(input);
    clickRemover(input)
}

function clickButton(){
            let button=document.querySelector("button");
            button.addEventListener("click", init)
}



    
clickButton()
init()

function remover(e){
    e.target.parentElement.remove();
}

function clickRemover(el){
    el.addEventListener("click", (e)=>{
        if (e.target.classList.contains("delete")){
            e.stopPropagation();
            if (document.querySelector("#list").length == 1) e.target.querySelector("input").value=" ";
            else e.target.parentElement.remove()}}
    )

}

function initSort(){
    const sortBtn=document.querySelector("#sortbutton");
    setListenerforsort(sortBtn)
}

let dir=1;
function setListenerforsort(btn){
    btn.addEventListener("click", (e)=>{
        let arr=getMyInputArr();
        dir = -dir;
        let sorter = mySort(arr, dir);
        rerender(sorter,list);
        changeBtn(btn);
    })
}

function getMyInputArr(){
    let list=document.querySelector("#list");
    let nodeList=list.querySelectorAll(".input");
    let arr=[].slice.call(nodeList)
    return arr;

}

function mySort(arr, direction){
    const resArr=[...arr]
    resArr.sort((a,b)=>{
        if(a.querySelector("input").value > b.querySelector("input").value) return direction;
        return -direction;
    })
    return resArr;
}
function rerender(arr,el){
    el.innerHTML=``;
    arr.forEach(element =>{
        el.append(element);
    })
}

function changeBtn(btn){
    btn.classList.toggle("sortDown");
    btn.classList.toggle("sortUp");
}
initSort()