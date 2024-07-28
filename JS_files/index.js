function sort_enable(){
    document.querySelector(".bubble-sort").disabled = false;
    document.querySelector(".insertion-sort").disabled = false;
    document.querySelector(".merge-sort").disabled = false;
    document.querySelector(".quick-sort").disabled = false;
    document.querySelector(".selection-sort").disabled = false;
}
function sort_disable(){
    document.querySelector(".bubble-sort").disabled = true;
    document.querySelector(".insertion-sort").disabled = true;
    document.querySelector(".merge-sort").disabled = true;
    document.querySelector(".quick-sort").disabled = true;
    document.querySelector(".selection-sort").disabled = true;
}
function size_disable(){
    document.querySelector("#arr_size").disabled = true;
}

function size_enable(){
    document.querySelector("#arr_size").disabled = false;
}

function reset_disable(){
    document.querySelector(".reset").disabled = true;
}

function reset_enable(){
    document.querySelector(".reset").disabled = false;
}
function waitforme(milisec) { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, milisec); 
    }) 
}
function swap(el1, el2) {
    console.log('In swap()');
    
    let temp = el1.style.height;
    el1.style.height = el2.style.height;
    el2.style.height = temp;
    
}
let n=document.querySelector('#arr_size');
n.addEventListener('input',function()
{
    console.log(n.values,typeof(n.value))
    create_graph(parseInt(n.value));
})
let delay=300;
let delayspeed=document.querySelector('#srt_speed');
delayspeed.addEventListener('input',function()
{
    delay=360-parseInt(delayspeed.value);
})
let arr=[];
create_graph();
function create_graph(num=30)
{
    deleteChild();

    arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(Math.floor(Math.random() * 250) + 1);
    }
    console.log(arr);
    const bars = document.querySelector("#bars");
    for (let i = 0; i < num; i++) {
        const bar = document.createElement("div");
        bar.style.height = `${arr[i]*2}px`;
        // bar.style.alignItems ="center"
        bar.classList.add('bar');
        bar.classList.add('flex-item');
        bar.classList.add(`barNo${i}`);
        bars.appendChild(bar);
    }
}
function deleteChild() {
    const bar = document.querySelector("#bars");
    bar.innerHTML = '';
}
const resett = document.querySelector(".reset");
resett.addEventListener("click", function(){
    console.log("From newArray " + n.value);
    console.log("From newArray " + delay);
    sort_enable();
    size_enable();
    create_graph(n.value);
});