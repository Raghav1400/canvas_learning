
const canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');
		

window.addEventListener("resize",function(){
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	

	init();
});

function returnrange(min ,max){
	return Math.floor(Math.random()*(max - min +1) + min);
}

var colorA=[
			"#590212",
			"#A6263E",
			"#929AA6",
			"#697C8C",
			"#A60303"
];

function getDistance(x1,y1,x2,y2){
	let xD = x1-x2;
	let yD = y1-y2;
	return Math.sqrt((Math.pow(xD,2) + Math.pow(yD,2)));
}
// var mouse={
// 	x: undefined,
// 	y: undefined
// }
// // window.addEventListener("mousemove",function(event){
// // 	mouse.x=event.x;
// // 	mouse.y=event.y;
	
// // })
var particles = [];

addEventListener("click",function(){
	init();
})


function Particle(x,y,radius,color){
	this.x=x;
	this.y=y;
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
		this.draw();
		this.x +=1;
		this.y +=1;
		// for(var j=0; j<particles.length;j++){
		// 	if(getDistance(this.x, this.y, particles[j].x , particles[j].y) - 2*radi  < 0){
		// 		console.log("collide");
		// 	}
		// }
		
	}


}


function init(){
	particles=[];
	for(var i=0;i<400;i++){
		var radi = 20;
		var x = returnrange(radi , canvas.width - radi);
		var y =  returnrange(radi , canvas.height - radi);
		
		if(i!= 1){
			for(var j=0;j< particles.length; j++){
				if(getDistance(x,y,particles[j].x , particles[j].y) - 2*radi  < 0){
					x = returnrange(radi , canvas.width - radi);
					y =  returnrange(radi , canvas.height - radi);
					j=-1;
				}
			}
		}
		var colo = "blue";
		
		particles.push(new Particle(x,y,radi,colo));
	}
	

};


init();




function animate(){
	ctx.clearRect(0,0,innerWidth,innerHeight);
	particles.forEach(function(particle){
		particle.update();
	});

}

setInterval(animate,10);
