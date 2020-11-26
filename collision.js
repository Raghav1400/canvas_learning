
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
function getDistance(x1,y1,x2,y2){
	let xD = x1-x2;
	let yD = y1-y2;
	return Math.pow((Math.pow(xD,2) + Math.pow(yD,2)) ,0.5);
}

var mouse={
	x: undefined,
	y: undefined
}
window.addEventListener("mousemove",function(event){
	mouse.x=event.x;
	mouse.y=event.y;
	
})

addEventListener("click",function(){
	init();
})


function Circle(x,y,radius,color){
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
	}


}

let circle1;
let circle2;
function init(){
	circle1 = new Circle(400,400,100,"black");
	circle2 = new Circle(undefined,undefined,40,"red");

};


init();




function animate(){
	ctx.clearRect(0,0,innerWidth,innerHeight);
	circle1.update();
	circle2.x= mouse.x;
	circle2.y= mouse.y;
	circle2.update();
	if(getDistance(circle1.x,circle1.y,circle2.x,circle2.y) < circle1.radius +circle2.radius){
		circle1.color = circle2.color;
	}else{
		circle1.color="black";
	}

}

setInterval(animate,10);
