function Food(){
	
	this.foodX = parseInt(Math.random()*(WIDTH/BOXSIZE))*BOXSIZE;
	this.foodY = parseInt(Math.random()*(HEIGHT/BOXSIZE))*BOXSIZE;
	
	this.changePos = function(){
		this.foodX = parseInt(Math.random()*(WIDTH/BOXSIZE))*BOXSIZE;
		this.foodY = parseInt(Math.random()*(HEIGHT/BOXSIZE))*BOXSIZE;
		
		for(var i =0;i<snake.snakeLength -2;i++){
			if(snake.snakeBodyArray[i].x == this.foodX && snake.snakeBodyArray[i].y == this.foodY){
				food.changePos();
			}
		}
	}
	
	//绘制食物的方法
	this.drawFood = function(){
		ctx.beginPath();
		ctx.fillStyle = 'darkred';
		ctx.fillRect(this.foodX,this.foodY,BOXSIZE,BOXSIZE);
		ctx.save();
	}
	
}
