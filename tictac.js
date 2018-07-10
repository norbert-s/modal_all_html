//as soon as the page is fully loaded the modal box kicks in
listening=(event)=>{
	let id = event.toElement.id;
	console.log(id);
	if(id==="x" || id==="o"){
		gen.choice(id);
		modals.stopIntroModal();
		modals.deleteXO();
		modals.activate();
	}
	if(id==="button1"){
		modals.startIntroModal();
		modals.draw();
	}
	if(id==="button2"){
		modals.startIntroModal();
		modals.aiWon();
	}
	if(id==="close"){
		modals.stopIntroModal();
	}
};
// modal object, all of the modals attributes are on this object
const modals = {
	modal : document.getElementById("modal"),
	modalMain : document.getElementById("text1"),
	notIntro : document.getElementById("text2"),
	startIntroModal() {this.styling("modal","block")},
	stopIntroModal(){this.styling("modal","none")},
	deleteXO(){
		this.styling("x","none");
		this.styling("o","none");
	},
	activate(){
		this.styling("close","block");
		this.styling("text2","block");
	},
	draw(){this.msgConst("It's a draw","")},
	aiWon(){this.msgConst("Ai have won","Do you want to play again?")},
	youWon(){this.msgConst("You've won!! Congrats")},
	styling(st1,st2){document.getElementById(st1).style.display = st2;},
	msgConst(value1,value2){
		this.modalMain.innerHTML = value1;
		this.notIntro.innerHTML = value2;
	}
}
const gen ={
	choice(id){
		console.log(id);
	}
}
window.onload = modals.startIntroModal();
window.onload = function(){window.addEventListener('click',listening);};