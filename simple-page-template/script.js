window.onload= function(){
	document.getElementById("more").onclick = function() {
    var theDiv = document.getElementById("info-more");
    if(theDiv.style.display == 'none') {
        theDiv.style.display = 'block';
    } else {
        theDiv.style.display = 'none';
    }
	};

	document.getElementById("two").onclick = function() {
    var theDiv = document.getElementById("twophone");
    var btnFirst = document.getElementById("firstbtn");
    var btnSecond = document.getElementById("secondbtn");
    var number2 = document.getElementById("two");
    var number1 = document.getElementById("one");
    if(theDiv.style.display == 'none') {
        theDiv.style.display = 'block';
        btnSecond.style.display = 'block';
        btnFirst.style.display = 'none';
        number2.style.color = '#33ff77';
        number1.style.color = '#cccccc';
    } else {
        theDiv.style.display = 'none';
        btnSecond.style.display = 'none';
        btnFirst.style.display = 'block';
        number2.style.color = '#cccccc';
        number1.style.color = '#33ff77';
    }
	};

	document.getElementById("one").onclick = function() {
    var theDiv = document.getElementById("twophone");
    var btnFirst = document.getElementById("firstbtn");
    var btnSecond = document.getElementById("secondbtn");
    var number2 = document.getElementById("two");
    var number1 = document.getElementById("one");
    if(theDiv.style.display == 'block') {
        theDiv.style.display = 'none';
        btnSecond.style.display = 'none';
        btnFirst.style.display = 'block';
        number2.style.color = '#cccccc';
        number1.style.color = '#33ff77';
    }
	};

	document.getElementById("registerA").onclick = function() {
    var theDiv = document.getElementById("registerI");
    var theDivTwo = document.getElementById("registerA");
    if(theDiv.style.display == 'block') {
        theDiv.style.display = 'none';
        theDivTwo.style.display = 'block';
    } else {
        theDiv.style.display = 'block';
        theDivTwo.style.display = 'none';
    }
	};

	document.getElementById("registerI").onclick = function() {
    var theDiv = document.getElementById("registerA");
    var theDivTwo = document.getElementById("registerI");
    if(theDiv.style.display == 'block') {
        theDiv.style.display = 'none';
        theDivTwo.style.display = 'block';
    } else {
        theDiv.style.display = 'block';
        theDivTwo.style.display = 'none';
    }
	};

	document.getElementById("credit-cardA").onclick = function() {
    var theDiv = document.getElementById("credit-cardI");
    var theDivTwo = document.getElementById("credit-cardA");
    if(theDiv.style.display == 'block') {
        theDiv.style.display = 'none';
        theDivTwo.style.display = 'block';
    } else {
        theDiv.style.display = 'block';
        theDivTwo.style.display = 'none';
    }
	};

	document.getElementById("credit-cardI").onclick = function() {
    var theDiv = document.getElementById("credit-cardA");
    var theDivTwo = document.getElementById("credit-cardI");
    if(theDiv.style.display == 'block') {
        theDiv.style.display = 'none';
        theDivTwo.style.display = 'block';
    } else {
        theDiv.style.display = 'block';
        theDivTwo.style.display = 'none';
    }
	};
	document.getElementById("expertA").onclick = function() {
    var theDiv = document.getElementById("expertI");
    var theDivTwo = document.getElementById("expertA");
    if(theDiv.style.display == 'block') {
        theDiv.style.display = 'none';
        theDivTwo.style.display = 'block';
    } else {
        theDiv.style.display = 'block';
        theDivTwo.style.display = 'none';
    }
	};

	document.getElementById("expertI").onclick = function() {
    var theDiv = document.getElementById("expertA");
    var theDivTwo = document.getElementById("expertI");
    if(theDiv.style.display == 'block') {
        theDiv.style.display = 'none';
        theDivTwo.style.display = 'block';
    } else {
        theDiv.style.display = 'block';
        theDivTwo.style.display = 'none';
    }
	};
}	



