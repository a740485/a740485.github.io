
class Timmer{
    constructor(time){
        this.originTime = time;
        this.time =time;
        this.count = "";
    }

    get now(){
        return this.time
    }

    setTimeLable(){
        var sec = parseInt(this.time % 60); // 秒
        var min = parseInt((this.time / 60) % 60); // 分
        var hr = parseInt(this.time / 60 / 60); // 時

        var timeString = this.timeStringChange(min)+"："+this.timeStringChange(sec);
        
        let timeLab = document.getElementById('timeLab');
        timeLab.innerHTML = timeString;
        // console.log(hr+" : "+min+" : "+sec)
    }

    reset(){
        this.stop();
        this.time = this.originTime;
        document.getElementById("playImg").src="img/play.png";

        this.setTimeLable();
    }

    start(){
        this.count = setInterval(()=>{

            if(this.time == 0){
                // 時間到
                this.stop();
                this.time = this.originTime;
                document.getElementById("playImg").src="img/play.png";


                for(let i=0;i<onTimmerItem.length;i++){
                    let completeItem = new CompleteTodoItem(onTimmerItem[i]);
                    completeItem.create();
                }
                onTimmerItem = [];

                timebar.destroy();
            }else{
                this.time--;
            }

            this.setTimeLable();

        }, 1000)
    }

    timeStringChange(time){
        if(time < 10){
            return "0"+time;
        }
        return time;
    }

    stop(){
        clearInterval(this.count);
    }
}

var time = new Timmer(30);

class TimeBar{
    constructor(){
        this.bar = "";
    }

    setbar(sec){

        if(this.bar != ""){
            return;
        }

        let container = document.getElementById('time-wrap')
 
        this.bar = new ProgressBar.Circle(container, {
        color: 'black',
        strokeWidth: 50,
        trailWidth: 50,
        trailColor: 'white',
        easing: 'linear',
        duration: sec*1000,
        text: {
            style: {
            color: '#CBEAE7',
            display: 'inline-block',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)'
            },
            autoStyleContainer: false
        },
    
        from: { color: '#CBEAE7', width: 51},
        to: { color: '#CBEAE7', width: 51},
        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);  
            // var value = Math.round(circle.value() * 100);
            // circle.setText(value+'%');
        }
        });
    }

    start(sec){
        this.bar.animate(1.0,{
            duration: sec * 1000
        },function () {
            console.log('時間到')
        });
    }

    stop(){
        this.bar.stop();
    }

    destroy(){
        this.bar.destroy();
        this.bar = "";
    }
}

var timebar = new TimeBar(30);

function playBtn(){
    var img = document.getElementById("playImg").getAttribute("src");

    timebar.setbar(30)

    if(img == "img/play.png"){
        document.getElementById("playImg").src="img/stop.png";

        time.start();

        timebar.start(time.now)

    }else{
        document.getElementById("playImg").src="img/play.png";

        time.stop();

        timebar.stop()
    }


    
}

function cancelBtn(){
    const parent = document.getElementById('mainContent');
    let alertView = new AlertView(parent);
    alertView.cancleMissionView;

    // time.reset();
}

function nextBtn(){
    const parent = document.getElementById('mainContent');
    let alertView = new AlertView(parent);
    alertView.addRestView;
}



