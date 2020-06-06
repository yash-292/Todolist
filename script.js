window.onload = function () {
    let num = document.getElementById('num')
    let list = document.getElementById('list')
    let print = document.getElementById('print')
    let add = document.getElementById('add')

    print.onclick = function () {
        let n = parseInt(num.value)
        //let listHTML=''
        for (let i = 1; i <= n; i++) {
            let item = document.createElement('li')
            //listHTML+='<li>'+ i+ '</li>'
            item.innerText = i
            list.appendChild(item)
        }
        //list.innerHTML=listHTML

    }
    add.onclick = function () {
        let li = document.createElement('li')
        li.innerText = num.value
 let taskspan=document.createElement('span')
        let xdelete = document.createElement('button')
       xdelete.innerText='↩'
       
       xdelete.onclick=function(event){
                 event.target.parentElement.remove()
       }
       let upbutton=document.createElement('button')
       upbutton.innerText='⬆'
       upbutton.onclick=function(){
        event.target.parentElement.parentElement.insertBefore(event.target.parentElement,//to be shifted before
            event.target.parentElement.previousElementSibling)//

       }
       let downbutton=document.createElement('button')
       downbutton.innerText='⬇'
       downbutton.onclick=function(){
        event.target.parentElement.parentElement.insertBefore(event.target.parentElement.nextElementSibling,//to be shifted after
            event.target.parentElement)//

       }
       list.appendChild(li)
        li.appendChild(xdelete)
        li.appendChild(upbutton)
        li.appendChild(downbutton)
        li.appendChild(taskspan)


    }

}