var accounts = [{
        username: "admin",
        password: "admin"
    },
    {
        username: "zalven",
        password: "dayao"
    },
    {
        username: "username",
        password: "password"
    },
    {
        username: "zeya",
        password: "123"
    }
]

function getInfo() {
    var username = document.getElementById("Username").value;
    var password = document.getElementById("Password").value;
    for (var i = 0; i < accounts.length; i++) {
        if (username == accounts[i].username && password == accounts[i].password) {
            document.getElementById("valid").style.opacity = '0%';

            window.location.href = "../html/HomePage.html";


            return;
        }
    }
    document.getElementById("valid").style.opacity = '100%';
    return;
}