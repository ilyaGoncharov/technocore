var status = 0;
var texter = document.getElementById('dropdown');
var texter = document.getElementById('marker');
var texter = document.getElementById('marker2');
var texter = document.getElementById('drop');
function show(dropdown) {
	if (status == 0) {
		dropdown.style.display= "block";
		marker.style.display="none";
		marker2.style.display="block";
		drop.style.border="1px solod yellow"
	    status = 1;
	} else {
		dropdown.style.display= "none";
		marker.style.display="block";
		marker2.style.display="none";
	    status = 0;
	} 
};

function hide(dropdown) {
	if (status == 1) {
		dropdown.style.display= "none";
		marker.style.display="block";
		marker2.style.display="none";
	    status = 0;
	} else {} 
};