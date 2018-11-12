define(function(require,exports,module){
	
	var box=document.getElementsByClassName('box')[0];
	
	var drag= require("./sollor.js");
	drag.move(box);
})
