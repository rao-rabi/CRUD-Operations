let store = [];
let name = document.getElementById("name");
let age = document.getElementById("age");
let result = document.getElementById("result");
let getResult = document.getElementById("get-result");

let saveData = () => {
  console.log("hello", name.value);
  if (name.value != "" && age.value != "") {
    store.push({
      name: name.value,
      age: age.value,
    });
    console.log("store-------------->", store);
    createTask();
  }
};

let createTask = () => {
  result.innerHTML = " ";
  store.map((item, ind) => {
    return (result.innerHTML += `
<div id=${ind}>
    <hr/>
    <span>name: ${item.name}</span>
    <span>age: ${item.age}</span>
    <i class="fa-solid fa-trash fa-2x m-2" onclick="deleteItem(this)"></i>
    <i class="fa-regular fa-pen-to-square fa-2x m-2" onclick="updateTask(this)"></i>
    </div>
`);
  });
  resetForm();
};

let deleteItem = (item) => {
  console.log("item", item.parentElement);
  item.parentElement.remove();
  store.splice(item.parentElement.id, 1)
  console.log("store", store)
  createTask();
}

let resetForm = () => {
  name.value = "";
  age.value = "";
  getResult.innerText = "Create a History";
}

let updateTask = (item) => {
  // console.log("updateTask", name.value)
  console.log("item", item.parentElement.id);
  // console.log("name:", item.parentElement);

  let itemId = item.parentElement.id;
  // store[itemId].name = name.value; 
  // store[itemId].age = age.value;
  name.value = store[itemId].name; 
  age.value = store[itemId].age;

  // createTask();
  // resetForm();
  getResult.innerText = "Update History";
}