function addContact() {
    let n = document.getElementById("name").value;
    let e = document.getElementById("email").value;
    let p = document.getElementById("phone").value;

    if (n === "" || e === "" || p === "") {
        alert("Please enter all details");
        return;
    }

    let li = document.createElement("li");
    li.textContent = n + " | " + e + " | " + p + " ";

    let btn = document.createElement("button");
    btn.textContent = "Delete";

    btn.onclick = function() {
        li.remove();
    };

    li.appendChild(btn);
    document.getElementById("contactList").appendChild(li);

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
}