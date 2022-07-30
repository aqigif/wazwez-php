//// DOM Selector
// document getElementById
const container = document.getElementById("container");
//   console.log(container)
// return element by id

// document getElementsByTagName
const div = document.getElementsByTagName("div");
//   console.log(div)
// return semua element div dengan bentuk array

// document getElementsClassName
const userProfiles = document.getElementsByClassName("user-profile");
//   console.log(classList)
// return semua element dgn class yg dipilih dengan bentuk array

// document queryselector
const selector = document.querySelector("main #container");
//   console.log(selector)
// return element by selector

// document queryselectorAll
const selectorAll = document.querySelectorAll("main #container");
//   console.log(selectorAll)
// return semua element by selector dalam bentuk array

//// DOM Manipulation

// innerHTML => merubah document dibawah element yg di select
// console.log(container.innerHTML);
// container.innerHTML = "<p> hii </p>"
// console.log(container.innerHTML);

// style => merubah style element yg di select
const userName = document.querySelector(".user-profile .user-name");
// console.log(userName)
// console.log(userName.style)
userName.style = "background-color: red; color:white;";

// setAttibute() ==> merubah existing attribute pada element, atau menambah bila attributenya blm ada
// console.log(container.attributes);
container.setAttribute("name", "containerWazwez");

// classList
container.classList.remove("padding-4");
// console.log(container.classList)

// console.log(userProfiles)
// userProfiles[0]
// userProfiles[1]
// for (let index = 0; index < userProfiles.length; index++) {
//     userProfiles[index].style = "background-color: blue;"
// }

function hoverButton() {
  console.log("hi button task");
}

// event
// event on html => on element
// pake affix on
//  <button onclick="addTask()">tambah task</button>

// event listener
userProfiles[0].addEventListener("click", function (params) {
  console.log("user profile clicked");
});
userProfiles[0].addEventListener("mouseenter", function (params) {
  console.log("user profile hovered");
});

function handleChange(params) {
  console.log(params.value);
}

function handleEnter(task) {
  document.getElementById("new-data-form").classList.add("hidden");
  let listContainer = document.getElementById("list-container");
  listContainer.insertAdjacentHTML("afterbegin", `<li class="list-item">${task.name}</li>`);
  listContainer.insertAdjacentHTML("afterend", `<div class="accordion" onclick="handleShowSubtask(this)">
  <div class="task">${task.name} - ${task.date}</div>
  <div class="subtask hidden">ini subtask</div>
</div>`);


//   listContainer.innerHTML = `
//         <li class="list-item">${params.value}</li>
//         ${listContainer.innerHTML.trim()}
//         `;
//   console.log(listContainer.innerHTML)
//   let listSplit = listContainer.innerHTML.split(`</li>`)
//   console.log(listSplit)
//   let newListSplit = []
//   for (let index = 0; index < listSplit.length; index++) {
//     newListSplit.push(listSplit[index])
//     if (index == 0) {
//         newListSplit.push(`<li onclick="handleDone(this)" class="list-item">${params.value}`)
//     }
//   }
//   newInnerHTML = newListSplit.join(`</li>`);
//   listContainer.innerHTML = newInnerHTML;
  // params.value = "";
}

function handleDone(params) {
    console.log(params)
    params.style = "text-decoration: line-through;"
}

// html js form
