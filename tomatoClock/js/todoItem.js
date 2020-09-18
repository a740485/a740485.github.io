function itemCancle(item){
    let parent = document.getElementById("todoItem");

    itemBox = item.parentNode.parentNode
 
    let ItemIndex = todoItem.indexOf(itemBox)
    let OntimmerIndex = onTimmerItem.indexOf(itemBox)

    if(ItemIndex != -1){
        todoItem.splice(ItemIndex, 1);
    }

    if(OntimmerIndex != -1){
        onTimmerItem.splice(OntimmerIndex, 1);
    }

    parent.removeChild(itemBox)
}

var onTimmerItem = [];

function itemPlay(item){

    itemBox = item.parentNode.parentNode

    if(item.alt == "stop"){
        item.alt = "play";
        item.src = "img/listplay.png";

        let index = onTimmerItem.indexOf(itemBox);
        
        if(index != -1){
            onTimmerItem.splice(index, 1);
        }
    }else{
        item.alt = "stop";
        item.src = "img/liststop.png";
        
        onTimmerItem.push(itemBox);
    }
}

var completeTodoItem = []

class CompleteTodoItem{

    // 直接修改itembox並新增到 completeTodoItem

    constructor(itembox){
        this.ItemBox = itembox;
    }

    create(){
        let parent = document.getElementById("completeTodoItem")

        let itemBox = this.ItemBox;

        completeTodoItem.push(itemBox);
        // 刪除右側按鈕區
        itemBox.removeChild(itemBox.childNodes[1])

        parent.appendChild(itemBox);
    }

    navCreate(){
        let parent = document.getElementById("completeTodoItem");
        let itemBox = this.ItemBox;
        parent.appendChild(itemBox);
    }
}

var todoItem = [];

class TodoItemFrame{
    constructor(item, tomato){
        this.item = item;
        this.tomato = tomato; // 尚未製作
        this.Itembox = "";
        this.Left = this.left();
        this.Check = this.check();
        this.Check_P = this.check_P(item);
        this.Right = this.right();
        this.CancleBtn = "";
        this.PlayBtn = "";
    }

    create(){
        this.Itembox = this.itembox();
        this.CancleBtn = this.cancleBtn();
        this.PlayBtn = this.playBtn();

        this.Right.appendChild(this.CancleBtn);
        this.Right.appendChild(this.PlayBtn);

        this.Left.appendChild(this.Check);
        this.Left.appendChild(this.Check_P);

        this.Itembox.appendChild(this.Left);
        this.Itembox.appendChild(this.Right);

        let parent = document.getElementById("todoItem")

        todoItem.push(this.Itembox);
        parent.appendChild(this.Itembox);
        // return this.Itembox;        
    }

    itembox(){
        let view = document.createElement('div');
        view.setAttribute('class', 'itembox');
        // view.setAttribute('id', "itembox_"+id)
        return view;
    }

    left(){
        let view = document.createElement('div');
        view.setAttribute('class', 'left');
        return view;
    }

    check(){
        let view = document.createElement('div');
        view.setAttribute('class', 'check');
        return view;
    }

    // 會更改
    check_P(msg){
        let view = document.createElement('p');
        view.innerHTML = msg;
        return view;
    }

    right(){
        let view = document.createElement('div');
        view.setAttribute('class', 'right');
        return view;
    }

    cancleBtn(){
        let view = document.createElement('img');
        view.setAttribute('onclick', "itemCancle(this)");
        view.setAttribute('src', "img/Group 65.png")
        view.setAttribute('alt', "cancle")
        return view;
    }

    playBtn(){
        let view = document.createElement('img');
        view.setAttribute('onclick', "itemPlay(this)");
        view.setAttribute('src', "img/listplay.png")
        view.setAttribute('alt', "play")
        return view;
    }

}