var add = document.getElementById("input")

var list = document.getElementById("list")

function addTodo(){
   
    var listItem = document.createElement("li")
    listItem.setAttribute("class","listItem")
    var listText = document.createTextNode(add.value)
    listItem.appendChild(listText)

    var delBtn = document.createElement("button")
    var delbtnName = document.createTextNode("DELETE")
    delBtn.setAttribute("class","delBtn")
    delBtn.setAttribute("onclick","deleteItem(this)")
    delBtn.appendChild(delbtnName)

    var editBtn = document.createElement("button")
    var btnName = document.createTextNode("EDIT ITEM")
    editBtn.setAttribute("class","editBtn")
    editBtn.setAttribute("onclick","edit(this)")
    editBtn.appendChild(btnName)
    
    
    list.appendChild(listItem)
    listItem.appendChild(delBtn)
    listItem.appendChild(editBtn)

    list.style.fontSize = "40px"
    add.value = ""   
    

}
function deleteAll(){
    list.innerHTML = ""
    add.value = "" 
}

function deleteItem(e){
    e.parentNode.remove()
   
}
function edit(e){
   e.parentNode.firstChild.nodeValue
   var val = prompt("Enter updated value!",e.parentNode.firstChild.nodeValue)
   e.parentNode.firstChild.nodeValue = val
}