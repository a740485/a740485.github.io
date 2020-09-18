class Todo{

    constructor(listbox){
        
        this.listbox = listbox;
        this.todoFrame = new Todoframe("todo")
        this.completeTodoFrame = new Todoframe("completeTodo")

        this.todoFrame.titleLable = "代辦任務";
        this.completeTodoFrame.titleLable = "已完成任務";

    }




    
    get todolist(){
        this.listbox.appendChild(this.todoFrame.todolist);
        this.listbox.appendChild(this.completeTodoFrame.todolist);

        // console.log(this.listbox)
        return this.listbox;
    }


}

class Todoframe{
    constructor(name){
        this.name = name;
        this.todoClass = this.todo_class();
        this.titleClass = this.title_class();
        this.titleP = this.title_p();
        this.navBarRightClass = this.navBarRight_class();

        this.itemClass = this.todoItem_class();
    }

    set titleLable(name){
        this.titleP.innerHTML = name;
    }

    todo_class(){
        const todo = document.createElement('div');
        todo.setAttribute('class', this.name);
        return todo;
    }

    title_class(){
        const todotitle = document.createElement('div');
        let titlename = this.name + "Title";
        todotitle.setAttribute('class', titlename);
        return todotitle;
    }

    title_p(){
        const title = document.createElement('p');
        title.setAttribute('class', "todolistTitle");
        return title;
    }

    todoItem_class(){
        const item = document.createElement('div')
        let className = this.name+"Item";
        item.setAttribute('class', className)
        item.setAttribute('id', className)
        return item
    }

    navBarRight_class(){
        const rightBox = document.createElement('diiv');
        rightBox.setAttribute('class', "right");

        const up_downBtn = document.createElement('div');
        up_downBtn.setAttribute('class', "up-down");

        const addBtn = document.createElement('div');
        addBtn.setAttribute('class', "addBtn");
        addBtn.setAttribute('onclick', "addBtn()");

        const up_down_img = document.createElement('img');
        up_down_img.setAttribute('src', "./img/up-down.png");
        up_down_img.setAttribute('alt', "up-down");

        const addBtn_img = document.createElement('img');
        addBtn_img.setAttribute('src', "./img/add.png");
        addBtn_img.setAttribute('alt', "addBtn");

        up_downBtn.appendChild(up_down_img);
        addBtn.appendChild(addBtn_img);

        rightBox.appendChild(up_downBtn);
        rightBox.appendChild(addBtn);

        return rightBox;
    }

    get todolist(){
        this.titleClass.appendChild(this.titleP);
        // 右邊按鈕
        switch(this.name){
            case "todo":
                this.titleClass.appendChild(this.navBarRightClass);
                break;
        }

        this.todoClass.appendChild(this.titleClass);
        this.todoClass.appendChild(this.itemClass);
        
        return this.todoClass;
    }

}

{/* 
<div class="todo"> // todoClass
    <div class="todoTitle"> // titleClass
        <p class="todolistTitle"></p>
        <div class="right">
        </div>
    </div>

    <div class="todoItem"> //itemClass
        container
    </div>
</div> 
*/}



