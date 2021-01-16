const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arr){
  const season = arr.find(record => {return record.result == "W"});
  if (season) {return season.year;}
}