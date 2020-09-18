let navItem = ["main","music","analysis"];
function navItemClick(name){

    for(i in navItem){
        // 把selected關掉
        let is_seleted = document.getElementById(navItem[i]).classList.contains("nav-seleted");
        if(is_seleted){
            document.getElementById(navItem[i]).classList.remove("nav-seleted");
        }
    }

    document.getElementById(name).classList.add("nav-seleted");

    alertBtnCancle();

    var wrap = document.getElementById('main-wrap');
    // 刪除item 創新的
    // console.log(wrap)
    removeListContent(wrap);
    wrap = document.getElementById('main-wrap');
    switch(name){
        case 'main':
            moveTodoLink(0);
            const listbox = document.createElement('div');
            listbox.setAttribute('class', 'listbox');
            listbox.setAttribute('id', "listbox")
   
            let todo = new Todo(listbox);
            wrap.appendChild(todo.todolist);

            this.addTodoItem();
            this.addCompleteItem();
            break;
        case 'music':
            moveTodoLink(90);
            
            
            
            break;
        case 'analysis':
            moveTodoLink(180);
            createAnalysis(wrap);
            break;
        default:
            break;
    }

}

function addTodoItem(){
    console.log("TodoItem: "+todoItem)
    let parent = document.getElementById("todoItem")
    for(let i=0;i<todoItem.length;i++){
        console.log(todoItem[i])
        parent.appendChild(todoItem[i]);
    }
}

function addCompleteItem(){
    console.log("CompleteItem: "+completeTodoItem)
    for(let i=0;i < completeTodoItem.length; i++){
        let completeItem = new CompleteTodoItem(completeTodoItem[i]);
        completeItem.navCreate();
    }
}