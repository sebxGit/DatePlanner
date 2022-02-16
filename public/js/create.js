window.addEventListener('load', () => {
	newPoll = new Poll();
});

let newPoll;

function SelectStartDate(e){
	newPoll.startDate = e.target.value;
	document.getElementById("exclude").setAttribute("min", e.target.value);
	document.getElementById("last").setAttribute("min", e.target.value);

}

function SelectEndDate(e){
	newPoll.endDate = e.target.value;
	document.getElementById("exclude").setAttribute("max", e.target.value);
}

function SelectExcludeDate(e){
	let newDate = e.target.value;
	let year = newDate.split("-")[0];
	let month = newDate.split("-")[1];
	let day = newDate.split("-")[2];

	if(newPoll.excludedDates.includes(newDate)) 	alert("The date already exists!");
	else {
		newPoll.excludedDates.push(newDate);
		
		document.getElementById('excludedDates').innerHTML += 
		`<div style="border: 1px solid black; display:inline-block" id="${newDate}" onclick="RemoveExcludeDate(event)">${day}.${month}.${year}</div>`
	}
}

function RemoveExcludeDate(e){
	newPoll.excludedDates.pop(e.target.id);
	document.getElementById(e.target.id).remove();
}

function SubmitPoll(){
	newPoll.generateID();
	alert("submitted!");
}

class Poll{
	constructor(){
		this.startDate;
		this.endDate;
		this.excludedDates = [];
		this.uniqueID;
	}

	generateID(){
		this.uniqueID = ((Math.random() + 1).toString(36).substring(7)).toUpperCase();
	}
}