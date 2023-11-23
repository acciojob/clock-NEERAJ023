//your JS code here. If required.
let p=document.querySelector("#timer");
function onload(){
	let date=new Date();
	p.innerText=`${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()},${date.toLocaleTimeString()}`;
}
onload();