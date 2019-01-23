 var dwarves = ["Doc", "Dopey", "Bashful", "Grumpy"]
 
function dwarfRollCall(dwarves) {
   var array =[]
   for (var i=0;i<dwarves.length;i++){
     array.push(`${i+1}. ${dwarves[i]} `)
   }
   return array.join("")
}

var planeteerCalls = ["earth","wind","fire","water","heart"]

function summonCaptainPlanet(planeteerCalls){
  return planeteerCalls.map(a=>a.toUpperCase()+"!")
}

function longPlaneteerCalls(planeteerCalls) {
  for(var i=0;i<planeteerCalls.length;i++){
    if (planeteerCalls[i].length>4){
      return true
    }
  }
  return false
}

var cheese = ["camembert","gouda","cheddar"];
function findTheCheese (foods) {
  for(var i=0;i<foods.length;i++){
  if (foods[i]=="camembert"
  ||foods[i]=="gouda"
  ||foods[i]=="cheddar"
  ){
    return foods[i]
  }
}
return "no cheese!"
  }
  