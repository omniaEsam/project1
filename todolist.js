//select elements
let $input = document.querySelector("#new-task");
let $button = document.querySelector("#add-button");
let $items = document.querySelector(".items");
let $msg = document.querySelector(".warn");
let $form = document.querySelector("#todo-form");
let $clear_btn = document.querySelector(".clear_btn");
$form.addEventListener("submit",function(e){
    e.preventDefault()
    if($input.value==" "){
        warnMsg();
    }
    else{
        addElement();
    }
})
//addElement
function addElement(){
    let newList = document.createElement("li");
    let check = document.createElement("input");
    let label = document.createElement("label");
    check.type="checkbox";
    label.innerHTML= $input.value;
    newList.append(check,label);
    $items.appendChild(newList);
    newList.classList.add("listyle");
    check.style.cursor="pointer";
    $clear_btn.addEventListener("click" ,function(){
     newList.style.display="none";
    })
    }

//warm msg
function warnMsg(){
    $msg.style.display="block";
    $input.style.border="2px solid red"
}
$input.addEventListener("keypress" , function(){
    $msg.style.display="none";
    $input .style.border="2px solid #fff";
})


