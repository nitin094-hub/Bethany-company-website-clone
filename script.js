

//hamburger menu
let ul=document.getElementById("navi_elem");
let icon=document.getElementById("hamburger");
icon.addEventListener("click",()=>{
    if(ul.style.display=="none"){
        ul.style.display="flex";
    }
    else{
        ul.style.display="none";

    }
})
ul.style.display="flex";
//end

//slider image
let left_arrow=document.querySelector(".fa-chevron-left");
let right_arrow=document.querySelector(".fa-chevron-right");
let slider=document.querySelectorAll(".testimonial_img");
let curr=0,prev=0;
// console.log(left_arrow)
function reset(){
    slider.forEach(item=>{
        item.style.display="none";
        
    })
}

function start(){
    reset()
    slider[0].style.display="block";
    curr++;
}

function left_click(){
    reset();
    slider[curr].style.display="block";
    // slider[curr].classList.remove("active")
    if(curr==0){
        curr=slider.length;
    }
    curr--;
}

function right_click(){
    reset();
    // slider[curr].classList.add("active")
    
    slider[curr].style.display="block";
    // slider[curr].style.transform="translate(0px)";
    // slider[curr].classList.remove("active")
    console.log(prev)
    prev=curr;
    if(curr==slider.length-1){
        curr=-1;
    }
    curr++;
}
left_arrow.addEventListener("click",left_click);
right_arrow.addEventListener("click",right_click);
start()
