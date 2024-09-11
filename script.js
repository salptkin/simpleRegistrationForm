const users = [];

function registerUser() {
    const username = document.getElementById("username").value;
    const age = document.getElementById("age").value;
    const user = {
        username: username,
        age: age,
    }


    if (isNaN(age) || age < 18) {
        alert("You must be 18 or older to register.");
        return;
    }

    if (username === "") {
        alert("Please enter a username.");
        return;
    }

    users.push({ username, age });
    document.getElementById("username").value = "";
    document.getElementById("age").value = "";   
}

function showUsers() {
  const userListDiv = document.getElementById("userList");
  userListDiv.innerHTML = "";

  if (users.length === 0) {
    userListDiv.innerHTML = "No registered users.";
    return;
  }

  users.forEach((user) => {
    const userItem = document.createElement("div");
    userItem.classList.add("user-item");
    userItem.textContent = `Username: ${user.username}, Age: ${user.age}`;
    userListDiv.appendChild(userItem);
  });
}
   