
const gui = new dat.GUI();

const canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');
	
var wave ={
	y: canvas.height/2,
	length: 0.01,
	amplitude: 100,
	frequency: 0.01
}	

var strokecolor= {
	h:0,
	s:50,
	l:50
}
var backgroundcolor= {
	r:0,
	g:0,
	b:0,
	a:0.01
}
var waveFolder = gui.addFolder("wave");

waveFolder.add(wave ,"y" , 0, canvas.height);
waveFolder.add(wave ,"length" , -0.01, 0.01);
waveFolder.add(wave ,"amplitude" , -300, 300);

var strokeFolder = gui.addFolder("strokecolor");
strokeFolder.add(strokecolor ,"h" , 0, 255);
strokeFolder.add(strokecolor ,"s" , 0, 100);
strokeFolder.add(strokecolor ,"l" , 0, 100);

var backgroundFolder = gui.addFolder("backgroundcolor");
backgroundFolder.add(backgroundcolor ,"r" , 0, 255);
backgroundFolder.add(backgroundcolor ,"g" , 0, 255);
backgroundFolder.add(backgroundcolor ,"b" , 0, 255);
backgroundFolder.add(backgroundcolor ,"a" , 0, 1);
// window.addEventListener("resize",function(){
// 	canvas.width = window.innerWidth;
// 	canvas.height = window.innerHeight;
// 	init();
// });

	
var increment = wave.frequency;
function animate(){
//ctx.clearRect(0,0,innerWidth,innerHeight);
ctx.fillStyle= "rgba(" + backgroundcolor.r +"," + backgroundcolor.g +"," + backgroundcolor.b + "," + backgroundcolor.a +")";
ctx.fillRect(0,0,innerWidth,innerHeight);
ctx.beginPath();
ctx.moveTo(0, canvas.height/2);
for(var i=0 ;i<canvas.width ;i++){
	ctx.lineTo(i ,wave.y + Math.sin(i * wave.length + increment)*wave.amplitude * Math.sin(increment));
}
ctx.strokeStyle= "hsl(" + Math.abs(strokecolor.h *Math.sin(increment)) + "," + strokecolor.h + "%," + strokecolor.l + "%)";
ctx.stroke();
increment += wave.frequency;
}

setInterval(animate, 10);