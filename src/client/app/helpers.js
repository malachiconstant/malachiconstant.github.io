// helper functions

export function svgColors(theProp, color1, color2) {
	switch(theProp){
		case "evening":
			return color1;
			break;
		default:
			return color2;				
	}
}