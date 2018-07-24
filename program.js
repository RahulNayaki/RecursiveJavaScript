//Dynamic Variables
var arrayPrefix = [];
var count = 0;

//This function is used as a wrapper.
/* @setLength = the number of letters in the given Array.*/
function printWords(letters, minlength){
	var setLength = letters.length
	printPossibleWordsRec(letters,"",setLength,minlength) // call to recursieve function
									//4			//5
}

//This is main function which makes call to itself untill the minlength reaches to 0.
/*
	@setLength = length of the letters Array
	@minlength = Maximum number of letters in a word in this function it is 5
	@letters = Array contains words.  
*/
function printPossibleWordsRec(letters, prefix, setLength, minlength ){
	var info = document.getElementById("output")
	if(minlength === 0){
		count++;
		arrayPrefix.push(prefix)
		info.innerHTML = info.innerHTML+"<br>"+count+". "+prefix
		return;
	}
	var i;
	for (i = 0; i < setLength; ++i){		
		// Next character of input added
		var newPrefix = prefix + letters[i];
		//Recursive Call
		printPossibleWordsRec(letters, newPrefix, setLength, minlength - 1); 
	} 
}

//On button this function will be called. 
/* 
	@letters = contains the letters from which the words has to be generated.
*/
function startProgram(){
	var letters = ['A','B','C','D']
	printWords(letters,5)
	console.log(arrayPrefix)
	//an anchor elements which i used to go to top on click of it.
	document.getElementById("anchor").style.visibility='visible';
}

//FUnction used to find the index of a element in an Array.
/* 
	Validations for empty search bar 
	Failed to provide 5 letters 
*/
function searchArray(){
	var searchFor = document.getElementById("search").value
	if(searchFor.length == 0){
		document.getElementById("result").innerHTML = "Search bar is empty"+searchFor
	} else if(searchFor.length < 5){
		document.getElementById("result").innerHTML = "At the moment can search only 5 letter word"
	} else{
			if(arrayPrefix.length != 0 ){
				document.getElementById("result").innerHTML = "Word "+searchFor+" is in line number "+(arrayPrefix.indexOf(searchFor)+1)
			}else{
				document.getElementById("result").innerHTML = "No result found with "+searchFor+". Please click the above button \"Click here for Answer\" and try again!"
			}
	}
}

/*
	Function used to reachTop of the div tag.
*/
function goToTop(){
	var elmnt = document.getElementById("answerContainer");
	elmnt.scrollTop = 0;
}