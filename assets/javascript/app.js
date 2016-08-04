
	var time = 0;
	var gameOver = true;
	var timer;
	var currentQuestion;
	var rightAnswers = 0;
	var wrongAnswers = 0;
	var questions = [{
		question: "What was the name of the hero in Donkey Kong?",
		choices: ["Mario", "Bowser", "Kevin", "Luigi", "Danger"],
		answer: 0,
		fact: "Answer: Mario<br>Mario, who's last name is also Mario, was given a brother named Luigi to launch the arcade franchise Super Mario Brothers."
		//gif: 'http://giphy.com/gifs/super-mario-donkey-kong-jumpman-4pPrCPDBQ5k88',
	},

	{
		question: "In asteroids, what is the shape of the player's spaceship?",
		choices: ["Circle", "Square", "Triangle", "Trapezoid", "Oval"],
		answer: 2,
		fact: "Answer: Triangle<br>Asteroids had this reference in the 1981 film Vacation:<br>RUSTY: Ya' got asteroids?<br>DALE: Naw, but my dad does. Can't even sit on the toilet some days."
	},

	{
		question: "What video game inspired the Top 10 hit single, '_______ Fever'?",
		choices: ["Frogger", "Pac-Man", "Cabin", "Dig Dug", "Believer"],
		answer: 1,
		fact: "Answer: Pac-Man<br>The band Buckner and Garcia released a whole album of video game related songs, but Pac-Man Fever was the only hit."
	},

	{
		question: "In the game Q*bert, what does Q*bert exclaim in a word bubble when you lose a life?",
		choices: ["Shoooooot", "D'ooooohhh", "Whoopsie", "@!#?@!", "Aaaahhhhh"],
		answer: 3,
		fact: "Answer: @!#?@!<br>Jeff Lee, the original creator of the concept wanted to name the game Snots and Boogers."
	},

	{
		question: "Due to arcade machines being broken by rapid banging on the control buttons, this game switched to a rollerball controller in it's later versions?",
		choices: ["Missle Command", "Duck Hunt", "Track & Field", "1942", "Marble Madness"],
		answer: 2,
		fact: "Answer: Track & Field<br>The six events in the game were: 100 Meter Dash, Long Jump, Javelin, 110 Meter Hurdles, Hammer Throw, and High Jump."
	},

	{
		question: "This space shooter game took it's name from the axonometric projection technology it used to create the appearance of three dimensions.",
		choices: ["Zaxxon", "Metricon", "AXP", "Xono", "TricPro"],
		answer: 0,
		fact: "Answer: Zaxxon<br>In 1982, Zaxxon became the first arcade game to be advertised on television."
	},

	{
		question: "The popular game Tapper was produced in coordination with what beer brewing company?",
		choices: ["Miller", "Coors", "Budwieser", "Keystone", "Samuel Adams"],
		answer: 2,
		fact: "Answer: Budweiser<br>A subsequent verison of the game changed the product to Root Beer after complaints that they were advertising alcohol to minors."
	},

	{
		question: "What was the first game released in the US to use laserdisc technology to carry the user through it's interactive movie?",
		choices: ["Laser Fight", "Dragon's Lair", "Space Ace", "Top Gun", "Road Blaster"],
		answer: 1,
		fact: "Answer: Dragon's Lair<br>Dragon's Lair was animated by Don Bluth who is known for directing the films The Secret of NIMH, An American Tail and All Dogs Go to Heaven."
	},

	{
		question: "In what year does the multi-directional shooter game Robotron take place?",
		choices:  ["1972", "3000", "4545", "2084", "2000"],
		answer: 3,
		fact: "Answer: 2084<br>The game's creators chose the year 2084 as an homage to George Orwell's 1984, as they believed the world of Robotron was very much in line with Orwell's dystopic depiction of the future."
	},

	{
		question: "What early 80s rock band tried to capitalize on its success by licensing it's own video game where each member of the band tries to reunite with his instrument?",
		choices: ["Van Halen", "The Police", "The Cars", "Bon Jovi", "Journey"],
		answer: 4,
		fact: "Answer: Journey<br>The looping segment of the band's hit song Separate Ways was played from a cassette player inside the games cabinet."
	}];

	$('#gameArea').hide();
	$('#answer').hide();
	$('#fact').hide();

