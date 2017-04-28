var userId;
var password;

function inputCredentials() {
  userId = prompt("Enter user ID");
  password = prompt("Enter password");
}

function inputValidCredentials() {
  inputCredentials();
  while (!areCredentialsValid(userId, password)) {
    alert("Credentials not acceptable, please try again.");
    inputCredentials();
  }
  alert("Credentials accepted");
}

function isUserIdValid(str) {
  return str.length > 6 && !str.includes("#") && !str.includes("$");
}

function isPasswordValid(str) {
  return str.length > 6 && (str.includes("#") || str.includes("$"))
}

function areCredentialsValid(id, pass) {
  return isUserIdValid(id) && isPasswordValid(pass);
}



////end password checker challenge

function createNewPerson(newName, newAge) {
  return {
    name: newName,
    age: newAge,
    getInfo: function() {
      return this.name + ":" + this.age
    }
  };
}

var first = createNewPerson("Mrinalini", 24);
first.name;
first.age;
first.getInfo();

//We can use local variables to create private inaccessible data as part of closures:
