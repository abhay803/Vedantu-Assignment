let ApiManager = {}

function getProfileData() {
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "https://api.github.com/users/supreetsingh247");
	xhr.setRequestHeader("Content-Type", "application/json");
	xhr.send();
	return xhr;
}

function getRepoList() {
	var xhr = new XMLHttpRequest();
	xhr.open("GET", " https://api.github.com/users/supreetsingh247/repos");
	xhr.setRequestHeader("Content-Type", "application/json");
	xhr.send();
	return xhr;
}

ApiManager.getProfileData = getProfileData;
ApiManager.getRepoList = getRepoList;

module.exports = ApiManager;