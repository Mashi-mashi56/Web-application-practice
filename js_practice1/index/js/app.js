//let count = 430;

//count++;

//console.log(count);
//document.getElementById("count").innerText = 4;

//ctr + shift + @ -> terminal

//count variable = 0
//listen to the click of the button
//increment the value
//reflect the variable in html document
let count = 0;
let countEl = document.getElementById("count");
let infoEl = document.getElementById("info");

function increment() {
  //console.log("test");
  count++;
  updateCount();
  //countEl.innerText = count;
  console.log(count);
  //document.getElementById('count');

  //function f12
}

function decrement() {
  if (count > 0) count--;
  updateCount();
  //countEl.innerText = count;
}

let saveCounter = 0;
function save() {
  if (saveCounter == 0) {
    infoEl.innerText += "  " + count;
  } else {
    infoEl.innerText += " - " + count;
  }
  //countEl.innerText += " - " + count;
  count = 0;
  updateCount();
  saveCounter++;
}

function updateCount() {
  countEl.innerText = count;
}
