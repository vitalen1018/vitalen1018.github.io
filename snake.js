//特征和行为是相互影响的,有联系的,特征是静态的东西,行为是活动的
//特征
//1.长度  2.蛇身体部分(每个小格子)的位置信息 3.方向
//行为
//1.移动 2.吃东西 3.死亡 
function Snake(){
	
	//用来记录分数
	this.score = 0;
	//默认长度 
	this.snakeLength = 4;
	//蛇的身体位置信息(蛇的坐标)
	this.snakeBodyArray = [];
	for(var i =0;i<this.snakeLength;i++){
		var pos = {
			x : i*BOXSIZE,
			y : 0,
		};
		this.snakeBodyArray.push(pos);
	}
	//方向 规定 direction ... -1 :上 , 0 :左,  1: 下,  2: 右
	this.direction = 2;
	
	//行为部分
	//1.绘制蛇的方法(把蛇画出来)
	this.drawSnake = function(){
		for(var i=0;i<this.snakeLength;i++){
			ctx.beginPath();
			if(i==this.snakeLength-1){
				ctx.fillStyle = 'black';
			}else{
				ctx.fillStyle = 'orangered';
			}			
			ctx.strokeStyle = 'darkcyan';
			ctx.fillRect(this.snakeBodyArray[i].x,this.snakeBodyArray[i].y,BOXSIZE,BOXSIZE);
			ctx.strokeRect(this.snakeBodyArray[i].x,this.snakeBodyArray[i].y,BOXSIZE,BOXSIZE);
			ctx.save();
		}
	}	
	
	//蛇的移动(坐标的变化)
	this.moveSnake =function(){
		//判断蛇的当前移动方向
		var newPos = null;
		var finalEle = this.snakeBodyArray[this.snakeLength-1];
		switch(this.direction){
			//如果case里面直接定义变量需要加 {}
			case -1:		
				newPos = {x:finalEle.x,y:finalEle.y-BOXSIZE};
			    break;
			case 0:
			 	newPos = {x:finalEle.x-BOXSIZE,y:finalEle.y};
			    break;
			case 1:
				newPos = {x:finalEle.x,y:finalEle.y+BOXSIZE};
			    break;
			case 2:
				newPos = {x:finalEle.x+BOXSIZE,y:finalEle.y};
			    break;
			default:
				break;
		}
		//添加到数组里
		this.snakeBodyArray.push(newPos);
		//删除的数组里面第一个元素(蛇尾)
		this.snakeBodyArray.shift();
		
		//重新调用绘制蛇的方法
		this.drawSnake();
	}
	
	//蛇吃食物的方法
	this.eatFood = function(afood){
		var snakeHead = this.snakeBodyArray[this.snakeLength-1];
		if(snakeHead.x == afood.foodX && snakeHead.y == afood.foodY){
			//吃到食物
			//先随便给一个坐标，后来删除掉
			var apos = {x:-100,y:-200};
			this.snakeBodyArray.unshift(apos);
			//自身加长
			this.snakeLength ++ ;
			//刷新食物的位置
			afood.changePos();
			this.score ++ ;
			scoreP.innerHTML = '分数' + this.score;
		}
		
	}
	//蛇死亡
	this.die = function(){
		//两个方面判断死亡
		//拿到头部
		var head = this.snakeBodyArray[this.snakeLength-1];
		//1.碰撞墙壁
		if(head.x<0 || head.x>=WIDTH || head.y <0 || head.y>=HEIGHT){
			alert('game over');
			//清除定时器
			clearInterval(timer);
		}
		//2.撞到自己
		//四节蛇身不会撞到自己
		for(var i=0;i<this.snakeLength-4;i++){
			
			var abody = this.snakeBodyArray[i];
			if(head.x == abody.x && head.y == abody.y){
				alert('game over');
				//清除定时器
				clearInterval(timer);
			}			
			
		}
	}
}
