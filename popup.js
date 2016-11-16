
function hello() {
  chrome.tabs.executeScript({
    file: 'background.js'
  }); 
}
  function hello2()
  {
  	chrome.tabs.executeScript({
  		file: 'back.js'
  	});
  }


var radio1 = document.getElementById('option1').value;
var radio2 = document.getElementById('option2').value;
if(radio1=="folder1"){
document.getElementById('option1').addEventListener('click',hello);}
if(radio2=="folder2"){
	document.getElementById('option2').addEventListener('click',hello2);
}
