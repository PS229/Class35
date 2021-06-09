var ball;
var db,positions

function setup(){
    db = firebase.database()
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    var loc = db.ref("ball/position")
    loc.on("value", readop)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    db.ref("ball/position").set({
        x:ball.x + x,
        y:ball.y + y
    })
}

function readop(data) {
    positions = data.val()
    ball.x = positions.x
    ball.y = positions.y
}
