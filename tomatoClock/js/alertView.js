function alertBtnCancle(){
    let parent = document.getElementById('mainContent');
    let alertView = document.getElementById('alertViewContainer')
    if(alertView){
        parent.removeChild(alertView)
    }
}

function tomato(num){
    console.log(num)
    for(let i=1;i<=5;i++){
        let view = document.getElementById("tomato_"+i);
        if(i <= num){
            view.className = "tomatoFill";
        }else{
            view.className = "tomato";
        }
        console.log("---")
    }
}

function alertBtnConfirm(mission){
    
    switch(mission){
        case "add":
            // 新增任務
            console.log('in add')

            let input = document.getElementById("createInput");

            let tomato = 1;
            let item = new TodoItemFrame(input.value, tomato);

            item.create();
            break;
        case "cancle":
            // 時間的取消
            console.log('in cancle')
            time.reset();
            timebar.destroy();
            break;
        case "rest":
            // 提前休息
            console.log('in rest')
            time.reset();
            timebar.destroy();
            break;
        default:
            alertBtnCancle();
            return;
    }

    alertBtnCancle();
}

class AlertView{
    constructor(parent){
        this.parent = parent;
        this.addMissionViewFrame = new AlertViewFrame("add");
        this.addRestViewFrame = new AlertViewFrame("rest");
        this.cancleMissionViewFrame = new AlertViewFrame("cancle");
    }

    get addMissionView(){
        this.addMissionViewFrame.alertTitleName = "新增任務";
        this.addMissionViewFrame.AddMissionContent()

        this.parent.appendChild(this.addMissionViewFrame.use);
        return this.parent
    }

    get addRestView(){
        this.addRestViewFrame.alertTitleName = "跳至休息時間";
        this.addRestViewFrame.alertMsg = "您確定要終止目前任務？ 該番茄鐘將不列入計算。 ";

        this.parent.appendChild(this.addRestViewFrame.use);
        return this.parent
    }

    get cancleMissionView(){
        this.cancleMissionViewFrame.alertTitleName = "終止任務";
        this.cancleMissionViewFrame.alertMsg = "您確定要終止目前任務？ 此次番茄鐘將不列入計算。";

        this.parent.appendChild(this.cancleMissionViewFrame.use);
        return this.parent
    }

}

class AlertViewFrame{
    constructor(mission){
        this.AlertViewContainer = this.alertViewBackground();
        this.AlertView = this.alertView();
        this.AlertTitle = this.alertTitle();

        this.AlertTitleMsg = this.alertTitle_P();
        this.AlertContent = this.alertContent();
        this.AlertContentMsg = this.alertContent_P();
        this.AlertFooter = this.alertFooter();

        this.CancleBtn = this.cancleBtn();
        this.ConfirmBtn = this.confirmBtn(mission);

        this.AddNameContent = this.addNameContent();
        this.AddNameContent_P = this.addNameContent_P();
        this.AddNameInput = this.addNameInput();
        this.TomatoContent = this.tomatoContent();
        this.TomatoContent_P = this.tomatoContent_P();
        this.TomatoArray = this.tomatoArray();
        
    }

    AddMissionContent(){

        for(let i=1;i<=5;i++){
            let tomato = this.tomato(i);
            this.TomatoArray.appendChild(tomato);
        }
        

        this.TomatoContent.appendChild(this.TomatoContent_P);
        this.TomatoContent.appendChild(this.TomatoArray);

        this.AddNameContent.appendChild(this.AddNameContent_P);
        this.AddNameContent.appendChild(this.AddNameInput);


        this.AlertContent.appendChild(this.AddNameContent);
        this.AlertContent.appendChild(this.TomatoContent);
    }

    set alertTitleName(name){
        this.AlertTitleMsg.innerHTML = name
    }

    set alertMsg(msg){
        this.AlertContentMsg.innerHTML = msg;
    }

    // 背景
    alertViewBackground(){
        const view = document.createElement('div');
        view.setAttribute('class',"alertViewContainer");
        view.setAttribute('id',"alertViewContainer");
        return view
    }

    alertView(){
        let view = document.createElement('div');
        view.setAttribute('class', "alertView");

        
        return view
    }

    alertTitle(){
        let view = document.createElement('div');
        view.setAttribute('class', "alertTitle");
        return view
    }

    alertTitle_P(){
        let view = document.createElement('p');
        return view
    }


    alertContent(){
        let view = document.createElement('div');
        view.setAttribute('class', "alertContent");
        return view
    }
    
    alertContent_P(){
        let view = document.createElement('p');
        return view;
    }

    addNameContent(){
        let view = document.createElement('div');
        view.setAttribute("class", "addNameContent")
        return view;
    }

    addNameContent_P(){
        let view = document.createElement('p');
        view.innerHTML = "任務名稱";
        return view;
    }

    addNameInput(){
        let view = document.createElement('input');
        view.setAttribute("id", "createInput");
        view.setAttribute("type", "text");
        view.setAttribute("placeholder", "輸入任務");
        return view;
    }

    tomatoContent(){
        let view = document.createElement('div');
        view.setAttribute("class", "tomatoContent");
        return view;
    }

    tomatoContent_P(){
        let view = document.createElement('p');
        view.innerHTML = "番茄數";
        return view;
    }

    tomatoArray(){
        let view = document.createElement('div');
        view.setAttribute("class", "tomatoArray");
        return view;
    }

    tomato(num){
        let view = document.createElement('div');
        view.setAttribute("class", "tomato");
        view.setAttribute('id',"tomato_"+num);
        view.setAttribute('onclick',"tomato("+num+")")
        return view;
    }


    alertFooter(){
        let view = document.createElement('div');
        view.setAttribute('class', "alertFooter");
        return view
    }

    cancleBtn(){
        let view = document.createElement('div');
        view.setAttribute('class', "alertBtn");
        view.setAttribute('id', "alertBtnCancle");
        view.setAttribute('onclick', "alertBtnCancle()");
        let p = document.createElement('p');
        p.innerHTML = "取消"
        view.appendChild(p)
        return view
    }

    confirmBtn(mission){
        let view = document.createElement('div');
        view.setAttribute('class', "alertBtn confirmBtn");
        view.setAttribute('id', "alertBtnConfirm");
        view.setAttribute('onclick', "alertBtnConfirm(\""+mission+"\")")
        let p = document.createElement('p');
        p.innerHTML = "確認"
        view.appendChild(p)
        return view
    }


    get use(){
        // AlertTitle
        this.AlertTitle.appendChild(this.AlertTitleMsg)
        this.AlertView.appendChild(this.AlertTitle)

        // AlertContent
        this.AlertContent.appendChild(this.AlertContentMsg);
        this.AlertView.appendChild(this.AlertContent)

        // AlertFooter
        this.AlertFooter.appendChild(this.CancleBtn);
        this.AlertFooter.appendChild(this.ConfirmBtn);
        this.AlertView.appendChild(this.AlertFooter)
        this.AlertViewContainer.appendChild(this.AlertView)

        return this.AlertViewContainer;
    }

    
}