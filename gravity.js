
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
var gravity=0.1;
var friction =0.9;
// var mouse={
// 	x: undefined,
// 	y: undefined
// }
// window.addEventListener("mousemove",function(event){
// 	mouse.x=event.x;
// 	mouse.y=event.y;
	
// })

addEventListener("click",function(){
	init();
})


function Ball(x,y,dy,dx,radius,color){
	this.x=x;
	this.y=y;
	this.dy=dy;
	this.dx=dx;
	this.radius=radius;
	this.color = color;

	this.draw= function() {
		ctx.beginPath();
		ctx.arc(this.x,this.y, this.radius, 0, 2 * Math.PI);
		ctx.stroke();
		ctx.fillStyle = this.color;
		ctx.fill();
		ctx.stroke();
		ctx.closePath();
		};
	this.update= function(){
		if(this.y + this.radius + this.dy> canvas.height){
			this.dy=-this.dy * friction;
		}else{
			this.dy +=gravity;
		}
		if(this.x + this.radius >canvas.width || this.x-this.radius <0){
			this.dx = -this.dx;
		}
		this.x += this.dx;
		this.y += this.dy;
		this.draw();
	}


}

var ball;
var ballA=[];
function init(){
	ballA =[];
	for(var i=0;i<200;i++){
		var radius=Math.random() *50  +1;
		var x=Math.random()*(canvas.width -radius) +radius ;
		var y=Math.random()*(innerHeight- radius*2) +radius;
		var dx=(Math.random()-0.5)*2;
		var dy=(Math.random()-0.5)*3;
		var color = colorA[Math.floor(Math.random() * colorA.length) ]
		ballA.push(new Ball(x,y,dy,dx,radius,color));
	};
};

init();




function animate(){
	ctx.clearRect(0,0,innerWidth,innerHeight);
	for(var i=1;i<ballA.length;i++){
		ballA[i].update();
	}

}

setInterval(animate,10);
