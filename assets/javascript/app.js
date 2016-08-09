
	var time = 15;
	var gameOver = true;
	var currentQuestion = 0;
	var rightAnswers = 0;
	var wrongAnswers = 0;
	var converted = 0;
	var questions = [{
		question: "What was the name of the hero in Donkey Kong?",
		choices: ["Mario", "Bowser", "Kevin", "Luigi", "Danger"],
		answer: 0,
		fact: "<h4>Answer: Mario</h4>Mario, who's last name is also Mario, was given a brother named Luigi to launch the arcade franchise Super Mario Brothers.",
		gif: "https://media.giphy.com/media/4pPrCPDBQ5k88/giphy.gif"
	},

	{
		question: "In asteroids, what is the shape of the player's spaceship?",
		choices: ["Circle", "Square", "Triangle", "Trapezoid", "Oval"],
		answer: 2,
		fact: "<h4>Answer: Triangle</h4>Asteroids had this reference in the 1981 film Vacation:<br>RUSTY: Ya' got asteroids?<br>DALE: Naw, but my dad does. Can't even sit on the toilet some days.",
		gif: "https://media.giphy.com/media/F9qlmEW8p3a7K/giphy.gif"
	},

	{
		question: "What video game inspired the Top 10 hit single, '_______ Fever'?",
		choices: ["Frogger", "Pac-Man", "Cabin", "Dig Dug", "Believer"],
		answer: 1,
		fact: "<h4>Answer: Pac-Man</h4>The band Buckner and Garcia released a whole album of video game related songs, but Pac-Man Fever was the only hit.",
		gif: "https://media.giphy.com/media/bAdxZv3aWQHCw/giphy.gif"
	},

	{
		question: "In the game Q*bert, what does Q*bert exclaim in a word bubble when you lose a life?",
		choices: ["Shoooooot", "D'ooooohhh", "Whoopsie", "@!#?@!", "Aaaahhhhh"],
		answer: 3,
		fact: "<h4>Answer: @!#?@!</h4>Jeff Lee, the original creator of the concept wanted to name the game Snots and Boogers.",
		gif: "https://media.giphy.com/media/e2EDISszKn90k/giphy.gif"
	},

	{
		question: "Due to arcade machines being broken by rapid banging on the control buttons, this game switched to a rollerball controller in it's later versions?",
		choices: ["Missle Command", "Duck Hunt", "Track & Field", "1942", "Marble Madness"],
		answer: 2,
		fact: "<h4>Answer: Track & Field</h4>The six events in the game were: 100 Meter Dash, Long Jump, Javelin, 110 Meter Hurdles, Hammer Throw, and High Jump.",
		gif: "http://i.makeagif.com/media/9-25-2015/mhTO9Y.gif"
	},

	{
		question: "This space shooter game took it's name from the axonometric projection technology it used to create the appearance of three dimensions.",
		choices: ["Zaxxon", "Metricon", "AXP", "Xono", "TricPro"],
		answer: 0,
		fact: "<h4>Answer: Zaxxon</h4>In 1982, Zaxxon became the first arcade game to be advertised on television.",
		gif: "https://media.giphy.com/media/tXQOFxX4qaFq/giphy.gif"
	},

	{
		question: "The popular game Tapper was produced in coordination with what beer brewing company?",
		choices: ["Miller", "Coors", "Budweiser", "Keystone", "Samuel Adams"],
		answer: 2,
		fact: "<h4>Answer: Budweiser</h4>A subsequent verison of the game changed the product to Root Beer after complaints that they were advertising alcohol to minors.",
		gif: "https://media.giphy.com/media/JXmrUXWLSvlO8/giphy.gif"
	},

	{
		question: "What was the first game released in the US to use laserdisc technology to carry the user through it's interactive movie?",
		choices: ["Laser Fight", "Dragon's Lair", "Space Ace", "Top Gun", "Road Blaster"],
		answer: 1,
		fact: "<h4>Answer: Dragon's Lair</h4>Dragon's Lair was animated by Don Bluth who is known for directing the films The Secret of NIMH, An American Tail and All Dogs Go to Heaven.",
		gif: "https://media.giphy.com/media/pjfUyXRBktq4E/giphy.gif"
	},

	{
		question: "In what year does the multi-directional shooter game Robotron take place?",
		choices:  ["1972", "3000", "4545", "2084", "2000"],
		answer: 3,
		fact: "<h4>Answer: 2084</h4>The game's creators chose the year 2084 as an homage to George Orwell's 1984, as they believed the world of Robotron was very much in line with Orwell's dystopic depiction of the future.",
		gif: "http://i.makeagif.com/media/3-05-2015/XpMce1.gif"
	},

	{
		question: "What early 80s rock band tried to capitalize on its success by licensing it's own video game where each member of the band tries to reunite with his instrument?",
		choices: ["Van Halen", "The Police", "The Cars", "Bon Jovi", "Journey"],
		answer: 4,
		fact: "<h4>Answer: Journey</h4>The looping segment of the band's hit song Separate Ways was played from a cassette player inside the games cabinet.",
		gif: "http://i.makeagif.com/media/8-08-2016/zKOTYI.gif"
	}];

	$('#gameArea').hide();
	$('#answer').hide();
	$('#fact').hide();

