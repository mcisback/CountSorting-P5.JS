
var App = {
	canvasWidth: 600,
	canvasHeight: 400
}

var nElements = App.canvasWidth;
var maxRandom = App.canvasHeight;
var shuffleArray = new Array(nElements).fill(0);
var orderArray = new Array(maxRandom+1).fill(0);
var finalArray = new Array(nElements).fill(-1);

//Order Array Init index
var k=0;

// Order Array reorder index
var j=0;

// finalArray index
var z=0;

var nPerCycle=5;

var myRandom = x => Math.floor(Math.random()*x);

function setup() {

	createCanvas(App.canvasWidth, App.canvasHeight);

	shuffleArray = shuffleArray.map(x => myRandom(maxRandom));

	console.log("maxRandom", maxRandom);
	console.log("nElements", nElements);
	console.log(shuffleArray);
	console.log(orderArray);

	//shuffleArray = sort(shuffleArray);

}



function draw() {
	
	background(0);

	stroke(255);

	//console.log(k);

	if(k < shuffleArray.length) {

		console.log("here: ", shuffleArray[k]);

		//This for speeds things up !
		//for(let w=0; w<nPerCycle; w++) {
			
			orderArray[shuffleArray[k++]] += 1;
			//shuffleArray[z++] = shuffleArray[k-1];
		//}

	} else {

		if(j < orderArray.length) {
			
			//This for speeds things up !
			//for(let w=0; w<nPerCycle; w++) {

				for(let y=0; y < orderArray[j]; y++) {

					finalArray[z++] = j;

					// Reorder the inital array
					shuffleArray[z] = finalArray[z];

				}
				j++;
				
			//}

		} else {

			console.log("FINISHED SORTING");
			noLoop();

		}

	}

	colorMode(HSB, height);

	for( let i = 0; i < shuffleArray.length; i++ ) {

		stroke(i, height-shuffleArray[i], 255);

		if(shuffleArray[i] == shuffleArray[k]) {

			stroke(0,height,height/2);

		}

		line(i, height, i, height-shuffleArray[i]);

		if(finalArray[i] != -1) {

			stroke(0,255,0);
			stroke(i, height-finalArray[i], 255);
			line(i, height, i, height-finalArray[i]);
		}

		//stroke(255);

	}

	colorMode(RGB);

}