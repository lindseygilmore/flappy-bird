// var mainState = {

// 	preload: function() {

// 		game.load.image('pipe', 'assets/pipe.png');
// 	},

// 	create: function() {

// 		this.pipes = game.add.group();

// 		game.stage.backgroundColor = '#71c5cf';

// 		game.physics.startSystem(Phaser.Physics.ARCADE);

// 		this.bird = game.add.sprite(100, 245, 'bird');

// 		game.physics.arcade.enable(this.bird);

// 		this.bird.body.gravity.y = 1000;

// 		var spaceKey = game.input.keyboard.addKey(
// 						Phaser.Keyboard.SPACEBAR);
// 		spaceKey.onDown.add(this.jump, this);

// 		this.timer = game.time.events.loop(1500, this.addRowOfPipes, this);
// 	},

// 	addOnePipe: function(x, y){
// 		var pipe = game.add.sprite(x, y, 'pipe');

// 		this.pipes.add(pipe);

// 		game.physics.arcade.enable(pipe);

// 		pipe.body.velocity.x = -200;

// 		pipe.checkWorldBounds = true;

// 		pipe.outOfBoundsKill = true;
// 	},

// 	addRowOfPipes: function(){
// 		var hole = Math.floor(Math.random() * 5) + 1;

// 		for (var i = 0; i < 8; i++)
// 			if (i != hole && i != hole + 1)
// 				this.addOnePipe(400, i * 60 + 10);
// 	},

// 	update: function() {

// 		if (this.bird.y < 0 || this.bird.y > 490)
// 				this.restartGame();

// 	},

// 	jump: function() {

// 		this.bird.body.velocity.y = -350;
// 	},

// 	restartGame: function() {

// 		game.state.start('main');
// 	}
// };


// var game = new Phaser.Game(400, 490);

// game.state.add('main', mainState);

// game.state.start('main');

var i = 0;

for (i=0; i<=100; i++){
	if (i % 3 && i % 5) {
		console.log("rightpoint");
	}else{
		if(i % 3 == 0){
			console.log("right");
		}
		if (i % 5 == 0){
			console.log("point");
		}
	}
};

var inputString = 'Welcome to 30 Days of Code!';

function processData(inputString){
	console.log("Hello World.");
	console.log(inputString);
}

var input = '';
var index = 0;

process.stdin.on('data', (data) => { input += data; });
process.stdin.on( 'end', () => {
	input = input.split(new RegExp('[\n ]+'));
	main(+(input[0]), +(input[1]), +(input[2]));

});

function main(mealCost, tipPercent, taxPercent){

};

















