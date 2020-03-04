var objPeople = [
	{ 
		username: "James",
		password: "something"
	},
	{ 
		username: "Jason",
		password: "anything"
	},
	{ 
		username: "chris",
		password: "forever"
	}

]

function getInfo() {
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value

	for(var i = 0; i < objPeople.length; i++) {
		if(username == objPeople[i].username && password == objPeople[i].password) {
			
			 redirectLogin();
		} 
		else
			alert("Incorrect username or password.");
	}
	


}


function redirectLogin(){
	window.location.replace("https://www.youtube.com/");
}

