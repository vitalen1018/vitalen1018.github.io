function HanldeSnake(){
	this.hanlde = function(aSnake){
		document.onkeydown = function(event){
			var ev = event || window.event;
			
			switch(ev.keyCode){
				case 37:
					if((aSnake.direction ==1 || aSnake.direction == -1)&& lock == true){
						aSnake.direction = 0;
						lock = false;
					}					
					break;
				case 38:
					if((aSnake.direction ==0 || aSnake.direction == 2) && lock == true){
						aSnake.direction = -1;
						lock = false;						
					}					
					break;
				case 39:
				if((aSnake.direction ==1 || aSnake.direction == -1) && lock == true){
						aSnake.direction = 2;
						lock = false;						
					}					
					break;
				case 40:
				if((aSnake.direction ==0 || aSnake.direction == 2) && lock == true){
						aSnake.direction = 1;
						lock = false;						
					}					
					break;
				default:
					break;
			}
			
		}
	}
	
}

