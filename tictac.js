var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var w = canvas.width;
var h = canvas.height;

function Box(no,x,y){
    this.no=no;
    this.x=x;
    this.y=y;
    this.draw = function(){
        ctx.strokeStyle = "black";
        // ctx.fillStyle="rgba(255,0,0,0.1)";
        // ctx.fillRect(this.x,this.y,w/3,h/3);
        ctx.strokeRect(this.x,this.y,w/3,h/3);
    }
};
 var box = new Box(1,0,0);
 box.draw();
canavs.addEventListener("click",function(){
    if()
    console.log("clicked box 1");
})