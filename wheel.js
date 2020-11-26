
const canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');
		

window.addEventListener("resize",function(){
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	init();
});

var colorA=[
			"#590212",
			"#A6263E",
			"#929AA6",
			"#697C8C",
			"#A60303"
];
// function getDistance(x1,y1,x2,y2){
// 	let xD = x1-x2;
// 	let yD = y1-y2;
// 	return Math.pow((Math.pow(xD,2) + Math.pow(yD,2)) ,0.5);
// }
function returnrange(min ,max){
	return Math.floor(Math.random()*(max - min +1) + min);
};

var mouse={
	x: 100,
	y: 100
}
window.addEventListener("mousemove",function(event){
	mouse.x=event.x;
	mouse.y=event.y;
	
})

addEventListener("click",function(){
	ctx.clearRect(0,0,innerWidth,innerHeight);
	init();
})


function Particle(x,y,radius,color){
	this.x=x;
	this.y=y;
	this.radius=radius;
	this.color = color;
	this.radians = Math.random() * Math.PI*2;
	this.velocity = 0.05;
	this.centerdistance = returnrange(100 ,200);
	this.mouseLast = {x:x, y:y};

	this.draw= function  (l) {
		ctx.beginPath();
		// ctx.arc(this.x,this.y, this.radius, 0, 2 * Math.PI);
		// ctx.stroke();
		// ctx.fillStyle = this.color;
		// ctx.fill();
		// ctx.stroke();
		ctx.strokeStyle= this.color;
		ctx.lineWidth = this.radius;
		ctx.moveTo(l.x, l.y);
		ctx.lineTo(this.x ,this.y);
		ctx.stroke();
		ctx.closePath();
		};
	this.update= function(){

		//console.log(x);
		var lastPoint ={
			x:this.x,
			y: this.y
		}
		this.mouseLast.x += (mouse.x - this.mouseLast.x) * 0.05;
		this.mouseLast.y += (mouse.y - this.mouseLast.y) * 0.05;
		this.radians += this.velocity;
		this.x = this.mouseLast.x +  Math.cos(this.radians)*this.centerdistance;
		this.y = this.mouseLast.y+  Math.sin(this.radians)*this.centerdistance;
		this.draw(lastPoint);
	}


}

let particles;

function init(){
	particles=[];
	for(var i=0; i<50 ;i++){
		var radi = (Math.random() * 10) +1;
		var colo = colorA[Math.floor (Math.random() * colorA.length)];
		particles.push( new Particle(canvas.width/2,canvas.height/2,radi, colo));
	}
	//console.log(particles);
};


init();




function animate(){
	//ctx.clearRect(0,0,innerWidth,innerHeight);
	ctx.fillStyle = "rgba(255,255,255,0.05)"
	ctx.fillRect(0,0,innerWidth,innerHeight);
	particles.forEach(function(p){
		p.update();
	})


}

setInterval(animate,10);
