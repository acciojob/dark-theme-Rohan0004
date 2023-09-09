//your code here
let cnt=0;
let swapTheme = function() {
	let color=document.getElementById("app");
	if (cnt%2==0) {
		color.classList.add("night");
	}else{
		color.classList.remove("night");
	}
	cnt++;
}
