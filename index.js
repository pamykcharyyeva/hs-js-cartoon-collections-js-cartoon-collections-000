var dwarves=["Doc","Dopey","Bashful","Grumpy"]
function dwarfRollCall(dwarves){
  let newStr="";
  dwarves.forEach(function(name, index){
    newStr+=(index+1+". "+name+" ");
  });
  return newStr;
}

var planeteerCalls=["earth","wind","fire","water","heart"];
function summonCaptainPlanet(planeteerCalls){
  var array=[];
  for(var i=Math.floor(planeteerCalls.length/2); i<planeteerCalls.length; i++){
    array.push(planeteerCalls[i]+"!");
  }
  return array.map(a=>a.toUpperCase());
}

function longPlaneteerCalls(planeteerCalls){
  if(planeteerCalls.length>4){
    return true;
  }
  return false;
}

var cheese= ["cheddar", "gouda", "camember","blue"]
function findTheCheese(food){
  for (var i=0; i<food.length; i++){
    if (food[i]=="cheddar"
    || food[i]=="gouda"
    || food[i]=="camember"
    || food[i]=="blue"){
      return food[i];
    }
  }
    return "no cheese!";
  
}



function wordsWithB(arr){
  var bNames=[];
  for (let i=0; i<arr.length; i++){
    let name= arr[i];
    if (name[0]==="B" || name[0]==="b") { bNames.push(name);}
    }
  }return bNames;
}