$(document).ready(function(){


	function gameStart(){
		gameOver = false;
		currentQuestion = 0;
		timer = {
			time: 15,
			reset: function(){
				timer.time = 15;
				$('#timer').html('<p>:' + timer.time + '</p>');
				$('#gameArea').hide();
			},
			start: function(){
				setInterval(timer.count, 15000);
			},
			count: function() {
				//timer.time--;
				time--;
				var converted = timer.timeConverter(timer.time);
				console.log(converted);
				$('#timer').html('<p>:' + converted + '</p>');
				if (converted == 0){
					wrong();
					timer.reset();
				}
			},
			timeConverter: function(t){
				var seconds = Math.floor(t/60);
				if (seconds < 10){
					seconds = "0" + seconds;
				}
				return seconds;
			}
		};
	};

	$('#start').on('click', function(){
		gameStart();
		inPlay();
		$('#timer').html('<p>:' + timer.time + '</p>')
		$('#gameArea').show();
		$('#start').hide();
		$('#stats').hide();
		timer.start();  
	});
});
	function inPlay(){
		$('#gameArea').show();
		$('#question').html(questions[currentQuestion].question);
		$('#question').append('<li value=0>' + questions[currentQuestion].choices[0] + '</li>');
		$('#question').append('<li value=1>' + questions[currentQuestion].choices[1] + '</li>');
		$('#question').append('<li value=2>' + questions[currentQuestion].choices[2] + '</li>');
		$('#question').append('<li value=3>' + questions[currentQuestion].choices[3] + '</li>');
		$('#question').append('<li value=4>' + questions[currentQuestion].choices[4] + '</li>');
		
		$('#stats').html('Correct Answers: ' + rightAnswers + '<br>' + 'Wrong Answers: ' + wrongAnswers);
		if (timer.time == 0){
			wrongAnswers++;
			wrong();
		}

		// if (currentQuestion == questions.length) {
		// 	$('#stats').show();
		// 	$('#question').hide();
		// 	$('#answer').hide();
		// 	resetGame();
		//}
		$('li').on('click', function(){
			$('#question').hide();
			if (this.value == questions[currentQuestion].answer){
				rightAnswers++;
				correct();
			}
			else {
				wrongAnswers++;
				wrong();
			}
		});
	};

	function correct(){
		$('#answer').show();
		$('#fact').show();
		$('#stats').show();
		$('#answer').html("You got that right!");
		$('#fact').html('<p>' + questions[currentQuestion].fact + '</p>');
		$('#gif').html('<img src="http://giphy.com/gifs/super-mario-donkey-kong-jumpman-4pPrCPDBQ5k88">');
		$('#stats').html('Correct Answers: ' + rightAnswers + '<br>' + 'Wrong Answers: ' + wrongAnswers);
		
		currentQuestion++;
		delay();
	}

	function wrong(){
		$('#answer').show();
		$('#fact').show();
		$('#stats').show();
		$('#answer').html("Sorry! You missed that one.");
		$('#fact').html('<p>' + questions[currentQuestion].fact + '</p>');
		$('#stats').html('Correct Answers: ' + rightAnswers + '<br>' + 'Wrong Answers: ' + wrongAnswers);
		
		currentQuestion++;
		delay();
	}

	function delay(){
		setTimeout(nextQuestion, 5000);
	}
	function nextQuestion(){
		if (currentQuestion < questions.length){
		$('timer').reset;
		inPlay();
		$('#gameArea').show();
		$('#question').show();
		$('#answer').hide();
		$('#fact').hide();
		}
		else{
		('#stats').show();
		resetGame();
		}
	};

	function resetGame(){
		gameOver = true;
		currentQuestion = 0;
		rightAnswers = 0;
		wrongAnswers = 0;
		$('#stats').hide();
		gameStart();
	};


