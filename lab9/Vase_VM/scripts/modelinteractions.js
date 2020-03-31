//adapted from example code 'benskitchen.com'

var spinning = true;
var lightOn = true;

function spin()
{
	spinning = !spinning;
	document.getElementById('model__RotationTimer').setAttribute('enabled', spinning.toString());
}

function wireframe()
{
	var e = document.getElementById('model');
	e.runtime.togglePoints(true);
	e.runtime.togglePoints(true);
}

function lighting()
{
	lightOn = !lightOn;
	document.getElementById('model__lighting').setAttribute('headlight', lightOn.toString());
}

function cam1()
{
	document.getElementById('model__Camera01').setAttribute('bind', 'true');
}

function cam2()
{
	document.getElementById('model__Camera02').setAttribute('bind', 'true');
}
