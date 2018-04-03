function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  var lineSize = katzDeliLine.length;
  return `Welcome, ${name}. You are number ${lineSize} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var firstPerson = katzDeliLine.shift();
    return `Currently serving ${firstPerson}.`;
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine) {
  var message = `katzDeliLine[i]`;
  
  katzDeliLine.push("")
  
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  }
  
  for (var i = 0; i < katzDeliLine.length; i++) {
    return `The line is currently:`;
  }
  
}




