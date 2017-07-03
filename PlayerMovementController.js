/*var speedX;
var sppedY;
var angle;
var player = document.getElementById('player');

document.onkeydown = function(event){
	if(event.keyCode === 68)	//d
		player.pressingRight = true;
	else if(event.keyCode === 83)	//s
		player.pressingDown = true;
	else if(event.keyCode === 65) //a
		player.pressingLeft = true;
	else if(event.keyCode === 87) // w
		player.pressingUp = true;
} 
document.onkeyup = function(event){
	if(event.keyCode === 68)	//d
		player.pressingRight = false;
	else if(event.keyCode === 83)	//s
		player.pressingDown = false;
	else if(event.keyCode === 65) //a
		player.pressingLeft = false;
	else if(event.keyCode === 87) // w
		player.pressingUp = false;
}


function rotate()
{
    if(player.pressingRight)
        {
            angle++;
            
            if(angle==360)
                {
                    angle = 0;
                }
        }
    if(player.pressingLeft)
        {
            angle--;
            if(angle==0)
                {
                    angle = 360;
                }
        }
} */


var keys = {};
        keys.UP = 38;
        keys.LEFT = 37;
        keys.RIGHT = 39;
        keys.DOWN = 40;

    /// store reference to character's position and element
    var character = {
      x: 100,
      y: 100,
      speedMultiplier: 2,
      element: document.getElementById("character")
    };

    /// key detection (better to use addEventListener, but this will do)
    document.body.onkeyup = 
    document.body.onkeydown = function(e){
      if (e.preventDefault) { 
        e.preventDefault();
      }
      else {
        e.returnValue = false; 
      }
      var kc = e.keyCode || e.which;
      keys[kc] = e.type == 'keydown';
    };

    /// character movement update
    var moveCharacter = function(dx, dy){
      character.x += (dx||0) * character.speedMultiplier;
      character.y += (dy||0) * character.speedMultiplier;
      character.element.style.left = character.x + 'px';
      character.element.style.top = character.y + 'px';
    };

    /// character control
    var detectCharacterMovement = function(){
      if ( keys[keys.LEFT] ) {
        moveCharacter(-1, 0);
      }
      if ( keys[keys.RIGHT] ) {
        moveCharacter(1, 0);
      }
      if ( keys[keys.UP] ) {
        moveCharacter(0, -1);
      }
      if ( keys[keys.DOWN] ) {
        moveCharacter(0, 1);
      }
    };

    /// update current position on screen
    moveCharacter();
          
          /// game loop
    setInterval(function(){
      detectCharacterMovement();
    }, 1000/24);