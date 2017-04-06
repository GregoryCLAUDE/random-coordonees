console.log ("yipikay");
$(document).ready(function(){

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

var affichage =tableau(10,10)		
//console.log(affichage[0]);
function resultat(nLin, nCol){

	for (var i = 0; i<nLin; i++) {
		var line = $("<tr class=''></tr>");
		var rAbs = $("<input type='radio' name='option'>");
		line.append(rAbs);
		
		
		for (var j = 0; j < nCol; j++) {
			line.append("<td>"+affichage[i][j]+" </td>")
			$("#array").append(line);
		};
	};
};

function headArray(nord){
	var head = $("<tr></tr>");
	head.append("<td></td>")
	for (var i=0; i<nord; i++){
		var rOrd = $("<td><input type='radio' name='option'></td>");
		head.append(rOrd);
		console.log(head);
	};
	$("#array").append(head);	
};

 function regroup (Nlin, nCol){
 	headArray(nCol)
 	resultat(Nlin,nCol)
 };

regroup(10,10)
//headArray(10);
 //resultat(10,10);
});
