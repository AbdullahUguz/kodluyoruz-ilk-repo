
let listDOM=document.querySelector("#list");
let closeDOM=document.getElementsByClassName('close');

xIcon();
deleteEvent();

function xIcon(){
    let nodeList=document.getElementsByTagName('li')

    for(let i=0;i<nodeList.length;i++){
        let span =document.createElement('span')
        let text =document.createTextNode('X') // \u00D7
        span.className='close'
        span.appendChild(text)
        nodeList[i].classList.add("list-item")
        nodeList[i].appendChild(span)

    }
}

function deleteEvent(){
    for(let i=0; i<closeDOM.length;i++){
    
        closeDOM[i].onclick=function(){
            let li=this.parentElement;
            li.style.display='none';
            li.classList.remove('checked')
        };
    }
}

listDOM.addEventListener('click',function(item){

    if(item.target.tagName=='LI'){
        item.target.classList.toggle('checked')
        toggleDeleteButton();
    }
});


document.querySelector('#deleteAll').onclick=function(){
    let elements=document.querySelectorAll('.checked')

    elements.forEach(item => {
        item.style.display='none'
    });

}

function toggleDeleteButton(){
    let checkedList=document.querySelectorAll('.checked');
    if(checkedList.length>0){
        document.querySelector('#deleteAll').classList.remove('d-none')
    }else{
        document.querySelector('#deleteAll').classList.add('d-none')
    }
}

function newElement(){

    const INPUT=document.querySelector("#task")
    if(INPUT.value && !(INPUT.value.replace(/^\s+|\s+$/g, "").length == 0 )){
        $(".success").toast("show");
        addItem(INPUT.value);
    }else{
        $(".error").toast("show");
    }
    
} 

const addItem = (value) =>{
    
    let liDOM=document.createElement("li")
    liDOM.innerHTML=`  ${value}`
    listDOM.appendChild(liDOM)  

    xIcon();
    deleteEvent();
}



