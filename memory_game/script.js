
const shuffle = () => {
    var currentIndex = data.length;
    var temporaryValue;
    var randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = data[currentIndex];
      data[currentIndex] = data[randomIndex];
      data[randomIndex] = temporaryValue;
    }
  }

const check = ()=>{
    if(counter===2){
        if (valueFirst===valueLast&&idFirst!==idLast) {
            document.getElementById(idFirst).style.visibility='hidden';
            document.getElementById(idLast).style.visibility='hidden';
            points++
            console.log(points)
        } else {
            document.getElementById(idFirst).setAttribute("src","./images/blank.png");
            document.getElementById(idLast).setAttribute("src","./images/blank.png");
        }
    valueFirst=999
    valueLast=-999
    } 
    if(points===6){
        setTimeout(alert("y o u w i n"),3000)
    }
}

var counter = 0
var data = [1,1,2,2,3,3,4,4,5,5,6,6]
shuffle(data)
var idFirst
var idLast
var valueLast
var  valueFirst
var points =0


const elements = document.getElementsByClassName("car")



for(let i=0;i<elements.length;i++){
    elements[i].addEventListener("click",(e)=>{
        counter++;
        if(counter>2){
            counter=1
        }
       var id= e.target.id
        var num = id.substring(3); 
        // console.log(num)
        num =  parseInt(num)
        var imgSRC=`./images/${data[num]}.png`;
        document.getElementById(id).setAttribute("src",imgSRC);

        if(counter===1){
            valueFirst=data[num]
            idFirst=id;
        }
        if(counter===2){
            valueLast=data[num]
            idLast=id;
        }
        setTimeout(check,300)
    })
}