var robot = require("@hurdlegroup/robotjs");

// Speed up the mouse.
robot.setMouseDelay(100);

var screenSize = robot.getScreenSize();
var height = screenSize.height;
var width = screenSize.width;

while(1){
	const c = getRandomCoordinates();
	robot.moveMouseSmooth(c.x, c.y);
}

function getRandomCoordinates(){
	var x = Math.floor(Math.random() * width);
	var y = Math.floor(Math.random() * height);
	return {x: x, y: y};
}
