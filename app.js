console.log ("yipikay");

var base =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","1","2","3","4","5","6","7","8","9","0"];
//var length= Math.round(Math.random()* base.length);

function randomString (nChar){
	var final = [];

	for (var i=0; i<nChar;i++){
		var caract = Math.round(Math.random()* base.length );
		final.push(base[caract])
	}
	return final.join("");
};



//console.log(randomString(2));

function tableau (nLin, nCol){
 	var arr = [];
	var lin = [];

	for (var j=0; j<nLin; j++){
		
		for (var k=0; k<nCol; k++){
			lin.push (randomString(10))
			}
		arr.push (lin);
		lin=[];
			}
	return arr;
	};

	var affichage =tableau(3,4)		
console.log(affichage);
