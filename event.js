document.getElementById('closeBtn').addEventListener('click', closeBtn);
document.getElementById('openBtn').addEventListener('click', openBtn);
function openBtn() {
	document.getElementsByClassName('sidebar')[0].style.display = "block";
}
function closeBtn() {
	document.getElementsByClassName('sidebar')[0].style.display = "none";
}