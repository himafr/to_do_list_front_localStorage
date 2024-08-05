let home = [{ mission: "hima", id: 2, done: true }];
let list = JSON.parse(localStorage.getItem("notes"));
home = list ?? [];
function getHome() {
  if (home.length != 0) {
    document.getElementById("itemsHome").innerHTML = "";
    home.forEach((element) => {
      document.getElementById("itemsHome").innerHTML += `  
      <div class="item">
      <div>
      <input onClick="lineThrow(${element.id})" type="checkbox" ${
        element.done && "checked"
      } />
                </div>
                <p id="note${element.id}" class="${
        element.done ? "lineThrow" : ""
      }" >${element.mission}</p>
                <i class="fa-solid fa-trash" style="color: crimson;"  onClick="del(${element.id})"></i>
                </div> `;
    });
    return 0;
  } else {
    document.getElementById("itemsHome").innerHTML = "";
    console.log("as");
  }
}
setTask();
getHome();

document.getElementById("home").addEventListener("click", () => {
  const value = document.getElementById("fillHome").value;
  let id = 1;
  if (home.length != 0) {
    console.log("a");
    id = home.at(-1).id + 1;
  }
  console.log(id);
  home.push({
    mission: value,
    id: id,
    done: false,
  });
  document.getElementById("fillHome").value = "";
  setTask();
  getHome();
});

function lineThrow(id) {
  let note = "note" + id;
  let item;
  home.forEach((ele) => {
    if (ele.id == id) {
      item = ele;
    }
  });
  item.done = !item.done;
  document.getElementById(note).classList.toggle("lineThrow");
  setTask();
}
function del(id) {
  home.forEach((ele, index) => {
    if (ele.id == id) {
      console.log("d");
      home.splice(index, 1);
    }
  });
  setTask();
  getHome();
}
function setTask() {
  let str = JSON.stringify(home);
  localStorage.setItem("notes", str);
}
