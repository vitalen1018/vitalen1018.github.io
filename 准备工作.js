var canvas = document.getElementById("snakeCanvas");
var ctx = canvas.getContext('2d');

//拿到分数的标签
var scoreP = document.getElementById("score");

//定义格子大小的伪常量
var BOXSIZE = 20;
//定义伪常量记录 canvas 的宽高
var WIDTH = canvas.width;
var HEIGHT = canvas.height;

//定义一个锁,用来控制蛇的移动是否可以切换方向(如果没有这个锁,蛇可以往回走)
var lock = true;

//定时器
var timer = null;
