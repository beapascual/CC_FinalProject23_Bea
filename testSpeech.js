let foo;
// download the p5.speech library from:
// http://ability.nyu.edu/p5.js-speech/
// (go to download latest copy of the library)
// then:
// unzip the thing
// then in the 'lib' folder copy the p5.speech.js file
// and throw it in the libraries folder of your p5 project
// then:
// add it to the index.html
// then this should work if you turn on 'run in browser'

function setup() {
	
		// speech recognition object (will prompt for mic access)
	foo = new p5.SpeechRec('en-US');
	
	createCanvas(windowWidth, windowHeight);
	
	// boolean to set whether the speech recognition engine will
	// give results continuously (true) or just once (false).
	// Default is false.
//	foo.continuous = false;
	
	// boolean to set whether the speech recognition engine will give
	// faster, partial results (true) or wait for the speaker to pause (false).
	// Default is false
//	foo.interimResults = false;
	
	// function sets callback to fire when speech is recognized and a result has been reported.
//	foo.onResult = showResult;
	
	// function sets callback to fire when an error occurs on the client side in recording and transmitting the speech.
//	foo.onError = showError; 
	
	// instructs the speech recognition system to start listening
//	foo.start(); 
  
foo = new p5.Speech(); // speech synthesis object
  foo.speak('i run best in google chrome'); // say something 

}

function draw() {
  fill(255)
    rect (0,0,15,15)
}