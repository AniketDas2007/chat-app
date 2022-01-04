var a = prompt('Enter your name');

database = firebase.database()

// users massage
var massageInp;

// the position of div
var position;

var aMassage;

function append(massage) {
  if (massage == aMassage) {
    position = "right";
    var massageElement = document.createElement("div");
    massageElement.innerText = massageInp;
    massageElement.classList.add("massage");
    massageElement.classList.add(position);
    var massageContainer = document.querySelector(".container");
    massageContainer.append(massageElement);
    console.log(massage);
  } else {
    position = "left";
    var audio = new Audio('music/tone.mp3');
    audio.play();
    var massageElement = document.createElement("div");
    massageElement.innerText = massage;
    massageElement.classList.add("massage");
    massageElement.classList.add(position);
    var massageContainer = document.querySelector(".container");
    massageContainer.append(massageElement);
    console.log(massage);
  }
}

// to update massage
function updateMassage(massage) {
    ref = name + "/";
    aMassage = a + ": " + massage;
    database.ref(ref).update({
      massage: aMassage,
    });
}

function joined(massage) {
  aMassage = massage;
  database.ref(name + "/").update({
    massage: aMassage,
  });
}

// to get massage
function getMassage() {
  ref = name + "/" + "massage"
  var massageRef = database.ref(ref);
  massageRef.on("value", (data) => {
    massage = data.val();
    append(massage);
  });
}

aMassage = a + " " + "joined"
joined(aMassage);

// calling the function
getMassage();

// this function will call when the send button will click
function sendMassage() {
  massageInp = String(document.getElementById("unp").value);
  updateMassage(massageInp);
  aMassage = name + ":" + massageInp;
}