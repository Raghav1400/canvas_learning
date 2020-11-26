var canvas = document.getElementById("canvas");
var ctx    = canvas.getContext("2d");
var W = canvas.width;
var H = canvas.height;

function keyPress( e ) {
    if(e.which === 38) { 
    	snake.dir(0,-1);
    }
     else if (e.which === 39) {
     	snake.dir(1,0);
	}	
    else if (e.which === 37) {
    	snake.dir(-1,0);
    }
    else if (e.which === 40) {
    	snake.dir(0,1);
    }
    // else if (e.which === 40) {
    // 	snake.dir(0,0);
    // }
}

 //Setup an event listener and use keyPress as event handler 
window.addEventListener( 'keydown', keyPress, false );
var Slen =5;
var f;
var score =0 ;
var gameOver = false;
function Snake(length,color,w,h){
	this.l = length; 
	this.w = w;
	this.h = h;
	this.color= color;
	this.cells =[];
	this.speedX = 1;
	this.speedY = 0;
	this.dir = function(x,y){
		this.speedX=x;
		this.speedY=y;
	}
	this.draw = function(){
		for(var i=0;i<this.cells.length;i++){
			ctx.fillStyle =this.color;
			ctx.strokeStyle ="black";
			ctx.fillRect(this.cells[i].x * 10 ,this.cells[i].y * 10, this.w, this.h);
			ctx.strokeRect(this.cells[i].x *10,this.cells[i].y *10, this.w, this.h);

			ctx.fillStyle ="black";
			ctx.font = "14px Roboto";
			ctx.fillText("Score : " + score ,10,10);			
		}

		
	};
	this.create = function(){
		for(var i = this.l ;i>0; i--){
			this.cells.push({x:i , y:10});
		}
	}
	this.update = function(){
		

		var headX = this.cells[0].x;
		var headY = this.cells[0].y;
		var NextheadX = headX +this.speedX;
		var NextheadY = headY +this.speedY;
		console.log(headX == f.x);
		console.log(f.x);
		console.log(headX);
		this.cells.unshift({x: NextheadX , y:NextheadY});

		var lastX = Math.round(W/10);
		var lastY = Math.round(H/10);
		if(headX <0 || headY <0 || headX >lastX || headY > lastY){
			gameOver =true;
			alert("game over");

		}

		 if(headX == f.x && headY == f.y){
		 	initFood();
		 	score++;
		 }
		 else{
		 	this.cells.pop();
		 }

		this.draw();
	};
}

function food(){
	this.x = Math.round((Math.random()*(W-10))/10);
	this.y = Math.round((Math.random()*(H-10))/10);
	this.draw = function(){
		ctx.fillStyle = "green";
		ctx.fillRect(this.x*10, this.y*10,10 ,10);
	};


}


var snake ;
init();
initFood();
function initFood(){
	f = new food();
	//console.log(f);
}

function init(){
	 snake = new Snake(Slen,"red",10,10);
	 snake.create();
	 
}



function animate(){
	if(gameOver == true){
		clearInterval(time);
	}else{
		ctx.clearRect(0,0,innerWidth,innerHeight);
		snake.update();
		f.draw();
	}


}
var time =setInterval(animate , 200);