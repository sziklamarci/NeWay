var keys = {};
    keys.UP = 87;
    keys.LEFT = 65;
    keys.RIGHT = 68;
    keys.DOWN = 83;

var character = {
    angle: 90,
    x: 80,
    y: 35,
    speedMultiplier: 5,
    element: document.getElementById("playerImg")
    };

var bonuses = {};
    bonuses.speed = 6;
    bonuses.bspeed = 2;
    bonuses.turn = 3;
    
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

var detectCharacterMovement = function(){
    
    if (keys[keys.LEFT] && !keys[keys.DOWN]) {
        character.angle-=bonuses.turn;
        if(character.angle<=0)
            {
                character.angle=360;
            }  
        character.element.style.transform = "rotate("+character.angle+"deg)";
      }
    
    if (keys[keys.RIGHT] && !keys[keys.DOWN]) 
        {
            character.angle+=bonuses.turn;
            if(character.angle>=360)
                {
                    character.angle=0;
                }
        character.element.style.transform = "rotate("+character.angle+"deg)";
        }
    
    if (keys[keys.UP]) 
        {
            character.x = character.x + Math.sin(character.angle/180 * Math.PI)*bonuses.speed;
            character.y = character.y + Math.cos(character.angle/180 * Math.PI)*bonuses.speed;
            character.element.style.top = character.x + 'px';
            character.element.style.left = character.y + 'px';
        }
    
      if (keys[keys.DOWN])
        {
            character.x = character.x - Math.sin(character.angle/180 * Math.PI)*3;
            character.y = character.y - Math.cos(character.angle/180 * Math.PI)*3;
            character.element.style.top = character.x + 'px';
            character.element.style.left = character.y + 'px';
            if (keys[keys.RIGHT]) 
                {
                    character.angle-=bonuses.turn;
                    if(character.angle<=0)
                        {
                            character.angle=360;
                        }
                    character.element.style.transform = "rotate("+character.angle+"deg)";
                }
            if (keys[keys.LEFT]) 
                {
                    character.angle+=bonuses.turn;
                    if(character.angle>=360)
                        {
                            character.angle=0;
                        }  
                    character.element.style.transform = "rotate("+character.angle+"deg)";
                    
                }
        }
};

function boundarys()
{
    if(character.x<=65)
            {
                character.x = 65;
            }
    if(character.y<=10)
            {
                character.y = 10;
            }
    if(character.x>=window.innerHeight - 58)
            {
                character.x = window.innerHeight - 58;
            }
    if(character.y>=window.innerWidth - 62)
            {
                character.y = window.innerWidth - 62;
            }
}

setInterval(function()
    {
        boundarys();
        detectCharacterMovement();
    }, 1000/30);