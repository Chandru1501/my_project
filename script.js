const btn = document.querySelector("#btnn");

btn.addEventListener('mouseover',(e) =>{
    e.preventDefault();
    console.log(e.target)
    document.querySelector('.box').style.background="#ccc";
    document.querySelector(".list").lastElementChild.innerHTML= "<h4>hello</h4>"

});