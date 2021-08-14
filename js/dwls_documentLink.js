function fn_setLink() {
	var b = document.getElementsByClassName("body_mid")[0]
	var a = document.getElementById("link_list")
	var arr_link = fn_getByClass(a, "link")

	arr_link[0].onclick = function () {
		console.log(b.children[0])
		b.children[0].innerText = "视野"
	}


	arr_link[1].onclick = function () {}
}