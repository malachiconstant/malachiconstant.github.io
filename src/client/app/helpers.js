// helper functions

//return different colors, depending on time of day
export function svgColors(theProp, color1, color2) {
	switch(theProp){
		case "evening":
			return color1;
			break;
		default:
			return color2;				
	}
}

//cut off text
export function textCut(theText, characterLimit) {
	return theText.length < characterLimit ? theText : `${theText.slice(0,characterLimit)}...`;
}