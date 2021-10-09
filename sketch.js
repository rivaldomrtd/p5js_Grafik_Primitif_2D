var angles = [ 30, 10, 45, 35, 60, 38, 75, 67 ];
var colors = [
    [111, 191, 183],
    [242, 198, 65],
    [242, 149, 68],
    [242, 102, 102],
    [3, 101, 140],
    [80, 191, 191]
];
var tw = 70;
var th = 70;
let inc;
let a;


function setup() {
  createCanvas(800, 800);
  inc=TWO_PI/800;
  a = 0.0;
  noLoop();
  
}

function draw() {
  background(255);
  for (var x = 0; x < width; x+=tw) {
    for (var y = 0; y < height; y+=th) {
    
      /* logic for squares - pixel images */
      //drawSquare(x, y, tw, th);
      /* logic for two triangles per box */
      let rando = random();
      console.log(rando);
      drawTriangles(x, y, rando);
    }
  }
  pieChart(250, angles);
  garis();
  titik();
}

//square
function drawSquare(x, y, w, h) {
    if (random() < 0.8) {
        fill(colors[parseInt(random()*colors.length)]);
        rect(x, y, w, h);
      } else {
          fill(100);
          rect(x, y, w, h);
      }
}

//segitiga
function drawTriangles(x, y, dir){
    let ulx = x;
    let uly = y;
    let llx = x;
    let lly = y + th;
    let urx = x + tw; 
    let ury = y;
    let lrx = x + tw;
    let lry = y + th;
    if (dir > .5) {
      fill(getColor());
      triangle(ulx, uly, llx, lly, urx, ury);
      fill(getColor());
      triangle(llx, lly, urx, ury, lrx, lry);
    } else if (dir <= .5) {
      fill(getColor());
      triangle(ulx, uly, llx, lly, lrx, lry);
      fill(getColor());
      triangle(ulx, uly, urx, ury, lrx, lry);
    }
}

//color
function getColor() {
  // grab a fil color
  let col;
  
  if (random() < 0.8) {
    col = colors[parseInt(random(colors.length))];
  } else {
    col = 100;
  }
  stroke(col);
  return col;
}

//lingkaran
function pieChart(diameter, data) {
  var lastAngle = 0;
  stroke(56);
  for (var i = 0; i < data.length; i++) {
    var gray = map(i, 0, data.length, 100, 255);
    fill(gray);
    arc(width/2, height/2, diameter, diameter, lastAngle, lastAngle+radians(angles[i]));
    lastAngle += radians(angles[i]);
      
  }
}

//point
function titik(){
  strokeWeight(6);
  
  
  stroke(234,255,255);
  for (let i=0;i<800;i++){
    point(i,200+cos(a)*170);
    a=a+inc;
  }
  stroke(255,255,234)
  for (let i=0;i<800;i++){
    point(i,600+cos(a)*(-170));
    a=a+inc;
  }
}


//garis
function garis(){
  strokeWeight(6);
  for (let i=0;i<width;i+=20){
    line(0,i,i,height);
    stroke('black');

  }
  for (let j=0;j<height;j+=20){
    stroke('black');
    line(j,0,width,j);
  }
  for (let k=0;k<width;k+=20){
    stroke('black');
    line(width,k,width-k,height);
  }
  for (let l=0;l<height;l+=20){
    stroke('black');
    line(0,height-l,l,0);
  }
}