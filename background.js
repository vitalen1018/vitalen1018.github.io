function BackgroundDraw(){
	
	this.draw = function(){
		//先画横线
		for(var i=0;i <= HEIGHT/BOXSIZE;i++){
			ctx.beginPath();
			ctx.moveTo(0,i*BOXSIZE);
			ctx.lineTo(WIDTH,i*BOXSIZE);
			ctx.strokeStyle = 'darkcyan';
			ctx.stroke();
			ctx.save();
		}
		//竖线
		for(var i=0;i <= WIDTH/BOXSIZE;i++){
			ctx.beginPath();
			ctx.moveTo(i*BOXSIZE,0);
			ctx.lineTo(i*BOXSIZE,HEIGHT);
			ctx.strokeStyle = 'darkcyan';
			ctx.stroke();
			ctx.save();
		}
	}
}