$(document).ready(function(){

	function timer(){
		time--; 
		$('#timer').html('<p>:' + time + '</p>');
		if (time == 0){
			wrongAnswers++;
			wrong();
			$('#question').hide();
		}
	};

	function timerStart(){
		setInterval(timer, 1000);
	};

	$('#start').on('click', function(){	
		inPlay();
		$('#gameArea').show();
		$('#start').hide();
		$('#stats').hide();
		timerStart();
	});

	function inPlay(){
		$('#timer').html('<p>:15</p>');
		$('#gameArea').show();
		$('#timer').show();
		$('#question').html(questions[currentQuestion].question);
		$('#question').append('<li value=0>' + questions[currentQuestion].choices[0] + '</li>');
		$('#question').append('<li value=1>' + questions[currentQuestion].choices[1] + '</li>');
		$('#question').append('<li value=2>' + questions[currentQuestion].choices[2] + '</li>');
		$('#question').append('<li value=3>' + questions[currentQuestion].choices[3] + '</li>');
		$('#question').append('<li value=4>' + questions[currentQuestion].choices[4] + '</li>');
		
		$('#stats').html('Correct Answers: ' + rightAnswers + '<br>' + 'Wrong Answers: ' + wrongAnswers);
		
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
		$('#answer').html("<h3>YOU GOT THAT RIGHT!</h3>");
		$('#fact').html('<p>' + questions[currentQuestion].fact + '</p>');
		$('#fact').append('<img src="' + questions[currentQuestion].gif + '">')
		$('#stats').html('Correct Answers: ' + rightAnswers + '<br>' + 'Wrong Answers: ' + wrongAnswers);
		$('#timer').hide();
		currentQuestion++;
		delay();
	};

	function wrong(){
		$('#answer').show();
		$('#fact').show();
		$('#stats').show();
		$('#answer').html("<h3>DANG! YOU MISSED THAT ONE.</h3>");
		$('#fact').html('<p>' + questions[currentQuestion].fact + '</p>');
		$('#fact').append('<img src="' + questions[currentQuestion].gif + '">')
		$('#stats').html('Correct Answers: ' + rightAnswers + '<br>' + 'Wrong Answers: ' + wrongAnswers);
		$('#timer').hide();
		currentQuestion++;
		delay();
	};

	function delay(){
		$('#timer').hide();
		setTimeout(nextQuestion, 5000)
	};
	function nextQuestion(){
		if (currentQuestion < questions.length){
		time = 15;
		inPlay();
		$('#gameArea').show();
		$('#question').show();
		$('#answer').hide();
		$('#fact').hide();
		}
		else {
			endGame();
		}
	};
	function resetGame(){
		gameOver = true;
		currentQuestion = 0;
		rightAnswers = 0;
		wrongAnswers = 0;
		$('#gameArea').hide();
		$('#start').show();
		$('#start').on('click', function(){
			inPlay();
			$('#gameArea').show();
			$('#start').hide();
			$('#stats').hide();
			timerStart();
		});
	};
	function endGame(){
		$('#question').hide();
		$('#answer').hide();
		$('#fact').hide();
		$('#stats').show();
		$('#stats').html('<h3>GAME OVER, MAN!</h3>Correct Answers: ' + rightAnswers + '<br>' + 'Wrong Answers: ' + wrongAnswers);
		setTimeout(resetGame, 8000);
	};
});

