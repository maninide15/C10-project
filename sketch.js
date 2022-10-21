function setup() {
  createCanvas(400, 400);
  var marks = [98, 78, 89, 87, 65]

  var sum = 0

  for (i = 0; i < marks.length; i++){
    sum = sum + marks[i];
    
  }

  console.log(sum / marks.length)
}

function draw() {
  background(220);
}