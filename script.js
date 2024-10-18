var input = document.getElementById("input");
var button1 = document.getElementById("add-button");
var list1 = document.getElementById("list1");

function addElement() {
  if (input.value.trim() === "") {
    alert("Cannot add empty task");
    return;
  }
  var listitem = document.createElement("li");
  listitem.innerHTML =
    "<span class='task-text'>" +
    input.value +
    "</span>" +
    "<button onclick='deleteItem(event)' class='deleteitemm'>delete</button>";
  list1.append(listitem);
  listitem.className = "listitemm";
  input.value = "";
}

function deleteItem(event) {
  event.target.parentElement.remove();
}
