function getCurrentTime() {
	var data = new Date()
	time = data.getFullYear() + "" + nTimeAddzero(data.getMonth() + 1) + "" + nTimeAddzero(data.getDate())
	return time

	function nTimeAddzero(time) {
		if (time < 10) {
			time = "0" + time
			return time
		} else {
			return time
		}
	}
}

//通过id获取元素
function fn_getById(element) {
	return document.getElementById(element)
}

//获取某元素内含有某标签的元素的集合
function fn_getByClass(oParent, sClass) {
	var aEle = oParent.getElementsByTagName("*");
	a = [];

	for (var i = 0; i < aEle.length; i++) {
		if (aEle[i].className == sClass) {
			a.push(aEle[i]);
		}
	}
	return a;
}
//渐变运动
function starMove(x) {
	var oDiv = document.getElementById("div1");
	clearInterval(timer);
	timer = setInterval(function () {
		if (alpha == x) {
			clearInterval(timer);
		} else {
			if (alpha < x) {
				speed = 10;
			} else {
				speed = -10;
			}
			alpha += speed
			oDiv.style.filter = "filter: alpha(opacity:" + alpha + ")";
			oDiv.style.opacity = alpha / 100;
		}
	}, 30)
}

//获取鼠标x，y绝对坐标
function getPos(ev) {
	var scrTop = document.documentElement.scrollTop || document.body.scrollTop
	var scrLeft = document.documentElement.scrollLeft || document.body.scrollLeft

	return {
		x: ev.clientX + scrLeft,
		y: ev.clientY + scrTop
	}
}