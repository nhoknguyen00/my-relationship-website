
let i = 0;
let text1 = "Bé yêu của anh ơi!";
let text2 = "💗 Anh thương bé nhiều lắm 💗"
let speed = 100;

function typeWriter(text, para) {
	if (ok == 2) {
		clearInterval(typeInterval);
	}
	if (i < text.length) {
		document.getElementById(para).innerHTML += text.charAt(i);
		i++;
		speed = Math.random() * 50 + 100;
	}
	else {
		if (ok == 0) {
			i = 0;
		}
		ok += 1;
	}
}

var typeInterval;

typeInterval = setInterval(function () {
	if (ok == 0) {
		typeWriter(text1, "txt1");
	}
	else if (ok == 1) {
		typeWriter(text2, "txt2");
	}
}, 100);
