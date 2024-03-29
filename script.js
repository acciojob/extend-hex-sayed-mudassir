const extendHex = (shortHex) => {
  let newStr = "#";
	for(let a in shortHex){
		if(shortHex[a] === "#") continue;
		newStr = newStr+shortHex[a]+shortHex[a];
	}
	return newStr
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
