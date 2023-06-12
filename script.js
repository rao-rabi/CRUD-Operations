let store = [];
let name = document.getElementById("name");
let age = document.getElementById("age");
let result = document.getElementById("result");
let getResult = document.getElementById("get-result");

//store in array

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

// create item or add to list

let createTask = () => {
    result.innerHTML = " ";
    store.map((item, ind) => {
        return (result.innerHTML += `
<div id=${ind} class="border border-3 mb-2 p-3 w-75 m-auto border-success">
    <span class="fs-4">name: ${item.name}</span>
    <span class="fs-4">age: ${item.age}</span>
    <i class="fa-solid fa-trash fa-2x m-2" onclick="deleteItem(this)"></i>
    <i class="fa-regular fa-pen-to-square fa-2x m-2" onclick="updateTask(this)"></i>
    </div>
`);
    });
    resetForm();
};

//delete item

let deleteItem = (item) => {
    console.log("item", item.parentElement);
    item.parentElement.remove();
    store.splice(item.parentElement.id, 1)
    console.log("store", store)
    createTask();
}

//reset fields

let resetForm = () => {
    name.value = "";
    age.value = "";
    getResult.innerText = "Create a History";
}

//edit or update

let updateTask = (item) => {
    // console.log("updateTask", name.value)
    console.log("item", item.parentElement.id);
    // console.log("name:", item.parentElement);

    let itemId = item.parentElement.id;

    name.value = store[itemId].name;
    age.value = store[itemId].age;

    getResult.innerText = "Update History";

    getResult.onclick = () => {
        store[itemId].name = name.value;
        store[itemId].age = age.value;

        createTask();
        resetForm();
        getResult.onclick = saveData;
    };
}