function ballCollector(detritus) {
    let monkeys = {
      weight: 0
    }
    const tennisBalls = detritus.filter(w => w === 58);
    monkeys.weight = 58 * tennisBalls.length;
    return monkeys;
  }

  function countDevelopers(list) {
    let counter = 0;
    for (i = 0; i<list.length; i++){
      if(list[i].continent === 'Europe' && list[i].language === 'JavaScript')
        {
          counter++;
        }
    }
    return counter
  }

  function XO(str) {
    let strX = str.match(/[x]/ig);
    let strO = str.match(/[o]/ig);
    if (strX === null && strO === null)
    {
      return true
    }
    else if (strX === null || strO === null)
    {
      return false
    }
    else if (strO.length === strX.length)
    {
      return true
    }
    else 
    {
      return false
    }      
  }

  var splitInParts = function(s, partLength){
    let array = s.split('');
    let counter = 0;
    for (let i = 1; i<(s.length/partLength); i++)
      {
      counter = partLength * i + i -1
      array.splice(counter, 0, ' ');
      }
    return array.join('');
  }

  module.exports = {
    ballCollector,
    countDevelopers,
    XO,
    splitInParts
  }