//if we click on start/reset
var playing=false;
var score;
var action;
var timeremaining;
var correct;
document.getElementById("startreset").onclick=
function(){
    if(playing==true){
        location.reload();//reload page

    }

    else{
        playing=true;

        score=0;
        //set score to 0
        document.getElementById("scorevalue").innerHTML=
        score;
        //countdown box 
        show("time");
        timeremaining=60;
        document.getElementById("timevalue").innerHTML=
        timeremaining;

        hide("over");

        //change button to reset
        document.getElementById("startreset").innerHTML="Reset Game";

        //reduce time by 1 sec
        startCountdown();

        //generate new Q&A
        generate();

    }
}

for(i=1;i<5;i++){

    document.getElementById("box"+i).onclick=
function(){
    if(playing==true){
        if(this.innerHTML==correct)
        {
            score++;
            document.getElementById("scorevalue").innerHTML=
            score;
            hide("wrong");
            show("correct");
            setTimeout(function(){
             hide("correct");
            },1000);

            generate();
        }

        else{
            hide("correct");
            show("wrong");
            setTimeout(function(){
                hide("wrong");
            },1000);
        }
    }
}
}

 //functions
 
 //start counter

 
      //time left
        //yes -> continue
        //no -> game over
    
 function startCountdown(){
     action=setInterval(function(){
     timeremaining-=1;
     document.getElementById("timevalue").innerHTML=
        timeremaining;

        if(timeremaining==0){

            stopCountdown();
            show("over");
            document.getElementById("over").innerHTML=
            "<p>Game over!</p><p>Your score is "+score+".</p>";
            hide("time");
            hide("correct");
            hide("wrong");
            playing=false;
            document.getElementById("startreset").innerHTML=
            "Start Game";

        }
     },1000);       
 }          

 //stop counter
 function stopCountdown(){
    clearInterval(action);
 }

 function hide(Id){
     document.getElementById(Id).style.display=
     "none";
 }

 function show(Id){
    document.getElementById(Id).style.display=
    "block";
}

function generate(){

    var x= 1+Math.round(9*Math.random());
    var y= 1+Math.round(9*Math.random());
    correct=x*y;
    document.getElementById("question").innerHTML=
    x+"X"+y;
    var correctpos=1+Math.round(3*Math.random());
    document.getElementById("box"+correctpos).innerHTML=
    correct;
    
    var answers=[correct];
    for(i=1;i<5;i++)
    {
        if(i!=correctpos){
            var wrongans;
            do
            {
                wrongans=(1+Math.round(9*Math.random()))*(1+Math.round(9*Math.random()));
                
            }while(answers.indexOf(wrongans)>-1)
            
            document.getElementById("box"+i).innerHTML=
                wrongans;
                answers.push(wrongans);
        }
    }

}

                  