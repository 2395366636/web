function dragHTMLevent(obj) {

	var oDiv = document.getElementById(obj)
	//console.log(document.getElementById('text'))
	oDiv.onmousedown = function (ev) {
		var oEvent = ev || event;
		pos = getPos(oEvent);
		x = pos.x - oDiv.offsetLeft;
		y = pos.y - oDiv.offsetTop;

		document.onmousemove = function (ev) {
			var oEvent = ev || event
			pos = getPos(oEvent)
			//console.log(oDiv.offsetLeft)
			divX = pos.x - x //div实际位置
			divY = pos.y - y //div实际位置

			//防止div跳出画面+吸附
			if (divX < 80) {
				divX = 0
			}
			if (divY < 80) {
				divY = 0
			}
			if (divY + oDiv.offsetHeight > document.documentElement.clientHeight - 80) {
				divY = document.documentElement.clientHeight - oDiv.offsetHeight
			}
			if (divX + oDiv.offsetWidth > document.documentElement.clientWidth - 80) {
				divX = document.documentElement.clientWidth - oDiv.offsetWidth
			}
			//移动div
			oDiv.style.left = divX + "px"
			oDiv.style.top = divY + "px"


		}

		document.onmouseup = function () {

			document.onmousemove = null;
			document.onmouseup = null
		}

		return false //解决火狐移动空div会出现bug,同时也是解决拖拽会选择文字的方法
	}
}