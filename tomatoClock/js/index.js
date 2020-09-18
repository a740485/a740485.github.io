
function addBtn(){
    const parent = document.getElementById('mainContent');
    let alertView = new AlertView(parent);
    alertView.addMissionView;
}

function createAnalysis(wrap){

    const listbox = document.createElement('div');
    listbox.setAttribute('class', 'listbox');
    listbox.setAttribute('id', "listbox")

    const listboxTitle = document.createElement('div');
    listboxTitle.setAttribute('class', "listBoxTitle");

    const analysis = document.createElement('div');
    analysis.setAttribute('class', "analysis");

    const nav = document.createElement('div');
    nav.setAttribute('class', "nav")

    const report = document.createElement('div');
    report.setAttribute('class', "report")

    const task = document.createElement('div');
    task.setAttribute('class', "task")

    nav.appendChild(report);
    nav.appendChild(task);

    analysis.appendChild(nav);

    listbox.appendChild(listboxTitle);
    listbox.appendChild(analysis);
    wrap.appendChild(listbox);
}

function removeListContent(wrap){
    let listbox = document.getElementById('listbox')
    if(listbox){
        wrap.removeChild(listbox);
    }
}

function moveTodoLink(newTop){
    var todolink = document.getElementById("todolink");
    var style = window.getComputedStyle(todolink);
    var top = style.getPropertyValue("Top");
    top = parseInt(top);

    if(top < newTop){
        var start = window.setInterval(function(){
            top += 10;
            todolink.style.top = top+"px";
            if(top >= newTop){
                window.clearInterval(start)
            }
        },10)
    }
    
    if(top > newTop){
        var start = window.setInterval(function(){
            top -=10;
            todolink.style.top = top+"px";
            if(top <= newTop){
                window.clearInterval(start)
            }
        },10)
    }
}