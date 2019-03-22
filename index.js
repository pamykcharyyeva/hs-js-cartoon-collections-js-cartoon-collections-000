var dwarfs=["Doc","Dopey","Bashful","Grumpy"]

function dwarfRollCall(dwarfs){
  var newStr="";
  dwarfs.forEach(function(name,index){
    newStr+=(index+1+". "+name+" ");
  });
  return newStr;
}

var planeteerCalls=["earth","wind","fire","water","heart"]

function summonCaptainPlanet(planeteerCalls){
	var array = [];
  for (var i = 0; i < planeteerCalls.length; i++) {
   array.push(planeteerCalls[i] + "!");
  }
  return array.map(a=>a.toUpperCase());
}

function longPlaneteerCalls(planeteerCalls){
  if (planeteerCalls.length>4){
    return true;
  }
  return false;
}

var cheese=["cheddar","gouda","camembert"]

function findTheCheese(food){
  for (var i=0; i<cheese.length; i++){
    if (food[i] =="cheddar"
    || food[i] =="gouda"
    || food[i] =="camember"){
      return food[i];
    }
    }
    return "no cheese!"
}