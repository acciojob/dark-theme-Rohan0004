//your code here
let cnt=0;
let swapTheme = function() {
	let color=document.getElementById("app");
	let btn = document.getElementById("swap");
	if (cnt%2==0) {
		color.classList.add("night");
		btn.classList.add("button_night");
	}else{
		color.classList.remove("night");
		btn.classList.remove("button_night");
	}
	cnt++;
}
