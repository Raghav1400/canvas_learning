
const canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

window.addEventListener("resize",function(){
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	init();
});
// ctx.fillStyle = 'green';
// ctx.fillRect(10, 10, 150, 100);

// ctx.strokeRect(0, 14, 150, 110);
// ctx.fillRect(130, 190, 40, 60);

// ctx.beginPath();
// ctx.moveTo(50, 140);
// ctx.lineTo(150, 60);
// ctx.lineTo(250, 140);
// ctx.closePath();
var color=[
			"#590212",
			"#A6263E",
			"#929AA6",
			"#697C8C",
			"#A60303"
];

var mouse={
	x: undefined,
	y: undefined
}
window.addEventListener("mousemove",function(event){
	mouse.x=event.x;
	mouse.y=event.y;
	console.log(mouse);
})

var maxradi=40;
var minradi=3;

function Circle(x,y,dx,dy,radius){
	this.x=x;
	this.y=y;
	this.dx=dx;
	this.dy=dy;
	this.radius=radius;
	this.minradi=radius;
	this.colo = color[Math.floor(Math.random() * color.length) ];

	this.draw= function() {
		ctx.beginPath();
		ctx.arc(this.x,this.y, this.radius, 0, 2 * Math.PI);
		ctx.stroke();
		ctx.fillStyle = this.colo;
		ctx.fill();
		};
	this.update= function(){
		if(this.x+this.radius > innerWidth || this.x-this.radius < 0){
			dx=-dx;
		}
		if(this.y+this.radius > innerHeight ||this. y-this.radius < 0){
			dy=-dy;
		}
		this.x+=dx;
		this.y=this.y+dy;

		if(mouse.x -this.x <50  && mouse.x -this.x > -50 && mouse.y -this.y <50  && mouse.y -this.y > -50 ){
			if(this.radius <maxradi){
				this.radius +=2;
			}
			
			//ctx.fillStyle = "red";
			//ctx.strokeStyle="rgb(255,0,255)";

		}
		else if(this.radius>this.minradi){
			this.radius--;
		} else{
			//ctx.fillStyle = "black";
			//ctx.strokeStyle="rgb(255,0,0)";
		}
		
		this.draw();
	}


}

var circleArray =[];
function init(){
	circleArray =[];
	for(var i=1;i<800;i++){
	var radius=Math.random() *3  +1;
	var x=Math.random()*(innerWidth -radius*2) +radius;
	var y=Math.random()*(innerHeight- radius*2) +radius;
	
	var dx=(Math.random()-0.5)*5;
	var dy=(Math.random()-0.5)*5;
	circleArray.push( new Circle(x,y,dx,dy,radius));
	}
};

init();




function animate(){
	ctx.clearRect(0,0,innerWidth,innerHeight);
	for(var i=1;i<circleArray.length;i++){
		circleArray[i].update();
	}


}

setInterval(animate,10);
