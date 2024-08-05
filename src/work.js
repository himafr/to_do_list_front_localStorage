let work =[{mission:"hima",id: 2, done: true }];
let list = JSON.parse(localStorage.getItem("notes_work"));
work = list ?? [];
function getWork(){
    if(work.length != 0 ){
      document.getElementById("itemsWork").innerHTML = "";
      work.forEach(element => {
                  document.getElementById("itemsWork").innerHTML +=`  
                  <div class="item">
                <div>
                  <input onClick="lineThrow(${element.id})" type="checkbox" ${ element.done && "checked" } />
                </div>
                <p id="note${element.id}" class="${
                  element.done ? "lineThrow" : ""
                }">${element.mission}</p>
                <i class="fa-solid fa-trash" style="color: crimson;" onClick="del(${element.id})"></i>
                </div> `;
                });
              } else {
                document.getElementById("itemsWork").innerHTML = "";
                console.log("as");
              }
  };
  getWork()
  setTask();

document.getElementById("work").addEventListener("click", () => {
  const value = document.getElementById("fill").value;
  let id = 1;
  if (work.length != 0) {
    id = work.at(-1).id + 1;
  }
  work.push({
    mission: value,
    id: id,
    done: false,
  });
  document.getElementById("fill").value = "";
  setTask();
  getWork();
});

function lineThrow(id) {
  let note = "note" + id;
  let item;
  work.forEach((ele) => {
    if (ele.id == id) {
      item = ele;
    }
  });
  item.done = !item.done;
  document.getElementById(note).classList.toggle("lineThrow");
  setTask();
}
function del(id) {
  work.forEach((ele, index) => {
    if (ele.id == id) {
      work.splice(index, 1);
    }
  });
  setTask();
  getWork();
}
function setTask() {
  let str = JSON.stringify(work);
  localStorage.setItem("notes_work", str);
}
