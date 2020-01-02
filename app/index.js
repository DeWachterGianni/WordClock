import clock from "clock";
import document from "document";
import { preferences } from "user-settings";
import * as util from "../common/utils";

clock.granularity = "seconds";

let opacityDark = 0.10;

let strings = 
[
  document.getElementById("It"), //0
  document.getElementById("Is"), //1
  document.getElementById("Half"), //2
  document.getElementById("Ten1"), //3
  document.getElementById("Quarter"), //4
  document.getElementById("Twenty"), //5
  document.getElementById("Five1"), //6
  document.getElementById("Minutes"), //7
  document.getElementById("To"), //8
  document.getElementById("Past"), //9
  document.getElementById("One"),
  document.getElementById("Three"),
  document.getElementById("Two"),
  document.getElementById("Four"),
  document.getElementById("Five2"),
  document.getElementById("Six"),
  document.getElementById("Seven"),
  document.getElementById("Eight"),
  document.getElementById("Nine"),
  document.getElementById("Ten2"),
  document.getElementById("Eleven"),
  document.getElementById("Twelve"),
  document.getElementById("Clock") //22
];

let stamps =
[
  strings[10],
  strings[12],
  strings[11],
  strings[13],
  strings[14],
  strings[15],
  strings[16],
  strings[17],
  strings[18],
  strings[19],
  strings[20],
  strings[21]
];

function showTime(hours, mins){
  light(0);
  light(1);
  
  if(mins <= 3){ //stamp o clock
    light(22);
    stamps[hours].style.opacity =  1;
  }else if(mins <= 8){ //five min past stamp
    light(6);
    light(7);
    light(9);
    stamps[hours].style.opacity =  1;
  }else if(mins <= 13){ //ten min past stamp
    light(3);  
    light(7);
    light(9);
    stamps[hours].style.opacity =  1;
  }else if(mins <= 18){ //quarter past stamp
    light(4);
    light(9);
    stamps[hours].style.opacity =  1;
  }else if(mins <= 23){ //twenty min past stamp
    light(5);  
    light(7);
    light(9);
    stamps[hours].style.opacity =  1;
  }else if(mins <= 28){ //twenty five min past stamp
    light(5);  
    light(6);
    light(7);
    light(9);
    stamps[hours].style.opacity =  1;
  }else if(mins <= 33){ //half past stamp
    light(2);
    light(9);
    stamps[hours].style.opacity =  1;
  }else if(mins <= 38){ //twenty five min to stamp + 1
    light(5);  
    light(6);
    light(7);
    light(8);
    stampPlus(hours + 1); 
  }else if(mins <= 43){ //twenty min to stamp + 1
    light(5);  
    light(7);
    light(8);
    stampPlus(hours + 1); 
  }else if(mins <= 48){ //quarter to stamp + 1
    light(4);  
    light(8);
    stampPlus(hours + 1);
  }else if(mins <= 53){ //ten min to stamp + 1
    light(3);
    light(7);
    light(8);
    stampPlus(hours + 1);
  }else if(mins <= 58){ //five min to stamp + 1
    light(6);  
    light(7);
    light(8);
    stampPlus(hours + 1);
  }
  else{ //stamp + 1 o clock
    stampPlus(hours + 1);
    light(22);
  }
}

function stampPlus(hours){
  if(hours >= 12)
    stamps[0].style.opacity = 1.0;
  else
    stamps[hours].style.opacity =  1.0;
}

function allDim(){
  for(var i = 0; i < strings.length; i++){
    dim(i);
  }
}

function dim(index){
  strings[index].style.opacity =  opacityDark;
}

function light(index){
  strings[index].style.opacity =  1;
}

clock.ontick = (evt) => {
  let today = evt.date;
  let hours = today.getHours();
  hours = hours % 12 || 12;  
  let mins = today.getMinutes();
  allDim();
  showTime(hours - 1, mins);
}
