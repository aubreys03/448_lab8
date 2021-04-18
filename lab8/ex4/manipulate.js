

function manipulate() {

  let redBorder = document.getElementById("redBorder").value;
  let greenBorder = document.getElementById("greenBorder").value;
  let blueBorder = document.getElementById("blueBorder").value;

  let redBackground = document.getElementById("redBackground").value;
  let greenBackground = document.getElementById("greenBackground").value;
  let blueBackground = document.getElementById("blueBackground").value;
    
  let manipulate = document.getElementById("manipulation");

  manipulate.style.borderColor = 'rgb(' + redBorder + ',' + greenBorder + ',' + blueBorder + ')';
  manipulate.style.backgroundColor = 'rgb(' + redBackground + ',' + greenBackground + ',' + blueBackground + ')';
}
