function monkeyCount(n) {
const monkeys = [];
  for(let i=0; i<n; i++)
  {
    monkeys[i] = i + 1;
  }
  return monkeys;
}

function maps(x){
  return x.map(num => 2 * num);
}

function removeChar(str){
  const newStr = str.split('');
  newStr.pop();
  newStr.splice(0,1).pop();
  str = newStr.join('');
  return str;
}

let number = function(busStops){
  let sum = 0;
  for(let i = 0; i < busStops.length; i++) {
    sum = sum + busStops[i][0] - busStops[i][1];
  }
  return sum;
}

 module.exports = {
  monkeyCount,
  maps,
  removeChar,
  number
}