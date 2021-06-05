let backgroundImage;
let cat, catImage1, catImage2, cat_running, cat_standing, cat_sitting,
mouse, mouseImage1, mouseImage2, mouse_taunting, mouse_holding, mouse_searching;

function preload() {
    backgroundImage = loadImage("garden.png");
    //load the images here
    catImage1 = loadImage("tomThree.png");
    catImage2 = loadImage("tomTwo.png");
    cat_running = loadAnimation(catImage1, catImage2);
    cat_sitting = loadImage("tomOne.png");
    cat_standing = loadImage("tomFour.png");

    mouseImage1 = loadImage("jerryThree.png");
    mouseImage2 = loadImage("jerryTwo.png");
    mouse_taunting = loadAnimation(mouseImage1, mouseImage2);
    mouse_searching = loadImage("jerryFour.png");
    mouse_holding = loadImage("jerryOne.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(850, 700);
    cat.addImage(cat_sitting);
    cat.scale = 0.15;
    cat.setCollider("rectangle", 0, 0, 1250, 800)

    mouse = createSprite(75, 700);
    mouse.addImage(mouse_holding);
    mouse.scale = 0.15;
    mouse.setCollider("rectangle", 0, 0, 750, 800, 0);
}

function draw() {

    background(backgroundImage);
    //Write condition here to evalute if tom and jerry collide

    if(cat.isTouching(mouse)) {
        cat.velocityX = 0;
        cat.addAnimation("catStanding", cat_standing);
        cat.changeAnimation("catStanding");

        mouse.addAnimation("mouseSearching", mouse_searching);
        mouse.changeAnimation("mouseSearching")
    }

    drawSprites();
}


function keyPressed(){
    
  //For moving and changing animation write code here
    if (keyCode === LEFT_ARROW) {
        cat.addAnimation("catRunning", cat_running);
        cat.changeAnimation("catRunning");
        cat.velocityX = -5;
        

        mouse.addAnimation("mouseTaunting", mouse_taunting);
        mouse.changeAnimation("mouseTaunting");
    }
    

}
