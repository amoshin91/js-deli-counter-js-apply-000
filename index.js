var katzDeliLine = [];

function takeANumber (line, name) {
  line.push(name)
  var message = "Welcome, " + name + ". You are number " + line.length + " in line."
  return message
}
 var something = 0
function newTakeANumber (line) {
 
  something = something + 1
 
  line.push(something)
  return 'Here is a number'
}

[3,4,5]
// var line = []
// newTakeANumber(line)   line is [1]
// newTakeANumber(line)  line is [1,2]
// nowServing(line)   line is [2]
//nowServing(line) line is []
// newTakeANumber(line) [3, 4, 5 ..]

function nowServing (line) {
  if (line.length >= 1) {
    return `Currently serving ${line.shift()}.`
  } else {
    var nobodyServed = "There is nobody waiting to be served!"
    return nobodyServed
  }
}

function currentLine (line, name) {
  if (line.length >= 1) {
    var i = 0
    var nameAndLine = [];
    for (i = 0; i < line.length; i++) {
      nameAndLine.push(' ' + (i + 1) + ". " + line[i])
    }
    return "The line is currently:" + nameAndLine.join()
  } else {
    var emptyLine = "The line is currently empty."
    return emptyLine
  }
}