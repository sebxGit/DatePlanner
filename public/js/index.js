let timerActive = true;
let dist;
var timer;

function activateTimer(){
	let obj = document.getElementById("timerPict");
	if (timerActive){
		var countdown = new Date();

		if(dist == undefined) countdown.setHours(countdown.getHours() + 2);
		else countdown.setTime(countdown.getTime() + dist);

		timer = setInterval(() => {
			var now = new Date().getTime();
			dist = countdown - now;

			var hours = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			var minutes = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
			var seconds = Math.floor((dist % (1000 * 60)) / 1000);
		
			document.getElementById("timer").innerText = 
			`${hours>0?hours+"h":""}${minutes>0?minutes+"m":""}${seconds>0?seconds+"s":""}`;
			if (dist < 0){
				clearInterval(timer);
				document.getElementById("timer").innerText="Done!";
			}
		}, 1000);
		obj.src="../images/pause.svg";
	}
	else{
		clearInterval(timer);
		obj.src="../images/play.svg";
	}
	timerActive = !timerActive;
}

function resetTimer(){
	clearInterval(timer);
	dist = 7199000; // means 2h
	document.getElementById("timer").innerText="2h";
}

function addModule(){
	var card = document.createElement('div');
	card.className = "card";
	card.style = "width: 18rem;";
	card.id = "test1";
	
	var cardBody = document.createElement('div');
	cardBody.className = "card-body";

	var input1 = document.createElement('input');
	input1.type = "text";
	input1.placeholder = "Title";
	input1.style="width:200px;";
	cardBody.appendChild(input1);

	var input2 = document.createElement('input');
	input2.type = "text";
	input2.placeholder = "Time";
	input2.style="width:50px;";
	cardBody.appendChild(input2);

	var input3 = document.createElement('textarea');
	input3.placeholder = "Description";
	input3.style="width:200px;";
	cardBody.appendChild(input3);

	var btn = document.createElement('button');
	btn.placeholder = "Test";
	btn.type = "button";
	btn.className = "btn btn-success";
	btn.innerText = "Create";
	btn.onclick = () => {createModule(input1.value,input2.value,input3.value)};
	cardBody.appendChild(btn);

	card.appendChild(cardBody);
	document.body.appendChild(card);
}

function createModule(Title, Time, Description){
	inputValidate([Title, Time, Description]);
	var card = document.createElement('div');
	card.className = "card";
	card.style = "width: 18rem;";
	
	var cardBody = document.createElement('div');
	cardBody.className = "card-body";
}

function inputValidate(arr){
	for(let i = 0; i < 3; i++)
		if(arr[i] === "") return;
	
	var time = arr[1];
	console.log("Input is valid!");
}
